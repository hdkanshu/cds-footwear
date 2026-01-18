export default function AdminLogin() {
  return (
    <div className="max-w-sm mx-auto">
      <h2 className="text-2xl font-semibold mb-4">
        Admin Login
      </h2>

      <input
        className="border p-2 w-full mb-2"
        placeholder="Admin Email"
      />

      <input
        className="border p-2 w-full mb-2"
        placeholder="Password"
        type="password"
      />

      <button className="w-full border py-2">
        Login as Admin
      </button>
    </div>
  );
}
