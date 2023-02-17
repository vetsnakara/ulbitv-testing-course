import { Route, Routes } from "react-router-dom";
import React from "react";

import AboutPage from "./pages/AboutPage";
import MainPage from "./pages/MainPage";
import NotFoundPage from "./pages/NotFoundPage";
import UserDetailsPage from "./pages/UserDetailsPage";
import UsersPage from "./pages/UsersPage";
import { HelloWorldPage } from "./pages/HelloWorldPage";
import { UsersForTest } from "./components/UsersForTest";

export const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<MainPage />} />
      <Route path="/about" element={<AboutPage />} />
      <Route path="/users" element={<UsersPage />} />
      <Route path="/users-test" element={<UsersForTest />} />
      <Route path="/users/:id" element={<UserDetailsPage />} />
      <Route path="/hello" element={<HelloWorldPage />} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
};
