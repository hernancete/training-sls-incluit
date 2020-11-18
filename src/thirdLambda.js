function handler(event) {
  console.log('Writing from outputLambda');

  return { statusCode: 200 };
}

module.exports = { handler };
