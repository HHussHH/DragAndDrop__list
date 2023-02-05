import "./App.css";
import { Reorder } from "framer-motion";
import { useState } from "react";

const defaultTodo = [
  { id: 1, order: 1, text: "КАРТОЧКА 1" },
  { id: 2, order: 2, text: "КАРТОЧКА 2" },
  { id: 3, order: 3, text: "КАРТОЧКА 3" },
  { id: 4, order: 4, text: "КАРТОЧКА 4" },
];
function App() {
  const [todoList, setTodoList] = useState(defaultTodo);

  return (
    <div className="App">
      <Reorder.Group
        as="div"
        axys="y"
        values={todoList}
        onReorder={setTodoList}
        className="card__inner"
      >
        {todoList.map((todo) => {
          return (
            <Reorder.Item
              as="div"
              className="card"
              key={todo.id}
              value={todo}
              whileDrag={{ scale: 1.1 }}
            >
              {todo.text}
            </Reorder.Item>
          );
        })}
      </Reorder.Group>
    </div>
  );
}

export default App;
