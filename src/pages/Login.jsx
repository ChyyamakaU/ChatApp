import chat from "../assets/chat.png";
import apple from "../assets/apple-logo.png";
import google from "../assets/google.png";
import hero from "../assets/hero.jpg";

function Login() {
  return (
    <>
      <section>
        <div className="flex gap-1 py-4 mx-5">
          <img src={chat} className="w-7" alt="" />
          <h1 className="text-[#352477] font-sans text-lg font-semibold">NU<span className="text-[#597e16] text-xl">D</span>GE</h1>
        </div>

        <div className=" grid grid-cols-1 md:grid-cols-2 gap-10 mx-5 ">
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

          <div className="hidden md:block">
            <p className="text-4xl py-2 text-gray-700 italic font-semibold">
              Real people.{" "}
              <span className="text-[#3B2A80]">Real experiences.</span>
            </p>
            <img className="object-contain" src={hero} alt="" />

          
          </div>
        </div>
      </section>
    </>
  );
}

export default Login;
