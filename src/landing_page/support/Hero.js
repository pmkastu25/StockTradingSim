import React from 'react';

function Hero() {
    return ( 
        <section className='container-fluid' id="supportHero" >
            <div className=''></div>
            <div className='pt-5 ' id="supportWrapper">
                <h4>
               Support Portal
                </h4>
                <a href="https://example.com">Track Tickets</a>
            </div>
            <div className='row p-3 m-3 outer'>
            <div className='col-6 p-3 px-4 inner'>
                <h4  className='fs-3 mb-5'>Search for an answer or browse help topics to create a ticket</h4>
                <input placeholder='Eg. how do I activate F&O, why is my order getting rejected..'/><br/>
                <a href="https://example.com">Track account opening</a> 
                <a href="https://example.com">Track segment activation</a> <a href="https://example.com">Intraday margins </a>
                <a href="https://example.com">Kite user manual</a>
            </div>
            <div className='col-6 p-3 px-4 inner'>
            <h1 className='fs-3'>Featured</h1>
            <ol>
                <li><a href="https://example.com">MCX Crude option contract expiry - February 2025</a> </li>
                <li><a href="https://example.com">Latest Intraday leverages and Square-off timings</a></li>
            </ol>
            </div>
            </div>
        </section>
     );
}

export default Hero;