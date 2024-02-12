import React from "react";
import { FaCamera } from 'react-icons/fa';

const About = () => {
  const [profilePicture, setProfilePicture] = React.useState(
    "logo192.png"
  );
  

  const handlePictureChange = (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();

    reader.onloadend = () => {
      setProfilePicture(reader.result);
    };

    if (file) {
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="bg-gray-100 p-4 rounded-md shadow-md w-72 h-screen mx-auto">
      <div className="flex items-center mb-4">
        <img
          src={profilePicture}
          alt="Profile"
          className="w-16 h-16 rounded-full object-cover mr-4"
        />
        <label
          htmlFor="profile-picture"
          className="cursor-pointer bg-blue-500 text-white py-1 px-3 rounded-md hover:bg-blue-600 relative"
        >
          <FaCamera/>
          <input
            type="file"
            id="profile-picture"
            accept="image/*"
            className="hidden"
            onChange={handlePictureChange}
          />
        </label>
      </div>
        <div>
          <h1 className="text-2xl font-bold mb-2">Marry Doe</h1>
          <p className="text-gray-600 mb-4">Marry@Gmail.Com</p>
        </div>
      <p className="text-gray-800">
        Lorem Ipsum Dolor Sit Amet, consetetur sadipscing Elitr, sed diam nonumy
        eirmod Tempor invidunt ut Labore Et Dolore magna aliquyam erat, sed Diam
      </p>
    </div>
  );
};

export default About;
