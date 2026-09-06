import chat from "../assets/chat.png";
function Forgot() {
  return (
    <>
      <section className="text-center bg-[#FAF9F6] ">
        <div className="flex gap-1 py-4 mx-5 justify-center">
                  <img src={chat} className="w-7" alt="" />
                  <h1 className="text-[#352477] font-sans text-lg font-semibold">
                    NU<span className="text-[#597e16] text-xl">D</span>GE
                  </h1>
                </div>

        <div>
          <h2 className="text-3xl font-bold text-[#352477] mb-2">
            Forgot your Password?
          </h2>

          <p>
            {" "}
            No worries. Enter the email address linked to your account and we'll
            send you a link to reset your password.
          </p>

          <div className="w-full mx-auto max-w-md mt-5 ">
            <form action="">
              <input
                className="border border-gray-700 rounded-lg px-3 py-3 w-full my-2"
                type="email or username"
                placeholder="johndoe@gmail"
                required
              />

              <button
                type="submit"
                className="flex gap-3 items-center rounded-3xl bg-[#352477] text-white justify-center px-3 py-2  w-full my-6 text-sm md:text-lg border border-gray-700"
              >
                Send Link
              </button>
            </form>
          </div>
        </div>


          <div className="text-xs text-gray-700 flex flex-wrap gap-x-2 gap-y-1 justify-center mx-5  mt-102.5">
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

export default Forgot;
