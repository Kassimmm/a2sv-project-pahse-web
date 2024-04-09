import React from 'react';

// Info component to display user's name, bio, and website
const Info = ({ user }) => {
  return (
    <div className="info">
      <h2>{user.name}</h2>
      <p>{user.bio}</p>
      <div className="web">
        {user.website && <a href={user.website}>Website</a>}
      </div>
    </div>
  );
};

export default Info;
