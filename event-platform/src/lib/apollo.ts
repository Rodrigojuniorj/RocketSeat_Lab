import { ApolloClient, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient({
  uri: 'https://api-sa-east-1.graphcms.com/v2/cl4o1fqoq05lv01z73d5pfjj2/master', 
  cache: new InMemoryCache()
})