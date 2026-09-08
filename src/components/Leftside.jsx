import chat from "../assets/chat.png";
import dots from "../assets/dots.png";
import friends from "../assets/friends.jpg";
import search from "../assets/search.png";

function Leftside() {
  return (
    <>
      <section className="col-span-1 ">
        <div>
          <div className="flex justify-between items-center  ">
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
            <img
              src={search}
              className="w-5 relative left-10 text-white  rounded-full"
              alt=""
            />
            <input
              type="text"
              placeholder="Search here..."
              className="bg-transparent text-white  placeholder:text-gray-300 px-10 rounded-2xl py-2 w-full focus:outline-none"
            />
          </div>

          <div className="flex flex-col h-[60%] overflow-y-scroll px-5">
            {/* <h3>Friends</h3> */}

            {Array(10).fill("").map((item, index)=>(

              <div key={index} className="flex  py-2 items-center gap-3">
              <img
                src={friends}
                className=" w-9 h-9 object-fit aspect-ratio-1/1 rounded-full"
                alt=""
              />

              <div className=" text-sm flex flex-col hover:bg-[#3e298f] hover:text-white">
                <p className="font-semibold">John Doe</p>
                <p className="font-normal text-gray-600 hover:text-white">
                  Hello, how are you?
                </p>
              </div>
            </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export default Leftside;
