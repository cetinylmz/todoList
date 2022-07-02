import axios from "axios";

export const getAllUsers = async () =>
  axios.get("http://localhost:5000/users/getUsers");

export const crateUser = async (date) => {
  axios.post("http://localhost:5000/users/crateUser", {
    name: date,
  });
};

export const deleteUser = async (_id) => {
  axios.post("http://localhost:5000/users/deleteUsers", {
    _id: _id,
  });
};

export const updateUser = async (_id, name) => {
  axios.post("http://localhost:5000/users/updateUsers", {
    _id: _id,
    name: name,
  });
};
