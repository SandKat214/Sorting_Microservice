# Sorting Microservice - Communication Contract
## Setting up the microservice
1. Clone the microservice locally.
2. Install the dependencies
3. Set up a `.env` file
   * Create variable `PORT`, with local port of your choosing.
## How to Programmatically REQUEST data
The microservice is called via a POST request to the server on which it is listening, via the endpoint: `/api/products-sort/`.
The body of the request should be sent in JSON format, and contain the following parameters:
1. **_index_**
   * the property by which to sort.
2. **_order_**
   * indicates whether the sort will be in ascending (*"asc"*) or descending (*"desc"*) order.
   * this value is case-insensitive, so it can be written in capital or lowercase, but **MUST** be the correct sequence of letters.
   * if this property contains something other than the two values specified above, the microservice will respond with a **status of 400** (to indicate a client error) and an error message.
3. **_products_**
   * an array of objects to be sorted by the property indicated by **_index_**.
   * every object in the array **MUST** contain a property as indicated by **_index_**, otherwise the microservice will respond with a **status of 400** (to indicate a client error) and an error message.
  
### Example Calls
*Example calls written in JavaScript syntax*
#### Using fetch:
   * `MS_URL` is the url on which the microservice is listening.
```
await fetch(`${MS_URL}/api/products-sort/`, {
    method: "POST",
    body: JSON.stringify({
        index: "price"
        order: "asc"
        products: [
            {
                id: 1,
                name: "Hair Toffee",
                price: 2.95,
            },
            {
                id: 2,
                name: "Squelchy Snorter",
                price: 5.30,
            },
            {
                id: 3,
                name: "Rainbow drops",
                price: 3.5,
            },
        ]
    }),
    headers: {
        "Content-Type: "application/json",
    },
}) 
```

#### Using axios:
   * `MS_URL` is the url on which the microservice is listening.
```
import axios from "axios"
...
await axios.post(`${MS_URL}/api/products-sort/, {
    index: "name",
    order: "desc",
    products: [
        {
            id: 1,
            name: "USS Enterprise",
            price: 1000000000005.00,
        },
        {
            id: 2,
            name: "Rocinante",
            price: 50000000035.75,
        },
        {
            id: 3,
            name: "Serenity",
            price: 50000000.75,
        },
    ]
})
```
## How to Programmatically RECEIVE data
The response from the microservice will arrive in JSON format and will need to be parsed back into a regular array, for whatever programming language you are using, that can then be used programmatically within your code. A successfull response will have a **status of 200** and return the products array sorted by the given property. If an error is encountered, the response will have a **status of 400** (indicating a client error) and return an error message. It is recommended to implement some sort of error handling in your code to account for this possibility.

### Example Calls
*Example calls written in JavaScript syntax*
#### Using fetch:
   * the response from the microservice can be caught and stored inside of a variable.
   * then, `.json()` can be used to parse the response into a JavaScript array.
```
const response = await fetch(`${MS_URL}/api/products-sort/`, {
    method: "POST",
    body: JSON.stringify({
        index: "price"
        order: "asc"
        products: [...]
    }),
    headers: {
        "Content-Type: "application/json",
    },
})
const sortedArr = await response.json()
```

#### Using axios:
   * the response from the microservice can be caught and stored inside of a variable.
   * the axios response object is already served as a JavaScript object, so there is no need to parse the data.
   * the axios response contains many properties regarding the response from the microservice, but our sorted array can be acquired by accessing the `data` property.
```
import axios from "axios"
...
const response = await axios.post(`${MS_URL}/api/products-sort/, {
    index: "name",
    order: "desc",
    products: [...]
})
const sortedArr = response.data
```

## UML Sequence Diagram
![UML](https://github.com/SandKat214/Sorting_Microservice/blob/main/images-readme/sorting_ms_uml.png?raw=true)
