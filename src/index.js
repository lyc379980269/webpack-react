import React, { Component } from "react";
import { render } from "react-dom";

class App extends Component {
    render() {
        return <div>lyc测试</div>;
    }
}

const DOM = document.getElementById("app");

const renderDOM = () => {
    render(<App />, DOM);
};

renderDOM();