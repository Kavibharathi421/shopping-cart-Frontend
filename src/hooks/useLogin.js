import { useReducer } from 'react';
import { useNavigate } from 'react-router-dom';
import { loginUser } from '../services/authService';
const initialState = {
  formData: {
    email: '',
    password: ''
  },
  error: '',
  loading: false
};

function reducer(state, action) {
  switch (action.type) {
    case 'SET_FIELD':
      return {
        ...state,
        formData: {
          ...state.formData,
          [action.field]: action.value
        }
      };
    case 'SET_LOADING':
      return { ...state, loading: action.payload };
    case 'SET_ERROR':
      return { ...state, error: action.payload };
    case 'RESET':
      return initialState;
    default:
      return state;
  }
}

export default function useLogin() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const navigate = useNavigate();

  const handleChange = (e) => {
    dispatch({ type: 'SET_FIELD', field: e.target.name, value: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch({ type: 'SET_ERROR', payload: '' });
    dispatch({ type: 'SET_LOADING', payload: true });

    try {
      const data = await loginUser(state.formData);
      console.log('Login Response:', data);

      if (data.status === 'success') {
        localStorage.setItem('isAuthenticated', 'true');
        localStorage.setItem('userRole', data.role);
        navigate(data.role === 'admin' ? '/admin-dashboard' : '/customer');
      } else {
        dispatch({ type: 'SET_ERROR', payload: 'Unexpected response from server.' });
      }
    } catch (err) {
      console.error(err);
      if (err.response?.data?.status === 'not_found') {
        const goRegister = window.confirm("You have no account. Would you like to register?");
        if (goRegister) navigate('/register');
      } else {
        dispatch({
          type: 'SET_ERROR',
          payload: err.response?.data?.message || "Login failed. Please try again."
        });
      }
    } finally {
      dispatch({ type: 'SET_LOADING', payload: false });
    }
  };

  return {
    formData: state.formData,
    error: state.error,
    loading: state.loading,
    handleChange,
    handleSubmit,
  };
}
