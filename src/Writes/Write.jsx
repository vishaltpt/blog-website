import React, { useState } from "react";
import "./Write.css";
import Topbar from "../Topbar/Topbar";

export default function Write() {
  const [selectedImage, setSelectedImage] = useState(null);

  const handleImageChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      setSelectedImage(URL.createObjectURL(e.target.files[0]));
    }
  };

  return (
   <> 
   <Topbar/>
    <div className="font">
      <div className="write">
        <form className="writeForm">
          <label htmlFor="fileInput">
            <h1 className="xx">Create your own story</h1>
            <div className="mm">
              {selectedImage ? (
                <img src={selectedImage} alt="Selected" className="writeIcon" />
              ) : (
                <i className="fas fa-plus plusIcon"></i>
              )}
            </div>
          </label>
          <input
            id="fileInput"
            type="file"
            style={{ display: "none" }}
            onChange={handleImageChange}
          />
          <div className="writeFormGroup">
            <input
              className="writeInput"
              placeholder="Title"
              type="text"
              autoFocus={true}
            />
          </div>
          <div className="writeFormGroup">
            <textarea
              className="writeInput writeText"
              placeholder="Tell your story..."
              type="text"
            />
          </div>
          <button className="writeSubmit" type="submit">
            Publish
          </button>
        </form>
      </div>
    </div>
    </>
  );
}
