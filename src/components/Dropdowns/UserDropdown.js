import React from "react";

const UserDropdown = ({ profileImageUrl }) => {
  return (
    <>
      <div className="items-center flex">
          <span className="w-12 h-12 text-sm text-white bg-blueGray-200 inline-flex items-center justify-center rounded-full">
            <img
              alt="..."
              className="w-full rounded-full align-middle border-none shadow-lg"
              src={profileImageUrl}
            />
          </span>
      </div>
    </>
  );
};

export default UserDropdown;
