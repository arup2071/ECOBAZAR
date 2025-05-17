import React from "react";
import { MdOutlineClose } from "react-icons/md";

const Sidebar = ({
  heading,
  children,
  showSidebar,
  hideSidebar,
  position = "right",
}) => {
  return (
    <div
      onClick={(e) => {
        e.target.classList.contains("sidebar") ? hideSidebar() : false;
      }}
      className={`sidebar fixed inset-0 bg-gray-950/50 z-10 transition-opacity duration-300 ${
        showSidebar ? "opacity-100 visible" : "opacity-0 invisible"
      }`}
    >
      <div
        className={`sidebarCnt w-full max-w-[350px] bg-white h-screen absolute duration-500 ease-in-out transform transition-all ${
          showSidebar
            ? "translate-x-0 opacity-100"
            : "-translate-x-full opacity-0" 
        } position-${position}`}
      >
        {heading && (
          <div className="sidebarHeader text-xl flex justify-between py-4 px-3 border-b border-gray-300">
            {heading}
            <button
              onClick={hideSidebar}
              className="inline-flex items-center gap-1 text-xs"
            >
              <MdOutlineClose /> Close
            </button>
          </div>
        )}

        <div className="sidebarBody p-5">{children}</div>
      </div>
    </div>
  );
};

export default Sidebar;
