import React from 'react'
import Heading from '../Component/Heading'

function Article() {
   const articleData = [
    {
        id:1,
        title: 'Celebrating Innovation and Talent',
        content: 'The X-Factor Hackathon provided a platform for startups and individuals to showcase their talent while solving real-world challenges. The competition’s theme, “Driving Change Through AI,” inspired participants to bring innovative and impactful solutions to the table.',
    },{
        id:2,
        title: 'What’s Next for Trakpe?',
        content: 'With the ₹25L prize money, Trakpe plans to enhance its AI technology, expand its platform to reach more users, and partner with educational institutions and enterprises to make personalized learning accessible across India and beyond.'
    },{
        id:3,
        title: 'A Step Forward for Jaipur’s Tech Scene',
        content: 'Jaipur is rapidly emerging as a hub for tech innovation, and Trakpe’s victory at X-Factor Hackathon highlights the city’s growing influence in the AI and Ed-Tech industries. “The talent we’ve seen from Jaipur is incredible. Startups like Trakpe prove that innovation can thrive anywhere when given the right platform,” said Aditya ( X-factor Host ).'
    },{
        id:4,
        title: 'Looking Ahead',
        content: 'Building on the success of this Hackathon, X-Factor is already preparing for its next big event, focusing on AI and Green Tech innovations, scheduled for later this year. Stay tuned for more details. For further updates about X-Factor events and initiatives, visit x-factor.xyz or contact us at [info@xfactor.com].'
        
    },{
        id:5,
        title: 'About X-Factor',
        content: ' X-Factor is a leading platform for accelerating innovation and empowering startups. Through its Hackathons, Acceleration Programs, and global network, X-Factor connects bold thinkers with opportunities to scale their ideas and make a real impact.'
    }

    ]
    return (
        <div className='py-16 px-28 '>
            <section className=''>
                <Heading className="text-left font-semibold w-[52%] text-5xl text-black" as="h1"
                    text="Trakpe Wins ₹25L as Best AI Startup at X-Factor Hackathon" />

                <Heading className=" text-base mt-10 w-[80%] text-black leading-relaxed" as="p"
                    text="This past weekend, X-Factor successfully concluded its much-anticipated Hackathon,
             bringing together over 40 startups, developers, and innovators from across India, 
             including Jaipur's thriving tech scene. The event fostered a spirit of collaboration, creativity,
              and problem-solving, as participants competed to showcase cutting-edge solutions in 
              Artificial Intelligence.
            "/>

                <Heading className=" text-base mt-2.5 w-[80%] text-black leading-relaxed" as="p"
                    text=" The highlight of the Hackathon was Jaipur-based startup Trakpe, which walked away with 
            the grand prize of ₹25L for their outstanding contribution to the Ed-Tech industry. 
            Trakpe’s AI-powered platform is designed to create personalized learning pathways for 
            individuals, helping them bridge skill gaps and achieve their career goals 
            with dynamically tailored content.
            "/>

                <Heading className=" text-base mt-2.5 w-[80%] text-black leading-relaxed" as="p"
                    text=' “This Hackathon was a hub of innovation. Every team brought something extraordinary to the table. Selecting winners was a challenge, but Trakpe’s solution truly stood out for its relevance, scalability, and potential to transform education,” said [Judge Name], one of the panelists at the event."' />


            </section>

            <section className=''>

                <Heading className="text-left font-semibold w-[60%] mt-10 text-4xl text-black" as="h1"
                    text="Trakpe: Transforming Education Through AI" />
                <ul className=' list-disc list-inside ml-10'>
                    <Heading className=" -ml-5 text-base mt-5 w-[80%] text-black leading-relaxed" as="p"
                        text="Trakpe’s innovative platform leverages Artificial Intelligence to:" />
                    <li className='mt-2.5'>Analyze learners’ current skill levels.</li>
                    <li className='mt-0.5'>Design custom pathways to meet their career objectives.</li>
                    <li className='mt-0.5'>Dynamically adapt content to suit each learner’s preferences.</li>

                    <Heading className="text-black text-base mt-2.5 w-[80%] -ml-5" as="p"
                        text="Our goal is to make Skill Trainig personal, effective, and achievable for everyone,” said Chandani Soni, Founder of Trakpe. “Winning at the X-Factor Hackathon is a huge honor for us.
                     It validates our mission and gives us the boost we need to expand our platform" />
                </ul>

            </section>
            {
                articleData.map((data)=>{
                    return(
                        <section className='my-20'>
                        <Heading className="text-left font-semibold w-[60%] mt-10 text-4xl text-black" as="h1"
                            text={data.title} />
                        <Heading className=" text-base mt-7 w-[70%] text-black leading-relaxed" as="p"
                            text={data.content}/>
        
        
                    </section>
                    )
                })
            }

           
        </div>
    )
}

export default Article