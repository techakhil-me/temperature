import { Button } from "@nextui-org/react";
import React, { useState, useEffect } from "react";
import { Card, CardHeader, CardBody, CardFooter } from "@nextui-org/react";
import { Input } from "@nextui-org/react";
import { Trash2 } from 'lucide-react';

const Todo = () => {
  const [todoList, setTodoList] = useState([]);
  const [newTodo, setNewTodo] = useState("");
  useEffect(() => {
    // Load todo list from local storage when component mounts
    const storedTodoList = JSON.parse(localStorage.getItem("todoList"));
    if (storedTodoList) {
      setTodoList(storedTodoList);
    }
  }, []);

  useEffect(() => {
    // Save todo list to local storage whenever it changes
    localStorage.setItem("todoList", JSON.stringify(todoList));
  }, [todoList]);

  const addTodo = () => {
    if (newTodo.trim() !== "") {
      setTodoList([...todoList, newTodo.trim()]);
      setNewTodo("");
    }
  };

  const removeTodo = (index) => {
    const updatedTodoList = [...todoList];
    updatedTodoList.splice(index, 1);
    setTodoList(updatedTodoList);
  };

  const handleChange = (event) => {
    setNewTodo(event.target.value);
  };
  return (
    <Card className="py-4 shadow-none">
      <CardHeader className="pb-0 pt-2 px-4 flex items-start justify-between">
        <h4 className="font-bold text-xl mb-2">Todo List</h4>
      </CardHeader>
      <CardBody className="overflow-visible py-2 px-4">
        <div className="flex flex-col gap-4">
          <div className="flex gap-4">
            <Input
              size="sm"
              value={newTodo}
              onChange={handleChange}
              placeholder="What to do today?"
              type="text"
              variant="bordered"
            />
            <Button
              color="primary"
              radius="full"
              size="sm"
              variant={"solid"}
              onPress={addTodo}
            >
              Add
            </Button>
          </div>

          <ul>
            {todoList.map((todo, index) => (
                
              <li key={index}>
                <Input
      type="text"
      defaultValue={todo}
      className="max-w-xs"
      endContent={
        <button className="focus:outline-none" type="button" onClick={() => removeTodo(index)}>
         <Trash2 strokeWidth={1} color="red" />
        </button>
      }

    />
              </li>
            ))}
          </ul>
        </div>
      </CardBody>
    </Card>
  );
};

export default Todo;
