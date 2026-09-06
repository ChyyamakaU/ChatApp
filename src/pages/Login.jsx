import chat from "../assets/chat.png";
import apple from "../assets/apple-logo.png";
import google from "../assets/google.png";

function Login() {
  return (
    <>
      <img src={chat} className="w-10" alt="" />

      <p>Real people. Real experiences</p>

      <div>
        <button className="flex gap-3 overflow-y-hidden items-center rounded-3xl px-5 py-2 my-2 w-full text-xs md:text-sm border border-gray-700">
          <img className="w-4 " src={google} alt="Google logo" />
          <span>Sign in with Google</span>
        </button>
        <button className="flex gap-3 items-center rounded-3xl  px-5 py-2 w-full my-2 text-xs md:text-sm border border-gray-700">
          <img className="w-5 " src={apple} alt="apple logo" />
          <span>Sign in with Apple</span>
        </button>
      </div>

      <p className="text-center font-semibold text-gray-700 ">...Or...</p>

      <form action="">
        
        <input className="border border-gray-700 " type="text" placeholder="Email or Username" required />

        <label htmlFor="password">Password</label> <br />
        <input type="text" placeholder="Password" required />

        <button>Log in</button>

        <p> forgot password?</p>
      </form>

      <p>Sign Up</p>
    </>
  );
}

export default Login;
