
const AN_ENV_VAR = process.env.AN_ENV_VAR || '';

async function handler(event) {
  console.log(`You've called this owesome lambda with this body ${event.body}`);
  console.log(`This is a local var ${AN_ENV_VAR}`);
  return {
    statusCode: 200,
    body: JSON.stringify({
      success: true,
    }),
  };
};

module.exports = { handler };
