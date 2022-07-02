import React, { useContext } from "react";
import { useEffect } from "react";
import { useState } from "react";
import { ListContext } from "../../../context/ListContext";

function index() {
  const { datas } = useContext(ListContext);
  const { addList } = useContext(ListContext);
  const { deleteList } = useContext(ListContext);
  const { updateList } = useContext(ListContext);

  const [name, setName] = useState("");

  const handleSumbit = (e) => {
    e.preventDefault();
    addList(name);
    setName("");
  };

  return (
    <>
      <div className="mb-4 ">
        <h1 className="text-grey-darkest">Todo List</h1>
        <form onSubmit={handleSumbit}>
          <div className="flex mt-4">
            <input
              value={name}
              onChange={(e) => {
                setName(e.target.value);
              }}
              className="shadow appearance-none border rounded w-full py-2 px-3 mr-4 text-grey-darker"
              placeholder="Add Todo"
            />
            <button className="flex-no-shrink p-2 border-2 rounded text-teal border-teal hover:text-white hover:bg-teal">
              Add
            </button>
          </div>
        </form>
      </div>
      {datas.map((data) => (
        <div className="flex mb-4 items-center" key={data._id}>
          <p className="w-full text-grey-darkest">{data.name}</p>
          <button
            onClick={() => {
              setName(data.name);
              updateList(data._id, name);
            }}
            className="flex-no-shrink p-2 ml-4 mr-2 border-2 rounded hover:text-white text-green border-green hover:bg-green"
          >
            Update
          </button>
          <button
            onClick={() => {
              deleteList(data._id);
            }}
            className="flex-no-shrink p-2 ml-2 border-2 rounded text-red border-red hover:text-white hover:bg-red"
          >
            Remove
          </button>
        </div>
      ))}
    </>
  );
}

export default index;
