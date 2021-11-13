import React from 'react';
import './LandingPage.css'
import Showdata from '../Showdata/Showdata';
import Extendata from '../Showdata/Extendata';
import Sevendays from '../Charts/Sevendays';

export default function LandingPage() {


    return (
        <>
            <Showdata />
            <Extendata />
            <Sevendays />
        </>
    )
}