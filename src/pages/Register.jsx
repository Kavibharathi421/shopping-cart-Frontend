// pages/Register.jsx
import RegisterForm from '../components/RegisterForm';

export default function Register() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-green-300 via-blue-300 to-purple-300 p-4">
      <div className="w-full max-w-2xl bg-white shadow-2xl rounded-xl p-8">
        <h2 className="text-3xl font-bold text-center mb-6 text-gray-800">Create Your Account</h2>
        <RegisterForm />
      </div>
    </div>
  );
}
