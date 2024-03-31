import "./HeadingPrimary.css"
import React from 'react';


function HeadingPrimary({txt}) {
    return (
        <h2 className="headingPrimary">
            {txt}
        </h2>
        
    );    
}

export default HeadingPrimary;