import React from 'react';
import Container from 'components/Container';
import css from './Section.madule.css'

const Section = ({ children, title }) => {
  return (
    <div className={css.section}>
      <Container styles = {{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        padding: '20px',
        borderRadius: '10px',
        boxShadow: '2px 2px 6px rgba(0, 0, 0, 0.6)',
      }}>
        <h2>{title}</h2>
        {children}
      </Container>
    </div>
  );
};

export default Section;
