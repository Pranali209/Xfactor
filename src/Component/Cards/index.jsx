
import React from 'react';



const Cards = () => {
    const cards = [
        {
            id: 1,
            data1: 'Revolutionizing AI for the healthcare industry, they scaled from prototype to global leader after winning X-Factor.k',
            data2: "Grant Winner of ₹50L | Raised ₹15 Cr in funding | Featured in [Media Outlet]"
        },
        {
            id: 2,
            data1: 'Revolutionizing AI for the healthcare industry, they scaled from prototype to global leader after winning X-Factor.k',
            data2: "Grant Winner of ₹50L | Raised ₹15 Cr in funding | Featured in [Media Outlet]"
        },
        {
            id: 3,
            data1: 'Revolutionizing AI for the healthcare industry, they scaled from prototype to global leader after winning X-Factor.k',
            data2: "Grant Winner of ₹50L | Raised ₹15 Cr in funding | Featured in [Media Outlet]"
        },
    ];

    return (
        
        <>

            <div className="container1 ">
                <ul id="cards" className='rooting'>
                    <li className="card" id="card1">
                        <div className="card-body flex flex-col ">
                            <p className='text-lg text-black '>Revolutionizing AI for the healthcare industry, they scaled from prototype to global leader after winning X-Factor.k</p>
                             <p className='text-lg mt-2.5 text-black '>Grant Winner of ₹50L | Raised ₹15 Cr in funding | Featured in [Media Outlet]</p>
                        </div>
                    </li>
                    <li className="card" id="card2">
                    <div className="card-body flex flex-col ">
                            <p className='text-lg text-black '>Revolutionizing AI for the healthcare industry, they scaled from prototype to global leader after winning X-Factor.k</p>
                             <p className='text-lg mt-2.5 text-black '>Grant Winner of ₹50L | Raised ₹15 Cr in funding | Featured in [Media Outlet]</p>
                        </div>
                    </li>
                    <li className="card" id="card3">
                    <div className="card-body flex flex-col ">
                            <p className='text-lg text-black '>Revolutionizing AI for the healthcare industry, they scaled from prototype to global leader after winning X-Factor.k</p>
                             <p className='text-lg mt-2.5 text-black '>Grant Winner of ₹50L | Raised ₹15 Cr in funding | Featured in [Media Outlet]</p>
                        </div>
                    </li>
                    
                </ul>
            </div>
        </>
    );
};

export default Cards;



