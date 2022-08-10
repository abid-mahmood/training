import React from "react";
import { useDispatch, useSelector } from "react-redux/es/exports";
export default function UserAndProduct() {
  const dispatch = useDispatch();
  const userData: any = useSelector((state) => state);
  console.log(userData);
  function addUser() {
    dispatch({ type: "addUser" });
  }
  function removeUser() {
    dispatch({ type: "removeUser" });
  }
  function addProduct() {
    dispatch({ type: "addProduct" });
  }
  function removeProduct() {
    dispatch({ type: "removeProduct" });
  }
  return (
    <div>
      <div>
        <button onClick={addUser}>Add User</button>
        <button onClick={removeUser}>Remove User</button>
        <button onClick={addProduct}>Add Product</button>
        <button onClick={removeProduct}>Remove Product</button>
      </div>
    </div>
  );
}
