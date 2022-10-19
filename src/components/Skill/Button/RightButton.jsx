import React from 'react';
import { ChevronRight } from 'react-bootstrap-icons';
import './Style.scss';
function RightButton({ onClick, lenIcon, setIndexItemDetail, ...rest }) {
    const handleNext = () => {
        onClick();
        setIndexItemDetail((prev) => {
            if (prev < lenIcon - 1) return prev + 1;
            else return 0;
        });
    };

    return (
        <button onClick={() => handleNext()} aria-label="Go to next slide" type="button" className="right-btn">
            <ChevronRight size={24} className="icon" />
        </button>
    );
}

export default RightButton;
