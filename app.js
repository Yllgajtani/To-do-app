const express = require('express');
const app = express();


app.use(express.json());

//Variabla qe ka me permbajt taska ton(Kishe databaz)

let todos = [];

//Get metod
app.get('/todos', (req, res) => {
    res.json(todos);

});
//Post metod
app.post('/todos', (req, res) => {
    const newTodo = {id: Date.now(),text: req.body.text, completed: false};
    todos.push(newTodo);
    res.json(newTodo);
});

app.listen(3000);

 //Update metod
app.put('/todos/:id', (req, res) => {
    //Jem tu skku te secili task nese id nuk eshte e njejt me ato qe aj 
    //e ka shenu ne link atehere mos e kthen nje error

    //Nese kushti eshte True shko vendos qato te dhena mundesh me i ba update
    todos = todos.map(todo =>  todo.id = req.params.id ? {...todo, ...req.body} : todo);

    res.json({message: 'Tasku u bo update'});
});

// //Delete metod
// app.delete('/todos', (req, res) => {

// });