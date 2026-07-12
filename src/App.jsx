import { useState } from "react";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  if (!isLoggedIn) {
    return (
      <div className="min-h-screen bg-gray-100 flex items-center justify-center p-6">
        <div className="w-full max-w-md bg-white border rounded-2xl p-10 shadow-lg">

          <div className="flex justify-center mb-8">
            <div className="w-14 h-14 bg-blue-600 rounded-xl flex items-center justify-center font-bold text-2xl text-white">
              AF
            </div>
          </div>

          <h1 className="text-4xl font-bold text-center mb-2">
            AssetFlow
          </h1>

          <p className="text-center text-gray-500 mb-8">
            Enterprise Management System
          </p>

          <h2 className="text-2xl font-bold mb-2">
            Login
          </h2>

          <p className="text-gray-500 mb-6">
            Sign in to manage your corporate assets
          </p>

          <form
            className="space-y-5"
            onSubmit={(e) => {
              e.preventDefault();
              setIsLoggedIn(true);
            }}
          >
            <div>
              <label className="block mb-2">
                Email address
              </label>

              <input
                type="email"
                placeholder="name@company.com"
                className="w-full border rounded-lg px-4 py-3"
              />
            </div>

            <div>
              <div className="flex justify-between mb-2">
                <label>Password</label>

                <button
                  type="button"
                  className="text-blue-600 text-sm"
                >
                  Forgot password?
                </button>
              </div>

              <input
                type="password"
                placeholder="********"
                className="w-full border rounded-lg px-4 py-3"
              />
            </div>

            <button className="w-full bg-blue-600 text-white py-3 rounded-lg font-bold">
              SIGN IN
            </button>
          </form>

          <div className="mt-8 text-center">
            <p className="text-gray-500 mb-4">
              New here?
            </p>

            <button className="w-full border py-3 rounded-lg">
              Create Account
            </button>
          </div>

        </div>
      </div>
    );
  }

  return (
    <h1 className="text-4xl text-center mt-20">
      Dashboard Coming Soon 🚀
    </h1>
  );
}

export default App;