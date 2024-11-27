import React, { useState } from 'react';
import './Style.css';

const RoleManagement = () => {
    const [roles, setRoles] = useState([]);
    const [newRole, setNewRole] = useState({ name: '', description: '', permissions: [] });
    const [editingRoleId, setEditingRoleId] = useState(null);

    const handleAddRole = (event) => {
        event.preventDefault(); 
        if (newRole.name.trim() === '') return; 
        setRoles([...roles, { ...newRole, id: Date.now() }]);
        setNewRole({ name: '', description: '', permissions: [] });
    };

    const handleEditRole = (role) => {
        setNewRole(role);
        setEditingRoleId(role.id);
    };

    const handleUpdateRole = (event) => {
        event.preventDefault(); 
        setRoles(roles.map(role => (role.id === editingRoleId ? newRole : role)));
        setNewRole({ name: '', description: '', permissions: [] });
        setEditingRoleId(null);
    };

    const handleDeleteRole = (id) => {
        setRoles(roles.filter(role => role.id !== id));
    };

    const handlePermissionChange = (permission) => {
        setNewRole(prev => ({
            ...prev,
            permissions: prev.permissions.includes(permission)
                ? prev.permissions.filter(p => p !== permission)
                : [...prev.permissions, permission]
        }));
    };

    return (
        <div className="role-management">
            <h2 className='heading'>Role Management</h2>
            <form onSubmit={editingRoleId ? handleUpdateRole : handleAddRole}>
                <input
                    type="text"
                    placeholder="Role Name"
                    value={newRole.name}
                    className="input-field"
                    onChange={(e) => setNewRole({ ...newRole, name: e.target.value })}
                />
                <input
                    type="text"
                    placeholder="Description"
                    value={newRole.description}
                    className="input-field"
                    onChange={(e) => setNewRole({ ...newRole, description: e.target.value })}
                />
                <div >
                    <h4>Permissions</h4>
                    <label>
                        <input
                            type="checkbox"
                            checked={newRole.permissions.includes('Read')}
                            onChange={() => handlePermissionChange('Read')}
                        />
                        Read
                    </label>
                    <label>
                        <input
                            type="checkbox"
                            checked={newRole.permissions.includes('Write')}
                            onChange={() => handlePermissionChange('Write')}
                        />
                        Write
                    </label>
                    <label>
                        <input
                            type="checkbox"
                            checked={newRole.permissions.includes('Delete')}
                            onChange={() => handlePermissionChange('Delete')}
                        />
                        Delete
                    </label>
                </div>
                <button type="submit" className="user-list-btn" style={{marginTop: "10px"}}>
                    {editingRoleId ? "Update Role" : "Add Role"}
                </button>
            </form>
            <ul className="user-data">
                {roles.map(role => (
                    <li key={role.id} className="user-list">
                        <li>{role.name}</li> - <li>{role.description}</li> -<li>Permissions: {role.permissions.join(', ')}</li> 
                        <button onClick={() => handleEditRole(role)} className="user-list-btn">Edit</button>
                        <button onClick={() => handleDeleteRole(role.id)}  className="user-list-btn">Delete</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default RoleManagement;