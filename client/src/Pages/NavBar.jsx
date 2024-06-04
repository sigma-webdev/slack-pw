import slackLogo from "../assets/slackLogo.png";
const NavBar = () => {
  return (
    <div className="navbar base-100 2xl:w-[1400px] mx-auto  2xl:rounded-full pl-10 pr-10 mt-4 font-bold">
      {/* left nav logo and items */}
      <div className="w-4/5 navbar-start">
        <a className="pl-0 pr-5 btn btn-ghost">
          <img src={slackLogo} alt="slack logo" />
        </a>
        <div className="hidden lg:flex flex-nowrap">
          <ul className="px-1 menu menu-horizontal">
            <li>
              <details>
                <summary>Features</summary>
                <ul className="p-2">
                  <li>
                    <a> Collaboration </a>
                  </li>
                  <li>
                    <a> Automation </a>
                  </li>
                  <li>
                    <a> Intelligence </a>
                  </li>
                </ul>
              </details>
            </li>
            <li>
              <details>
                <summary>Solutions </summary>
                <ul className="p-1">
                  <li>
                    <a> Department </a>
                  </li>
                  <li>
                    <a> Industry </a>
                  </li>
                </ul>
              </details>
            </li>
            <li>
              <details>
                <summary>Solutions </summary>
                <ul className="p-1">
                  <li>
                    <a> Department </a>
                  </li>
                  <li>
                    <a> Industry </a>
                  </li>
                </ul>
              </details>
            </li>
            <li className="p-2">Enterprise</li>

            <li>
              <details>
                <summary> Pricing </summary>
                <ul className="p-1">
                  <li>
                    <a> Department </a>
                  </li>
                  <li>
                    <a> Industry </a>
                  </li>
                </ul>
              </details>
            </li>
          </ul>
        </div>
      </div>

      {/* right nav search sign in and buttons */}
      <div className=" md:gap-2 navbar-end">
        <button className=" btn btn-ghost btn-circle">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-5 h-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
        </button>
        <a className="hidden w-12 text-sm lg:block "> Sign in</a>
        <div className="justify-between hidden gap-2 lg:flex">
          <a className=" text-[#4A154B]  border-2 border-gray-400 outline-[#4A154b]  btn btn-outline   font-extrabold hover:bg-[#ffffff] hover:text-[#4A154B] hover:border-[#4A154B]">
            {" "}
            TALK TO SALES{" "}
          </a>
          <a className=" align-center   btn bg-[#4a154bea] font-bold text-white hover:bg-[#4A154B]">
            {" "}
            GET STARTED{" "}
          </a>
        </div>

        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M3 6.75C3 6.33579 3.33579 6 3.75 6H20.25C20.6642 6 21 6.33579 21 6.75C21 7.16421 20.6642 7.5 20.25 7.5H3.75C3.33579 7.5 3 7.16421 3 6.75ZM3 12C3 11.5858 3.33579 11.25 3.75 11.25H20.25C20.6642 11.25 21 11.5858 21 12C21 12.4142 20.6642 12.75 20.25 12.75H3.75C3.33579 12.75 3 12.4142 3 12ZM3 17.25C3 16.8358 3.33579 16.5 3.75 16.5H20.25C20.6642 16.5 21 16.8358 21 17.25C21 17.6642 20.6642 18 20.25 18H3.75C3.33579 18 3 17.6642 3 17.25Z"
                fill="#0F172A"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="bg-white shadow top-12 w-72 menu menu-sm dropdown-content z-2 rounded-box -right-6"
          >
            <li>
              <a>Features</a>
            </li>
            <li>
              <a> Enterprise </a>
            </li>
            <li>
              <a> Sign in </a>
            </li>
            <li>
              <a className=" text-[#4A154B] border-2 border-gray-400 outline-[#4A154b]  btn btn-outline   font-extrabold hover:bg-[#ffffff] hover:text-[#4A154B] hover:border-[#4A154B]">
                {" "}
                TALK TO SALES{" "}
              </a>
            </li>
            <li>
              <a className=" align-center   btn bg-[#4a154bea] font-bold text-white hover:bg-[#4A154B]">
                {" "}
                GET STARTED{" "}
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
