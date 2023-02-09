import React from 'react';

const Logo = ({ type = 'default' }) => {

    const imgName = {
        'default':'',
        'muted':'-muted'
    }

  return (
   
    <img
    src={`../images/logo${imgName[type]}.svg`}
    alt="Logo"
    />
  );
};

export default Logo;