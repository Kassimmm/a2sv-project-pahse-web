import React from 'react';
import Avatar from './Avatar';
import Info from './Info';
import SocialLinks from './SocialLinks';

// Card component to display user profile
const Card = ({ user }) => {
    return (
      <div className="card">
        <Avatar />
        <Info user={user} />
        <SocialLinks links={user.socialLinks} />
      </div>
    );
  };

export default Card;





