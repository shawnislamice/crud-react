import { useState } from "react";
import { Link, useLoaderData } from "react-router-dom";

const Users = () => {
  const loadedUsers = useLoaderData();
  const [users, setUsers] = useState(loadedUsers);
  const handleDelete = (id) => {
    console.log(id);
    fetch(`http://localhost:5000/users/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.deletedCount > 0) {
          alert("Deleted Successfully");
          const remaining = users.filter((user) => user._id != id);
          setUsers(remaining);
        }
      });
  };
  const handleUpdate=()=>{
    
  }
  return (
    <div>
      <h2>Users : {users.length}</h2>
      <div>
        {users.map((user) => (
          <div key={user._id}>
            <p>
              {user.name} :{user.email}
            </p>
            <Link to={`/update/${user._id}`}>
              <button onClick={() => handleUpdate(user._id)}>Update</button>
            </Link>
            <button onClick={() => handleDelete(user._id)}>Delete</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Users;
