import { Routes, Route, Link } from "react-router-dom";
import RegisterForm from "../components/RegisterForm";
import AllPosts from "../components/AllPosts";
import { useState } from "react";
import "./App.css";
import { LoginForm } from "../components/LoginForm";
import { useAuth } from "../hooks/useAuth";
import CreatePost from "../components/CreatePosts";
import Profile from "../components/Profile";
import Message from "../components/Message";

function App() {
  const { token, user } = useAuth();
  console.log("token from app", token);
  console.log("user from app", user);
  return (
    <div className="app">
      <header className="head">
        <h2>STRANGER THINGS</h2>
        <h3 className="links">
          <Link to="/">HOME</Link>
          <Link to="/posts">POSTS</Link>
          <Link to="/create-posts">CREATE POSTS</Link>
          <Link to="/users/register">REGISTER</Link>
          <Link to="/users/me">PROFILE</Link>
        </h3>
      </header>

      <Routes>
        <Route path="/" element={<LoginForm />} />
        <Route path="/posts" element={<AllPosts />} />
        <Route path="/users/register" element={<RegisterForm />} />
        <Route path="/post/:postId/messages" element={<Message />} />
        <Route path="/create-posts" element={<CreatePost />} />
        <Route path="/users/me" element={<Profile />} />
      </Routes>
    </div>
  );
}

export default App;
