import React from 'react';

function NotFound() {
    return ( 
        <div className="container p-5 mb-5">
        <div className="row text-center">
            <h1 className="mt-5 mb-4" style={{fontSize:"3rem", lineHeight: "1.25", fontWeight:"500"}}>404 Not Found</h1>
            <p style={{fontSize:"1.25rem", fontWeight:"400"}}>Sorry, the page that you are looking for does not exist.</p>
        </div>
    </div>
     );
}

export default NotFound;