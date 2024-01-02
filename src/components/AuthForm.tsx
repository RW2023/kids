'use client';
import React, { useState } from 'react';
import { supabase } from '@/utils/supabaseClient';

const AuthForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [isLogin, setIsLogin] = useState(true); // Toggle between login and registration
  console.log(isLogin)

  const handleAuth = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    const action = isLogin
      ? supabase.auth.signInWithPassword({ email, password })
      : supabase.auth.signUp({ email, password });

    const { error } = await action;
    if (error) setError(error.message);
    setLoading(false);
  };

  const handleGitHubLogin = async () => {
    const { error } = await supabase.auth.signInWithOAuth({
      provider: 'github',
    });
    if (error) setError(error.message);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-base-100">
      <div className="p-6 max-w-md w-full bg-black rounded-lg shadow-md border drop-shadow">
        {error && <div className="alert alert-error mb-4">{error}</div>}

        <form onSubmit={handleAuth} className="space-y-4">
          <div className="form-control">
            <label className="label">
              <span className="label-text">
                {isLogin ? 'Email' : 'Sign Up with Email'}
              </span>
            </label>
            <input
              type="email"
              placeholder="Email"
              className="input input-bordered"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              disabled={loading}
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">
                {isLogin ? 'Password' : 'Create Password'}
              </span>
            </label>
            <input
              type="password"
              placeholder="Password"
              className="input input-bordered"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              disabled={loading}
            />
          </div>
          <button
            type="submit"
            className={`btn btn-primary w-full ${loading ? 'loading' : ''}`}
            disabled={loading}
          >
            {isLogin ? 'Login with Email' : 'Sign Up with Email'}
          </button>
        </form>

        <div className="divider">OR</div>

        <button
          className="btn btn-outline bg-button text-black w-full"
          onClick={handleGitHubLogin}
        >
          <i className="fab fa-github text-3xl"></i>
          Login with GitHub
        </button>

        <p className="text-center mt-4">
          {isLogin ? "Don't have an account?" : 'Already have an account?'}
          <button
            className="text-primary ml-2 underline"
            onClick={() => setIsLogin(!isLogin)}
          >
            {isLogin ? 'Sign Up' : 'Login'}
          </button>
        </p>
      </div>
    </div>
  );
};

export default AuthForm;
