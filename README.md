# Basic Web Service
Here is an example NodeJS Web Service

## Starting Up
`npm install`

`npm start`

## Endpoints
### Diagnostics
* `/diagnostics/readiness`
* `/diagnostics/liveness`
* `/diagnostics/version`
* `/diagnostics/exception`

### Example TODO App
* GET `/tools/todos` - returns list of todo items
* POST `/tools/todos` - creates a new todo item

Example Body
```
{
    "text": "Go Shopping"
}
```
* GET `/tools/todos/{id}` - get a todo item by id
* POST `/tools/todos/{id}/complete` - updates a todo items status to complete
* DELETE `/tools/todos/{id}` - deletes a todo item by id
