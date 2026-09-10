import friends from "../assets/friends.jpg";
import notification from "../assets/notification.png";
// import { Link } from "react-router-dom";

function Homeright() {
  return (
    <>
      <section className="col-span-2 relative ">
        <div className="flex justify-end-safe gap-6 p-5 items-center-safe">
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
      </section>
    </>
  );
}

export default Homeright;
