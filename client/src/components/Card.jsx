import React, { useState } from "react";
import { download } from "../assets";
import { downloadImage } from "../utils";
import DeleteIcon from "@mui/icons-material/Delete";
import { useNavigate } from "react-router-dom";
// const BASE_URL = process.env.BASE_URL;
import { Link } from "react-router-dom";
function Card({ _id, name, prompt, photo }) {
  const navigate = useNavigate;
  const deletePost = async (id) => {
    let result = await fetch(`http://localhost:8080/api/v1/post/${id}`, {
      method: "DELETE",
    });
    result = await result.json();
    if (result) {
      alert("Photo deleted successfully!");
      window.location.reload();
    }
  };
  const [postId, setPostId] = useState("");
  return (
    <div className="rounded-xl group relative shadow-card hover:shadow-cardhover card">
      <Link to={`/single/${_id}`}>
        <img
          src={photo}
          className="w-full h-auto object-cover rounded-xl"
          alt={prompt}
        />
      </Link>
      <div className="group-hover:flex overflow-y-auto flex-col max-h-[94.5%] hidden absolute bottom-0 left-0 right-0 bg-[#10131f] rounded-md m-2 p-4 text-white">
        <h3>What is this about?</h3>
        {prompt}
        <div className="mt-5 flex justify-between items-center gap-2 ">
          <div className="flex items-center gap-2 ">
            <div className="w-7 h-7 rounded-full object-cover bg-green-700 flex justify-center  text-xs items-center">
              {name[0]}
            </div>
            <p className="text-white text-sm">{name}</p>
          </div>
          <div className="flex flex-row gap-4 ">
            <button type="button" onClick={() => deletePost(_id)}>
              <DeleteIcon />
            </button>
            <button
              type="button"
              onClick={() => downloadImage(_id, photo)}
              className="outline-none bg-transparent border-none"
            >
              {" "}
              <img
                src={download}
                className="w-6 h-6 object-cover bg-white rounded-full"
              />{" "}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
