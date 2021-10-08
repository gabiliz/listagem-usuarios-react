import axios from "axios";
import React, { useState, useEffect } from "react";
import './App.css';
import UserModal from "./UserModal";

const App = () => {

  const max = 10;
  const [users, setUsers] = useState([]);
  const [limit, setLimit] = useState(3);
  const [show, setShow] = useState(false);
  
  function showMoreUsers() {
    setLimit((prevValue) => prevValue +3);
  };

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => setUsers(data));
  }, []);

  return (
    <div className="app">
      <h1 className="header">Lista de usuários</h1>
      {users.slice(0, limit).map((user) => (
        <div className="user-details">
          <UserModal user={user} show={show} setShow={setShow} key={user.id}/>
          <a className="user-list" onClick={() => setShow(true)}>{user.name}</a>
        </div>
      ))}
      <div>
        <button disabled={limit >= max} onClick={showMoreUsers}>Mostrar Mais</button>
      </div>
    </div>
  )

}
export default App;