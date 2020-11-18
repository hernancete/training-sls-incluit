const AWS = require("aws-sdk");
const sns = new AWS.SNS();

async function handler(event) {
  try {
    console.log("Writing from outputLambda");

    const publishResult = await sns
      .publish({
        Message: "Send from thirdLambda",
        TopicArn: process.env.SNS_ARN,
      })
      .promise();

    console.log(publishResult);
  } catch (error) {
    console.log(error);
  }

  return { statusCode: 200 };
}

module.exports = { handler };
