const AWS = require("aws-sdk");
const lambda = new AWS.Lambda();

async function handler(event) {
  try {
    const invokeResult = await lambda
      .invoke({
        FunctionName: process.env.OUTPUT_LAMBDA
      })
      .promise();
    console.log(invokeResult);
  } catch (error) {
    console.log(error);
  }

  event.Records.map((record) => {
    console.log(JSON.parse(record.body).message);
  });

  return { statusCode: 200 };
}

module.exports = { handler };
