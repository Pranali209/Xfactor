import { CardStack, Card } from 'react-cardstack';
import React from 'react';

const CardComp = ({ amount, brand, index }) => {
    const translateY = index * 20; // Adjust spacing here

    return (
        <div
            className={`absolute top-0 left-0 w-96 h-72 p-2.5 rounded-lg text-white font-bold text-lg flex flex-col justify-center items-center transition-transform duration-300 ease-in-out`}
            style={{
                backgroundColor: index === 0 ? '#4CAF50' : index === 1 ? '#F44336' : '#FFEB3B',
                zIndex: 3 - index, // Higher z-index for top cards
                transform: `translateY(${translateY}px)`
            }}
        >
            {amount}

            <p className='mt-6'> {brand}</p>
        </div>
    );
};

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
        <CardStack
            height={500}
            width={400}
            background='#f8f8f8'
            hoverOffset={25}>
            
                      
                        <Card background='#f8f8f8' >
                            <p>Revolutionizing AI for the healthcare industry, they scaled from prototype to global leader after winning X-Factor.k</p>
                            <p>Grant Winner of ₹50L | Raised ₹15 Cr in funding | Featured in [Media Outlet]</p>
                        </Card>
                        <Card background='#2980B9' >
                            <p>Revolutionizing AI for the healthcare industry, they scaled from prototype to global leader after winning X-Factor.k</p>
                            <p>Grant Winner of ₹50L | Raised ₹15 Cr in funding | Featured in [Media Outlet]</p>
                        </Card>
                        <Card background='#27AE60'  >
                            <p>Revolutionizing AI for the healthcare industry, they scaled from prototype to global leader after winning X-Factor.k</p>
                            <p>Grant Winner of ₹50L | Raised ₹15 Cr in funding | Featured in [Media Outlet]</p>
                        </Card>

        </CardStack>
    );
};

export default Cards;



