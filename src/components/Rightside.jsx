import friends from "../assets/friends.jpg";
import young from "../assets/Young.jpg";
import {Link} from "react-router-dom";

function Rightside() {
  return (
    <>
      <section className="col-span-1 relative">
        <div className="bg-white h-screen overflow-y-scroll">
          <div className="shrink-0  border-b border-gray-300 px-4 py-5">
            <img
              src={friends}
              className="w-28 h-28 aspect-ratio-1/1 relative left-24 rounded-full object-cover"
              alt="profile image"
            />

            <div className=" flex gap-2 justify-center  items-center font-medium text-sm md:text-base m-auto ">
              <p className="text-lg font-semibold">Jane Doe</p>
              <div className="w-2 h-2 rounded-full bg-green-500"></div>
            </div>
            <p className="text-xs md:text-md opacity-75 py-2 font-medium ">
              Hi Lovelies, I am Jane Doe and I am new to Nudge
            </p>
          </div>
          <hr />
          <div>
            <h3 className="text-lg font-semibold p-1">Media</h3>
            <div className="grid grid-cols-3 gap-2 p-2 overflow-y-scroll max-h-40">
              <img
                src={young}
                className="w-50 rounded-2xl object-cover"
                alt=""
              />
              <img
                src={young}
                className="w-50 rounded-2xl object-cover"
                alt=""
              />
              <img
                src={young}
                className="w-50 rounded-2xl object-cover"
                alt=""
              />
              <img
                src={young}
                className="w-50 rounded-2xl object-cover"
                alt=""
              />
              <img
                src={young}
                className="w-50 rounded-2xl  object-cover"
                alt=""
              />
              <img
                src={young}
                className="w-50 rounded-2xl  object-cover"
                alt=""
              />
            </div>
          </div>
          <Link to = "/"
            type="submit"
            className="absolute bottom-6  translate-x-1/2 rounded-3xl bg-[#352477] text-white justify-center px-3 py-2  w-3/6 my-8 text-sm md:text-lg border border-gray-700"
          >
            Sign Out
          </Link>
        </div>
      </section>
    </>
  );
}

export default Rightside;
