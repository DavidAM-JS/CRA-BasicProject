import React from 'react';
import './Hobbies.css';

const arrayHobbies = (hobbies) => {
    const hobbiesActive = hobbies.map((hobbie, index) => {return hobbie.isActive &&
        <div className="hobbie" key={index}>
            <p className="hobbie-name">Name: {hobbie.name}</p>
            <p className="hobbie-desc">Description: {hobbie.description}</p>
        </div>
    })
    return (
        <div>
            {hobbiesActive}
        </div>
    )
};

const Hobbies = ({ hobbies, showHobbies, count }) => {
    return (
        <div>
            {showHobbies && hobbies ?
                <div>
                    <p>{count(hobbies)} Active Hobbies:</p>
                    <div className="hobbies">{arrayHobbies(hobbies)}</div>
                </div>
                : <div>"Hobbies not allowed"</div>
            }
        </div>
    )
}

export default Hobbies;
