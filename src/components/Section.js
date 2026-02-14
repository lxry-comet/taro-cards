import React from 'react';
import PropTypes from 'prop-types';

function Section({ title, children }) {
  return (
    <section
    style={{ backgroundColor: '#0a0a0c', minHeight: '100vh', padding: '40px 0' }}
    >
      {/* <h2>{title}</h2> */}
      {/* //! Рендер за умовою: */}
      {title && <h2
      
      style={{ 
        textAlign: 'center', 
        color: '#d4af37', 
        fontFamily: 'serif', 
        fontSize: '3rem',
        textShadow: '0 0 15px rgba(212, 175, 55, 0.5)',
        marginBottom: '40px'
      }}
      >{title}</h2>} 

      {children}
    </section>
  );
}

Section.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node,
};

export default Section;