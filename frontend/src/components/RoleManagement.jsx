import React, { useState } from "react";
import { useRBAC } from "../context/RBACContext";

const RoleManagement = () => {
  const { roles, addRole, updateRole, deleteRole } = useRBAC();
  const [newRole, setNewRole] = useState({ id: "", permissions: [] });
  const [permissionInput, setPermissionInput] = useState("");

  const handleAddRole = () => {
    if (newRole.id.trim()) {
      addRole({ ...newRole });
      setNewRole({ id: "", permissions: [] });
    }
  };

  const handleAddPermission = () => {
    if (permissionInput.trim() && !newRole.permissions.includes(permissionInput)) {
      setNewRole({
        ...newRole,
        permissions: [...newRole.permissions, permissionInput],
      });
      setPermissionInput("");
    }
  };

  return (
    <div className="bg-[#222831] text-[#EEEEEE] p-8 h-[100vh]">
      <h1 className="text-2xl font-bold mb-6">Role Management</h1>

      {/* Add Role */}
      <div className="mb-4">
        <input
          type="text"
          placeholder="Role Name"
          className="p-2 rounded mr-2 text-black placeholder-[#5a5a5a] my-4"
          value={newRole.id}
          onChange={(e) => setNewRole({ ...newRole, id: e.target.value })}
        />
        <div className="flex items-center mb-2">
          <input
            type="text"
            placeholder="Permission"
            className="p-2 rounded mr-2 mb-4 text-black placeholder-[#5a5a5a]"
            value={permissionInput}
            onChange={(e) => setPermissionInput(e.target.value)}
          />
          <button
            className="bg-[#00ADB5] p-2 ml-6 mb-3 rounded text-black"
            onClick={handleAddPermission}
          >
            Add Permission
          </button>
        </div>
        <button
          className="bg-[#00ADB5] p-2 rounded text-black"
          onClick={handleAddRole}
        >
          Add Role
        </button>
      </div>

      {/* Role List */}
      <table className="w-full bg-[#393E46] rounded-lg text-left">
        <thead>
          <tr>
            <th className="p-2">Role</th>
            <th className="p-2">Permissions</th>
            <th className="p-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {roles.map((role) => (
            <tr key={role.id} className="border-b">
              <td className="p-2">{role.id}</td>
              <td className="p-2">
                {role.permissions.join(", ")}
              </td>
              <td className="p-2">
                <button
                  className="bg-yellow-500 text-black p-1 rounded mr-2"
                  onClick={() =>
                    updateRole(role.id, [
                      ...role.permissions,
                      "new-permission", // Example update
                    ])
                  }
                >
                  Update
                </button>
                <button
                  className="bg-red-500 text-black p-1 rounded"
                  onClick={() => deleteRole(role.id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default RoleManagement;
