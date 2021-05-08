import React from 'react';

type AvatarMiniProp = {
  picture: string;
  firstName: string;
  lastName: string;
  email: string;
};

type AvatarProp = {
  user: AvatarMiniProp;
};

export const AvatarSmall = (props: AvatarProp) => {
  const user = props.user;
  return (
    <>
      <div className="tiny">
        <img draggable="false" src={user.picture} />
        <span className="name">{`${user.firstName} ${user.lastName}`}</span>
        <span className="email">${user.email}</span>
      </div>
    </>
  );
};
