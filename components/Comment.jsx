import React from "react";
import Reply from "./Reply";

export default function Comment(props) {
  console.log(props);
  return (
    <div>
      {/* Entire Comment div */}
      <div>
        <div className="d-flex gap-2 my-2">
          <img
            src={props.data.userImagePath}
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
            <span>{props.data.commentText}</span>
            {props.data.likeNum > 0 && (
              <div className="d-flex align-items-center gap-1">
                <img src="/like.svg" width={20}></img>
                <span style={{ color: "#B0B3B8" }}>{props.data.likeNum}</span>
              </div>
            )}
          </div>
        </div>
      </div>

      {/*render Reply here... */}
      {props.data.replies.map((el, idx) => (
        <Reply data={el} key={idx} />
      ))}
    </div>
  );
}
