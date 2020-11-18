const AWS = require('aws-sdk');
const sqs = new AWS.SQS();
const QUEUE_URL = process.env.QUEUE_URL;

async function handler(event) {
  console.log(`You've called this awesome lambda with this body ${event.body}`);

  try {
    const payload = JSON.parse(event.body).name;

    await sqs.sendMessage({
      MessageBody: JSON.stringify({
        message: `Hola ${payload}`,
      }),
      QueueUrl: QUEUE_URL,
    }).promise();

  } catch (err) {
    console.log(err);

    return {
      statusCode: 500,
      body: JSON.stringify({ success: false }),
    };
  }

  return {
    statusCode: 200,
    body: JSON.stringify({ success: true }),
  };
};

module.exports = { handler };
