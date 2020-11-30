const { Router } = require('express');
const router = Router();
const { v4: uuid } = require('uuid');

let items = [];

router.get('/todos', (request, response) => {
    response.send(items);
});

router.post('/todos', (request, response) => {
    const {
        text
    } = request.body;
    const todo = {
        id: uuid(),
        text,
        completed: false
    };
    items.push(todo);
    response.status(201).send(todo);
})

router.get('/todos/:id', (request, response) => {
    const {
        id
    } = request.params;
    const todo = items.find(item => item.id === id);
    if(!todo) {
        response.status(404).send('TODO Not Found.');
        return;
    }
    response.send(todo);
});

router.post('/todos/:id/complete', (request, response) => {
    const {
        id
    } = request.params;
    const todo = items.find(item => item.id === id);
    if(!todo) {
        response.status(404).send('TODO Not Found.');
        return;
    }
    todo.completed = true;
    response.status(200).send(todo);
});

router.delete('/todos/:id', (request, response) => {
    const {
        id
    } = request.params;
    items = items.filter(item => {
        return item.id !== id
    });
    response.status(204).send();
});

module.exports = router;
