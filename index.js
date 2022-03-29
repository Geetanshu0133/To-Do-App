const express = require('express');
const PORT = 3000;
const app = express();

// setting the view/template engine to ejs
app.set("view engine", "ejs");
app.set('views', './views');

app.use(express.urlencoded());

// setting the static files to static folder
app.use(express.static('static'));

require('./config/mongoose');
const Task = require('./models/task');

// dropdown options
const category = ["Choose a category", "Personal", "Work", "School", "Cleaning", "Other"]

app.get('/', (req, res) => {
    Task.find({}, (err, data) => {
        if (err) {
            console.log("Error on fetching data from database");
            return;
        }
        res.render('home', {
            title: "TODO APP",
            category: category,
            tasks: data
        });
    })

});

// Adding task in task collection
app.post('/add-task', (req, res) => {
    if (req.body.description.length == 0 && req.body.due_date.length == 0) {
        
    }
    else {
        Task.create(req.body, (err, data) => {
            if (err) {
                console.log("Error on adding task")
                return;
            }
            console.log("Task is successfully added");
        })
    }
    res.redirect('back');
})

// removing task from database
app.post('/delete-task/', (req, res) => {
    const ids=req.query.delete_ids.split(',');
    async function myFunction() {
        await Task.deleteMany({_id:{$in:ids}})
    }
    myFunction();
    res.redirect('back');
})


app.listen(PORT, (err) => {
    if (err) {
        console.log('Error on running up server');
        return;
    }
    console.log(`Server is up and running on PORT ${PORT}`);
})