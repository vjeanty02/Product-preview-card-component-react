import "./HeadingSecondary.css"
import React from 'react';


function HeadingSecondary({txt}) {
    return (
        <h3 className="headingSecondary">
            {txt}
        </h3>
        
    );    
}

export default HeadingSecondary;