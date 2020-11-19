const { commandMapper } = require("ebased/handler");
const inputMode = require("ebased/handler/input/commandInvoke");
const outputMode = require("ebased/handler/output/commandInvoke");

const sns = require("ebased/service/downstream/sns");

const domain = async ({ Payload }) => {
  await snsService(Payload);
};

const snsService = async (payload) => {
  await sns.publish({
    Message: `${payload} has been processed!`,
    TopicArn: process.env.SNS_ARN,
  });
};

async function handler(command, context) {
  return commandMapper({ command, context }, inputMode, domain, outputMode);
}

module.exports = { handler };
