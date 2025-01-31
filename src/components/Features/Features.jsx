import React from "react";
import defaultImage from "../../assets/default-img.png";

const boxContent = (title, content, img) => {
  return (
    <div className="bg-white text-black p-5 m-4 rounded-lg shadow-xl ring-gray-900/5 border-1 border-gray-300 flex flex-col items-center w-70">
      <img src={img} className="h-60 py-5" alt="image" />
      <div className="flex flex-col items-center">
        <h3 className="font-bold text-xl ">{title}</h3>
        <p className="text-center">{content}</p>
      </div>
    </div>
  );
};

const Features = () => {
  return (
    <main className="flex justify-center flex-col md:flex-row py-20 items-center">
      <div className="flex flex-col items-center">
        <h1 className="text-4xl font-bold mb-10 text-blue-500">Features</h1>
        <div className="flex grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
          {boxContent(
            "Feature 1",
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
            defaultImage
          )}

          {boxContent(
            "Feature 2",
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
            defaultImage
          )}

          {boxContent(
            "Feature 3",
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
            defaultImage
          )}
        </div>
      </div>
    </main>
  );
};

export default Features;
