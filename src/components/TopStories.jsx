import React, { useState, useEffect, Suspense, lazy } from 'react';

const Story = lazy(() => import('./Story'));

const TopStories = ({ topStories }) => {
  return (
    <div>
      <h1>Top Stories</h1>
      <Suspense fallback={<p id="loading">Loading...</p>}>
        {topStories.map((storyId) => {
          return <Story key={storyId} storyId={storyId} />;
        })}
      </Suspense>
    </div>
  );
};

export default TopStories;
