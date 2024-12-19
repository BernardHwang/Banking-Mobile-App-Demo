// UserContext.tsx
import React, { createContext, useContext, useState, ReactNode } from 'react';

// Define the structure of user details
interface UserDetails {
  picUrl: string;
  username: string;
  isVIP: boolean;
  password: string; // You can add more details as needed
}

// Define the context type
interface UserContextType {
  user: UserDetails | null;
  login: (userDetails: UserDetails) => void;
  logout: () => void;
}

// Create the context with default values
const UserContext = createContext<UserContextType | undefined>(undefined);

// Create the provider component
export const UserProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<UserDetails | null>(null);

  // Handle login and set the user details
  const login = (userDetails: UserDetails) => {
    setUser(userDetails);
  };

  // Handle logout and clear user details
  const logout = () => {
    setUser(null);
  };

  return (
    <UserContext.Provider value={{ user, login, logout }}>
      {children}
    </UserContext.Provider>
  );
};

// Custom hook to use the user context
export const useUserContext = () => {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error('useUserContext must be used within a UserProvider');
  }
  return context;
};
