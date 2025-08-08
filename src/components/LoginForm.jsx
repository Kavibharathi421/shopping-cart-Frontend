import { FaUserAlt, FaLock, FaSignInAlt } from 'react-icons/fa';
import { MdAppRegistration } from 'react-icons/md';
import { useNavigate } from 'react-router-dom';
import useLogin from '../hooks/useLogin';

export default function LoginForm() {
  const navigate = useNavigate();
  const {
    formData,
    error,
    loading,
    handleChange,
    handleSubmit
  } = useLogin();

  return (
    <>
      {error && (
        <p className="text-red-500 text-sm text-center animate-shake mb-4">{error}</p>
      )}

      <form onSubmit={handleSubmit} className="space-y-5">
        <div className="relative">
          <FaUserAlt className="absolute left-3 top-3 text-gray-400" />
          <input
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Email address"
            className="pl-10 pr-4 py-2 w-full border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400 focus:outline-none"
            required
          />
        </div>

        <div className="relative">
          <FaLock className="absolute left-3 top-3 text-gray-400" />
          <input
            name="password"
            type="password"
            value={formData.password}
            onChange={handleChange}
            placeholder="Password"
            className="pl-10 pr-4 py-2 w-full border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-400 focus:outline-none"
            required
          />
        </div>

        <button
          type="submit"
          disabled={loading}
          className={`w-full flex items-center justify-center gap-2 text-white font-semibold py-2 rounded-lg transition duration-300 ${
            loading
              ? 'bg-gradient-to-r from-indigo-300 to-pink-300 cursor-not-allowed'
              : 'bg-gradient-to-r from-indigo-600 to-pink-500 hover:opacity-90'
          }`}
        >
          <FaSignInAlt />
          {loading ? 'Logging in...' : 'Login'}
        </button>
      </form>

      <p className="mt-6 text-sm text-center text-gray-600">
        Don’t have an account?{' '}
        <button
          onClick={() => navigate('/register')}
          className="text-indigo-600 hover:underline font-medium flex items-center justify-center gap-1"
        >
          <MdAppRegistration />
          Register here
        </button>
      </p>
    </>
  );
}
