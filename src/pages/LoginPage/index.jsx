import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { checkSession, loginRequest } from "../../stores/actions/authActions";

function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // Lấy trạng thái loading và error từ Redux store
  const { loading, error } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  const handleLogin = (e) => {
    e.preventDefault();
    // Dispatch action login request
    dispatch(loginRequest({email, password}));
  };

  useEffect(() => {
    console.log('checkSession');
    dispatch(checkSession());
}, [])

  return (
    <div className=" bg-gray-100 relative flex flex-col justify-center min-h-screen overflow-hidden">
      <div
        id="child-container"
        className="w-full p-6 m-auto bg-white rounded-md ring ring-2 ring-purple-600 lg:max-w-xl"
      >
        <h1 className="text-3xl font-semibold text-center text-purple-700 uppercase decoration-wavy">
          Sign in
        </h1>
        <form className="mt-6">
          <div className="mb-2">
            <label className="block text-sm font-semibold text-gray-800">
              Email:
            </label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="block w-full px-4 py-2 mt-2 text-purple-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
            />
          </div>
          <div className="mb-2">
            <label className="block text-sm font-semibold text-gray-800">
              Password
            </label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="block w-full px-4 py-2 mt-2 text-purple-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
            />
          </div>
          <a href="#" className="text-xs text-purple-600 hover:underline">
            Forget Password?
          </a>
          <div className="mt-6">
            <button className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-purple-700 rounded-md hover:bg-purple-600 focus:outline-none focus:bg-purple-600" onClick={handleLogin}>
              Login
            </button>
          </div>
        </form>

        <p className="mt-8 text-xs font-light text-center text-gray-700">
          {" "}   
          Don't have an account?{" "}
          <b className="font-medium text-purple-600 hover:underline cursor-pointer">
            Sign up
          </b>
        </p>
      </div>
    </div>
  );
}
export default LoginPage;
