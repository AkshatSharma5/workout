import React, { useState } from "react";
import { useRBAC } from "../context/RBACContext";

const UserManagement = () => {
  const {
    users,
    addUser,
    updateUser,
    deleteUser,
    roles,
    hasPermission,
  } = useRBAC();
  const [newUser, setNewUser] = useState({ name: "", role: "viewer" });
  const [searchTerm, setSearchTerm] = useState("");
  const [sortBy, setSortBy] = useState(null);
  const currentUserRole = "admin"; // Simulate the logged-in user's role

  const handleAddUser = () => {
    if (newUser.name.trim()) {
      addUser({ ...newUser, id: Date.now(), isActive: true });
      setNewUser({ name: "", role: "viewer" });
    }
  };

  // Filter and sort users
  const filteredUsers = users.filter((user) =>
    user.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const sortedUsers = [...filteredUsers].sort((a, b) => {
    if (sortBy === "name") return a.name.localeCompare(b.name);
    if (sortBy === "role") return a.role.localeCompare(b.role);
    return 0;
  });

  return (
    <div className="bg-[#222831] text-[#EEEEEE] p-8 h-[100vh]">
      <h1 className="text-2xl font-bold mb-6">User Management</h1>

      {/* Add User Section */}
      {hasPermission(currentUserRole, "create") && (
        <div className="mb-4">
          <input
            type="text"
            placeholder="User Name"
            className="p-2 rounded mr-2 text-black placeholder-[#5a5a5a]"
            value={newUser.name}
            onChange={(e) => setNewUser({ ...newUser, name: e.target.value })}
          />
          <select
            className="p-2 rounded mr-2 text-black placeholder-[#5a5a5a]"
            value={newUser.role}
            onChange={(e) => setNewUser({ ...newUser, role: e.target.value })}
          >
            {roles.map((role) => (
              <option key={role.id} value={role.id}>
                {role.id}
              </option>
            ))}
          </select>
          <button
            className="bg-[#00ADB5] p-2 rounded text-black hover:translate-x-4 transition-all"
            onClick={handleAddUser}
          >
            Add User
          </button>
        </div>
      )}

      {/* Search and Sort */}
      <div className="mb-4 flex mt-8 justify-between">
        {/* Search Input */}
        <input
          type="text"
          placeholder="Search Users..."
          className="p-2 rounded w-1/2 text-black placeholder-[#5a5a5a]"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />

        {/* Sorting Dropdown */}
        <select
          className="p-2 rounded text-black placeholder-[#5a5a5a]"
          value={sortBy}
          onChange={(e) => setSortBy(e.target.value)}
        >
          <option value="">Sort By</option>
          <option value="name">Name</option>
          <option value="role">Role</option>
        </select>
      </div>

      {/* User List */}
      <table className="w-full bg-[#393E46] rounded-lg text-left ">
        <thead>
          <tr>
            <th className="p-2">Name</th>
            <th className="p-2">Role</th>
            <th className="p-2">Status</th>
            <th className="p-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {sortedUsers.map((user) => (
            <tr key={user.id} className="border-b">
              <td className="p-2">{user.name}</td>
              <td className="p-2">{user.role}</td>
              <td className="p-2">{user.isActive ? "Active" : "Inactive"}</td>
              <td className="p-2">
                {/* Render Update Button Based on Permissions */}
                {hasPermission(currentUserRole, "update") && (
                  <button
                    className="bg-yellow-500 text-black p-1 rounded mr-2"
                    onClick={() =>
                      updateUser(user.id, { isActive: !user.isActive })
                    }
                  >
                    Toggle Status
                  </button>
                )}
                {/* Render Delete Button Based on Permissions */}
                {hasPermission(currentUserRole, "delete") && (
                  <button
                    className="bg-red-500 text-black p-1 rounded"
                    onClick={() => deleteUser(user.id)}
                  >
                    Delete
                  </button>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UserManagement;
