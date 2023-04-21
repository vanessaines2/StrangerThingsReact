import { useState } from "react";
import React from "react";
import { createPost } from "../API/api";
import { useAuth } from "../hooks/useAuth";
import { Link } from "react-router-dom";

export default function CreatePost() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const { token } = useAuth();
  return (
    <div>
      <h1>Create Posts</h1>
      <form
        onSubmit={async (e) => {
          e.preventDefault();
          await createPost(title, description, price, token);
        }}
      >
        <label>Title</label>
        <input
          type="text"
          value={title}
          onChange={(event) => setTitle(event.target.value)}
        />
        <label>Description:</label>
        <input
          type="text"
          value={description}
          onChange={(event) => setDescription(event.target.value)}
        />
        <label>Price:</label>
        <input
          type="text"
          value={price}
          onChange={(event) => setPrice(event.target.value)}
        />
        <button type="submit">Create Post</button>
      </form>
    </div>
  );
}