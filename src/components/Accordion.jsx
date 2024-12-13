import React, { useState } from 'react';
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import './Accordion.css';

const Accordion = ({ id, title, content, activeId, toggleAccordion}) => {
    

    return (
        <div className='Accordion-div'>
            <div className='Accordion-item'>
                <div className='Accordion-title'>
                    <div className='title'>{title}</div>
                    <button 
                        className='Accordion-btn' 
                        onClick={() => toggleAccordion(id)}
                    >
                        {activeId === id ? <FaChevronUp /> : <FaChevronDown />}
                    </button>
                </div>
                {activeId === id && (
                    <div className='Accordion-content'>
                        <p>{content}</p>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Accordion;
