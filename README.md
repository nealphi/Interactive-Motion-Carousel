# Interactive Motion Carousel

**Interactive Motion Carousel** is a React component that showcases items (such as GitHub repositories) in a smooth, continuously scrolling carousel. Built with Framer Motion for fluid animations and styled using Tailwind CSS, this component dynamically adjusts its scroll speed based on user interaction, creating an engaging and interactive experience.

## Features

- **Smooth Infinite Scrolling**: The carousel continuously scrolls through items, providing a seamless browsing experience.
- **Speed Control on Hover**: Hovering over the carousel slows down the scroll speed, allowing users to interact and focus on specific items. When the hover ends, the speed returns to its default faster pace.
- **Responsive Design**: Tailwind CSS ensures that the carousel adapts beautifully to different screen sizes, maintaining usability on both mobile and desktop devices.
- **Customizable Animation Durations**: Easily adjust the scrolling speed in the code to fine-tune the animation's speed when hovering.
- **Reusable and Extendable**: Built as a modular React component, this carousel can easily integrate into other projects and be customized for various use cases.

## Technologies Used

- **React**: For building the component and managing state.
- **Framer Motion**: To create smooth animations and control hover effects.
- **Tailwind CSS**: For styling, ensuring the component is responsive and easily customizable.

## Getting Started

Follow these steps to set up and run the project locally.

### Prerequisites

Ensure you have the following installed:
- Node.js
- npm or yarn

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/interactive-motion-carousel.git

2. Navigate to the project directory:
   ```bash
    cd interactive-motion-carousel

3. Install dependencies:
   ```bash
    npm install

### Usage
To start the development server and view the component:
```bash
    yarn start
``` 

### Code Overview
The main component, GitHubShowcase, uses Framer Motion to control the animation of the carousel and Tailwind CSS for styling. Here’s a breakdown of the core functionality:

- Animation Control: The xTranslation value (from Framer Motion) manages the horizontal position of the carousel. When the component mounts, an infinite scrolling animation is triggered.
- Hover Effect: On hover, the animation speed slows down. This is achieved by setting a slower duration and changing the mustFinish state to allow the scroll to complete naturally.
- Responsive Styling: Tailwind CSS is used for styling classes, including utility classes for managing layout and spacing.

### Customization
You can easily adjust the scrolling speeds by changing these constants:

```javascript
const FAST_DURATION = 30; // Default speed
const SLOW_DURATION = 75; // Speed on hover
```
Modify these values to control how fast or slow the carousel scrolls.

### Example Code Snippet
Here is a quick look at how the hover effect is implemented:

```javascript
<motion.div
  className="flex gap-4 left-0"
  style={{ width: "fit-content", x: xTranslation }}
  ref={ref}
  onHoverStart={() => {
    setMustFinish(true);
    setDuration(SLOW_DURATION);
  }}
  onHoverEnd={() => {
    setMustFinish(true);
    setDuration(FAST_DURATION);
  }}
>
  {[...repositories, ...repositories].map((repo, index) => (
    <RepoCard repo={repo} index={index} />
  ))}
</motion.div>
```
