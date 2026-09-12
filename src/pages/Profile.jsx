import user from "../assets/user.png";
import chat from "../assets/chat.png";
import { useState } from "react";
import { Link } from "react-router-dom";

function Profile() {

const [images, setImages]=useState(null);

const handleImageChange = (e) => {
  setImages(e.target.files[0]);
};

  return (
    <>
      <section>
        <div className="min-h-screen bg-[#352477] flex items-center justify-center px-6">
          <div className="w-full max-w-5xl flex flex-col md:flex-row items-center justify-center gap-10">
            <div className="w-full max-w-md bg-[#efeef3] rounded-2xl p-8 shadow-xl">
              <form className="text-black">
                <h2 className="text-2xl font-semibold text-[#352477] mb-2">
                  Profile Details
                </h2>

                <p className="text-gray-500 text-sm mb-6">
                  Update your profile information
                </p>

                <label
                  htmlFor="avatar"
                  className="flex flex-col items-center justify-center cursor-pointer mb-6"
                >
                  <input
                    type="file"
                    id="avatar"
                    accept=".png, .jpeg, .jpg"
                    hidden
                    onChange={handleImageChange}

                  />

                  <div  className="w-20 h-20 rounded-full bg-white flex items-center justify-center mb-3">
                    <img 
                      src= {images? URL.createObjectURL(images) : user}
                      alt="profile avatar"
                      className="w-20 h-20 object-fill rounded-full"
                    />
                  </div>

                  <span className="text-[#352477] text-sm font-medium">
                    Upload new photo
                  </span>
                </label>

                <div className="mb-5">
                  <label className="block text-sm font-medium mb-2">UserName</label>

                  <input
                    type="text"
                    placeholder="Enter your username"
                    required
                    className="w-full bg-white border border-gray-200 rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-[#352477]"
                  />
                </div>

                <div className="mb-6">
                  <label className="block text-sm font-medium mb-2">Bio</label>

                  <textarea
                    placeholder="Tell us a little about yourself..."
                    required
                    rows="4"
                    className="w-full bg-white border border-gray-200 rounded-lg px-4 py-3 outline-none resize-none focus:ring-2 focus:ring-[#352477]"
                  ></textarea>
                </div>

                <Link
                to="/Home"
                  type="submit"
                  className="w-full bg-[#352477] text-white py-3 px-3 rounded-lg font-medium hover:bg-[#291d5e] transition"
                >
                  Save Changes
                </Link>
              </form>
            </div>
            <div className="flex flex-col items-center justify-center w-1/3">
              <div className="flex items-center gap-1">
                <img src={chat} className="w-10" alt="Nudge logo" />

                <h1 className="text-white font-sans text-lg md:text-2xl py-3 font-semibold">
                  NU<span className="text-[#8fc63d]">D</span>GE
                </h1>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Profile;
