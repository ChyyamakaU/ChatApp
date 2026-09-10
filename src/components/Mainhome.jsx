import chats from "../assets/chat (1).png";
import group from "../assets/group.png";
import news from "../assets/news.png";

import friends from "../assets/friends.jpg";

function Mainhome() {
  return (
    <>
      <section className="col-span-4 bg-[#ddd8e6]">
        <div>
          <div className="text-[#352477] text-center py-3 md:py-5">
            <h2 className="text-xl md:text-3xl font-bold font-mono">
              Hey Jane,
            </h2>
            <h2 className="text-lg md:text-2xl italic font-medium">
              It's good to see you again!
            </h2>
          </div>

          <div className="py-4 md:py-8 px-4">
            <h3 className="text-lg md:text-xl text-[#352477] py-3 md:py-8">
              What would you like to do today?
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-3 text-[#352477]">
              <div className="p-4 md:p-6 border border-[#ddd8e6] rounded-2xl bg-[#c0b2dc] hover:bg-[#f8f6fc] hover:border-[#352477]/30 transition duration-200 cursor-pointer">
                <div className="w-11 h-11 rounded-full bg-[#efeef3] flex items-center justify-center mb-4">
                  <img src={chats} className="w-6 h-6" alt="New chat" />
                </div>

                <h4 className="text-base md:text-lg font-semibold text-[#352477] mb-2">
                  New Chat?
                </h4>

                <p className="text-sm text-gray-500 leading-5">
                  Start a conversation with someone new.
                </p>
              </div>

              <div className="p-4 md:p-6 border border-[#ddd8e6] rounded-2xl bg-green-50 hover:bg-[#f8f6fc] hover:border-[#352477]/30 transition duration-200 cursor-pointer">
                <div className="w-11 h-11 rounded-full bg-[#efeef3] flex items-center justify-center mb-4">
                  <img src={group} className="w-6 h-6" alt="New chat" />
                </div>

                <h4 className="text-base md:text-lg font-semibold text-[#352477] mb-2">
                  Find People?
                </h4>

                <p className="text-sm text-gray-500 leading-5">
                  Discover and chat with friends
                </p>
              </div>

              <div className="p-4 md:p-6 border border-[#ddd8e6] rounded-2xl bg-[#c0b2dc] hover:bg-[#f8f6fc] hover:border-[#352477]/30 transition duration-200 cursor-pointer">
                <div className="w-11 h-11 rounded-full bg-[#efeef3] flex items-center justify-center mb-4">
                  <img src={news} className="w-6 h-6" alt="New chat" />
                </div>

                <h4 className="text-base md:text-lg font-semibold text-[#352477] mb-2">
                  Check News?
                </h4>

                <p className="text-sm text-gray-500 leading-5">
                  Stay updated with global and local events.
                </p>
              </div>
            </div>
          </div>

          <div className="py-4 px-4">
            <h3 className="text-lg md:text-xl text-[#352477] py-3">
              Recent Chats
            </h3>

            {Array(4)
              .fill("")
              .map((item, index) => (
                <div key={index} className="flex justify-between items-center border-b border-gray-300 ">
                  <div className="flex  py-2 items-center gap-3">
                    <img
                      src={friends}
                      className=" w-9 h-9 object-fit aspect-ratio-1/1 rounded-full"
                      alt=""
                    />

                    <div className=" text-sm flex flex-col hover:bg-[#ddd8e6] hover:text-[#352477]">
                      <p className="font-semibold">Jane Doe</p>
                      <p className="font-normal text-gray-600 hover:text-[#352477]">
                        Sent you a message.
                      </p>
                    </div>

                  </div>
                  <div>
                    <p className="text-xs md:text-sm text-gray-600">2 hours ago</p>
                  </div>
                  
                </div>
              ))}
          </div>
        </div>
      </section>
    </>
  );
}

export default Mainhome;
