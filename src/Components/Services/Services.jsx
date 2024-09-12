import React from 'react';
import './Services.css';
import Services_Data from '../../assets/services_data';

const Services = () => {
  return (
    <div className='services-wrapper'>
      <div className="services-title">
        <h1>My Services</h1>
      </div>
      <div className="services-container">
        <div className="services-card">
          {Services_Data.map((service, index) => (
            <div key={index} className='services-format'>
              <h3>{service.s_no}</h3>
              <h2>{service.s_name}</h2>
              <p>{service.s_desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Services;
