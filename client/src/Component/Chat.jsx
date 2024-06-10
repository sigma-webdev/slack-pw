import { useRef, useState } from "react";
import threadchat from "../assets/thread-message.svg";
import searchImage from "../assets/magnifying-glass.svg";
import userProfile from "../assets/slackbot.png";
import arrowDown from "../assets/chevron-down.svg";

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

      {/* chat message part */}
      <div className="w-full mt-5 text-black bg-[#222529] rounded-r-md overflow-y-scroll scrollable-container">
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
        </div>

        <dialog id="my_modal_3" className="modal">
          <div className="modal-box">
            <form method="dialog">
              {/* if there is a button in form, it will close the modal */}
              <button className="absolute btn btn-sm btn-circle btn-ghost right-2 top-2">
                ✕
              </button>
            </form>
            <h3 className="text-lg font-bold">Hello!</h3>
            <p className="py-4">Press ESC key or click on ✕ button to close</p>
          </div>
        </dialog>

        {/* chat profile name section */}
        <div className="pt-40  text-[#D1D2D3]">
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
          <button className="mt-3 btn btn-outline text-[#D1D2D3] hover:bg-[#d1d2d376]">
            view Profile
          </button>
        </div>

        {/* chat section */}
        <div>
          <p> chat section </p>
        </div>
      </div>
    </section>
  );
};

export default Chat;
