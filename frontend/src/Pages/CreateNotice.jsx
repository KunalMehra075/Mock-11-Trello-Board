import React, { useState } from "react";
import { Link } from "react-router-dom";
import BackendURL from "../Utils/BackendURL";

const CreateNotice = () => {
  const [Title, setTitle] = useState("");
  const [Author, setAuthor] = useState("");
  const [Description, setDescription] = useState("");
  const [Date, setDate] = useState("");

  const HandleCreate = (e) => {
    e.preventDefault();
    let notice = {
      authorName: Author,
      description: Description,
      title: Title,
      date: Date,
    };
    PostNewNotice(notice);
  };
  async function PostNewNotice(notice) {
    try {
      const res = await fetch(`${BackendURL}/notices/create`, {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify(notice),
      });
      const data = await res.json();
      console.log(data);
      alert(data.Message);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div className="FullHeight">
      <h1 className="PageHeads">Create A Notice</h1>
      <div className="flex">
        <Link to="/"> Home</Link>
        <Link to="/view"> View All Notices</Link>
      </div>
      <form onSubmit={HandleCreate}>
        <input
          type="text"
          onInput={(e) => setTitle(e.target.value)}
          placeholder="Enter Title"
          required
        />
        <br />
        <input
          type="text"
          onInput={(e) => setAuthor(e.target.value)}
          placeholder="Enter Author Name"
          required
        />
        <br />
        <input
          type="text"
          onInput={(e) => setDescription(e.target.value)}
          placeholder="Enter Description"
          required
        />
        <br />
        <input
          type="datetime-local"
          onInput={(e) => setDate(e.target.value)}
          placeholder="Enter Date"
        />
        <br />
        <input type="submit" value="Create the Notice" />
        <br />
      </form>
    </div>
  );
};

export default CreateNotice;
