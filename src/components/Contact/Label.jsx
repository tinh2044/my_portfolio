import React from 'react';
import TrackVisibility from 'react-on-screen';
import './Contact.scss';
function Label({ text, className, error }) {
    const Tab = error ? 'p' : 'label';
    return (
        <TrackVisibility>
            {({ isVisible }) => (
                <Tab
                    className={`${className} ${isVisible && 'animate__animated animate__fadeInLeft'}`}
                    data-invalid={text}
                    data-valid={text}
                ></Tab>
            )}
        </TrackVisibility>
    );
}

export default Label;
