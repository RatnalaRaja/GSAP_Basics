# GSAP Animation Example

This example demonstrates a sequence of animations using GSAP (GreenSock Animation Platform).

## Navigation Header Animation

- Targets all `<h3>` elements within a `.nav` class.
- Animates from 50 pixels above with a fade-in effect.
- Duration: 0.8 seconds.
- Delay: 0.4 seconds.
- Stagger: 0.4 seconds.

## Main Header Animation

- Targets all `<h1>` elements within a `.main` class.
- Animates from 500 pixels to the left with a fade-in effect.
- Duration: 0.8 seconds.
- Stagger: 0.6 seconds.

## Image Animation

- Targets all `<img>` elements.
- Animates from 100 pixels to the right, with a 45-degree rotation and fade-in effect.
- Duration: 0.5 seconds.
- Stagger: 0.5 seconds.

![Insert an image here](Gsap_basics/image.png)

=======================================================================================================================================================
# GSAP Animations with ScrollTrigger

This document provides a description of the GSAP animations applied to elements with the ID `#circle` within different pages (`.page1`, `.page2`, `.page3`). The animations include scaling, rotating, and triggering based on scroll position.

## Animation Description

### Common Properties
All animations share the following properties:
- **Duration**: 2 seconds
- **Scale**: Starts from 0 and scales up to the original size.
- **Rotation**: Rotates 720 degrees.

### Page 1 Animation
- This animation is applied to the `#circle` element within `.page1`.
- The animation starts immediately when the page loads.

### Page 2 Animation with ScrollTrigger Configuration
- This animation is also applied to the `#circle` element within `.page2`.
- **ScrollTrigger Configuration**:
  - **trigger**: Specifies the element that triggers the animation (`.page2 #circle`).
  - **scroller**: Specifies the scrolling container (`body`).
  - **markers**: Adds markers to visualize the start and end points of the trigger (set to `true`).
  - **start**: Defines the start position of the trigger (when the top of the trigger element is at 60% of the viewport height).
  - **end**: Defines the end position of the trigger (when the top of the trigger element is at 30% of the viewport height).
  - **scrub**: Synchronizes the animation with the scroll position (set to 2 seconds).
=============================================================================================================
# Locomotive Js 
- [Locomotive JS --For Smooth Scrolling](https://locomotivemtl.github.io/locomotive-scroll/)
- Locomotive Scroll is a JavaScript library that creates smooth scrolling effects on web pages. It enables programmers to produce visual effects where different elements on a page scroll at different rates to give the impression of depth and dimension.

  # Smooth Scrolling Using Locomotive Scroll

To implement smooth scrolling using Locomotive Scroll, you can use the following JavaScript code:

```javascript
const locoScroll = new LocomotiveScroll({
    el: document.querySelector("#main"),
    smooth: true,
});
```
=============================================================================================

# Text Splitter and Animation

```javascript
function textsplitter() {
            var allelements = document.querySelectorAll("#page2 h1");
            
            allelements.forEach(function(allelement) {
                var h1text = allelement.textContent;
                var splitter = h1text.split("");
                var clut = "";
                splitter.forEach(function(e) {
                    clut += `<span>${e}</span>`;
                });
                allelement.innerHTML = clut;
            });
        }

        function gsapAni() {
            gsap.to("#page2 h1 span", {
                color: "#e3e3c4",
                stagger: 0.1,
                scrollTrigger: {
                    trigger: "#page2 h1",
                    scroller: "#main",
                    start: "top 50%",
                    end: "top -10%",
                    scrub: 2,
                }
            });
        }
```

## JavaScript Functions

### `textsplitter` Function

- **Purpose:** The `textsplitter` function splits the text content of each `<h1>` inside `#page2` into individual characters and wraps each character in a `<span>` tag.
- **Process:**
  1. Select all `<h1>` elements inside `#page2` using `document.querySelectorAll`.
  2. Iterate over each selected `<h1>` element.
  3. Get the text content of the `<h1>` element.
  4. Split the text content into an array of individual characters.
  5. Wrap each character in a `<span>` tag.
  6. Replace the original text content of the `<h1>` element with the new HTML containing the wrapped characters.

### `gsapAni` Function

- **Purpose:** The `gsapAni` function uses GSAP to animate the color of the characters inside `<span>` tags when they come into view while scrolling.
- **Process:**
  1. Use GSAP's `gsap.to` method to target all `<span>` elements inside `<h1>` tags within `#page2`.
  2. Change the color of each `<span>` to `#e3e3c4`.
  3. Apply a stagger effect to the animation, so each character animates with a slight delay.
  4. Use ScrollTrigger to animate the characters based on the scroll position, with settings to control the animation's start, end, and scrubbing behavior.
============================================================================ 
