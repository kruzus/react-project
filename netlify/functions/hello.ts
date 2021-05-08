const API_ENDPOINT = "https://localbitcoins.com/bitcoinaverage/ticker-all-currencies/"
import {Handler} from "@netlify/functions"


export const handler: Handler = async (event, context) => {

  return fetch(API_ENDPOINT)
    .then(response => response.json())
    .then(data => {
     
      try {
        console.log(data)
      } catch (error) {
        return {
          statusCode: 400,
          body: error
        }
      }
    })
    .catch(error => ({ statusCode: 422, body: String(error) }));
};