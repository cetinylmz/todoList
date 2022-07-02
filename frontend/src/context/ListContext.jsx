import { useEffect } from "react";
import { createContext, useState } from "react";
import { getAllUsers, crateUser, deleteUser, updateUser } from "../axios";

export const ListContext = createContext();

const ListContextProvider = (props) => {

  const [datas, setData] = useState([]);

  useEffect(() => {
    const getUsers = async () => {
      const { data } = await getAllUsers();
      await setData(data);
    };
    getUsers();
  }, [datas]);


  const addList = (name) => {
    crateUser(name);
  };

  
  const deleteList = (_id) => {
  
    deleteUser(_id)

  };

  const updateList = (_id,name) => {
  
  
    updateUser(_id,name)

    
  };



  return (
    <ListContext.Provider value={{ datas, addList , deleteList , updateList}}>
      {props.children}
    </ListContext.Provider>
  );
};

export default ListContextProvider;
