import React, { useState, useEffect, Suspense, lazy } from 'react';
import Story from './Story';

const TopStories = ({ topStories = [] }) => {
  return (
    <div>
      <h1>Top Stories</h1>

      {topStories.map((storyId) => {
        return <Story key={storyId} storyId={storyId} />;
      })}
    </div>
  );
};

export default TopStories;
