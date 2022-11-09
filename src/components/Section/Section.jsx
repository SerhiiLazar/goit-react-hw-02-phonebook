import React from 'react';
import Container from 'components/Container';



const Section = ({children, title}) => {
    return (
        <div>
            <h2>{title}</h2>
            {children}
            <Container />
        </div>
    )
};

export default Section;