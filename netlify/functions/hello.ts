const API_ENDPOINT = "https://loca5lbitcoins.com/bitcoinaverage/ticker3-all-currencies/"
import {Handler} from "@netlify/functions"
import axios from "axios"

export const handler = async (event, context) => {
return axios.get(API_ENDPOINT)
.then(data => {console.log(data)})
.catch(e => {console.error(e)})

};