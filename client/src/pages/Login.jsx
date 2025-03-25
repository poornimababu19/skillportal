function Login() {
  return (
    <div className="p-5 max-w-md mx-auto">
      <h2>Login</h2>
      <input type="email" placeholder="Email" className="border p-2 w-full" />
      <input type="password" placeholder="Password" className="border p-2 w-full mt-2" />
      <button className="bg-blue-500 text-white p-2 w-full mt-2">Login</button>
    </div>
  );
}

export default Login;