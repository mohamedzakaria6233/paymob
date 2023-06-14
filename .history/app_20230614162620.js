const ngrok = require('ngrok');

(async function () {
  try {
    const url = await ngrok.connect();
    console.log('Ngrok URL:', url);
    console.log("hi")
  } catch (error) {
    console.log('Error:', error);
  }
})();
