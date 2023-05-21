import {Link} from  'next/link';
import React, { useState} from 'react';
import axios from 'axios';



const Extra= async () => {

    const [fname, setFName] = useState("");
    const [lname, setLName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [users, setUsers] = useState([]);

  useEffect(() => {
    // Fetch users from the server
    const fetchUsers = async () => {
      const response = await axios.get('localhost:8080/users/signup');
      setUsers(response.data);
    };

    fetchUsers();
  }, []);

  return (
    <div>
      <h1>User List</h1>
      <UserTable users={users} />
    </div>
  );
};
    

    return (
      <div>
    
  <h1>User Listing Table</h1>
  <table>
    <thead>
      <tr>
      <th>ID</th>
        <th>Firstname</th>
        <th>LastName</th>
        <th>Email</th>
        <th>Actions</th>
      </tr>
    </thead>
    <tbody>
      {users?.map((user, index) => (
        <tr key={index.id}>
           <td>{user.id}</td>
          <td>{user.name}</td>
          <td>{user.email}</td>
         
          <td>
       
            <button onClick={() => handleEditUser(user.id)}>Edit</button>
            <button onClick={() => handleDelete(user.id)}>Delete</button>
          </td>
        </tr>
      ))}
    </tbody>
  </table>
</div>
    );


export default Extra;