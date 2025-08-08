import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { registerUser } from '../services/authService';
export default function useRegister() {
  const [formData, setFormData] = useState({
    full_name: '',
    email: '',
    phone_number: '',
    password: '',
    address_line1: '',
    address_line2: '',
    city: '',
    state: '',
    role: 'customer',
    postal_code: '',
    country: ''
  });

  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setSuccess('');

    try {
      const res = await registerUser(formData);
      if (res.status === 'success') {
        setSuccess('Registration successful! Redirecting...');
        setTimeout(() => navigate('/'), 2000);
      } else {
        setError(res.message || 'Registration failed');
      }
    } catch (err) {
      setError(err.response?.data?.message || 'Something went wrong');
    }
  };

  return {
    formData,
    error,
    success,
    handleChange,
    handleSubmit
  };
}
