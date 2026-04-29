import React, { useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Home = () => {

    const navigate = useNavigate();

    return (
        <div>
            <h1>HOME</h1>
            <button style={{ marginLeft: '20px' }} onClick={() => navigate("/study00")}>Study00</button>
            <button style={{ marginLeft: '20px' }} onClick={() => navigate("/study01")}>Study01</button>
            <button style={{ marginLeft: '20px' }} onClick={() => navigate("/study02")}>Study02</button>
            <button style={{ marginLeft: '20px' }} onClick={() => navigate("/study03")}>Study03</button>
            <button style={{ marginLeft: '20px' }} onClick={() => navigate("/study04")}>Study04</button>
        </div>
    );
};

export default Home;