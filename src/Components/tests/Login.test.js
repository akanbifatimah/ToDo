import React from "react";
import { render, fireEvent, screen } from "@testing-library/react";
import Login from "../AuthScreens/Login";
import { AuthProvider } from "../Context/AuthContext";

test("login form submission", () => {
  render(
    <AuthProvider>
      <Login />
    </AuthProvider>
  );

  fireEvent.change(screen.getByLabelText(/Email/i), {
    target: { value: "test@example.com" },
  });
  fireEvent.change(screen.getByLabelText(/Password/i), {
    target: { value: "password" },
  });

  fireEvent.click(screen.getByText(/Login/i));

  // Check for navigation or token in localStorage
  expect(localStorage.getItem("token")).toBe("123456789090");
});
