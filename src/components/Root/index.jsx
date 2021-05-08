import React from 'react';
import { Heading } from '@shared/Header';
export const Root = () => {
  const msg = "Welcome to GitPet, it's time get swhfity";
  return (
    <>
      <Heading className="noselect">{msg}</Heading>
    </>
  );
};
