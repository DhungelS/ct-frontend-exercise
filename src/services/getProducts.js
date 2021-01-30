import { createClient } from "@commercetools/sdk-client";
import { createHttpMiddleware } from "@commercetools/sdk-middleware-http";
import { createRequestBuilder } from "@commercetools/api-request-builder";

const requestBuilder = createRequestBuilder({ projectKey: "foo" });
const productProjectionsService = requestBuilder.productProjections;
const productsService = requestBuilder.products;

const access_token = localStorage.getItem("access_token");

const client = createClient({
  middlewares: [createHttpMiddleware()],
});
const uri = productProjectionsService.build();

const request = {
  uri,
  method: "GET",
  headers: {
    Authorization: `Bearer ${access_token}`,
  },
};

const getProductsData = async () => {
  return await client.execute(request)
    
};

export default getProductsData

// client.execute(request)
// .then(result => console.log('tst', result))
// .catch(error => console.log('err', error))
