import React, { useState, useEffect } from 'react';
import { ProfileCard, UserAvatar as User } from '@components/ProfileCard';
import { ThreeDots as Loader } from '@shared/Loader';


import './style.scss';

export const Users = () => {
  const [loading, setLoading] = useState(false);
  const [users, setUsers] = useState<User[]>([]);
  const [data, setData] = useState<any>([])
  const handleClick = () => {
    fetch("../../../netlify/functions/hello")
    .then(data => setData(data))
    .catch(e => {console.error(e)})
    .finally(() => console.log(data))
  }
  useEffect(() => {
    setLoading(true);

  



  }, []);

  // refractor

  return (
    <>
      <div className="userContent">
        {loading ? (
          <div className="loader">
            <button onClick={handleClick}>Click me!</button>
            {/* <Loader /> */}
          </div>
        ) : (
          users.map((user, i) => <ProfileCard user={user} key={i} />)
        )}
      </div>
    </>
  );
};
