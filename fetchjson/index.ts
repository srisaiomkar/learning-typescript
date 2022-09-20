import axios from "axios";

const url = "https://jsonplaceholder.typicode.com/todos/1";

interface todo {
  id: number,
  title: string,
  completed: boolean
}

axios.get(url).then(response => {
  const todo = response.data as todo;
  const id = todo.id;
  const title = todo.title;
  const completed = todo.completed;

  logData(id, title, completed);
})

const logData = (id :number, title: string, completed: boolean) => {
  console.log(`
  The todo ${title} with Id ${id} is finished? ${completed}
`);
}