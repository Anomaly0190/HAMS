// src/Components/Utils/AuthProvider.jsx
import { createContext, useState, useEffect, useContext } from "react";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(() => {
    const savedUser = localStorage.getItem("Users");
    return savedUser ? JSON.parse(savedUser) : null; // Parse if available
  });

  

 // AuthProvider.jsx
const logout = () => {
    localStorage.removeItem("Users");
    setUser(null);
  };
  const login = (userdata) => {
    localStorage.setItem("Users", JSON.stringify(userdata));
    setUser(userdata); // 👈 this will immediately update the context state
  };

  return (
    <AuthContext.Provider value={{ user,login,logout}}>
      {children}
    </AuthContext.Provider>
  );
};

// Custom hook for easy use
export const useAuth = () => useContext(AuthContext);


