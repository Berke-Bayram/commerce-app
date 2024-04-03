export default function LoginForm() {
  return (
    <form className="m-5">
      <label className="text-white">Email</label>
      <input
        type="email"
        className="block w-full p-3 mt-1 mb-1 bg-gray-200 rounded"
        placeholder="Email"
        autoComplete="email"
      />
      <label className="text-white">Password</label>
      <input
        type="password"
        className="block w-full p-3 mt-1 bg-gray-200 rounded"
        placeholder="Password"
        autoComplete="password"
      />
      <button
        type="submit"
        className="block w-full p-3 mt-2 bg-blue-700 text-white rounded hover:bg-blue-600"
      >
        Login
      </button>
    </form>
  );
}
