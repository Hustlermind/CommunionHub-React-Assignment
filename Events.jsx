import React, { useState } from 'react';

function Events() {
  // Sample event data
  const initialEvents = [
    {
      id: 1,
      title: "Interfaith Dialogue",
      date: "2025-03-20",
      location: "Community Center",
      category: "Religious",
      description: "Join us for an open discussion about different faith traditions."
    },
    {
      id: 2,
      title: "Community Food Drive",
      date: "2025-03-25",
      location: "Downtown Plaza",
      category: "Charity",
      description: "Help collect food donations for local shelters."
    },
    {
      id: 3,
      title: "Cultural Exchange Social",
      date: "2025-04-02",
      location: "City Park",
      category: "Social",
      description: "A casual gathering to celebrate diverse cultures through food and music."
    }
  ];

  const [events, setEvents] = useState(initialEvents);
  const [filteredEvents, setFilteredEvents] = useState(initialEvents);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [newEvent, setNewEvent] = useState({
    title: "",
    date: "",
    location: "",
    category: "Religious",
    description: ""
  });

  // Filter events by category
  const filterEvents = (category) => {
    setSelectedCategory(category);
    if (category === "All") {
      setFilteredEvents(events);
    } else {
      setFilteredEvents(events.filter(event => event.category === category));
    }
  };

  // Handle form input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewEvent({
      ...newEvent,
      [name]: value
    });
  };

  // Add new event
  const handleAddEvent = (e) => {
    e.preventDefault();
    const eventToAdd = {
      ...newEvent,
      id: events.length + 1
    };
    
    const updatedEvents = [...events, eventToAdd];
    setEvents(updatedEvents);
    
    // Apply current filter to updated events
    if (selectedCategory === "All") {
      setFilteredEvents(updatedEvents);
    } else {
      setFilteredEvents(updatedEvents.filter(event => event.category === selectedCategory));
    }
    
    // Reset form
    setNewEvent({
      title: "",
      date: "",
      location: "",
      category: "Religious",
      description: ""
    });
  };

  return (
    <div className="events-page">
      <h1>Community Events</h1>
      
      <div className="event-filters">
        <h3>Filter by Category:</h3>
        <div className="filter-buttons">
          <button 
            className={selectedCategory === "All" ? "active" : ""}
            onClick={() => filterEvents("All")}
          >
            All
          </button>
          <button 
            className={selectedCategory === "Religious" ? "active" : ""}
            onClick={() => filterEvents("Religious")}
          >
            Religious
          </button>
          <button 
            className={selectedCategory === "Social" ? "active" : ""}
            onClick={() => filterEvents("Social")}
          >
            Social
          </button>
          <button 
            className={selectedCategory === "Charity" ? "active" : ""}
            onClick={() => filterEvents("Charity")}
          >
            Charity
          </button>
        </div>
      </div>
      
      <div className="events-list">
        <h2>Upcoming Events</h2>
        {filteredEvents.length === 0 ? (
          <p>No events found in this category.</p>
        ) : (
          filteredEvents.map((event) => (
            <div key={event.id} className="event-card">
              <h3>{event.title}</h3>
              <p><strong>Date:</strong> {event.date}</p>
              <p><strong>Location:</strong> {event.location}</p>
              <p><strong>Category:</strong> {event.category}</p>
              <p>{event.description}</p>
            </div>
          ))
        )}
      </div>
      
      <div className="add-event-form">
        <h2>Add New Event</h2>
        <form onSubmit={handleAddEvent}>
          <div className="form-group">
            <label htmlFor="title">Event Title:</label>
            <input
              type="text"
              id="title"
              name="title"
              value={newEvent.title}
              onChange={handleInputChange}
              required
            />
          </div>
          
          <div className="form-group">
            <label htmlFor="date">Date:</label>
            <input
              type="date"
              id="date"
              name="date"
              value={newEvent.date}
              onChange={handleInputChange}
              required
            />
          </div>
          
          <div className="form-group">
            <label htmlFor="location">Location:</label>
            <input
              type="text"
              id="location"
              name="location"
              value={newEvent.location}
              onChange={handleInputChange}
              required
            />
          </div>
          
          <div className="form-group">
            <label htmlFor="category">Category:</label>
            <select
              id="category"
              name="category"
              value={newEvent.category}
              onChange={handleInputChange}
              required
            >
              <option value="Religious">Religious</option>
              <option value="Social">Social</option>
              <option value="Charity">Charity</option>
            </select>
          </div>
          
          <div className="form-group">
            <label htmlFor="description">Description:</label>
            <textarea
              id="description"
              name="description"
              value={newEvent.description}
              onChange={handleInputChange}
              required
            />
          </div>
          
          <button type="submit" className="submit-button">Add Event</button>
        </form>
      </div>
    </div>
  );
}

export default Events;