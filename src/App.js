import React from 'react';
import { Routes, Route } from 'react-router-dom'; // Import Routes and Route from react-router-dom
import UserManagement from './components/UserManagement';
import RoleManagement from './components/RoleManagement';
import PermissionManagement from './components/PermissionManagement';
import Navbar from './components/Navbar';


const App = () => {
  return (
    <div>
      <Navbar />
      <Routes> {/* Use Routes instead of Router */}
        <Route path="/" element={<UserManagement />} />
        <Route path="/roles" element={<RoleManagement />} />
        <Route path="/permission" element={<PermissionManagement />} />

      </Routes>
    </div>
  );
};

export default App;
