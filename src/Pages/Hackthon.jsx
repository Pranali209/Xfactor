import React, { useState, useEffect } from 'react'
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
import creativityEmoji from '../assets/creativityEmoji.svg'
import Feedback from '../assets/feedback.svg'
import Confetti from '../assets/confetti.svg'
import Button from '../Component/Button'
import Cards from '../Component/Cards'
import register1 from '../assets/register1.svg'
import success4 from '../assets/success4.svg'
import idea3 from '../assets/idea3.svg'
import criteria2 from '../assets/criteria2.svg'
import line1 from '../assets/line1.svg'
import line2 from '../assets/line2.svg'
import line3 from '../assets/line3.svg'
import { useNavigate } from 'react-router-dom'
import { useLocation } from 'react-router-dom';
import Footer from '../Component/Footer'
import Header from '../Component/Headers'
function Hackthon() {
    const navigate = useNavigate()
    
    const [isclicked, setIsClicked] = useState(1)
    const [previousId, setPreviousId] = useState(null);
    const [currentIndex, setCurrentIndex] = useState(0);
    const location = useLocation();
    useEffect(() => {
        const hash = location.hash;
        if (hash) {
            const element = document.querySelector(hash);
            if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
            }
        }
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % 3);
        }, 3000);
        return () => clearInterval(interval);
    }, [location])
    const isMediumScreen = window.matchMedia('(max-width: 768px)').matches;

    function handleForm(params) {
        navigate('/form')
    }
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


    function handleIsClicked(id) {
        setPreviousId(isclicked)
        setIsClicked(id)
    }
    function handleArtcile(params) {
        navigate('/article')
    }
    return (
        <div className=' hackthon backGrid  '>
            <Header/>
            <section className='px-24 py-14 max-md:px-5'>


                <Heading className="text-left font-semibold text-3xl max-md:text-4xl text-black" as="h1" text="Hackathon 1.0 Application (SUMMER) 5/30-8/24" />
                <Heading className="text-left text-lg  max-md:text-base mt-8 text-black" as="p" text="Hey, Innovator—Think You’ve Got What It Takes?" />

                <div className='relative my-16 '>
                    <Heading className="text-left font-semibold text-3xl max-md:text-4xl text-black" as="h1" text="Let’s Talk Big Ideas" />
                    <Heading className="text-left text-lg w-[70%] max-md:w-full max-md:text-base mt-5 text-black" as="p" text="This isn’t just another hackathon. It’s THE hackathon. The X-Factor Hackathon is where the brightest minds solve the biggest challenges—and walk away with life-changing grants" />
                    <Heading className="text-left text-lg  w-[70%] max-md:w-full max-md:text-base mt-5 text-black" as="p" text="Bring your boldest ideas, build something extraordinary, and claim your spot as the next big innovator." />
                    <img src={Ellipse3} alt='ellipse1' className=' absolute top-10 -right-20 w-96 max-md:w-48 bgRotate2' />

                </div>
                <div className='my-32   max-md:w-full'>
                    <div className='flex items-start '>
                        <Heading className=" font-semibold  text-4xl text-black " as="h1" text="Prizes" />
                        <img src={PrizeIcon} className='ml-1 w-16 ' />
                    </div>

                    <section className=" max-md:overflow-hidden max-md:px-2 w-[90%] mx-auto   ">
                        <div className='flex justify-between items-center my-16 max-md:w-full  slider-container'
                            style={isMediumScreen ? { transform: `translateX(-${currentIndex * 98}%)` } : {}}>

                            <BoxA className="w-72 max-md:w-full py-14  prize1 max-md:mr-4 max-md:py-5 boxShadow slide" htxt=" 🏆1st Place:" ptxt="₹ 25L Grant" etxt="The grand prize for the idea that redefines the rules of innovation."
                                hclass="text-3xl" pclass="font-medium text-2xl !mt-2" eclass=" !text-lg mt-10 max-md:mt-5 " />
                            <BoxA className="w-72 max-md:w-full py-14 prize2 max-md:mr-4 max-md:py-5 boxShadow slide" htxt="🥈2nd Place:" ptxt="₹ 15L Grant" etxt="For the solution that’s bold, impactful, and unforgettable."
                                hclass="text-3xl" pclass="font-medium text-2xl !mt-2" eclass=" mt-10 max-md:mt-5  !text-lg " />
                            <BoxA className="w-72 max-md:w-full py-20 prize3  max-md:mr-4 max-md:py-5 boxShadow slide" htxt="🥉3rd Place:" ptxt="₹ 10L Grant" etxt="Because brilliance deserves recognition, always."
                                hclass="text-3xl" pclass="font-medium text-2xl !mt-2" eclass=" mt-10 max-md:mt-5  !text-lg" />

                        </div>
                    </section>

                    <p className='text-[#676767] text-center'>
                        Note:
                        <br />This isn’t just prize money—it’s your ticket to turning ideas into action.
                    </p>
                </div>

                <Heading className=" text-4xl max-md:text-3xl font-semibold text-black mt-20" as="h1" text="What You’ll Gain" />
                <Heading className=" text-lg max-md:text-base mt-7 mb-16 text-black  w-[60%] max-md:w-full " as="p" text="You’re here because you’re not like the rest. You’re here because you thrive on solving impossible problems. Here’s what’s waiting for you:" />
            </section>

            <section className='px-5'>


                {
                    Accadata.map((gain, index) => (
                        isclicked === gain.id ?
                            (<div className={`boxShadow  w-4xl max-md:w-fit  h-72 
                        rounded-3xl mx-auto px-10 py-10 mt-10 max-md:px-3.5 max-md:py-5 flex justify-between items-center`}>
                                <div className='max-md:w-[60%]'>
                                    <Heading className={`text-left  max-md:text-lg text-2xl text-black font-semibold ${isclicked === gain.id ? 'slide-in-right' : previousId === gain.id ? 'slide-exit' : ''}`} as="h1" text={gain.title} />
                                    <Heading className={`text-left text-base max-md:text-sm  mt-1 ml-6 max-md:ml-2 text-black w-[30rem] max-md:w-fit ${isclicked === gain.id ? 'slide-in-left' : previousId === gain.id ? 'slide-exit' : ''} `} as="p" text={gain.description} />
                                </div>
                                <img src={gain.image} alt="gain1" className=' h-36 max-md:h-20 slide-in-top' />

                            </div>) : " "
                    ))

                }
            </section>
            <div className="-mt-5 bg-[#D9D9D9] py-11 ">
                <div class="container mx-auto p-8  px-20 max-md:px-5">
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

                                            <div class="absolute top-0 -mt-8 text-center max-md:-mt-16 text-xs w-36 max-md:w-14 text-black">{head.title}</div>
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

            <div className="container relative my-28 max-md:my-16 px-7 py-16  mx-auto  w-[60%] max-md:w-full  flex flex-col justify-between items-center ">

                <Heading className="text-center font-semibold  max-md:text-3xl text-4xl text-black " as="h1" text="How It Works" />
                <Heading className="text-xl  max-md:text-base mt-5  text-black" as="p" text="(Don't Worry, It's Simple)" />

            </div>

            <section className='px-36 max-md:px-5  w-[80%] mx-auto max-md:w-[90%]'>
                <div className='flex relative '>
                    <div className='flex flex-col justify-center items-start w-[30%] mt-10 '>
                        <img src={register1} alt="register" className='h-16' />
                        <p className='mt-2.5 font-semibold'> Step 1 : Register</p>
                        <p className='mt-2.5 w-2xs'>Solo or squad? Pick your team, choose your theme, and sign up.</p>
                    </div>
                    <img src={line1} alt="line1" className='max-md:hidden  absolute left-72 top-24' />
                </div>


                <div className='flex flex-col justify-center items-end mt-24  '>
                    <img src={criteria2} alt="register" className='h-16' />
                    <p className='mt-5 font-semibold'>Step 2: Compete</p>
                    <p className='mt-5 w-[30%] max-md:w-full text-right'>You’ve got 48 hours. Bring your A-game and solve challenges that matter.</p>

                </div>

                <div className='flex relative '>
                    <div className='flex flex-col justify-center items-start mt-24 '>
                        <img src={idea3} alt="register" className='h-16' />
                        <p className='mt-5 font-semibold'> Step 3: Pitch</p>
                        <p className='mt-5 w-2xs'>Impress the judges. Wow the room. Leave your mark.</p>
                        <img src={line2} alt="line1" className=' max-md:hidden absolute -top-0.5 right-60' />
                    </div>
                </div>

               
                    <div className='flex flex-col justify-center items-end mt-24  relative '>
                        <img src={success4} alt="register" className='h-16' />
                        <p className='mt-2.5 font-semibold'> Step 4: Win</p>
                        <p className='mt-5 w-[30%] max-md:w-full text-right'>Take home grants, recognition, and a platform for your next big leap</p>
                        <img src={line3} alt="line1" className='max-md:hidden  absolute -top-32 right-28' />
                    </div>
                
               
            </section>

            <div className='my-20 relative px-24 max-md:px-5'>
                <div className='flex  items-center '>
                    <Heading className=" font-semibold  text-4xl  max-md:text-[26px] text-black " as="h1" text="What's the big Idea?" />
                    <img src={creativityEmoji} className='ml-1 w-16 ' />
                </div>



                <Heading className=" text-[19px] max-md:text-base  mt-5 text-black" as="p" text="Choose your challenge. Solve something extraordinary." />
                <div className='flex flex-col  my-5'>
                    <ul className="list-disc ml-10 max-md:ml-5 mt-5 list-inside  text-base text-black">
                        <Heading className=" text-lg mt-5 text-black" as="p" text="Some of the themes you’ll dive into:" />
                        <li className=" ml-8 max-md:ml-4 text-[17px] mt-5 text-black"><b>🌏 Sustainability :</b> Because the planet needs you</li>
                        <li className="ml-8 max-md:ml-4  text-[17px] mt-5 text-black"><b>💡 AI & Machine Learning :</b> Push the limits of technology</li>
                        <li className="ml-8 max-md:ml-4  text-[17px] mt-5 text-black"><b>💳 FinTech :</b> Reimagine the future of money.</li>
                        <li className="ml-8 max-md:ml-4 text-[17px] mt-5 text-black"><b>💼 Social Impact :</b> Change lives, one solution at a time</li>
                    </ul>

                </div>
                <img src={Ellipse1} alt='ellipse1' className=' absolute  -bottom-64 left-1  w-96 max-md:w-48 bgRotate2' />
            </div>

            <div className='my-32 w-[60%] mx-auto max-md:w-full max-md:px-5'>
                <Heading className="text-center font-medium max-md:text-3xl  text-4xl text-black " as="h1" text="What Past Participants Are Saying" />
                <Heading className="text-center text-lg mt-7 max-md:text-base text-black max-md:w-full w-[40%] mx-auto" as="p" text="We could tell you how amazing it is, but we’ll let them do the talking." />
                <div className='flex justify-evenly items-center my-16 max-md:flex-col'>
                    <div className='relative'>
                        <img src={Feedback} alt="feedback" className='absolute -bottom-3.5 -left-1.5 w-16' />
                        <BoxA className="w-64 h-72 max-md:h-60 !py-8 boxShadow" htxt="" ptxt="“The X-Factor Hackathon didn’t just challenge us—it elevated us. The ₹25L grant transformed our idea into a product.”"
                            etxt="-Chandani"
                            eclass="!mt-2" />
                    </div>


                    <div className='relative max-md:mt-10'>
                        <img src={Confetti} alt="feedback" className='absolute -top-5 -right-1.5 w-16' />
                        <BoxA className="w-64 h-72 max-md:h-60 boxShadow" htxt="" ptxt="“This was more than a competition. It was a launchpad for our dreams.” " etxt="-Riddhi" eclass="!mt-2" />
                    </div>


                </div>
            </div>
            <div id="faqSection" className='flex flex-col justify-between items-center px-8'>
                <Heading className="text-center font-medium  text-4xl text-black " as="h1" text="Meets our winners" />
                <Heading className="text-center text-lg mt-7 text-black  mx-auto mb-16" as="p" text="The Ones Who Made It Big" />
                <Cards />
            </div>
            <div className='my-20 flex flex-col justify-center items-center  px-8'>
                <Heading className="text-center font-medium  text-4xl text-black " as="h1" text="Let’s Build Something Epic Together" />
                <Heading className="text-center text-lg mt-7 text-black  mx-auto" as="p" text="We believe startups like yours are the key to shaping the future. Are you ready to join the legacy?" />
                
                <Button
                 className="mt-12" 
                 txt="Apply Now" 
                 onClick={handleForm} />
            </div>

          <Footer/>

        </div>

    )
}

export default Hackthon