import React from 'react';
import avatarImage from './avatar.jpeg';

// Avatar component (can be extended to display user's avatar)
const Avatar = () => {
    return (
      <div className="avatar">
        <img src={avatarImage} alt="User Avatar" />
      </div>
    );
  };

export default Avatar;




