import React from "react";
import Comment from "./Comment";

export default function PostOwner(props) {
  return (
    <div>
      <div className="vstack gap-3">
        <div className="d-flex align-items-center gap-3">
          <img
            src="/profileImages/IMG_7174.JPG"
            width="48"
            height="48"
            className="rounded-circle"
            style={{ objectFit: "cover" }}
          />
          <span className="fw-semibold fs-5 text-white">
            Surapa Luangpiwdet 640612196
          </span>
        </div>
        <span className="text-white">
          Quiz ง่ายจังเลยครับ ขอยาก ๆ กว่านี้ได้ไหม #261207
        </span>
        <div className="d-flex align-items-center gap-1">
          <img src="/like.svg" width={20}></img>
          <span style={{ color: "#B0B3B8" }}>100 คน</span>
        </div>
        <hr className="m-0 border" />
        {props.comments.map((data) => {
          return <Comment data={data} />;
        })}
      </div>
    </div>
  );
}
