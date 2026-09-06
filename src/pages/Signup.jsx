import chat from "../assets/chat.png";
import { Link } from "react-router-dom";
function Signup() {
  return (
    <>
      <section className="mx-3">
        <Link to="/" className="relative left-4 text-xs md: text-sm top-4 text-gray-700">
          Signin
        </Link>

        <div className="flex gap-1 py-4 mx-5 justify-center">
          <img src={chat} className="w-7" alt="" />
          <h1 className="text-[#352477] font-sans text-lg font-semibold">
            NU<span className="text-[#597e16] text-xl">D</span>GE
          </h1>
        </div>
        <div className="text-center ">
          <h2 className="text-xl md:text-3xl font-semibold">
            Let’s get you Nudging.
          </h2>
          <p className="text-sm md:text-lg py-2">
            Create an account and start chatting with your people.
          </p>
        </div>

        <div className="w-full mx-auto max-w-md mt-5 ">
          <form action="" className="">
            <label htmlFor="Name">Name</label> <br />
            <div className="flex flex-col md:flex-row gap-3">
              <input
                className="border border-gray-700 rounded-lg px-3 py-3 w-full my-2"
                type="text"
                required
                placeholder="first Name"
              />
              <input
                className="border border-gray-700 rounded-lg px-3 py-3 w-full my-2"
                type="text"
                required
                placeholder="SurName"
              />
            </div>
            <label htmlFor="Email">Email</label> <br />
            <input
              className="border border-gray-700 rounded-lg px-3 py-3 w-full my-2"
              type="text"
              required
              placeholder="Johndoe@gmail"
            />
            <label htmlFor="Username">UserName</label>
            <input
              className="border border-gray-700 rounded-lg px-3 py-3 w-full my-2"
              type="text"
              required
              placeholder="@username"
            />
            <label htmlFor="Password">Password</label>
            <input
              className="border border-gray-700 rounded-lg px-3 py-3 w-full my-2"
              type="text"
              required
              placeholder="Create Password"
            />
            <label htmlFor="Password">Confirm Password</label>
            <input
              className="border border-gray-700 rounded-lg px-3 py-3 w-full my-2"
              type="text"
              required
              placeholder="Confirm Password"
            />
            <div className="flex gap-1 items-center">
              <input type="checkbox" className="w-5 " required />
              <p className="text-xs md:text-sm text-gray-700 text-center  ">
                By creating an account, you agree to our Terms and Conditions
                and Privacy Policy.
              </p>
            </div>
            <button
              type="submit"
              className="flex gap-3 items-center rounded-3xl bg-[#352477] text-white justify-center px-3 py-2  w-full my-6 text-sm md:text-lg border border-gray-700"
            >
              {" "}
              Create an Account
            </button>
          </form>

          <div className="text-center py-5 text-sm text-gray-700">
            <p> Already have an account?</p>
            <Link
              to="/"
              className="font-semibold underline hover:text-blue-600"
            >
              Log in
            </Link>
          </div>
        </div>
           <div className="text-xs text-gray-700 flex flex-wrap gap-x-2 gap-y-1 justify-center mx-5 mb-3 mt-24">
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
      </section>
    </>
  );
}

export default Signup;
