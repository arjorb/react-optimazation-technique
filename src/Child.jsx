import React from "react";

const Child = React.memo(() => {
    console.log("Child rendering");
    return <div>I'm Child</div>;
});



export default Child;
