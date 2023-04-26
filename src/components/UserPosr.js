import React from 'react';
const UserPosr = ({post}) => {
    const {id, title, body, userId} = post;
    return (
        <div>
            <div>id: {id}</div>
            <div>title: {title}</div>
            <div>body: {body}</div>
            <div>userId: {userId}</div>
        </div>
    );
};

export {UserPosr};