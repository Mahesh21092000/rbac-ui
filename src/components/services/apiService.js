

const API_URL = 'http://localhost:3001';

export const getUsers = async () => {
  const response = await fetch(`${API_URL}/users`);
  return response.json();
};

export const getUserById = async (id) => {
  const response = await fetch(`${API_URL}/users/${id}`);
  return response.json();
};

export const createUser  = async (user) => {
  const response = await fetch(`${API_URL}/users`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(user),
  });
  return response.json();
};

export const updateUser  = async (id, user) => {
  const response = await fetch(`${API_URL}/users/${id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(user),
  });
  return response.json();
};

export const toggleUserStatus = async (id) => {
    const user = await getUserById(id);
    const updatedUser  = { ...user, active: !user.active };
    return updateUser (id, updatedUser );
  };

export const deleteUser  = async (id) => {
  await fetch(`${API_URL}/users/${id}`, {
    method: 'DELETE',
  });
};