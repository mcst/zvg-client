import React, {useEffect, useState} from 'react';
import './App.css';
import {getRealEstates} from "./serverApi";

function App() {
    const data = getRealEstates();
    return (
        <div className="App">

        </div>
    );
}

export default App;
