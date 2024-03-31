import "./Paragraph.css"
import React from 'react';


function Paragraph({txt}) {
    return (
        <p className="paragraph">
            {txt}
        </p>
        
    );    
}

export default Paragraph;