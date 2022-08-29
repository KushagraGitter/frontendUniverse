import React, { useState, useEffect, Suspense } from 'react';

const TopStories = () => {
  const [topStoriesId, setTopStoriesId] = useState([]);
  useEffect(() => {
    const options = {
      method: 'GET',
      headers: {
        'X-RapidAPI-Key': 'MVw12zV5uwmshYeti4bHcL5FK4JPp11OLgvjsnnpXNFwvrknGP',
        'X-RapidAPI-Host': 'community-hacker-news-v1.p.rapidapi.com',
      },
    };

    fetch(
      'https://community-hacker-news-v1.p.rapidapi.com/topstories.json?print=pretty',
      options
    )
      .then((response) => response.json())
      .then((response) => setTopStoriesId(response))
      .catch((err) => console.error(err));
  }, []);
  return (
    <div>
      <h1>Top Stories</h1>

      {topStoriesId.map((storyId) => {
        return (
          <Suspense fallback="..loading">
            <Story key={storyId} storyId={storyId} />{' '}
          </Suspense>
        );
      })}
    </div>
  );
};

const Story = ({ storyId }) => {
  const [story, setStory] = useState({});
  useEffect(() => {
    const options = {
      method: 'GET',
      headers: {
        'X-RapidAPI-Key': 'MVw12zV5uwmshYeti4bHcL5FK4JPp11OLgvjsnnpXNFwvrknGP',
        'X-RapidAPI-Host': 'community-hacker-news-v1.p.rapidapi.com',
      },
    };

    fetch(
      `https://community-hacker-news-v1.p.rapidapi.com/item/${storyId}.json?print=pretty`,
      options
    )
      .then((response) => response.json())
      .then((response) => setStory(response))
      .catch((err) => console.error(err));
  }, [storyId]);
  return (
    <p>
      <a href={story.url} target="_blank">
        {story.title}
      </a>
    </p>
  );
};

export default TopStories;
