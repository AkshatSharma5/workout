import React, { createContext, useState, useContext } from "react";

const RBACContext = createContext();

export const RBACProvider = ({ children }) => {
  const [users, setUsers] = useState([
    { id: 1, name: "Admin User", role: "admin", isActive: true },
    { id: 2, name: "Editor User", role: "editor", isActive: true },
    { id: 3, name: "Viewer User", role: "viewer", isActive: true },
  ]);

  const [roles, setRoles] = useState([
    { id: "admin", permissions: ["create", "read", "update", "delete"] },
    { id: "editor", permissions: ["create", "read", "update"] },
    { id: "viewer", permissions: ["read"] },
  ]);

  const addUser = (newUser) => setUsers((prev) => [...prev, newUser]);
  const updateUser = (id, updatedData) =>
    setUsers((prev) =>
      prev.map((user) => (user.id === id ? { ...user, ...updatedData } : user))
    );
  const deleteUser = (id) =>
    setUsers((prev) => prev.filter((user) => user.id !== id));

  const addRole = (newRole) => setRoles((prev) => [...prev, newRole]);
  const updateRole = (roleId, updatedPermissions) =>
    setRoles((prev) =>
      prev.map((role) =>
        role.id === roleId ? { ...role, permissions: updatedPermissions } : role
      )
    );
  const deleteRole = (roleId) =>
    setRoles((prev) => prev.filter((role) => role.id !== roleId));

  return (
    <RBACContext.Provider
      value={{
        users,
        roles,
        addUser,
        updateUser,
        deleteUser,
        addRole,
        updateRole,
        deleteRole,
      }}
    >
      {children}
    </RBACContext.Provider>
  );
};

export const useRBAC = () => {
    const context = useContext(RBACContext);
  
    const hasPermission = (roleId, permission) => {
      const role = context.roles.find((role) => role.id === roleId);
      return role ? role.permissions.includes(permission) : false;
    };
  
    return { ...context, hasPermission };
  };
  