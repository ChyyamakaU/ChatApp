import chat from "../assets/chat.png";
import apple from "../assets/apple-logo.png";
import google from "../assets/google.png";

function Login() {
  return (
    <>
      <img src={chat} className="w-10" alt="" />

      <p>Real people. Real experiences</p>

      <section>
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

          <p className="text-center font-semibold text-gray-700 ">...Or...</p>

          <form action="">
            <input
              className="border border-gray-700 rounded-lg px-3 py-3 w-full my-2"
              type="text"
              placeholder="Email or Username"
              required
            />

            <input
              className="border border-gray-700 rounded-lg px-3 py-3 w-full my-2"
              type="text"
              placeholder="Password"
              required
            />

            <button className="flex gap-3 items-center rounded-3xl bg-[#352477] text-white justify-center px-3 py-2  w-full my-6 text-sm md:text-lg border border-gray-700">
              Log in
            </button>

            <p className="text-sm text-gray-700 text-center  ">
              By continuing you agree to our Terms and Condition, Privacy and
              Use of Cookies.
            </p>

            <p className="text-center hover:text-blue-600 text-sm text-gray-700 font-semibold py-3">
              Forgot password?
            </p>
          </form>

          <div className="text-center py-5 text-sm text-gray-700">
            <p>Dont have an account yet?</p>
            <p className="font-semibold underline hover:text-blue-600">
              Sign Up
            </p>
          </div>
        </div>

        <div>
          <img src="" alt="" />
        </div>
      </section>
    </>
  );
}

export default Login;
