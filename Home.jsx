import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className="home-page">
      <section className="hero">
        <h1>Connecting People Across Faiths & Interests</h1>
        <p>
          Welcome to Communion, where we bring people together regardless of faith, 
          background, or interests. Our platform helps you discover events, 
          connect with like-minded individuals, and build meaningful relationships 
          within your community.
        </p>
        <Link to="/events" className="cta-button">Explore Events</Link>
      </section>
      
      <section className="about">
        <h2>About Communion</h2>
        <p>
          Communion is dedicated to creating bridges between diverse communities. 
          Our app facilitates connections through events and community support, 
          making it easier for people of all faiths to find common ground and 
          celebrate their differences.a community where spirituality meets innovation. Together, we'll build a world that's more inclusive, engaging, and connected than ever before! By promoting collaboration and connection, we're fostering a world where differences become strengths and unity becomes the norm. inspire personal and professional growth, and bring people together to share meaningful experiences. From workshops to conferences, every event is designed to leave a lasting impact on our attendees.



        </p>
      </section>
    </div>
  );
}

export default Home;