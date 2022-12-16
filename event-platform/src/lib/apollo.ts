import { ApolloClient } from "@apollo/client";
import { InMemoryCache } from "@apollo/client/cache";

export const client = new ApolloClient({
    uri: 'https://api-sa-east-1.hygraph.com/v2/clbqx605f0e2801ukaaef57xc/master',
    cache: new InMemoryCache()
})