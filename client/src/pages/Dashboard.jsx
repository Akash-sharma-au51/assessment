import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import ChatUI from '../components/ChatUI'; 
import { API_URL } from '../constants';

const Dashboard = () => {
  const [user, setUser] = useState(null); 
  const [loading, setLoading] = useState(true); 
  const navigate = useNavigate();

  const fetchUser = async () => {
    try {
      const token = localStorage.getItem('token');
      if (!token) {
        navigate('/login');
        return;
      }

      const response = await axios.get(API_URL, {
        headers: { Authorization: `Bearer ${token}` }, 
      });

      setUser(response.data);
      setLoading(false);
    } catch (error) {
      console.error('Error fetching user:', error);
      localStorage.removeItem('token'); 
      navigate('/login'); 
    }
  };

  useEffect(() => {
    fetchUser(); 
  }, []);

  if (loading) {
    return <div className="text-center mt-5">Loading...</div>; 
  }

  return (
    <div className="container mt-5">
      <h2 className="text-center">Welcome, {user?.name}!</h2>
      <p className="text-center">You can now use the chatbot below:</p>
      <ChatUI /> 
    </div>
  );
};

export default Dashboard;