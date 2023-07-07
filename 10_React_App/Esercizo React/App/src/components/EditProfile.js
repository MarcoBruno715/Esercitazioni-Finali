import axios from 'axios';
import React, { useState } from 'react';

const EditProfile = ({ user, onUpdate }) => {
    const [name, setName] = useState(user.name);

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const token = localStorage.getItem('token');
            await axios.post('http://localhost:3001/api/updateProfile', { name }, {
                headers: { 'Authorization': token }
            });
            onUpdate(name);
        } catch (error) {
            console.error('Error updating profile', error);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                placeholder="Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
            />
            <button type="submit">Update Profile</button>
        </form>
    );
};

export default EditProfile;