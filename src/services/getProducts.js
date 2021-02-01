import { createClient } from "@commercetools/sdk-client";
import { createHttpMiddleware } from "@commercetools/sdk-middleware-http";
import { createRequestBuilder } from "@commercetools/api-request-builder";

const requestBuilder = createRequestBuilder({ projectKey: "frontend-interview-exercise" });
const productProjectionsService = requestBuilder.productProjections;
const productsService = requestBuilder.products;

const access_token = localStorage.getItem("access_token");


const client = createClient({
  middlewares: [createHttpMiddleware({host: 'https://api.us-central1.gcp.commercetools.com'})],
});
const uri = productProjectionsService.build();

const request = {
  uri,
  method: "GET",
  headers: {
    Authorization: `Bearer ${access_token}`,
  },
};


const getProducts = async () => {
   return await client.execute(request)
}

export default getProducts
