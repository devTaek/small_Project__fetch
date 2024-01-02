const express = require('express');
const cors = require('cors')
const app = express();

app.use(cors());    // server에서 데이터를 찾을수 있게 도와주는 라이브러리

const bodyParser = require('body-parser')


// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())


let id = 2;
const todoList =[{
  id: 1,
  name: '정태균',
  done: false,
}];


app.get('/api/todo', (req, res)=> {
  res.json(todoList);
});

app.post('/api/todo', (req, res)=> {
  const {name, done} = req.body;
  console.log("req.body :", req.body);
  todoList.push({
    id: id++,
    name,
    done,
  });
  return res.send('succes!!');
});

app.listen(4000, ()=> {
  console.log('server start!!!');
});