import friends from "../assets/friends.jpg";
import young from "../assets/Young.jpg";

function Rightside() {
  return (
    <>
      <section className="col-span-1">
        <div>
          <div className="shrink-0 flex gap-3 items-center border-b border-gray-300 px-4 py-5">
            <img
              src={friends}
              className="w-8 h-8 rounded-full object-cover"
              alt=""
            />

            <div className="flex gap-3 items-center font-medium text-sm md:text-base">
              <p>Hi Lovelies, I am Jane Doe and I am new to Nudge</p>
            </div>
           
          </div>
           <hr />
           <div>
             <div>
              <img src={young} className="w-full h-full object-cover" alt="" />
              <img src={young} className="w-full h-full object-cover" alt="" />
              <img src={young} className="w-full h-full object-cover" alt="" />
              <img src={young} className="w-full h-full object-cover" alt="" />
              <img src={young} className="w-full h-full object-cover" alt="" />
              <img src={young} className="w-full h-full object-cover" alt="" />
            </div>
           </div>
           <button>Log Out</button>
        </div>
      </section>
    </>
  );
}

export default Rightside;
