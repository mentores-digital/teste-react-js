import React from 'react';

export default function Details(props) {
    console.log(props.history.location.state.title)
    return (
        <div>
            <h1>Detalhes</h1>
        </div>
    )
}