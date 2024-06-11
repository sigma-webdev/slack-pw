import { useRef, useState } from "react";
import threadchat from "../assets/thread-message.svg";
import searchImage from "../assets/magnifying-glass.svg";
import userProfile from "../assets/slackbot.png";
import arrowDown from "../assets/chevron-down.svg";
import profileAvatar from "../assets/myProfile.png";

const Chat = () => {
  const [width, setWidth] = useState(300); // Initial width of the sidebar
  const sidebarRef = useRef(null);
  const isDragging = useRef(false);

  {
    /* drag -- TODO: fix glitch drag */
  }
  const startDrag = (e) => {
    isDragging.current = true;
    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseup", stopDrag);
    e.preventDefault(); // Prevent text selection
  };

  const handleMouseMove = (e) => {
    if (isDragging.current) {
      const newWidth =
        e.clientX - sidebarRef.current.getBoundingClientRect().left;
      setWidth(newWidth > 300 ? newWidth : 300); // Minimum width 100px
    }
  };

  const stopDrag = () => {
    isDragging.current = false;
    document.removeEventListener("mousemove", handleMouseMove);
    document.removeEventListener("mouseup", stopDrag);
  };

  return (
    <section className="flex h-screen bg-[#181A22] text-[#FAFAFA]">
      {/* column one - profile section  */}
      <div className="   w-28 bg-[#181A22] pt-6">
        <div className="flex flex-col items-center justify-between h-full ">
          <img
            src={threadchat}
            alt="chats"
            className="w-10 p-2  rounded-md hover:bg-[#4F5059] border border-[#4F5059]"
          />
          <img
            src={threadchat}
            alt="chats"
            className="w-10 p-2  rounded-md hover:bg-[#4F5059] border border-[#4F5059] mb-2"
          />
        </div>
      </div>

      {/* column two - message */}
      <div
        ref={sidebarRef}
        className="mt-5 bg-[#30313A]  rounded-l-md"
        style={{ width: `${width}px` }}
      >
        <p className="py-2 font-semibold text-center"> Chat Message </p>
        {/* search field */}
        <div className="flex justify-center gap-5  bg-[#484750] rounded-md border border-gray-400 mt-2 w-60 mx-auto text-[#9CA3AF]">
          <img src={searchImage} alt="search" />
          <input
            type="text"
            className="bg-[#484750]  py-1 rounded-md focus:outline-none"
          />
        </div>

        {/* dms */}
        <div className="mt-2 bg-[#42424A] flex  items-start py-3 px-1 gap-2">
          <img src={userProfile} alt="profile avatar" width={25} />
          <div>
            <h3> Mangesh Thakre </h3>
            <p className="overflow-hidden"> hello world john meet ...</p>
          </div>
        </div>
      </div>
      <div
        className="w-1 cursor-pointer hover:w-1"
        onMouseDown={startDrag}
      ></div>

      {/* 3 chat message part */}
      <div className="w-full mt-5 text-black bg-[#1A1D21] rounded-r-md overflow-y-scroll scrollable-container relative">
        {/* chat name section   */}

        {/* You can open the modal using document.getElementById('ID').showModal() method */}
        <div className=" text-[#D1D2D3] p-2 border-b border-gray-500">
          <button
            onClick={() => document.getElementById("my_modal_3").showModal()}
            className="flex items-center gap-2"
          >
            <img src={userProfile} alt="profile avatar" width={30} />
            <h3 className="text-sm"> Mangesh Thakre </h3>
            <img src={arrowDown} alt="arrow down" />
          </button>
          <dialog id="my_modal_3" className="modal">
            <div className="modal-box">
              <form method="dialog">
                {/* if there is a button in form, it will close the modal */}
                <button className="absolute btn btn-sm btn-circle btn-ghost right-2 top-2">
                  ✕
                </button>
              </form>
              <h3 className="text-lg font-bold"> Mangesh Thakre</h3>
              <p className="py-4">Here we will display user information</p>
            </div>
          </dialog>
        </div>

        {/* chat profile name section and chat section */}
        <div className="absolute bottom-0 w-full py-4">
          {/* message container */}
          <div className="">
            <div className=" text-[#D1D2D3] pl-2">
              <div className="flex items-center gap-4 font-bold">
                <img src={userProfile} alt="profile avatar" width={100} />
                <h3 className="text-2xl"> Mangesh Thakre </h3>
              </div>
              <p className="mt-2 text-lg">
                {" "}
                This conversation is just between{" "}
                <span className="text-[#2BA3C4]">@Mangesh</span> Thakre and you.
                Check out their profile to learn more about them.
              </p>

              {/* You can open the modal using document.getElementById('ID').showModal() method */}
              <button
                className="btn mt-3  btn-outline text-[#D1D2D3] hover:bg-[#d1d2d376]"
                onClick={() =>
                  document.getElementById("my_modal_3").showModal()
                }
              >
                View Profile
              </button>
            </div>

            <div className="divider divider-neutral text-[#D1D2D3]">
              {" "}
              Message{" "}
            </div>

            {/* all the message will be displayed here */}
            <div className="pl-2 text-[#D1D2D3] ">
              {/* message displayed body  */}
              <div className="flex items-start gap-3">
                <img src={userProfile} alt="User profile" width={45} />
                <div>
                  <p className="font-bold">
                    {" "}
                    Ngamlenmang Touthang{" "}
                    <span className="text-xs font-normal"> 10:00pm</span>
                  </p>
                  <p className="text-sm"> Hi mangesh, How are you</p>
                </div>
              </div>

              <div className="flex items-start gap-3 py-4">
                <img src={profileAvatar} alt="User profile" width={45} />
                <div>
                  <p className="font-bold text-gray-100 ">
                    {" "}
                    Mangesh Thakre{" "}
                    <span className="text-xs font-normal"> 10:05pm</span>
                  </p>
                  <p className="text-sm font-normal">
                    {" "}
                    Hello mang, im fine. How are you too{" "}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* chat section */}
          <div className="bottom-0 w-full pl-2 pr-2 mt-5 ">
            <div className="flex items-end w-full px-3 py-1 gap-1 rounded-md bg-[#222529] border border-gray-500 ">
              <textarea
                type="text"
                id="message"
                placeholder="Type your message here"
                className="w-full bg-[#222529] focus:outline-none text-[#D1D2D3] py-4 "
              />
              <div className="p-2  rounded-md cursor-pointer bg-[#007A5A] hover:bg-[#007a59da]">
                <svg
                  width="20"
                  height="15"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M3.47804 2.4043C3.2133 2.3274 2.92771 2.40193 2.73432 2.5984C2.54093 2.79487 2.47091 3.0816 2.55198 3.3451L4.98426 11.25H13.5C13.9142 11.25 14.25 11.5858 14.25 12C14.25 12.4142 13.9142 12.75 13.5 12.75H4.98427L2.55207 20.6546C2.471 20.9181 2.54102 21.2049 2.73441 21.4013C2.92781 21.5978 3.2134 21.6723 3.47814 21.5954C10.1767 19.6494 16.3974 16.5814 21.9233 12.6087C22.1193 12.4678 22.2355 12.2412 22.2355 11.9998C22.2355 11.7583 22.1193 11.5317 21.9233 11.3908C16.3974 7.41817 10.1767 4.35021 3.47804 2.4043Z"
                    fill="#ffffff"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Chat;
