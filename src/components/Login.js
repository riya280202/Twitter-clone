import React, { useState } from "react";

const Login = () => {
  const [isLogin, setIsLogin] = useState(false);
  const pageHandler = () => {
    setIsLogin(!isLogin);
  };
  return (
    <div className="w-screen h-screen flex justify-center items-center">
      <div className="flex items-center justify-evenly w-[80%]">
        <div>
          <img
            src="https://img.freepik.com/premium-vector/new-twitter-logo-x-2023-twitter-x-logo-vector-download_691560-10809.jpg"
            alt="Twitter-Logo"
            width={"300px"}
          />
        </div>
        <div>
          <h1 className="font-bold text-5xl my-3 text-center">
            Happening Today
          </h1>
          <h1 className="font-bold text-2xl my-4 text-center">
            {isLogin ? "Login" : "Register"}{" "}
          </h1>
          <form className="flex flex-col">
            {!isLogin && (
              <>
                <input
                  type="text"
                  placeholder="Name"
                  className="px-4 border border-gray-200 outline-none py-3 rounded-lg text-lg mb-3"
                />
                <input
                  type="text"
                  placeholder="Username"
                  className="px-4 border border-gray-200 outline-none py-3 rounded-lg text-lg mb-3"
                />
              </>
            )}
            <input
              type="text"
              placeholder="Email Address"
              className="px-4 border border-gray-200 outline-none py-3 rounded-lg text-lg mb-3"
            />
            <input
              type="password"
              placeholder="Password"
              className="px-4 border border-gray-200 outline-none py-3 rounded-lg text-lg mb-3"
            />
            <button className="px-3 py-2 bg-[#1D9BF0] rounded-lg text-white font-bold">
              {
              isLogin? "Login" : "Create Account"}
            </button>
          </form>
          <button onClick={pageHandler} className="text-md font-semibold text-center">
            {isLogin
              ? "New to Twitter?"
              : "Already a user?"}
              <span className="text-blue-800 ml-2">
              {isLogin
              ? "Register Here"
              : "Login"}
              </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
