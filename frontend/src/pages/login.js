import { useState } from 'react'

const Login = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(email, password)
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <form 
        className="w-full max-w-md bg-white p-8 rounded-lg shadow-md space-y-6"
        onSubmit={handleSubmit}
      >
        <h3 className="text-2xl font-bold text-center text-[#00ADB5] font-oswald">
          Log In
        </h3>

        <div className="flex flex-col">
          <label className="mb-2 text-gray-700 font-poppins">Email:</label>
          <input
            type="email"
            placeholder="Enter your email"
            autoComplete="username"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#00ADB5] font-poppins"
          />
        </div>

        <div className="flex flex-col">
          <label className="mb-2 text-gray-700 font-poppins">Password:</label>
          <input
            type="password"
            placeholder="Enter your password"
            autoComplete="current-password"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
            className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#00ADB5] font-poppins"
          />
        </div>

        <button 
          type="submit"
          className="bg-white px-4 py-2 active:scale-75 transition-all rounded-lg text-[#00ADB5] text-md font-bold font-poppins shadow-md hover:bg-gray-50"
        >
          Log In
        </button>
      </form>
    </div>
  )
}

export default Login
