import Footer from "../ui/footer";

export default function Register() {
  return (
  <main>
    <div className="min-h-screen flex flex-col justify-center py-12 sm:px-6 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <h2 className="mt-6 text-center text-3xl font-extrabold text-blue-400">Start your journey.</h2>
      </div>

      <div className="m-8 sm:mx-auto sm:w-full sm:max-w-md">
        <div className="bg-green-500 py-8 px-4 rounded-lg sm:px-10">
          <form className="space-y-6" action="#" method="POST">
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-white">
                Email
              </label>
              <div className="mt-1">
                <input
                  type="email"
                  autoComplete="email"
                  required
                  className="block w-full p-3 mt-1 bg-gray-200 rounded"
                  placeholder="Email"
                />
              </div>
            </div>

            <div>
              <label htmlFor="password" className="block text-sm font-medium text-white">
                Password
              </label>
              <div className="mt-1">
                <input
                  type="password"
                  autoComplete="current-password"
                  required
                  className="block w-full p-3 mt-1 bg-gray-200 rounded"
                  placeholder="Password"
                />
              </div>
            </div>

            <div>
              <label htmlFor="password_confirmation" className="block text-sm font-medium text-white">
                Confirm Password
              </label>
              <div className="mt-1">
                <input
                  type="password"
                  autoComplete="current-password"
                  required
                  className="block w-full p-3 mt-1 bg-gray-200 rounded"
                  placeholder="Confirm Password"
                />
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="block w-full p-3 mt-2 bg-blue-700 text-white rounded hover:bg-blue-600"
              >
                Register
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
    <Footer />
  </main>
    
  );
};
