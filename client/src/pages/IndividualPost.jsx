import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Spinner from "../components/Spinner";
import { downloadImage } from "../utils";
import { download } from "../assets";

const IndividualPost = () => {
  const [currentPost, setCurrentPost] = useState(null);
  const params = useParams();

  useEffect(() => {
    const fetchAllPosts = async () => {
      try {
        const response = await fetch(
          `http://localhost:8080/api/v1/single/${params._id}`,
          {
            method: "GET",
            headers: { "Content-Type": "application/json" },
          }
        );
        if (response.ok) {
          const result = await response.json();
          setCurrentPost(result.data);
        }
      } catch (error) {
        alert(error);
      }
    };
    fetchAllPosts();
  }, [params._id]);

  return (
    <>
      <section className="flex justify-center items-center">
        {!currentPost ? <Spinner /> : ""}
      </section>
      {!currentPost ? (
        ""
      ) : (
        <div className=" flex justify-evenly ">
          <div className="flex-col justify-center items-center">
            <img
              alt={currentPost !== null && currentPost.prompt}
              className=" h-[600px] w-[600px] object-cover"
              src={currentPost !== null && currentPost.photo}
            />
            <p className="flex justify-center text-xl ">
              This photo was posted by
              <span className=" font-bold text-2xl ml-2 text-[#3d3d3d]">
                {currentPost !== null && currentPost.name}
              </span>
            </p>
          </div>
          <div>
            <h1 className="text-4xl text-red-800 ">
              What is this AI generated image about?
            </h1>
            <span className="mt-10 text-2xl text-blue-600 ">
              {currentPost !== null && currentPost.prompt}
            </span>
          </div>{" "}
          <img
            onClick={() => downloadImage(currentPost._id, currentPost.photo)}
            src={download}
            className="w-6 h-6 object-cover bg-white rounded-full cursor-pointer"
          />
        </div>
      )}
    </>
  );
};

export default IndividualPost;
