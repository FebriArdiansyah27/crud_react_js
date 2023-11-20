import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";

const Input = ({ list, setList }) => {
  const [newFName, setFNewName] = useState("");
  const [newLName, setLNewName] = useState("");

  const addItem = () => {
    const newItem = {
      id: uuidv4(),
      fName: newFName,
      lName: newLName,
    };

    // Include the delete button in the new item
    newItem.deleteButton = (
      <button onClick={() => deleteItem(newItem.id)} className="bg-gray-500 p-1 rounded text-white hover-opacity-50">
        Delete
      </button>
    );

    setList([...list, newItem]);
    setFNewName("");
    setLNewName("");
  };

  const deleteItem = (id) => {
    const updatedList = list.filter((item) => item.id !== id);
    setList(updatedList);
  };

  return (
    <div className="mt-5">
      <input onChange={(e) => setFNewName(e.target.value)} className="border-4 border-black rounded-lg p-2" type="text" placeholder="enter your first name" value={newFName} />
      <br />
      <input onChange={(e) => setLNewName(e.target.value)} className="border-4 border-black rounded-lg p-2 my-5" type="text" placeholder="enter your last name" value={newLName} />
      <br />
      <button onClick={addItem} className="bg-red-500 p-2 rounded-b-lg text-white hover-opacity-50">
        Add to list
      </button>
    </div>
  );
};

export default Input;
