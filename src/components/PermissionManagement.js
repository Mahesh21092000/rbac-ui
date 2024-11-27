import React, { useState } from 'react';
import './Style.css';

const PermissionManagement = () => {
    const [roles, setRoles] = useState([
        { id: 1, name: 'Admin', permissions: ['Read', 'Write', 'Delete'] },
        { id: 2, name: 'User ', permissions: ['Read'] },
    ]);
    const [selectedRoleId, setSelectedRoleId] = useState(null);
    const [availablePermissions] = useState(['Read', 'Write', 'Delete']);
    
    const handleRoleSelect = (id) => {
        setSelectedRoleId(id);
    };

    const handlePermissionChange = (permission) => {
        setRoles(roles.map(role => {
            if (role.id === selectedRoleId) {
                return {
                    ...role,
                    permissions: role.permissions.includes(permission)
                        ? role.permissions.filter(p => p !== permission)
                        : [...role.permissions, permission]
                };
            }
            return role;
        }));
    };

    return (
        <div className="permission-management">
            <h2 className='heading'>Permission Management</h2>
            <h4>Select a Role</h4>
            <ul className='permission-list'> 
                {roles.map(role => (
                    <li key={role.id} onClick={() => handleRoleSelect(role.id)}>
                        {role.name}
                    </li>
                ))}
            </ul>

            {selectedRoleId && (
                <div>
                    <h4>Permissions for {roles.find(role => role.id === selectedRoleId).name}</h4>
                    {availablePermissions.map(permission => (
                        <label key={permission}>
                            <input
                                type="checkbox"
                                checked={roles.find(role => role.id === selectedRoleId).permissions.includes(permission)}
                                onChange={() => handlePermissionChange(permission)}
                            />
                            {permission}
                        </label>
                    ))}
                </div>
            )}
        </div>
    );
};

export default PermissionManagement;