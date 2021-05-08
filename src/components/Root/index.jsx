import React from 'react';
import { Heading } from '@shared/Header';
export const Root = () => {
  const msg = "Welcome to Skoozle's TEST Web page.";
  return (
    <>
      <Heading className="noselect">{msg}</Heading>
    </>
  );
};
