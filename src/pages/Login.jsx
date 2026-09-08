import chat from "../assets/chat.png";
import apple from "../assets/apple-logo.png";
import google from "../assets/google.png";
import hero from "../assets/hero.jpg";
import { Link } from "react-router-dom";
// import { useState } from "react";


function Login() {

// const [current, setCurrent]= useState("Signup")

  return (
    <>
      <section className=" bg-[#FAF9F6]">
        <div className="mx-3 md:mx-8">
          <div className="flex gap-1 py-4 mx-5">
            <img src={chat} className="w-7" alt="" />
            <h1 className="text-[#352477] font-sans text-lg font-semibold">
              NU<span className="text-[#597e16] text-xl">D</span>GE
            </h1>
          </div>

          <div className=" grid grid-cols-1 md:grid-cols-2 gap-28 mx-5 my-6">
            <div>
              <div>
                <button className="flex gap-3 overflow-y-hidden items-center rounded-3xl px-3 py-2 my-2 w-full text-sm md:text-lg border border-gray-700">
                  <img className="w-4 " src={google} alt="Google logo" />
                  <span>Sign in with Google</span>
                </button>
                <button className="flex gap-3 items-center rounded-3xl  px-3 py-2 w-full my-2 text-sm md:text-lg border border-gray-700">
                  <img className="w-5 " src={apple} alt="apple logo" />
                  <span>Sign in with Apple</span>
                </button>
              </div>

              <p className="text-center font-semibold text-gray-700 ">
                ...Or...
              </p>

              <form action="">
                <input
                  className="border border-gray-700 rounded-lg px-3 py-3 w-full my-2"
                  type="email or username"
                  placeholder="Email or Username"
                  required
                />

                <input
                  className="border border-gray-700 rounded-lg px-3 py-3 w-full my-2"
                  type="password"
                  placeholder="Password"
                  required
                />

                <Link to ="Chat"
                  type="submit"
                  className="flex gap-3 items-center rounded-3xl bg-[#352477] text-white justify-center px-3 py-2  w-full my-6 text-sm md:text-lg border border-gray-700"
                >
                  Sign in
                </Link>

                <div className="flex gap-1 items-center">
                  <input type="checkbox" className="w-5 " required />
                  <p className="text-xs md:text-sm text-gray-700 text-center  ">
                    By continuing you agree to our{" "}
                    <Link
                      to="/Terms"
                      className="font-semibold hover:text-blue-600 hover:underline"
                    >
                      Terms and Conditions{" "}
                    </Link>
                    and{" "}
                    <Link
                      to="/Privacy"
                      className="font-semibold hover:text-blue-600 hover:underline"
                    >
                      Privacy Policy
                    </Link>
                    and Use of Cookies.
                  </p>
                </div>

                <div className="text-center">
                  <Link to ="/ForgotPassword" className=" hover:text-blue-600 text-sm text-gray-700 font-semibold py-3">
                  Forgot password?
                </Link>
                </div>
              </form>

              <div className="text-center py-5 text-sm text-gray-700">
                <p>Dont have an account yet?</p>
                <Link
                  to="signup"
                  className="font-semibold underline hover:text-blue-600"
                  // onClick={()=> setCurrent("Login")}
                >
                  Sign Up
                </Link>
              </div>
            </div>

            <div className="hidden md:block">
              <p className="text-4xl py-2 text-gray-700 italic font-semibold">
                Real people.{" "}
                <span className="text-[#3B2A80]">Real experiences.</span>
              </p>
              <img className="object-contain" src={hero} alt="" />
            </div>
          </div>

          <div className="text-xs text-gray-700 flex flex-wrap gap-x-2 gap-y-1 justify-center mx-5 mt-24">
            <p>About</p>
            <p>Get App</p>
            <p>Terms</p>
            <p>Privacy</p>
            <p>Careers</p>
            <p>News</p>
            <p>Business</p>
            <p>Cookies</p>
            <p>Developers</p>
          </div>
        </div>
      </section>
    </>
  );
}

export default Login;
