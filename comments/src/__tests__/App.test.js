import React from "react";
import ReactDOM from "react-dom";
import App from "../components/App.js";
it('Validates whether Comment Box is Rendered', () => {
    
    // Given 
    const div = document.createElement('div');
    // When 
    
    ReactDOM.render(<App/>,div);

    console.log(div.innerHTML);
    


    ReactDOM.unmountComponentAtNode(div);
});
