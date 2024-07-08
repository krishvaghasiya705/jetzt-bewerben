import React from 'react';
import Herobanner from './herobanner';
import Primussection from './primusteamsection';
import Worldofprimussection from './worldofprimussection';
import Daserwatet from './daserwatet';
import Bewerbensection from './bewerbensection';

export default function Home() {
    return (
        <div>
            <Herobanner />
            <Primussection />
            <Worldofprimussection />
            <Daserwatet />
            <Bewerbensection />
        </div>
    )
}
