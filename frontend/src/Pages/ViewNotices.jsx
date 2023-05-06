import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Loading from "../Components/Loading";
import NoticeCard from "../Components/NoticeCard";
import BackendURL from "../Utils/BackendURL";

const ViewNotices = () => {
  const navigate = useNavigate();
  const [loading, setloading] = useState(true);
  const [Notices, setNotices] = useState([]);

  let GetAllNotices = async () => {
    try {
      let res = await fetch(`${BackendURL}/notices`);
      let data = await res.json();
      setNotices(data.Data);
      setloading(false);
    } catch (error) {
      console.log(error);
    }
  };
  let DeleteNotice = async (id) => {
    setloading(true);
    try {
      let res = await fetch(`${BackendURL}/notices/${id}`, {
        method: "DELETE",
        headers: {
          "Content-type": "application/json",
        },
      });
      let data = await res.json();
      alert(`${data.Message}`);
      GetAllNotices();
    } catch (error) {
      console.log(error);
    }
  };
  let EditNotice = (id) => {
    localStorage.setItem("EditID", id);
    navigate("/edit");
  };
  useEffect(() => {
    let mounted = true;
    if (mounted) {
      GetAllNotices();
    } else {
      setloading(true);
    }
    return () => {
      mounted = false;
    };
  }, []);

  return loading ? (
    <Loading />
  ) : (
    <div className="FullHeight">
      <div className="BigBox">
        <h1 className="PageHeads">All The Notices</h1>
        <div className="flex">
          <Link to="/">Home</Link>
          <Link to="/create">Create A Notice</Link>
        </div>

        <div className="NoticeContainer">
          {Notices.map((item) => (
            <NoticeCard
              key={item._id + "23d"}
              Notice={item}
              DeleteNotice={DeleteNotice}
              EditNotice={EditNotice}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ViewNotices;
