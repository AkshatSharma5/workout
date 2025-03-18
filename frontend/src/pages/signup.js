import { useState } from 'react'
import { useSignup } from '../hooks/useSignup'

const Signup = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const { signup, error, isLoading } = useSignup(); // hook ka use kiya, and yeh params 'paaye' just like the useState se 'foo' and 'setFoo' milta hai

  const handleSubmit = async (e) => {
    e.preventDefault();
    // console.log(email, password)
    await signup(email, password);
  }


  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <form 
        className="w-full max-w-md bg-white p-8 rounded-lg shadow-md space-y-6"
        onSubmit={handleSubmit}
      >
        <h3 className="text-2xl font-bold text-center text-[#00ADB5] font-oswald">
          Sign Up
        </h3>

        <div className="flex flex-col">
          <label className="mb-2 text-gray-700 font-poppins">Email:</label>
          <input
            type="email"
            placeholder="Enter your email"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#00ADB5] font-poppins"
            autoComplete="username"
          />
        </div>

        <div className="flex flex-col">
          <label className="mb-2 text-gray-700 font-poppins">Password:</label>
          <input
            type="password"
            placeholder="Enter your password"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
            className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#00ADB5] font-poppins"            
            autoComplete="new-password"
          />
        </div>
        <div>
          <button 
          disabled={isLoading}
          type="submit"
          className="text-white px-4 py-2 active:scale-95 transition-all rounded-lg bg-[#00ADB5] hover:bg-[#047f86] text-md font-bold font-poppins shadow-md "
        >
          Sign Up
        </button>
        {error && <div className="error text-red-600 italic mt-4">{error}</div>}
        </div>
        
      </form>
    </div>
  )
}

export default Signup
