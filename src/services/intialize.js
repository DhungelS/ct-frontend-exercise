import SdkAuth from '@commercetools/sdk-auth'
import fetch from 'node-fetch'

const authClient = new SdkAuth({
  host: 'https://auth.us-central1.gcp.commercetools.com',
  projectKey: 'frontend-interview-exercise',
  disableRefreshToken: false,
  credentials: {
    clientId: 'hnDytpgPIoNv0vc9p-OaYUmJ',
    clientSecret: 'B6cubV4OWLMO-JLI64jhKqXmE-tq0ENP',
  },
  scopes: ['view_products:frontend-interview-exercise'],
  fetch,
})

const generateToken = async () => { 
   return await authClient.clientCredentialsFlow()
}

export default generateToken
