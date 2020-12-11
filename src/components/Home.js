import React, { Fragment } from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';

const Home = () => ( <
    Fragment >
    <
    Helmet > < title > Home - Quiz App < /title></Helmet >
    <
    div id = "home" >
    <
    section >
    <
    div style = {
        { textAlign: 'center' }
    } >
    <
    span className = "mdi mdi-cube-outline cube" > < /span> < /
    div > <
    h1 > Kviz < /h1> <
    div className = "play-button-container" >
    <
    ul >
    <
    li > < Link className = "play-button"
    to = "/play/instructions" > Pokreni kviz < /Link></li >
    <
    /ul> < /
    div > <
    div className = "auth-container" >
    <
    Link to = "/login"
    className = "auth-buttons"
    id = "login-button" > Prijavi se < /Link> <
    Link to = "/register"
    className = "auth-buttons"
    id = "signup-button" > Kreiraj nalog < /Link> < /
    div > <
    /section> < /
    div > <
    /Fragment>
);

export default Home;