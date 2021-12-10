//jshint esversion: 6
const express = require('express');

const app = express();
app.use(express.urlencoded({extended: true}));

//ejs configuration
app.set('view engine', 'ejs');

//get the day of the week
let today = new Date();
let dateStringOptions =  {
        weekday: 'long', 
        day: 'long', 
        month: 'long'
};
let currentDayOfWeek = today.toLocaleDateString('en-US');

//ToDo list
const todoList = [
        {
                id: 1,
                task: 'Learn Node.js',
                description: 'Learn Node.js',
                datetime:  "2020-03-01T00:00:00.000Z",
                completed: false,
                tags: ['Node.js', 'Express', 'MongoDB'],
                priority: 'high',
                category: 'work',
                user: 'John Doe',
                userId: '1',
                userEmail: 'everbliss7@gmail.com',
                status: 'pending',
        },
        {
                id: 2,
                task: 'Learn React.js',
                description: 'Learn React.js',
                datetime:  "2020-03-01T00:00:00.000Z",
                completed: false,
                tags: ['React.js', 'Redux', 'MongoDB'],
                priority: 'high',
                category: 'work',
                user: 'John Doe',
                userId: '1',
                userEmail: 'everbliss7@gmail.com',
                status: 'pending',
        },
        {
                id: 3,
                task: 'Learn Angular.js',
                description: 'Learn Angular.js',
                datetime:  "2020-03-01T00:00:00.000Z",
                completed: false,
                tags: ['Angular.js', 'Redux', 'MongoDB'],
                priority: 'high',
                category: 'work',
                user: 'John Doe',
                userId: '1',
                userEmail: 'everbliss7@gmail.com',
                status: 'pending',
        },
];

//index page
app.get('/', function(req, res){
        res.render('list', {todoList: todoList, currentDayOfWeek: currentDayOfWeek});
});

//add new task
app.post('/addtask', function(req, res){
        let task = req.body.task;
        let description = req.body.description;
        let datetime = req.body.datetime;
        let completed = false;
        let tags = req.body.tags;
        let priority = req.body.priority;
        let category = req.body.category;
        let user = "everbliss7";
        let userId = todoList.length + 1;
        let userEmail = "everbliss7@gmail.com";
        let status = "pending";

        let newTask = {
                id: todoList.length + 1,
                task: task,
                description: description,
                datetime: datetime,
                completed: completed,
                tags: tags,
                priority: priority,
                category: category,
                user: user,
                userId: userId,
                userEmail: userEmail,
                status: status,
        };

        todoList.push(newTask);
        res.redirect('/');
});
//start server
app.listen(process.env.PORT || 3000, function(){
        console.log('Server started on port 3000');
});