// import React from 'react';

function Pricing() {
    return ( 
        <div className="container p-5">
            <div className="row p-5">
                <div className="col-lg-4 col-sm-12">
                    <h1 className="mb-3 fs-2">Unbeatable pricing</h1>
                    <p>We pioneered the concept of discount broking and price transparency in India. Flat fees and no hidden charges.</p>
                    <a href="" style={{textDecoration: "none"}}>See pricing&nbsp;<i class="fa fa-long-arrow-right" aria-hidden="true"></i></a>
                </div>
                <div className="col-lg-2 col-sm-12"></div>
                <div className="col-lg-6 col-sm-12">
                    <div className="row text-center mt-3">
                        <div className='col border p-2'>
                            <h1 className='mb-3'><i class="fa fa-inr" aria-hidden="true"></i>0</h1>
                            <p> Free equity delivery<br/>
                            and direct mutual funds</p>
                        </div>
                        <div className='col border p-2'>
                        <h1 className='mb-3'><i class="fa fa-inr" aria-hidden="true"></i>0</h1>
                            <p>  Intraday and
                            F&O</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
     );
}

export default Pricing;