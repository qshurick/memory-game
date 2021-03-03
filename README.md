# Memory game

## Server

A nodejs server provides simple rest api:

`GET /random`


Accepts `size` query parameter with an amount of cards that needs to be
generated. Returns an array with generated list of random number.

Example: `[34, 10, 12, 45]`

## Client

Consumes an API from server and provide gameplay to the user.

## Run

To start a server run `node server/server.js`

To start a client side open `web/index.html`
