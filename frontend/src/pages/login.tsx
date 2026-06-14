import Link from 'next/link'
import Head from 'next/head'

export default function LoginPage() {
  return (
    <>
      <Head>
        <title>Login - Haven</title>
        <meta name="description" content="Login to your Haven account" />
      </Head>
      
      <div className="min-h-screen bg-gradient-to-br from-blue-600 to-blue-900 flex items-center justify-center px-4">
        <div className="w-full max-w-md">
          {/* Logo */}
          <div className="text-center mb-8">
            <div className="text-6xl mb-4">🏠</div>
            <h1 className="text-4xl font-bold text-white">Haven</h1>
            <p className="text-blue-100 mt-2">Premium Household Items Store</p>
          </div>

          {/* Login Form */}
          <div className="bg-white rounded-lg shadow-2xl p-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Welcome Back</h2>

            <div className="space-y-4 mb-6">
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2">Email Address</label>
                <input 
                  type="email" 
                  placeholder="you@example.com"
                  className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-blue-600 focus:outline-none transition"
                />
              </div>

              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2">Password</label>
                <input 
                  type="password" 
                  placeholder="••••••••"
                  className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-blue-600 focus:outline-none transition"
                />
              </div>

              <div className="flex items-center justify-between">
                <label className="flex items-center">
                  <input type="checkbox" className="w-4 h-4" />
                  <span className="ml-2 text-sm text-gray-600">Remember me</span>
                </label>
                <a href="#" className="text-sm text-blue-600 hover:text-blue-700 font-bold">Forgot password?</a>
              </div>
            </div>

            <button className="w-full bg-blue-600 text-white py-3 rounded-lg font-bold hover:bg-blue-700 transition text-lg mb-4">
              Sign In
            </button>

            <div className="relative mb-6">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-300"></div>
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-2 bg-white text-gray-600">Or continue with</span>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4 mb-6">
              <button className="border-2 border-gray-300 py-3 rounded-lg font-bold hover:border-gray-400 transition">
                Google
              </button>
              <button className="border-2 border-gray-300 py-3 rounded-lg font-bold hover:border-gray-400 transition">
                Facebook
              </button>
            </div>

            <p className="text-center text-gray-600">
              Don't have an account? 
              <a href="#" className="text-blue-600 font-bold hover:text-blue-700"> Create one</a>
            </p>
          </div>

          {/* Footer */}
          <p className="text-center text-blue-100 mt-8 text-sm">
            By signing in, you agree to our Terms & Conditions
          </p>
        </div>
      </div>
    </>
  )
}