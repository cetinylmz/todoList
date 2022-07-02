import React from "react";
import ListContextProvider from "./ListContext";


const Context = (props) => {
  return (
    <ListContextProvider>
     {props.children}
    </ListContextProvider>
  );
};

export default Context;
