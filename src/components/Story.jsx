import React, { useState, useEffect } from 'react';

const Story = ({ storyId }) => {
  const [story, setStory] = useState({});
  useEffect(() => {
    const options = {
      method: 'GET',
      headers: {
        'X-RapidAPI-Key': `MVw12zV5uwmshYeti4bHcL5FK4JPp11OLgvjsnnpXNFwvrknGP`,
        'X-RapidAPI-Host': `community-hacker-news-v1.p.rapidapi.com`,
      },
    };
    console.log(options);
    fetch(
      `https://community-hacker-news-v1.p.rapidapi.com/item/${storyId}.json?print=pretty`,
      options
    )
      .then((response) => response.json())
      .then((response) => setStory(response))
      .catch((err) => console.error(err));
  }, [storyId]);
  return (
    <p className="any">
      <a href={story.url} target="_blank">
        {story.title}
      </a>
    </p>
  );
};

export default Story;
