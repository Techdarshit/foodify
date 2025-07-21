import { useState } from "react";

const User =({name,location}) => {

    return (
        <div className="user-card">
            <h2>Name:{name}</h2>
            <h3>Location: {location}</h3>
            <h4>Contact:95228-XXXXX</h4>
        </div>
    );
};

export default User;