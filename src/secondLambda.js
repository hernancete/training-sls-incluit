const { batchEventMapper } = require("ebased/handler");

const inputMode = require("ebased/handler/input/batchEventQueue");
const outputMode = require("ebased/handler/output/batchEventConfirmation");

const lambda = require("ebased/service/downstream/lambda");

const domain = async (eventPayload) => {
  await lambdaService(eventPayload);
};

const lambdaService = async (payload) => {
  await lambda.invoke({
    FunctionName: process.env.OUTPUT_LAMBDA,
    Payload: payload,
  });
};

async function handler(events, context) {
  return batchEventMapper({ events, context }, inputMode, domain, outputMode);
}

module.exports = { handler };
