import React from 'react';
import { Wrapper } from '@shared/Wrapper';
import { MediaCard } from '@components/Feed/PostCard';
import { Container } from '@shared/Container';
import { Heading } from '@shared/Header';
import './feed.scss';

export const Feed = () => {
  return (
    // simulates map function.
    <>
      <Container>
        <Heading className="noselect">User Feeds</Heading>
        <Wrapper>
          <MediaCard /> <MediaCard />
          <MediaCard /> <MediaCard />
          <MediaCard /> <MediaCard />
          <MediaCard /> <MediaCard />
          <MediaCard /> <MediaCard />
          <MediaCard /> <MediaCard />
          <MediaCard /> <MediaCard />
          <MediaCard /> <MediaCard />
          <MediaCard /> <MediaCard />
          <MediaCard /> <MediaCard />
          <MediaCard /> <MediaCard />
          <MediaCard /> <MediaCard />
        </Wrapper>
      </Container>
    </>
  );
};
