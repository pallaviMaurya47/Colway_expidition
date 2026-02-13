import { Link } from "react-router-dom";
import ImageSlider from "./ImageSlider";

export default function Home() {
  return (
    <>
      <div className="hero">
        <div className="overlay">
          <h1>Discover Extraordinary Journeys</h1>
          <p>
            Embark on unparalleled adventures crafted for the discerning
            traveler.
          </p>
          <Link to= "/enquire"><button>Start Your Journey</button></Link>
        </div>
      </div>

      <section className="explore-theme container">
        <h2>Explore by Theme</h2>
        <div className="theme-grid">
          <div className="theme-card">
            <img
              src="https://images.unsplash.com/photo-1549144511-f099e773c147?auto=format&fit=crop&w=1974&q=80"
              alt="Adventure"
            />
            <h3>Adventure</h3>
            <p>Thrilling expeditions for the bold explorer.</p>
          </div>

          <div className="theme-card">
            <img
              src="https://images.unsplash.com/photo-1549144511-f099e773c147?auto=format&fit=crop&w=1974&q=80"
              alt="Culture"
            />
            <h3>Cultural Immersion</h3>
            <p>Dive deep into local traditions and heritage.</p>
          </div>

          <div className="theme-card">
            <img
              src="https://images.unsplash.com/photo-1571896349842-33c89424de2d?auto=format&fit=crop&w=2070&q=80"
              alt="Luxury"
            />
            <h3>Luxury Retreats</h3>
            <p>Indulge in opulent experiences and relaxation.</p>
          </div>

          <div className="theme-card">
            <img
              src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?auto=format&fit=crop&w=2070&q=80"
              alt="Mountain"
            />
            <h3>Mountain Expeditions</h3>
            <p>Conquer peaks and embrace the wilderness.</p>
          </div>
        </div>
      </section>

      <section className="why-choose-us container">
        <h2>Why Travelers Choose Us</h2>
        <div className="reasons-grid">
          <div className="reason-card">
            <div className="icon">🏆</div>
            <h3>Expertise</h3>
            <p>Over 20 years of crafting bespoke travel experiences.</p>
          </div>

          <div className="reason-card">
            <div className="icon">🌟</div>
            <h3>Personalization</h3>
            <p>Tailored itineraries designed just for you.</p>
          </div>

          <div className="reason-card">
            <div className="icon">🛡️</div>
            <h3>Safety & Security</h3>
            <p>24/7 support and comprehensive travel insurance.</p>
          </div>

          <div className="reason-card">
            <div className="icon">💎</div>
            <h3>Exclusive Access</h3>
            <p>Access to private events and VIP experiences.</p>
          </div>
        </div>
      </section>

      <section className="featured-destinations container">
        <h2>Featured Destinations</h2>
        <div className="destinations-grid">
          <div className="destination-card">
            <img
              src="https://images.unsplash.com/photo-1571896349842-33c89424de2d?auto=format&fit=crop&w=2070&q=80"
              alt="Swiss Alps"
            />
            <h3>Swiss Alps, Switzerland</h3>
            <p>Majestic peaks and pristine alpine landscapes.</p>
          </div>

          <div className="destination-card">
            <img
              src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?auto=format&fit=crop&w=2070&q=80"
              alt="Rocky Mountains"
            />
            <h3>Rocky Mountains, Canada</h3>
            <p>Towering summits and crystal-clear lakes.</p>
          </div>

          <div className="destination-card">
            <img
              src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=2070&q=80"
              alt="Himalayas"
            />
            <h3>Himalayas, Nepal</h3>
            <p>Spiritual journeys to the roof of the world.</p>
          </div>

          <div className="destination-card">
            <img
              src="https://images.unsplash.com/photo-1549144511-f099e773c147?auto=format&fit=crop&w=1974&q=80"
              alt="Patagonia"
            />
            <h3>Patagonia, Chile</h3>
            <p>Wild windswept landscapes and glaciers.</p>
          </div>
        </div>
      </section>

      <section className="stories container">

      <h2>Stories From Travelers</h2>
      <div className="stories-slider">
        <div className="stories-track">
          <div className="story-card">
            <img
              src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d"
              alt="Traveler"
            />
            <p>
              "An unforgettable journey that exceeded all expectations. The
              attention to detail was impeccable."
            </p>
            <cite>- Sarah Johnson</cite>
          </div>

          <div className="story-card">
            <img
              src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e"
              alt="Traveler"
            />
            <p>
              "From the moment we booked to our return home, every aspect was
              handled with professionalism and care."
            </p>
            <cite>- Michael Chen</cite>
          </div>

          <div className="story-card">
            <img
              src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d"
              alt="Traveler"
            />
            <p>
              "The mountain expedition was life-changing. Every moment was
              filled with awe and wonder."
            </p>
            <cite>- Emma Rodriguez</cite>
          </div>

          <div className="story-card">
            <img
              src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e"
              alt="Traveler"
            />
            <p>
              "Professional, luxurious, and truly memorable. This is how travel
              should be."
            </p>
            <cite>- David Kim</cite>
          </div>

          <div className="story-card">
            <img
              src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d"
              alt="Traveler"
            />
            <p>
              "An unforgettable journey that exceeded all expectations. The
              attention to detail was impeccable."
            </p>
            <cite>- Sarah Johnson</cite>
          </div>

          <div className="story-card">
            <img
              src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e"
              alt="Traveler"
            />
            <p>
              "From the moment we booked to our return home, every aspect was
              handled with professionalism and care."
            </p>
            <cite>- Michael Chen</cite>
          </div>

          <div className="story-card">
            <img
              src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d"
              alt="Traveler"
            />
            <p>
              "The mountain expedition was life-changing. Every moment was
              filled with awe and wonder."
            </p>
            <cite>- Emma Rodriguez</cite>
          </div>

          <div className="story-card">
            <img
              src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e"
              alt="Traveler"
            />
            <p>
              "Professional, luxurious, and truly memorable. This is how travel
              should be."
            </p>
            <cite>- David Kim</cite>
          </div>
        </div>
      </div>
    </section>


      <section className="team container">
        <h2>Meet Our Expert Team</h2>
        <div className="team-grid">
          <div className="team-member">
            <img
              src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d"
              alt="Team Member"
            />
            <h3>Emma Rodriguez</h3>
            <p>Senior Travel Consultant</p>
          </div>

          <div className="team-member">
            <img
              src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e"
              alt="Team Member"
            />
            <h3>David Kim</h3>
            <p>Adventure Specialist</p>
          </div>

          <div className="team-member">
            <img
              src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d"
              alt="Team Member"
            />
            <h3>Lisa Thompson</h3>
            <p>Cultural Experiences Curator</p>
          </div>
        </div>
      </section>

      <footer className="footer">
        <div className="container">
          <div className="footer-content">
            <div className="footer-section">
              <h3>TravelX</h3>
              <p>Creating extraordinary travel experiences since 2015.</p>
            </div>

            <div className="footer-section">
              <h4>Quick Links</h4>
              <ul>
                <li><a href="#">Destinations</a></li>
                <li><a href="#">Experiences</a></li>
                <li><a href="#">About Us</a></li>
                <li><a href="/Contact">Contact</a></li>
              </ul>
            </div>

            <div className="footer-section">
              <h4>Contact Info</h4>
              <p>info@travelx.com</p>
              <p>+91 9856367254</p>
            </div>
          </div>

          <div className="footer-bottom">
            <p>&copy; 2026 TravelX. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </>
  );
}
