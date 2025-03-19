const AWS = require('aws-sdk');
const ses = new AWS.SES({ region: 'us-east-2' });
const dynamoDB = new AWS.DynamoDB.DocumentClient({ region: 'us-east-2' });

exports.handler = async (event) => {
  if (event.httpMethod === 'OPTIONS') {
    return {
      statusCode: 200,
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "OPTIONS,POST",
        "Access-Control-Allow-Headers": "Content-Type",
      },
      body: '', // No body for OPTIONS requests
    };
  }

  try {
    const formData = JSON.parse(event.body);
    const { name, email, subject, message } = formData;

    // Validate input
    if (!name || !email || !subject || !message) {
      return {
        statusCode: 400,
        body: JSON.stringify({ message: 'All fields are required' }),
        headers: {
          "Access-Control-Allow-Origin": "*",
          "Access-Control-Allow-Methods": "OPTIONS,POST",
          "Access-Control-Allow-Headers": "Content-Type",
        },
      };
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return {
        statusCode: 400,
        body: JSON.stringify({ message: 'Invalid email format' }),
      };
    }

    // Store in DynamoDB (Optional, but requested)
    const timestamp = new Date().toISOString();
    const params = {
      TableName: 'ContactFormSubmissions',
      Item: {
        submissionId: timestamp + '-' + Math.random().toString(36).substring(2, 15), // Unique ID
        name,
        email,
        subject,
        message,
        timestamp,
      },
    };

    await dynamoDB.put(params).promise();


    // Send email via SES
    const emailParams = {
      Destination: {
        ToAddresses: ['test@gmail.com'], // Replace with your verified email
      },
      Message: {
        Body: {
          Text: {
            Data: `Name: ${name}\nEmail: ${email}\nSubject: ${subject}\nMessage: ${message}`,
          },
        },
        Subject: { Data: `Contact Form Submission: ${subject}` },
      },
      Source: 'test@gmail.com', // Replace with your verified email
    };

    await ses.sendEmail(emailParams).promise();

    return {
      statusCode: 200,
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "OPTIONS,POST",
        "Access-Control-Allow-Headers": "Content-Type",
      },
      body: JSON.stringify({ message: 'Message sent successfully!' }),
    };

  } catch (error) {
    console.error('Error:', error);
    return {
      statusCode: 500,
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "OPTIONS,POST",
        "Access-Control-Allow-Headers": "Content-Type",
      },
      body: JSON.stringify({ message: 'Error sending message' }),
    };
  }
};
