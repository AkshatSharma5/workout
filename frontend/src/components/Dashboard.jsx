import React from "react";
import { Link } from "react-router-dom";

const Dashboard = () => {
  return (
    <div className="bg-[#222831] min-h-screen text-[#EEEEEE] p-8">
      {/* Header Section */}
      <header className="mb-8 bg-transparent">
        <h1 className="text-4xl font-bold">Admin Dashboard</h1>
        <p className="text-[#ffffff] mt-2">
          Manage users, roles, and permissions efficiently using the Role-Based Access Control (RBAC) system.
        </p>
      </header>

      {/* Navigation Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* User Management Card */}
        <Link
          to="/user-management"
          className="bg-[#393E46] p-6 rounded-lg shadow-lg transform hover:scale-105 transition-transform"
        >
          <div className="flex items-center">
            <div className="bg-[#00ADB5] p-3 rounded-full">
              {/* User Icon */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8 text-white"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M10 12a5 5 0 100-10 5 5 0 000 10zm-7 8a7 7 0 0114 0H3z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <div className="ml-4">
              <h2 className="text-xl font-bold">User Management</h2>
              <p className="text-[#AAAAAA]">Add, edit, and manage users in the system.</p>
            </div>
          </div>
        </Link>

        {/* Role Management Card */}
        <Link
          to="/role-management"
          className="bg-[#393E46] p-6 rounded-lg shadow-lg transform hover:scale-105 transition-transform"
        >
          <div className="flex items-center">
            <div className="bg-[#00ADB5] p-3 rounded-full">
              {/* Role Icon */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8 text-white"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path d="M10 3a1 1 0 00-.867.504L7.26 6.708a5.002 5.002 0 00-1.994.23L3.049 4.882a1 1 0 00-1.098.164l-1.643 1.515A1 1 0 000 7.462v6.076a1 1 0 00.308.714l1.643 1.515a1 1 0 001.098.164l2.217-1.056a5.002 5.002 0 001.994.23l1.873 2.204A1 1 0 0010 17h7a1 1 0 001-1V4a1 1 0 00-1-1h-7z" />
              </svg>
            </div>
            <div className="ml-4">
              <h2 className="text-xl font-bold">Role Management</h2>
              <p className="text-[#AAAAAA]">Create, update, and assign roles to users.</p>
            </div>
          </div>
        </Link>

        {/* Placeholder for More Features */}
        <div className="bg-[#393E46] p-6 rounded-lg shadow-lg flex justify-center items-center text-[#AAAAAA]">
          <p>More features coming soon...</p>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
