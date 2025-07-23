import React, { useState } from 'react';

const AuthForm = ({ isLogin = true, onToggle = () => {}, onSubmit = () => {} }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ email, password, confirmPassword, isLogin });
  };

  return (
    <div className="w-full max-w-md p-8 bg-white rounded-2xl shadow-2xl border border-gray-100 backdrop-blur-sm bg-opacity-80">
      <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">
        {isLogin ? 'Welcome Back' : 'Create Account'}
      </h2>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full px-5 py-3 mb-4 text-gray-700 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-black transition duration-300 ease-in-out"
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full px-5 py-3 mb-4 text-gray-700 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-black transition duration-300 ease-in-out"
          required
        />
        {!isLogin && (
          <input
            type="password"
            placeholder="Confirm Password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            className="w-full px-5 py-3 mb-6 text-gray-700 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-black transition duration-300 ease-in-out"
            required
          />
        )}
        <button
          type="submit"
          className="w-full bg-black text-white py-3 rounded-xl font-semibold text-lg hover:bg-gray-800 transition duration-300 ease-in-out shadow-lg"
        >
          {isLogin ? 'Sign In' : 'Sign Up'}
        </button>
      </form>
      <p className="text-center text-gray-600 mt-6">
        {isLogin ? "Don't have an account?" : "Already have an account?"}{' '}
        <button
          onClick={onToggle}
          className="text-black font-semibold hover:underline focus:outline-none"
        >
          {isLogin ? 'Sign Up' : 'Sign In'}
        </button>
      </p>
    </div>
  );
};

export default AuthForm;