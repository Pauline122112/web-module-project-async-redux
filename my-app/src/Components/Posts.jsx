import React, { useEffect } from 'react';
import { getPerson, fetchFail } from './../Action/action';
import { connect } from 'react-redux';
import axios from 'axios';

const RandomQuotes = () => {
   

    return (
        <div>
        <div className='quote'>
            <h2>New Quote</h2>
         </div>
        <button>Generate New Quote</button>
        </div>
    )

        
}

export default RandomQuotes
