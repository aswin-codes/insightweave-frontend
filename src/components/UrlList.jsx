// src/components/UrlList.js
import React from "react";

const UrlList = ({ urls }) => {
  return (
    <div className=" flex flex-column justify-center mt-5">
      <ul>
        {urls.map((url, index) => (
          <li key={index} className="text-white w-96 rounded-md py-2 bg-slate-700 my-2 text-center"><a href={url}>{url}</a></li>
        ))}
      </ul>
    </div>
  );
};

export default UrlList;
