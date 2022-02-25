import React from 'react';

// function  Greet() {
//     return <h1>Hello Word</h1>
// }
const Greet = props => {
    const {name, heroname} = props;
    return (
        <div>
            <h1>Hello Word {name} {heroname}</h1>
            {props.children}
        </div>
    )
} 
// export const Greet = () => <h1>Hello Word</h1>
export default Greet