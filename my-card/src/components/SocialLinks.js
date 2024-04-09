import React from 'react';

const SocialLinks = ({ links }) => {
  return (
    <div className="social-links">
      {links.map((link, index) => (
        <a key={index} href={link.url} target="_blank" rel="noopener noreferrer">
          {link.name}
        </a>
      ))}
    </div>
  );
};

export default SocialLinks;
