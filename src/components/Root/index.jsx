import React from 'react';
import { Heading } from '@shared/Header';
export const Root = () => {

  const messages = [
    "Welcome 👋!",
     "This is a simple React project!",
     "Learning React by doing things.",
     "sample text",
     "ようこそ 🙂",

  ]



  return (
    <>
      <Heading className="noselect">
      {
        messages[ Math.floor(Math.random() * messages.length) ]
      }
    
      </Heading>
    </>
  );
};
