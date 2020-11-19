const { commandMapper } = require("ebased/handler");

const inputMode = require("ebased/handler/input/commandApi");
const outputMode = require("ebased/handler/output/commandApi");

const sqs = require("ebased/service/downstream/sqs");

const domain = async ({ name }) => {
  await sqsService(name);

  return {
    body: {
      message: `${name} is being processed`,
    },
  };
};

const sqsService = async (payload) => {
  const sqsSendParams = {
    MessageBody: {
      Payload: payload,
    },
    QueueUrl: process.env.QUEUE_URL,
  };

  await sqs.send(sqsSendParams);
};

async function handler(command, context) {
  return commandMapper({ command, context }, inputMode, domain, outputMode);
}

module.exports = { handler };
