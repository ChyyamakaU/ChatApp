import chat from "../assets/chat.png";
import dots from "../assets/dots.png";
import friend from "../assets/friend.jpg";
import search from "../assets/search.png";


function Leftside() {
  return (
    <>
      <section className="col-span-1 ">
        <div>
          <div className="flex justify-between items-center mx-4 ">
            <div className="flex gap-1 py-4 mx-5">
              <img src={chat} className="w-7" alt="" />
              <h1 className="text-[#352477] font-sans text-lg font-semibold">
                NU<span className="text-[#597e16] text-xl">D</span>GE
              </h1>
            </div>
            <div>
              <img src={dots} className="w-5" alt="" />
            </div>
          </div>

          <div className="flex items-center gap-2 py-4 px-4 bg-[#352477]">
            <img src={search} className="w-5 relative left-10 text-white  rounded-full" alt="" />
            <input
              type="text"
              placeholder="Search here..."
              className="bg-transparent text-white  placeholder:text-gray-600 px-10 rounded-2xl py-2 w-full focus:outline-none"
            />
          </div>

          <div className="scroll-y-5">
            <h3>Friends</h3>

            <div>
              <img src={friend} className=" " alt="" />

              <div>
                <p>John Doe</p>
                <p>Online</p>
              </div>

              <div>
                <p>Hello, how are you?</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Leftside;
