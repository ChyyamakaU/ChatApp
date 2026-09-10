import chat from "../assets/chat.png";
import home from "../assets/home.png";
import profile from "../assets/profile.png";
import settings from "../assets/setting.png";
import exit from "../assets/exit.png";
import chats from "../assets/chat (1).png";

function HomeLeft() {
  return (
    <>
      <section className="col-span-1 bg-[#352477]">
        <div className="relative h-screen">
          <div className="flex gap-1 py-6 mx-5">
            <img src={chat} className="w-7" alt="" />
            <h1 className="text-[#ddd8e6] font-sans text-lg font-semibold">
              NU<span className="text-[#597e16] text-xl">D</span>GE
            </h1>
          </div>

         <div className="hidden md:block">
             <div className="flex flex-col h-[60%] overflow-y-scroll px-5 py-7">
            <div className="flex gap-4 items-align">
              <img src={home} className="w-5 h-5" alt="" />
              <p className="text-[#ddd8e6]">Home</p>
            </div>

            <div className="flex gap-4 items-align py-3">
              <img src={chats} className="w-5 h-5" alt="" />
              <p className="text-[#ddd8e6]">Chat</p>
            </div>

            <div className="flex gap-4 items-align pb-3">
              <img src={profile} className="w-5 h-5" alt="" />
              <p className="text-[#ddd8e6]">Profile</p>
            </div>

            <div className="flex gap-4 items-align">
              <img src={settings} className="w-5 h-5" alt="" />
              <p className="text-[#ddd8e6]">Settings</p>
            </div>
          </div>

          <div className="flex gap-4 items-align absolute bottom-0 p-6">
            <img src={exit} className="w-5 h-5" alt="" />
            <p className="text-[#ddd8e6]">LogOut</p>
          </div>
         </div>
        </div>
      </section>
    </>
  );
}

export default HomeLeft;
