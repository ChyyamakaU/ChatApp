import friends from "../assets/friends.jpg";
import send from "../assets/send.png";
import image from "../assets/image.png";
import friend from "../assets/friend.jpg";

function Chatbox() {
  return (
    <>
      <section className="col-span-2 bg-[#efeef3] relative h-screen flex flex-col">
        <div className="shrink-0 flex gap-3 items-center border-b border-gray-300 px-4 py-5">
          <img
            src={friends}
            className="w-8 h-8 rounded-full object-cover"
            alt=""
          />

          <div className="flex gap-3 items-center font-medium text-sm md:text-base">
            <p>Jane Doe</p>

            <div className="w-2 h-2 rounded-full bg-green-500"></div>
          </div>
        </div>

        <div className="flex-1 min-h-0 overflow-y-auto px-4 py-4">
          <div className="flex items-end gap-2 mb-4">
            <img
              src={friends}
              className="w-8 h-8 rounded-full object-cover shrink-0"
              alt=""
            />

            <div className="max-w-[70%]">
              <p className="bg-white rounded-lg px-4 py-2 text-sm">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Deserunt tempora, vero reprehenderit natus recusandae officiis
                qui vel laudantium conse.
              </p>

              <p className="text-xs text-gray-500 mt-1">2:00</p>
            </div>
          </div>

          <div className="flex items-end justify-end gap-2 mb-4">
            <div className="max-w-[70%]">
              <p className="bg-[#352477] text-white rounded-lg px-4 py-2 text-sm">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Deserunt tempora, vero reprehenderit natus recusandae officiis
                qui vel laudantium conse.
              </p>

              <p className="text-xs text-gray-500 mt-1 text-right">2:02</p>
            </div>

            <img
              src={friends}
              className="w-8 h-8 rounded-full object-cover shrink-0"
              alt=""
            />
          </div>
          <div className="flex items-end justify-end gap-2 mb-4">
            <div className="max-w-[70%]">
              <img src={friend} className="w-52 rounded-2xl" alt="" />

              <p className="text-xs text-gray-500 mt-1 text-right">2:02</p>
            </div>

            <img
              src={friends}
              className="w-8 h-8 rounded-full object-cover shrink-0"
              alt=""
            />
          </div>
        </div>

        <div className="shrink-0 bg-white w-full flex items-center gap-3 px-4 py-4">
          <input
            type="text"
            placeholder="Type a message..."
            className="flex-1 min-w-0  rounded-lg px-4 py-3 border-none outline-none"
          />

          <input type="file" id="image" accept="image/jpg, image/png" hidden />

          <label
            htmlFor="image"
            className="cursor-pointer flex items-center gap-3 shrink-0"
          >
            <img className="w-6 h-6" src={image} alt="Photo" />

           
          </label>
           <img className="w-6 h-6" src={send} alt="Send" />
        </div>
      </section>
    </>
  );
}

export default Chatbox;
