# graphql-query-client

### A simple library for making graphql queries and mutations for the browser.

uses [axios](https://github.com/axios/axios) as HTTP client

---


[Installation](#installation)

[API](#api)


---

#### Installation

Install with [yarn](https://yarnpkg.com) or [npm](https://www.npmjs.com/)

```sh
yarn add graphql-query-client
        #or
npm install graphql-query-client --save
```
---
#### API

```javascript
import {
    GraphlQLQuery,
    GraphlQLMutation,
    setupEnvironment,
    Environment
} from 'graphql-query-client';

// setup environment

setupEnvironment({
    url: 'http://graphqlFetch.com/graphql',
    smartFetch: false, // if true, doesn't allow to refetch the data if the params hasn't change
    smartMutation: false, // if true, doesn't allow to execute the mutation for second time if the params hasn't change
    lockable: false, // if true if you try to make a request when there is a pending one, the second will not be executed
    cancelable: true, // if true if you try to make a request when there is a pending one, the first will be canceled and the new will executed
    errorHandler:(error,method) => {}, // function for handling the errors
    ...axiosOptions, // all the supported options from axios
});

// ~~~~~~~~GraphQLQuery~~~~~~~~~~

const query = `
query($id: String){
    product(id:$id){
        title
    }
}`;

const params = {
    id: 1,
};
// creates a query instance.
// Also you can set a new Environment as third argument new GraphlQLQuery(query, params, new Environment(options = {}))
const productsQuery = new GraphlQLQuery(query, params);

productsQuery.fetch().then(res => console.log(res)) // fetch the data from the server
productsQuery.poll(time = 1000).fetch(callback = () => { }) // makes queries repeatedly every time = 1000 ms

productsQuery.forceFetch().then(res => console.log(res)) // force the fetch function (polling or simple fetch) to be executed. Usefull only if smartFetch is enabled
productsQuery.reFetch() // repeats the fetch function (polling or simple fetch)


// ~~~~~~~~GraphQLMutation~~~~~~~~~~

const query = `
    mutation($title: String){
        addProduct(title:$title){
            id
            title
        }
    }
`;

const params = {
    title: 'keyboard 3000',
};
// creates a mutation instance.
// Also you can set a new Environment as third argument new GraphlQLMutation(query, params, new Environment(options = {}))
const addProductMutation = new GraphlQLMutation(query, params);

addProductMutation.mutate() // fetch the data from the server
addProductMutation.poll(time = 1000).mutate(callback = () => { }) // makes mutations repeatedly every time = 1000 ms

addProductMutation.forceMutate().then(res => console.log(res)) // force the mutate function (polling or simple mutate) to be executed. Usefull only if smartFetch is enabled
addProductMutation.reMutate().then(res => console.log(res)) // repeats the mutation (polling or simple mutation)


// ~~~~~~~~Setters~~~~~~~~~~

const productsQuery = new GraphlQLQuery(query, params);

productsQuery.setQuery(`
    query($id: String){
        product(id:$id){
            price
        }
    }
`); // sets a new query

productsQuery.setParams({id:2,}); // updates the params

productsQuery.setEnvironment(new Environement(options = { })); // sets new environment

// ~~~~~~~~Query status~~~~~~~~~~

const productsQuery = new GraphlQLQuery(query, params);

productsQuery.isPending()  // returns true if the query request is on fly;
productsQuery.isUpdating()  // returns true if the query request is on fly and the request is in interval;
productsQuery.isPolling()  // returns true if the polling is on active;


```

To run tests:
```sh
yarn test
   #or
npm test
```

