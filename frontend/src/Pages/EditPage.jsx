import React, { useEffect, useState } from "react";
import BackendURL from "../Utils/BackendURL";
import { useNavigate } from "react-router-dom";

const EditPage = () => {
  const navigate = useNavigate();
  const [Notice, setNotice] = useState({});
  let EditID = localStorage.getItem("EditID");
  const [authorName, setauthorName] = useState("");
  const [title, settitle] = useState("");
  const [description, setdescription] = useState("");
  const [date, setdate] = useState("");

  async function GetNoticeById(EditID) {
    try {
      let res = await fetch(`${BackendURL}/notices/${EditID}`);
      let data = await res.json();
      setNotice(data.Notice);

      setdate(data.date);
      setauthorName(data.authorName);
      settitle(data.title);
      setdescription(data.description);

      console.log(Notice);
    } catch (error) {
      console.log(error);
    }
  }
  let HandleEditSubmit = (e) => {
    e.preventDefault();
    let payload = {
      authorName,
      title,
      description,
      date,
    };
    FetchEditReq(EditID, payload);
  };
  async function FetchEditReq(id, payload) {
    try {
      let res = await fetch(`${BackendURL}/notices/${id}`, {
        method: "PATCH",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify(payload),
      });
      let data = await res.json();
      console.log(data);
      alert(data.Message);
      setTimeout(() => {
        navigate("/view");
      }, 900);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    let mounted = true;
    if (mounted) {
      GetNoticeById(EditID);
    }
    return () => {
      mounted = false;
    };
  }, []);

  return (
    <div className="EditPage FullHeight">
      <form onSubmit={HandleEditSubmit}>
        <h1>Editing A Notice</h1>
        <input
          onInput={(e) => settitle(e.target.value)}
          type="text"
          defaultValue={Notice.title}
          placeholder="Enter Title"
        />
        <br />
        <input
          onInput={(e) => setauthorName(e.target.value)}
          type="text"
          defaultValue={Notice.authorName}
          placeholder="Enter Author"
        />
        <br />
        <input
          onInput={(e) => setdescription(e.target.value)}
          type="text"
          defaultValue={Notice.description}
          placeholder="Enter Description"
        />
        <br />
        <input
          onInput={(e) => setdate(e.target.value)}
          type="datetime-local"
          placeholder="Enter Date"
        />
        <br />
        <input type="submit" value="Save The Notice" />
      </form>
    </div>
  );
};

export default EditPage;
