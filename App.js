import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Body from "./src/components/Body";
import Header from "./src/components/Header";


//composing the component
const HeadComponents=()=>{
    return(
        <>
        <Header/>
        <Body/>

        </>
    );
}


//passing a react element in root
const root = ReactDOM.createRoot(document.getElementById("root"));
//async defer
root.render(<HeadComponents />);
