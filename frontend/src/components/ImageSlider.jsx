// This is the ImageSlider component for the TravelX website, displaying a rotating slideshow of travel images. Connected to src/components/Home.jsx for inclusion, and src/style.css for styling.
import { useEffect, useState } from "react" // Imports useEffect and useState hooks from React for state management and side effects. Connected to React library.

const images = [ // Array of image URLs for the slider, sourced from Unsplash for travel photos.
  "https://images.unsplash.com/photo-1507525428034-b723cf961d3e", // First image URL.
  "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee", // Second image URL.
  "https://images.unsplash.com/photo-1493558103817-58b2924bce98" // Third image URL.
]

export default function ImageSlider() { // Defines and exports the ImageSlider function component, which renders the image slider. Connected to src/components/Home.jsx for use.
  const [current, setCurrent] = useState(0) // State hook for current image index, initialized to 0. Manages which image is displayed.

  useEffect(() => { // Effect hook to set up the image rotation interval when component mounts.
    const interval = setInterval(() => { // Sets up an interval to change images every 3 seconds.
      setCurrent((prev) => (prev + 1) % images.length) // Updates current index to next image, looping back to 0 when reaching end.
    }, 3000) // Interval duration in milliseconds.
    return () => clearInterval(interval) // Cleanup function to clear interval when component unmounts.
  }, []) // Empty dependency array means effect runs only once on mount.

  return ( // Returns the JSX structure for the slider.
    <div className="slider">
      <img src={images[current]} alt="travel" /> 
    </div> // Closes slider div.
  ) // Closes return statement.
} // Closes ImageSlider function.
