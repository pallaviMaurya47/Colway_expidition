import { useState } from 'react';

export default function UserDataForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    interest: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here (e.g., send to backend)
    console.log('User data submitted:', formData);
    alert('Thank you for sharing your details! We\'ll reach out with personalized travel recommendations soon.');
    // Reset form
    setFormData({
      name: '',
      email: '',
      phone: '',
      interest: '',
      message: ''
    });
  };

  return (
    <div className="user-data-form">
      <h2>Discover Your Next Adventure</h2>
      <p>Share your details with us, and let's craft unforgettable travel experiences tailored just for you. Whether you're dreaming of mountain treks, beach getaways, or cultural explorations, we're here to make it happen!</p>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Your Full Name"
          value={formData.name}
          onChange={handleChange}
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email Address"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <input
          type="tel"
          name="phone"
          placeholder="Your Phone Number"
          value={formData.phone}
          onChange={handleChange}
          required
        />
        <select
          name="interest"
          value={formData.interest}
          onChange={handleChange}
          required
        >
          <option value="">Select Your Travel Interest</option>
          <option value="trekking">Trekking & Hiking</option>
          <option value="beach">Beach Holidays</option>
          <option value="cultural">Cultural Tours</option>
          <option value="adventure">Adventure Sports</option>
          <option value="wildlife">Wildlife Safaris</option>
          <option value="luxury">Luxury Travel</option>
        </select>
        <textarea
          name="message"
          placeholder="Tell us more about your dream trip or any specific preferences..."
          value={formData.message}
          onChange={handleChange}
          rows="5"
          required
        ></textarea>
        <button type="submit">Start Planning My Trip</button>
      </form>
      <p className="privacy-note">We respect your privacy and will only use your information to provide personalized travel suggestions.</p>
    </div>
  );
}
