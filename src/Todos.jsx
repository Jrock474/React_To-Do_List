import React, { useState } from "react";

const Todos = () => {
  const [value, setValue] = useState("");
  const [todo, setTodo] = useState([]);

// Displays options when list item is hovered
  const handleHover = () => {
    const button = document.getElementById('delete-button');
    const completeButton = document.getElementById('complete-button');
    completeButton.style.display = "inline"
    button.style.display = "inline"
};

// Strikes through item if button is clicked
const onCompleted = (index) => {
    // setTodo((existingValue)=> {
    //     const list = document.getElementById("list-item")
    //    const listStyle = list.style.textDecoration = "line-through"
       
    // });

  const list = document.getElementById("list-item")
  list.style.textDecoration = "line-through"
}

// Deletes input if button is clicked
const onDelete = (index) => {
  setTodo((existingValue)=> {
      return existingValue.filter((_, currentIndex) => currentIndex !== index);
  });
};


  
// Inputs field into To Do list
  const handleCLick = () => {
    if (value === "") {
      return "can't be empty";
    }
    setTodo([...todo, value]);
  };

  return (
    <>
      <input value={value} onChange={(e) => setValue(e.target.value)} />
      <button onClick={handleCLick}>Add to List</button>
      <div>
        <ol>
          {todo.map((todoItems, index) => (
            <li id="list-item" key={index} onMouseOver={handleHover}>
                {todoItems} 
                <button id="delete-button" onClick={() => onDelete(index)}>Delete</button>
                <button id="complete-button" onClick={() => onCompleted(index)}>Mark as Completed</button>
            </li>
          ))}
        </ol>
      </div>
    </>
  );
};

export default Todos;
