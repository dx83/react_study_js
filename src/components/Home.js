import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Home = () => {

    const navigate = useNavigate();

    const toStudy00 = () => {
        navigate("/study00");
    }
    const toStudy01 = () => {
        navigate("/study01");
    }
    const toStudy02 = () => {
        navigate("/study02");
    }

    return (
        <div>
            <h1>HOME</h1>
            <button style={{ marginLeft: '20px' }} onClick={toStudy00}>Study00</button>
            <button style={{ marginLeft: '20px' }} onClick={toStudy01}>Study01</button>
            <button style={{ marginLeft: '20px' }} onClick={toStudy02}>Study02</button>
        </div>
    );
};

export default Home;