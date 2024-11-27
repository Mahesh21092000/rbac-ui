import React, { useEffect, useState } from "react";
import {
  getUsers,
  createUser ,
  updateUser ,
  deleteUser ,
  toggleUserStatus,
} from "./services/apiService";
import './Style.css';

const UserManagement = () => {
  const [users, setUsers] = useState([]);
  const [newUser , setNewUser ] = useState({ name: "", role: "", active: true });
  const [editingUser , setEditingUser ] = useState(null);

  useEffect(() => {
    const fetchUsers = async () => {
      const usersData = await getUsers();
      setUsers(usersData);
    };
    fetchUsers();
  }, []);

  const handleCreateUser  = async (event) => {
    event.preventDefault(); 
    const createdUser  = await createUser (newUser );
    setUsers([...users, createdUser ]);
    setNewUser ({ name: "", role: "", active: true });
  };

  const handleEditUser  = async (user) => {
    setEditingUser (user);
    setNewUser ({ name: user.name, role: user.role, active: user.active });
  };

  const handleUpdateUser  = async (event) => {
    event.preventDefault(); 
    const updatedUser  = await updateUser (editingUser .id, newUser );
    setUsers(
      users.map((user) => (user.id === updatedUser .id ? updatedUser  : user))
    );
    setEditingUser (null);
    setNewUser ({ name: "", role: "", active: true });
  };

  const handleToggleStatus = async (id) => {
    const updatedUser  = await toggleUserStatus(id);
    setUsers(
      users.map((user) => (user.id === updatedUser .id ? updatedUser  : user))
    );
  };

  const handleDeleteUser  = async (id) => {
    await deleteUser (id);
    setUsers(users.filter((user) => user.id !== id));
  };

  return (
    <div className="User-Management">
      <h2 className="heading">User  Management</h2>
      <form onSubmit={editingUser  ? handleUpdateUser  : handleCreateUser }>
        <input
          type="text"
          placeholder="Name"
          className="input-field"
          value={newUser .name}
          onChange={(e) => setNewUser ({ ...newUser , name: e.target.value })}
          required
        />
        <input
          type="text"
          placeholder="Role"
          className="input-field"
          value={newUser .role}
          onChange={(e) => setNewUser ({ ...newUser , role: e.target.value })}
          required
        />
        <select
          value={newUser .active ? "Active" : "Inactive"}
          onChange={(e) =>
            setNewUser ({ ...newUser , active: e.target.value === "Active" })
          }
          className="input-field"
        >
          <option value="Active">Active</option>
          <option value="Inactive">Inactive</option>
        </select>
        <button type="submit" className="user-btn">
          {editingUser  ? "Update User" : "Add User"}
        </button>
      </form>

      <ul className="user-data">
        {users.map((user) => (
          <li key={user.id} className="user-list">
           <li>{user.name}</li> - <li>{user.role} </li>- <li>{user.active ? "Active" : "Inactive"}</li>
            <button onClick={() => handleEditUser (user)} className="user-list-btn">Edit</button>
            <button onClick={() => handleToggleStatus(user.id)} className="user-list-btn">
              {user.active ? "Deactivate" : "Activate"}
            </button>
            <button onClick={() => handleDeleteUser (user.id)} className="user-list-btn">Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UserManagement;