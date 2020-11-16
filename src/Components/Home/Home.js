import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div>
            <h2>Login in with google</h2>
            <Link to="/hook">Login</Link>
        </div>
    );
};

export default Home;