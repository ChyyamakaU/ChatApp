import friends from "../assets/friends.jpg";
import star from "../assets/star.png";
import notification from "../assets/notification.png";
// import { Link } from "react-router-dom";

function Homeright() {
  return (
    <>
      <section className="col-span-2 relative bg-[#ebe8f0]">
        <div className="flex justify-end-safe gap-6 p-5 items-center-safe border-b border-gray-300 ">
          <img src={notification} className="w-5 h-5" alt="" />

          <div className="flex">
            <img
              src={friends}
              className="w-5 h-5 rounded-full object-cover"
              alt=""
            />
            <div className="w-2 h-2 rounded-full bg-green-500"></div>
          </div>
        </div>

        <div className="text-[#352477] text-center">
          <div>
            <h3 className="text-sm py-3 font-semibold md:text-lg">My Update</h3>

            <p> Listening to Tems </p>
          </div>

          <div>
            <h3 className="text-sm pt-4 md:pt-10 font-semibold md:text-lg"> Popular News </h3>
        
             <p className="py-1">New music release gets everyone talking</p>
             <p className="py-1">Big tech update you might have missed</p>
             <p className="py-1">What happened in Lagos airport today</p>
          </div>
        </div>

        <div className="bg-[#ddd8e6] rounded-4xl ml-16 flex gap-2  p-3 m-4 absolute bottom-0">
          <p className="italic text-xs md:text-sm  text-center text-[#352477]">
            Good things happen when you Nudge
          </p>
          <img src={star} className="w-5 h-5 " alt="" />
        </div>
{/* 
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
          </div> */}
      </section>
    </>
  );
}

export default Homeright;
