import React from 'react' 


const Hello = () => {
    // return (
    //     <div>
    //         <h1>Hello Tisoy</h1>
    //     </div>
    // )
    return React.createElement(
                    'div',
                     { id : 1, className : "dummyclass1" }, 
                     React.createElement('h1', null, 'Hello Opaw')
                     )
}

export default Hello