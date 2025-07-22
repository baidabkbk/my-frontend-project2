export default function SignUp() {
  return (
    <div
      className="flex justify-center items-center h-[calc(100vh-120px)] w-full px-4"
    >
      <div
        className="flex justify-center items-center w-full h-full rounded-lg overflow-hidden"
        style={{
          backgroundImage: `url('https://i.ytimg.com/vi/UNOmaFs6KaY/maxresdefault.jpg')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="bg-white bg-opacity-95 rounded-xl shadow-xl p-8 w-full max-w-md">
          <h2 className="text-2xl font-bold text-center text-gray-800 mb-4">
            REGISTRATION
          </h2>
          <form className="space-y-3">
            <input
              className="w-full px-3 py-2 border rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none bg-gray-50"
              type="email"
              placeholder="E-mail"
            />
            <input
              className="w-full px-3 py-2 border rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none bg-gray-50"
              type="text"
              placeholder="First name"
            />
            <input
              className="w-full px-3 py-2 border rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none bg-gray-50"
              type="text"
              placeholder="Last name"
            />
            <input
              className="w-full px-3 py-2 border rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none bg-gray-50"
              type="password"
              placeholder="Password"
            />
            <input
              className="w-full px-3 py-2 border rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none bg-gray-50"
              type="password"
              placeholder="Confirm password"
            />
            <p className="text-xs text-gray-500">
              Password must be at least 8 characters
            </p>
            <label className="block text-sm text-gray-700">
              <input type="checkbox" className="mr-2" /> I agree the{" "}
              <span className="underline text-blue-600 cursor-pointer">
                Terms and Conditions
              </span>
            </label>
            <label className="block text-sm text-gray-700">
              <input type="checkbox" className="mr-2" /> I agree to the{" "}
              <span className="underline text-blue-600 cursor-pointer">
                Privacy Policy
              </span>
            </label>
            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition"
            >
              Register
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
