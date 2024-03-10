'use client'
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { UserAuth } from "../context/AuthContext";
import { Player, Controls } from "@lottiefiles/react-lottie-player"
export default function Login() {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { user, googleSignIn, login } = UserAuth();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await login(email, password);
      router.push('/');
    } catch (error) {
      console.error('Error logging in: ', error);
    }
  };

  return (
    <div>
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <div>
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">Log in to your account</h2>
        </div>
        <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
 <input type="hidden" name="remember" value="true" />
 <div className="rounded-md shadow-sm -space-y-px">
    <div>
      <label htmlFor="email-address" className="sr-only">
        Email address
      </label>
      <input
        id="email-address"
        name="email"
        type="email"
        autoComplete="email"
        required
        className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-white rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm mb-4"
        placeholder="Email address"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
    </div>
    <div className='mt-8'>
      <label htmlFor="password" className="sr-only">
        Password
      </label>
      <input
        id="password"
        name="password"
        type="password"
        autoComplete="current-password"
        required
        className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-white rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
    </div>
    <div>
      <button
        type="submit"
        className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 mb-4" // Added mb-4 class here
      >
        Log in
      </button>
    </div>
 </div>
</form>


      </div>
    </div>
    <div className="absolute top-[50px] right-[190px]">
        <Player
          autoplay
          speed={1.5}
          loop
          src="https://lottie.host/a021a71b-7b94-4390-bbbe-99c64e7f1473/6EPaja3pLi.json"
          style={{ height: "600px", width: "600px" }}
        />
      </div>
    </div>
  );
}
