export default function Login() {
  return (
    <div className="flex justify-center items-center min-h-[calc(100vh-120px)] bg-gray-100 px-4">
      <div className="flex w-full max-w-4xl bg-white shadow-lg rounded-lg overflow-hidden">
        
        {/* Левая часть с картинкой */}
        <div className="w-1/2">
          <img
            src="backgroundofregister.png"
            alt="Login Illustration"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Правая часть с формой */}
        <div className="w-1/2 p-8">
          <h2 className="text-2xl font-bold text-center mb-6">LOGIN</h2>
          <form className="space-y-4">
            <div>
              <label className="block text-sm font-medium mb-1">Username</label>
              <input
                type="email"
                placeholder="E-mail or phone number"
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Password</label>
              <input
                type="password"
                placeholder="At least 8 characters"
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-black text-white py-2 rounded-md hover:bg-gray-800 transition"
            >
              Sign in
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
