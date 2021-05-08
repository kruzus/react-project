const API_ENDPOINT = "https://localbitcoins.com/bitcoinaverage/ticker-all-currencies/"

exports.handler = async (event, context) => {

  return fetch(API_ENDPOINT)
    .then(response => response.json())
    .then(data => {
      console.log(data)
      try {
        return {
          statusCode: 200,
          body: JSON.stringify({currencies: {

            }
          }, null, 2)
        }
      } catch (error) {
        return {
          statusCode: 400,
          body: error
        }
      }
    })
    .catch(error => ({ statusCode: 422, body: String(error) }));
};