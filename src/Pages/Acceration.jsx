import React, { useState ,useEffect } from 'react'
import Heading from '../Component/Heading'
import BoxA from '../Component/BoxA'
import gain1 from '../assets/gain1.svg'
import gain2 from '../assets/gain2.svg'
import gain3 from '../assets/gain3.svg'
import gain4 from '../assets/gain4.svg'
import Emoji from '../assets/thinkingEmoji.svg'
import Chain from '../assets/chain.svg'
import Button from '../Component/Button'
import Ellipse2 from '../assets/Ellipse2.svg'
import Ellipse1 from '../assets/Ellipse1.svg'
import Ellipse3 from '../assets/Ellipse3.svg'
import { useNavigate } from 'react-router-dom'
function Acceration() {
    const navigate = useNavigate()
    const [isclicked, setIsClicked] = useState(1)
    const [previousId, setPreviousId] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % 2);
        }, 3000);
        return () => clearInterval(interval);
    }, [])
    const isMediumScreen = window.matchMedia('(max-width: 768px)').matches;
    function handleIsClicked(id) {
        setPreviousId(isclicked) 
        setIsClicked(id)
    }
    function handleForm(params) {
        navigate('/form')
    }
    function handleArtcile(params) {
        navigate('/article')
    }
    const Accadata = [
        {
            id: 1,
            title: '1. Funding Connections',
            image: gain1,
            description: 'Get access to investors who back bold ideas and big dreams',

        },
        {
            id: 2,
            title: '2. World-Class Mentorship',
            image: gain2,
            description: 'Learn from industry leaders who know how to turn vision into reality.',

        }, {
            id: 3,
            title: '3. Tailored Strategy',
            image: gain3,
            description: 'Receive personalized guidance to refine your model, validate your product, and unlock  new markets',

        }, {
            id: 4,
            title: '4. Global Network:',
            image: gain4,
            description: 'Collaborate with a curated cohort of like-minded innovators and connect with the people  who can open the right doors.',

        },

    ]

    const heads = [
        {
            id: 1,
            title: 'Funding Connections',
        }, {
            id: 2,
            title: 'World-Class Mentorship',
        }, {
            id: 3,
            title: 'Tailored Strategy',
        }, {
            id: 4,
            title: 'Global Network',
        }
    ]
    return (
        <div className='py-16 px-5 '>
            <Heading className="text-center font-semibold text-5xl max-md:text-4xl text-black" as="h1" text="Acceleration Programme" />
            <Heading className="text-center text-lg  max-md:text-base mt-5 text-black" as="p" text="Built for Bold Startups Ready to Lead the Future." />
            <div className='relative'>
            <BoxA className="mt-12 w-4xl mx-auto px-28 max-md:px-2.5 max-md:max-w-fit" htxt="Why X-Factor Acceleration?" ptxt="This is not your average accelerator. X-Factor is where visionaries meet opportunities. If your  startup has the potential to change industries and create real impact, this is where you belong"
                etxt="We don’t just accelerate growth—we ignite transformations." pclass="text-[15px]" eclass="semibold" />
                <img src= {Ellipse3}  alt='ellipse3' className=' absolute top-10 right-0  w-96 max-md:w-48 bgRotate2' />

            </div>

            <Heading className="text-center text-4xl max-md:text-3xl font-semibold text-black mt-20" as="h1" text="What You’ll Gain" />
            <Heading className="text-center text-lg  max-md:text-base mt-5 text-black" as="p" text="Everything You Need to Scale and Succeed." />
            {
                Accadata.map((gain, index) => (
                    isclicked === gain.id ?
                        (<div className={`boxShadow  max-md:w-fit max-md:px-3.5 max-md:py-5  w-4xl h-72 rounded-3xl mx-auto px-10 py-10 mt-10 flex justify-between items-center`}>
                            <div className='max-md:w-[60%]'>
                                <Heading className={`text-left max-md:text-lg text-2xl text-black font-semibold ${isclicked === gain.id ? 'slide-in-right' : previousId === gain.id ? 'slide-exit' : ''}`} as="h1" text={gain.title} />
                                <Heading className={`text-left text-base mt-1 ml-6 max-md:text-sm max-md:ml-2 text-black w-[30rem] max-md:w-fit ${isclicked === gain.id ? 'slide-in-left' : previousId === gain.id ? 'slide-exit' : ''} `} as="p" text={gain.description} />
                            </div>
                            <img src={gain.image} alt="gain1" className=' h-36 slide-in-top max-md:h-20' />

                        </div>) : " "
                ))

            }
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

                                            <div class="absolute top-0 -mt-5 text-center max-md:-mt-16 max-md:w-14 text-xs w-36 text-black">{head.title}</div>
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
            <div className='mx-auto my-16 relative'>
                <div className='flex  items-center justify-center'>
                    <Heading className="text-center font-semibold max-md:text-3xl  text-4xl text-black " as="h1" text="Who Is This For ?" />
                    <img src={Emoji} className='ml-1 w-16 max-md:w-10 ' />
                </div>

                <Heading className="text-center -ml-7 text-[19px] max-md:text-base max-md:-ml-0.5 mt-5 text-black" as="p" text="We are Looking for the Game-Changers." />
                <div className='flex flex-col justify-center items-center my-5'>
                    <ul className="list-disc ml-10 mt-5 list-inside  text-base text-black">
                        <Heading className=" text-lg max-md:text-base mt-5 text-black max-md:ml-0" as="p" text="The X-Factor Acceleration Program is designed for startups with:" />
                        <li className="ml-8  max-md:ml-4 text-[17px] mt-5 text-black">A bold, disruptive idea</li>
                        <li className="ml-8  max-md:ml-4 text-[17px] mt-5 text-black">A vision to solve meaningful challenges</li>
                        <li className="ml-8  max-md:ml-4 text-[17px] mt-5 text-black">The drive to scale and make an impact.</li>
                    </ul>
                    <Heading className=" text-lg max-md:text-base mt-7 -ml-16 max-md:ml-0 text-black" as="p" text="If you’re redefining what’s possible, we want you." />
                </div>
                <img src= {Ellipse1}  alt='ellipse1' className=' absolute  -bottom-64 left-1 -z-10 w-96 max-md:w-48 bgRotate2' />
            </div>

            <div className="container relative my-28 py-16 mx-auto boxShadow rounded-4xl w-[60%]  max-md:w-full max-md:px-5  flex flex-col justify-between items-center ">

                <img src={Chain} alt="chain" className=' absolute -top-10  left-10 w-20 ' />
                <Heading className="text-center font-semibold max-md:text-3xl text-4xl text-black " as="h1" text= "How It Works" />
                <Heading className="text-xl  mt-5 max-md:text-base text-black" as="p"  text= "(Don't Worry, It's Simple)" />
                <ol className="list-decimal  mt-10 max-md:px-2.5 ">
                    <li className="mb-3.5">
                        <h3 className=" font-semibold   inline-block ">Step 1: Apply</h3>
                        <p className="text-black">Share your vision with us and show us why your startup is extraordinary.</p>
                    </li>
                    <li className="mb-3.5">
                        <h3 className="font-semibold inline-block">Step 2: Selection</h3>
                        <p className="text-black">We handpick startups that align with our mission to shape the future.</p>
                    </li>
                    <li className="mb-3.5">
                        <h3 className="font-semibold inline-block ">Step 3: Accelerate</h3>
                        <p className="text-black">Embark on an intense journey of growth, learning, and transformation.</p>
                    </li>
                    <li>
                        <h3 className="font-semibold inline-block ">Step 4: Demo Day</h3>
                        <p className="text-black">Pitch your progress to top investors, industry leaders, and global partners.</p>
                    </li>
                </ol>
            </div>

            <div className='my-32 w-[60%] mx-auto max-md:w-full'>
            <Heading className="text-center font-medium max-md:text-3xl text-4xl text-black " as="h1" text="Startups That Have Found Their X-Factor." />
             <section className=" max-md:overflow-hidden max-md:px-2 ">
             <div className='flex justify-evenly items-center my-16  max-md:w-full  slider-container'
              style={isMediumScreen ? { transform: `translateX(-${currentIndex * 98}%)` } : {}}>
                <BoxA className= "w-52 max-md:mr-3.5 max-md:w-full slide py-12 boxShadow" htxt="" ptxt="Highlight testimonials or case studies"/>
                <BoxA className= "w-52 max-md:mr-3.5 max-md:w-full slide py-12 boxShadow" htxt="" ptxt="Highlight testimonials or case studies"/>
             </div>
             </section>
            </div>
            <div className='my-28 max-md:my-10 w-[60%] mx-auto  max-md:w-full relative'>
            <Heading className="text-center font-medium max-md:text-3xl  text-4xl text-black " as="h1" text="Ready to Accelerate Your Vision?" />

            <Heading className="text-center -ml-7 max-md:ml-0  text-[19px] max-md:text-base mt-10 text-black" as="p" text="The X-Factor Acceleration Program is built for startups like yours. Take the leap today" />
            <div className='my-14 flex  justify-center'>
            <Button className="mr-5" txt= "Learn More" onClick={handleArtcile}/>
            <Button txt= "Apply Now" onClick={handleForm}/>
            <img src= {Ellipse2}  alt='ellipse2' className=' absolute  -bottom-36 max-md:bottom-40 -right-[19rem] max-md:right-1  w-96 max-md:w-48 rotateCircleClk' />
            </div>
            </div>
        </div>
    )
}

export default Acceration