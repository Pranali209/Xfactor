import React, { useState } from 'react'
import Heading from '../Component/Heading'
import BoxA from '../Component/BoxA'
import Ellipse2 from '../assets/Ellipse2.svg'
import Ellipse1 from '../assets/Ellipse1.svg'
import Ellipse3 from '../assets/Ellipse3.svg'
import PrizeIcon from '../assets/PrizeIcon.svg'
import Hack1 from '../assets/hack1.svg'
import gain4 from '../assets/gain4.svg'
import Hack3 from '../assets/hack3.svg'
import Hack4 from '../assets/hack4.svg'
import Chain from '../assets/chain.svg'
import creativityEmoji from '../assets/creativityEmoji.svg'
import Feedback from '../assets/feedback.svg'
import Confetti from '../assets/confetti.svg'
import Button from '../Component/Button'
import Cards from '../Component/Cards'
function Hackthon() {
    const Accadata = [
        {
            id: 1,
            title: '1. A Stage for Your Genius:',
            image: Hack1,
            description: 'This is your moment to shine—show the world what you’re capable of.',

        },
        {
            id: 2,
            title: '2. Massive Opportunities:',
            image: gain4,
            description: 'Win up to ₹50L in grants and get noticed by the people who matter."',

        }, {
            id: 3,
            title: '3. Build Something Real:',
            image: Hack3,
            description: 'In just 48 hours, turn your bold idea into a game-changing solution.',

        }, {
            id: 4,
            title: '4. The Network You Deserve:',
            image: Hack4,
            description: "Collaborate with brilliant minds, industry leaders, and investors who believe in the future you’re building.",

        },

    ]

    const heads = [
        {
            id: 1,
            title: 'A Stage for Your Genius',
        }, {
            id: 2,
            title: 'Massive Opportunities',
        }, {
            id: 3,
            title: 'Build Something Real',
        }, {
            id: 4,
            title: 'The Network You Deserve',
        }
    ]

    const ChainData = [
        {
            id: 1,
            step: "Step 1: Register",
            data: "Solo or squad? Pick your team, choose your theme, and sign up."

        }, {
            id: 2,
            step: "Step 2: Compete",
            data: "You’ve got 48 hours. Bring your A-game and solve challenges that matter"

        }, {
            id: 3,
            step: "Step 3: Pitch",
            data: "Impress the judges. Wow the room. Leave your mark."
        }, {
            id: 4,
            step: "Step 4: Win",
            data: "Take home grants, recognition, and a platform for your next big leap"
        }
    ]

    const [isclicked, setIsClicked] = useState(1)
    const [previousId, setPreviousId] = useState(null);

    function handleIsClicked(id) {
        setPreviousId(isclicked)
        setIsClicked(id)
    }
    return (
        <div className='py-16 '>
            <Heading className="text-center font-semibold text-5xl text-black" as="h1" text="Hackathon" />
            <Heading className="text-center text-lg mt-5 text-black" as="p" text="Hey, Innovator—Think You’ve Got What It Takes?" />
            <div className='relative'>
                <BoxA className="mt-12 w-4xl mx-auto px-28" htxt="Let’s Talk Big Ideas" ptxt="This isn’t just another hackathon. It’s THE hackathon. The X-Factor Hackathon is where the brightest minds solve the biggest challenges—and walk away with life-changing grants."
                    etxt="Bring your boldest ideas, build something extraordinary, and claim your spot as the next big innovator."
                    pclass="font-medium" eclass="font-normal" />

                <img src={Ellipse3} alt='ellipse1' className=' absolute top-10 right-0  w-96 rotateCircle' />

            </div>
            <div className='my-32 w-[60%] mx-auto'>
                <div className='flex  items-center justify-center'>
                    <Heading className="text-center font-semibold  text-4xl text-black " as="h1" text="Prizes" />
                    <img src={PrizeIcon} className='ml-1 w-16 ' />
                </div>


                <div className='flex justify-evenly items-center my-16'>
                    <BoxA className="w-56 py-12 boxShadow" htxt=" 🏆1st Place:" ptxt="₹ 50L Grant" etxt="The grand prize for the idea that redefines the rules of innovation."
                        hclass="text-2xl" pclass="font-medium text-xl !mt-2" eclass=" mt-10 !font-medium" />
                    <BoxA className="w-56 py-12 boxShadow" htxt="🥈2nd Place:" ptxt="₹ 30L Grant" etxt="The grand prize for the idea that redefines the rules of innovation."
                        hclass="text-2xl" pclass="font-medium text-xl !mt-2" eclass=" mt-10 !font-medium" />
                    <BoxA className="w-56 py-12 boxShadow" htxt="🥉3rd Place:" ptxt="₹ 20L Grant" etxt="The grand prize for the idea that redefines the rules of innovation."
                        hclass="text-2xl" pclass="font-medium text-xl !mt-2" eclass=" mt-10 !font-medium" />

                </div>
                <p className='text-[#676767] text-center'>
                    Note:
                    <br />This isn’t just prize money—it’s your ticket to turning ideas into action.
                </p>
            </div>

            <Heading className="text-center text-4xl font-semibold text-black mt-20" as="h1" text="What You’ll Gain" />
            <Heading className="text-center text-lg mt-7 text-black  w-[40%] mx-auto" as="p" text="You’re here because you’re not like the rest. You’re here because you thrive on solving impossible problems. Here’s what’s waiting for you:" />
            {
                Accadata.map((gain, index) => (
                    isclicked === gain.id ?
                        (<div className={`boxShadow  w-4xl h-72 rounded-3xl mx-auto px-10 py-10 mt-10 flex justify-between items-center`}>
                            <div>
                                <Heading className={`text-left text-2xl text-black font-semibold ${isclicked === gain.id ? 'slide-in-right' : previousId === gain.id ? 'slide-exit' : ''}`} as="h1" text={gain.title} />
                                <Heading className={`text-left text-base mt-1 ml-6 text-black w-[30rem] ${isclicked === gain.id ? 'slide-in-left' : previousId === gain.id ? 'slide-exit' : ''} `} as="p" text={gain.description} />
                            </div>
                            <img src={gain.image} alt="gain1" className=' h-36 slide-in-top' />

                        </div>) : " "
                ))

            }
            <div className="-mt-5 bg-[#D9D9D9] py-11 ">
                <div class="container mx-auto p-8  px-20">
                    <div class="flex items-center justify-around ">
                        {
                            heads.map((head, index) => (
                                <>
                                    <section className='flex flex-col justify-center items-center  '>
                                        <div class="relative flex flex-col justify-center items-center ">
                                            <div class={`w-12 h-12 rounded-full border-2 ${isclicked === head.id ? 'border-black' : 'border-none'
                                                } flex items-center justify-center`}>
                                                <div class="w-4 h-4 bg-black rounded-full  cursor-pointer hover:scale-75"
                                                    onClick={() => handleIsClicked(head.id)}></div>
                                            </div>

                                            <div class="absolute top-0 -mt-5 text-center text-xs w-36 text-black">{head.title}</div>
                                        </div>
                                    </section>{
                                        head.id != 4 && <div class="flex-grow border-t border-black"></div>
                                    }

                                </>
                            ))
                        }
                    </div>
                </div>

            </div>
            <div className="container relative my-28 py-16 mx-auto boxShadow rounded-4xl w-[60%]  flex flex-col justify-between items-center ">

                <img src={Chain} alt="chain" className=' absolute -top-10  left-10 w-20' />
                <Heading className="text-center font-semibold  text-4xl text-black " as="h1" text="How It Works" />
                <Heading className="text-xl  mt-5  text-black" as="p" text="(Don't Worry, It's Simple)" />
                <ol className="list-decimal  mt-10 ">
                    {
                        ChainData.map((chain) => {
                            return (
                                <li className="mb-3.5" key={chain.id}>
                                    <h3 className=" font-semibold   inline-block ">{chain.step}</h3>
                                    <p className="text-black">{chain.data}</p>
                                </li>
                            )
                        })
                    }


                </ol>
            </div>


            <div className='mx-auto my-16 relative'>
                <div className='flex  items-center justify-center'>
                    <Heading className="text-center font-semibold  text-4xl text-black " as="h1" text="What's the big Idea?" />
                    <img src={creativityEmoji} className='ml-1 w-16 ' />
                </div>

                <Heading className="text-center -ml-7 text-[19px] mt-5 text-black" as="p" text="Choose your challenge. Solve something extraordinary." />
                <div className='flex flex-col justify-center items-center my-5'>
                    <ul className="list-disc ml-10 mt-5 list-inside  text-base text-black">
                        <Heading className=" text-lg mt-5 text-black" as="p" text="Some of the themes you’ll dive into:" />
                        <li className=" ml-8 text-[17px] mt-5 text-black"><b>🌏 Sustainability :</b> Because the planet needs you</li>
                        <li className="ml-8  text-[17px] mt-5 text-black"><b>💡 AI & Machine Learning :</b> Push the limits of technology</li>
                        <li className="ml-8  text-[17px] mt-5 text-black"><b>💳 FinTech :</b> Reimagine the future of money.</li>
                        <li className="ml-8  text-[17px] mt-5 text-black"><b>💼 Social Impact :</b> Change lives, one solution at a time</li>
                    </ul>

                </div>
                <img src={Ellipse1} alt='ellipse1' className=' absolute  -bottom-64 left-1  w-96 rotateCircleClk' />
            </div>

            <div className='my-32 w-[60%] mx-auto'>
                <Heading className="text-center font-medium  text-4xl text-black " as="h1" text="What Past Participants Are Saying" />
                <Heading className="text-center text-lg mt-7 text-black  w-[40%] mx-auto" as="p" text="We could tell you how amazing it is, but we’ll let them do the talking." />
                <div className='flex justify-evenly items-center my-16'>
                    <div className='relative'>
                        <img src={Feedback} alt="feedback" className='absolute -bottom-3.5 -left-1.5 w-16' />
                        <BoxA className="w-60 h-64 !py-8 boxShadow" htxt="" ptxt="“The X-Factor Hackathon didn’t just challenge us—it elevated us. The ₹50L grant transformed our idea into a product.”"
                            etxt="-Ram"
                            eclass="!mt-2" />
                    </div>


                    <div className='relative'>
                        <img src={Confetti} alt="feedback" className='absolute -top-5 -right-1.5 w-16' />
                        <BoxA className="w-60 h-64  boxShadow" htxt="" ptxt="“This was more than a competition. It was a launchpad for our dreams.” " etxt="-Riddhi" eclass="!mt-2" />
                    </div>


                </div>
            </div>
            <div className='flex flex-col justify-between items-center'>
            <Heading className="text-center font-medium  text-4xl text-black " as="h1" text="Meets our winners" />
            <Heading className="text-center text-lg mt-7 text-black  mx-auto mb-16" as="p" text="The Ones Who Made It Big" />
                <Cards />
            </div>
            <div className='my-20 flex flex-col justify-center items-center'>
                <Heading className="text-center font-medium  text-4xl text-black " as="h1" text="Let’s Build Something Epic Together" />
                <Heading className="text-center text-lg mt-7 text-black  mx-auto" as="p" text="We believe startups like yours are the key to shaping the future. Are you ready to join the legacy?" />
                <Button className="mt-12" txt="Apply Now" />
            </div>
           


        </div>
    )
}

export default Hackthon