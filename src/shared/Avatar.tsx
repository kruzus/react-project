import React from 'react';

type AvatarProp = {
  link: string;
};

export const Avatar = (props: AvatarProp) => {
  return (
    <>
      <img className="avatar" alt="avatar" src={props.link} />
    </>
  );
};
