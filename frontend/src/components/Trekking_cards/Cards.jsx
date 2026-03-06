import React from 'react'
import Cards from "./Cards.css"
  import adventure from "../assets/adventure.jpg";
  import culture from "../assets/culture.jpg";
  import trekking from "../assets/Trekking.jpg";
  import baliPassCamp from "../assets/bali_pass.jpg";
  import everest_base_camp from "../assets/everest_base_camp.jpg";
  import frndship from "../assets/friendship_peak.jpg";

const Cards = ({heading}) => {

    const items = [
              {
                image: adventure,
                title: "Adventure",
                description: "Thrilling expeditions for the bold explorer."
              },
              {
                image: culture,
                title: "Cultural Immersion",
                description: "Dive deep into local traditions and heritage."
              },
              {
                image: trekking,
                title: "Trekking",
                description: "Epic trails through the world's most stunning landscapes."
              },
              {
                image: baliPassCamp,
                title: "cmp_Adventure",
                description: "Thrilling expeditions for the bold explorer."
              },
              {
                image: everest_base_camp,
                title: "everest_base_camp",
                description: "Dive deep into local traditions and heritage."
              },
              {
                image: frndship,
                title: "Trekking",
                description: "Epic trails through the world's most stunning landscapes."
              }
            ];
  const cardsRef = useRef([]);
  
      useEffect(() => {
  
          const observer = new IntersectionObserver(
  
              (entries) => {
  
                  entries.forEach((entry) => {
  
                      if (entry.isIntersecting) {
                          entry.target.classList.add("show");
                          observer.unobserve(entry.target);
                      }
                  });
              },
              { threshold: .2 }
          );
  
          cardsRef.current.forEach((card) => {
              if (card) observer.observe(card);
          });
  
          return () => observer.disconnect();
      }, [items]);
  
      return (
          <section className="explore-theme container">
              <h2>{heading}</h2>
              <div className="theme-grid">
                  {items.map(( theme, index) => (
                      <div
                          key={index}
                          className="theme-card"
                          ref={(el) => cardsRef.current[index] = el}
                      >
                          <img src={theme.image} alt={theme.title} />
                          <h3>{theme.title}</h3>
                          <p>{theme.description}</p>
                      </div>
                  ))}
  
              </div>
  
          </section>
  
      );
}

export default Cards
