import React from 'react';
import { ChevronLeft } from 'react-bootstrap-icons';
import './Style.scss';
function LeftButton({ onClick, lenIcon, setIndexItemDetail, ...rest }) {
    const handleNext = () => {
        onClick();
        setIndexItemDetail((prev) => {
            if (prev > 0) return prev - 1;
            else return lenIcon - 1;
        });
    };

    return (
        <button onClick={() => handleNext()} aria-label="Go to previous slide" type="button" className="left-btn">
            <ChevronLeft size={24} className="icon" />
        </button>
    );
}

export default LeftButton;
