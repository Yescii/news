import React from "react";
import { useState } from "react";

const Delete = () => {
  const [enteredId, setEnteredId] = useState();

  const idChangeHandler = (event) => {
    setEnteredId(event.target.value);
    console.log(event.target.value);
  };
  const deleteHandler = async (event) => {
    event.preventDefault(); // the page will not reload when the form is submit

    const response = await fetch(`/api/test/${enteredId}`, {
      method: "DELETE",
    });
    const data = await response.json();
    console.log(data);
  };
  return (
    <form onSubmit={deleteHandler}>
      <label>Delete By ID</label>
      <input type="text" value={enteredId} onChange={idChangeHandler} />
      <button type="submit">DELETE</button>
    </form>
  );
};

export default Delete;
