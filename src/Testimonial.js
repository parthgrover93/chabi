import React from 'react';
import './Testimonial.css';

const testimonials = [
  {
    company: 'zomato',
    feedback: 'This platform revolutionized our training program. Our team loves the interactive features.',
    name: 'First Name',
    designation: 'Designation',
    image: 'https://i.pravatar.cc/100?img=5', // Replace with the correct images if needed
  },
  {
    company: 'zomato',
    feedback: 'This platform revolutionized our training program. Our team loves the interactive features.',
    name: 'First Name',
    designation: 'Designation',
    image: 'https://i.pravatar.cc/100?img=6',
  },
  {
    company: 'zomato',
    feedback: 'This platform revolutionized our training program. Our team loves the interactive features.',
    name: 'First Name',
    designation: 'Designation',
    image: 'https://i.pravatar.cc/100?img=7',
  },
  {
    company: 'zomato',
    feedback: 'This platform revolutionized our training program. Our team loves the interactive features.',
    name: 'First Name',
    designation: 'Designation',
    image: 'https://i.pravatar.cc/100?img=8',
  },
];

const Testimonial = () => {
  return (
    <div className="testimonial-container">
      {testimonials.map((testimonial, index) => (
        <div className="testimonial-card" key={index}>
          <h2 className="company-name">{testimonial.company}</h2>
          <p className="feedback">{testimonial.feedback}</p>
          <div className="profile">
            <img src={testimonial.image} alt={testimonial.name} className="profile-image" />
            <div>
              <h3 className="profile-name">{testimonial.name}</h3>
              <p className="profile-designation">{testimonial.designation}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Testimonial;
