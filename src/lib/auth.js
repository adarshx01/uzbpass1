// /lib/auth.js

export const authenticateUser = async (email, password) => {
    // Replace this with your actual authentication logic, e.g., checking a database
    const user = { id: 1, name: "John Doe", email: "johndoe@example.com" };
  
    if (email === "johndoe@example.com" && password === "password123") {
      return user;
    }
  
    return null;
  };
  