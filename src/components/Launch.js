import React from 'react';

const Launch = ({launch}) => {
    const {flight_number,mission_name,launch_year,links}=launch;
    console.log(links)
    return (
        <div>
            <div>flight_number:{flight_number}</div>
            <div>mission_name:{mission_name}</div>
            <div>launch_year:{launch_year}</div>
            <img src={links.mission_patch_small} alt={flight_number}/>
            </div>
    );
};

export {Launch};
