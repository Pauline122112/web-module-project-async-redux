import React, { useEffect } from 'react';
import { getQuote, fetchFail } from './../Action/action';
import { connect } from 'react-redux';


const RandomQuotes = (props) => {
   const { quote, isFetching, error } = props

   useEffect((props) => {
       props.getQuote()
   }, [])

    if (error) {
    return <h2>We got an error: {error}</h2>;
  }

  if (isFetching) {
    return <h2>Fetching quote for you!</h2>;
  }


    const handleClick = () => {
        props.getQuote()
    }

    return (
        <div>
        <div className='quote'>
            <h2>New Quote: {quote.value}</h2>
         </div>
        <button onclick={handleClick}>Generate New Quote</button>
        </div>
    )
}

 const mapStateToProps = state => {
  return {
    quote: state.quote,
    isFetching: state.isFetching,
    error: state.error
  };
}

        
export default connect(mapStateToProps, { getQuote, fetchFail })(RandomQuotes);
