import React from "react";

const NoticeCard = ({ Notice, DeleteNotice, EditNotice }) => {
  return (
    <div key={Notice._id + "sdf"} className="NoticeCard">
      <h1>{Notice.title}</h1>
      <h3>{Notice.date}</h3>
      <p>{Notice.description}</p>
      <p>- {Notice.authorName}</p>
      <div className="flex">
        <button
          onClick={(e) => EditNotice(e.target.dataset.id)}
          data-id={Notice._id}
        >
          Edit
        </button>
        <button
          onClick={(e) => DeleteNotice(e.target.dataset.id)}
          data-id={Notice._id}
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default NoticeCard;
