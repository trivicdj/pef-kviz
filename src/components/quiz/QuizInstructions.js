import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';

import answer from '../../assets/img/answer.png';
import fiftyFifty from '../../assets/img/fiftyFifty.PNG';
import hints from '../../assets/img/hints.PNG';
import options from '../../assets/img/options.PNG';

const QuizInstructions = () => ( <
    Fragment >
    <
    Helmet > < title > Quiz Instructions - Quiz App < /title></Helmet >
    <
    div className = "instructions container" >
    <
    h1 > Uputstvo za korišćenje aplikacije < /h1> <
    p > Pažljivo pročitaj pravila igre od početka do kraja. < /p> <
    ul className = "browser-default"
    id = "main-list" >
    <
    li > Igra traje 15 minuta i završava se čim vaše vreme istekne. < /li> <
    li > Svaka igra sadrži 15 pitanja. < /li> <
    li >
    Svako pitanje ima četri ponuđena odgovora. <
    img src = {
        options
    }
    alt = "Quiz App options example" / >
    <
    /li> <
    li >
    Klikni na jedno od ponuđenih odgovora. <
    img src = { answer }
    alt = "Quiz App answer example" / >
    <
    /li> <
    li >
    tokom trajanja testa imate mogućnost korišcenja dve vrste pomoći:
    <
    ul id = "sublist" >
    <
    li > 2 puta pomoc 50 - 50 < /li> <
    li > 5 puta Hint ili nagoveštaj < /li> < /
    ul > <
    /li> <
    li >
    Odabirom 50 - 50 pomoći klikom na ikonicu <
    span className = "mdi mdi-set-center mdi-24px lifeline-icon" > < /span>
    uklonićete dva netačna odgovora, pri tome ostaje jedan tačan i jedan netačan odgovor <
    img src = {
        fiftyFifty
    }
    alt = "Quiz App Fifty-Fifty example" / >
    <
    /li> <
    li >
    Odabirom hinta ili nagoveštaja klikom na ikonicu <
    span className = "mdi mdi-lightbulb-on mdi-24px lifeline-icon" > < /span>
    uklonićete jedan netačan odgovor.Ova pomoć se može koristiti više puta u toku jednog pitanja. <
    img src = { hints }
    alt = "Quiz App hints example" / >
    <
    /li> <
    li > Kviz možete napustiti u svakom trenutku < /li> <
    li > Tajmer se pokreće čim se igra učita. < /li> <
    li > Da li ste spremni da započnete s kvizom ? < /li> < /
    ul > <
    div >
    <
    span className = "left" > < Link to = "/" > Ne, povratak nazad! < /Link></span >
    <
    span className = "right" > < Link to = "/play/quiz" > U redu, započnimo s kvizom! < /Link></span > < /
    div > <
    /div> < /
    Fragment >
);

export default QuizInstructions;