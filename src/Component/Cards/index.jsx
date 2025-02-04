import { CardStack, Card } from 'react-cardstack';
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



