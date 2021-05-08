import React from 'react';
import { Avatar } from '@shared/Avatar';

import './profilecard.scss';

export type ProfileProps = {
  user: UserAvatar;
};

export type UserAvatar = {
  email: string;
  firstName: string;
  id?: string;
  lastName: string;
  picture: string;
  title: string;
};

export const ProfileCard = (props: ProfileProps) => {
  const { user } = props;
  return (
    <>
      <div className="profilecard">
        <Avatar link={user.picture} />
        <div className="fullinfo">{`${user.firstName} ${user.lastName}`}</div>
        <div className="email">{user.email}</div>
      </div>
    </>
  );
};
