import React, { useState, useEffect } from 'react';
import {
  ProfileCard,
  UserAvatar as User,
} from '@components/ProfileCard';
import { ThreeDots as Loader } from '@shared/Loader';

import './style.scss';

export const Users = () => {
  const [loading, setLoading] = useState(false);
  const [users, setUsers] = useState<User[]>([]);
<<<<<<< HEAD
  
  const handleClick = () => {
    fetch("/.netlify/functions/hello")
    .then(data => console.log(data))
    .catch(e => {console.error(e)})
    .finally(() => console.log("Finished"))
  }
=======

>>>>>>> 80c33e027f7c2003ddae8c5b837fad25420936f9
  useEffect(() => {
    setLoading(true);
  }, []);

  // refractor

  return (
    <>
      <div className="userContent">
        {loading ? (
          <div className="loader">
            <Loader />
          </div>
        ) : (
          users.map((user, i) => <ProfileCard user={user} key={i} />)
        )}
      </div>
    </>
  );
};
