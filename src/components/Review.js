import React from 'react';

function Review({ data }) {
    return (
        <div>
            {data.reviews.map(user => (
                <div>
                    <h4 style={{ display: 'inline' }}>{user.name}</h4>
                    <p>{user.date}</p>
                    <p>{user.comments}</p>
                </div>
            ))}
        </div>
    )
}

export default Review