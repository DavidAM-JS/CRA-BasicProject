import React from 'react';
import './User.css';

function User ({name, description, age, avatar}){
    return (
        <div className="userInfo">
            {avatar}
            <div className="userData">
                <h3 className="name">Name: {name}</h3>
                <p className="description">Description: {description}</p>
                <p className="age">Age: {age}</p>
            </div>
        </div>
    )
}

export default User;