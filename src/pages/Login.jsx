import { FaSignInAlt } from 'react-icons/fa';
import LoginForm from '../components/LoginForm';

export default function Login() {
  return (
    <div className="min-h-screen flex items-center justify-center px-4 bg-gradient-to-r from-[#0f2027] via-[#203a43] to-[#2c5364]">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-2xl p-8 animate-fade-in">
        <div className="text-center mb-6">
          <FaSignInAlt className="text-5xl mx-auto text-gradient animate-bounce" />
          <h2 className="text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-600 mt-2">
            Welcome Back!
          </h2>
          <p className="text-gray-500 text-sm">Login to your account</p>
        </div>

        <LoginForm />
      </div>
    </div>
  );
}
