---
layout: "../../layouts/BlogPost.astro"
title: "Vanilla JavaScript Carousel"
description: "Lets build Vanilla JavaScript Carousel"
pubDate: "Aug 23 2022"
heroImage: "/assets/Carousel-hero.png"
---

Let'd build a Carousel, its a very common pattern used in all the web applications.

So to get started we need to have a list of elements which we want our Carousel to have to slide over, we also need to add 2 buttons for left and right navigation

below is the html for adding the list of images

```html
<div id="app">
  <section>
    <div class="Carousel" data-Carousel>
       <button class="Carousel-button left" data-Carousel-button="prev">
        <
      </button>
      <button class="Carousel-button right" data-Carousel-button="next">
        >
      </button>
      <ul class="slides" data-slides>
        <li class="slide" data-active>
          <img
            src="https://loremflickr.com/600/600?random=1"
            loading="lazy"
            alt="slide image"
          />
        </li>
        <li class="slide">
          <img
            src="https://loremflickr.com/600/600?random=2"
            loading="lazy"
            alt="slide image"
          />
        </li>
        <li class="slide">
          <img
            src="https://loremflickr.com/600/600?random=3"
            loading="lazy"
            alt="slide image"
          />
        </li>
      </ul>
    </div>
  </section>
</div>
```

Below is the css for the same

```css
* *::after *::before {
  box-sizing: border-box;
}

body {
  margin: 0;
}

.Carousel {
  position: relative;
  height: 100vh;
  width: 100vw;
}

.Carousel button {
  font-size: 2rem;
  position: absolute;
  z-index: 9999;
  top: 50%;
  transform: translateY(-50%);
}

.Carousel-button {
  color: rgba(255, 255, 255, 0.5);
  background-color: rgba(0, 0, 0, 0.2);
  outline: none;
  border: none;
}

.Carousel-button:hover,
.Carousel-button:focus {
  background-color: rgba(0, 0, 0, 0.3);
}

.Carousel-button:focus {
  outline: solid black;
}

.Carousel-button.left {
  left: 1rem;
}

.Carousel-button.right {
  right: 1rem;
}

.Carousel > ul {
  margin: 0;
  padding: 0;
  list-style: none;
}

.slide {
  position: absolute;
  inset: 0;
  opacity: 0;
  transition: 200ms opacity ease-in-out;
  transition-delay: 200ms;
}

.slide[data-active] {
  opacity: 1;
  z-index: 1;
  transition-delay: 0ms;
}

.slide > img {
  display: block;
  height: 100%;
  width: 100%;
  object-fit: cover;
  object-position: center;
}

```

So our UI is ready now we have to write the JS to make it interactive and work accordingly. I have added some data attributes to the HTML, i have added it to make it easy to work with JavaScript

below is the JS

```js
// Import stylesheets
import './style.css';

const CarouselButtons = document.querySelectorAll('[data-Carousel-button]');

CarouselButtons.forEach((button) => {
  button.addEventListener('click', () => {
    const offSet = button.dataset.CarouselButton === 'prev' ? -1 : 1;
    const slides = button
      .closest('[data-Carousel]')
      .querySelector('[data-slides]');

    const activeSlide = slides.querySelector('[data-active]');
    let newIndex = [...slides.children].indexOf(activeSlide) + offSet;

    if (newIndex < 0) newIndex = slides.children.length - 1;
    if (newIndex > slides.children.length - 1) newIndex = 0;

    slides.children[newIndex].dataset.active = true;
    delete activeSlide.dataset.active;
  });
});
```
