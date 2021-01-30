import { createClient } from '@commercetools/sdk-client'
import { createHttpMiddleware } from '@commercetools/sdk-middleware-http'


const client = createClient({
  middlewares: [
    createHttpMiddleware(),
  ],
})
const request = {
  uri: 'https://api.us-central1.gcp.commercetools.com',
  method: 'GET',
  headers: {
    Authorization: 'Bearer xxx',
  },
}

client.execute(request)
.then(result => console.log(result))
.catch(error => console.log(error))