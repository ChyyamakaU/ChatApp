import chat from "../assets/chat.png";
import apple from "../assets/apple-logo.png";
import google from "../assets/google.png";

function Login() {
  return (
    <>
      <img src={chat} className="w-10" alt="" />

      <p>Real people. Real experiences</p>

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
        
        <input className="border border-gray-700 rounded-lg px-3 py-3 w-full my-2" type="text" placeholder="Email or Username" required />

       
        <input className="border border-gray-700 rounded-lg px-3 py-3 w-full my-2" type="text" placeholder="Password" required />

        <button  className="flex gap-3 items-center rounded-3xl bg-[#352477] text-white justify-center px-3 py-2  w-full my-6 text-sm md:text-lg border border-gray-700">Log in</button>

        <div className="flex gap-2 justify-center items-center">
          <p className="text-center text-sm text-gray-700 "> Forgot password?</p>
          <p className="text-blue-600 text-sm underline">link</p>
        </div>
      </form>


<p>Dont have an account yet?</p>
      <p>Sign Up</p>
    </>
  );
}

export default Login;
