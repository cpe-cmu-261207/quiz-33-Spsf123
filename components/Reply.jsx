import React from "react";

export default function Reply(props) {
  return (
    <div>
      <div className="d-flex gap-2 my-2 ps-5">
        <img
          src="/profileImages/puppy.jpg"
          width="48"
          height="48"
          className="rounded-circle"
          style={{ objectFit: "cover" }}
        />
        <div
          className="rounded rounded-3 p-2"
          style={{ backgroundColor: "#3A3B3C" }}
        >
          <span className="fw-semibold">{props.data.username}</span>
          <br />
          <span>{props.data.replyText}</span>
          {props.data.likeNum > 0 && (
            <div className="d-flex align-items-center gap-1">
              <img src="/like.svg" width={20}></img>
              <span style={{ color: "#B0B3B8" }}>{props.data.likeNum}</span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
