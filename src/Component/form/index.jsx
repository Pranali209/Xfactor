import React from 'react'
import Heading from '../Heading'
import Button from '../Button'
import EllipseForm from '../../assets/EllipseForm.svg'
import EllipseForm2 from '../../assets/EllipseForm2.svg'
import EllipseForm3 from '../../assets/EllipseForm3.svg'
function Form() {
    return (
        <div className='my-24 max-md:px-5'>
            <Heading className="text-center max-md:text-4xl font-semibold text-5xl text-black" as="h1" text="Ready to Hack the Future ?" />
            <Heading className="text-center w-[50%]  max-md:w-full mx-auto text-lg mt-8 text-black" as="p"
                text="Join the X-Factor Hackathon and show the world what you’re made of. Fill out the form below to secure your spot!" />

            <div className='px-40 max-md:px-5 my-20 relative'>
                <img src={EllipseForm3} alt='ellipse1' className='absolute top-10 left-0 w-60 max-md:w-40 bgRotate ' />

                <Heading className="text-center font-semibold text-4xl text-black" as="h1" text="Application form " />
                <div className='mx-32 max-md:mx-3.5'>
                    <Heading className="text-left font-semibold text-2xl mt-10 -ml-5 text-black" as="h1" text="Personal Details" />
                    <Heading className="text-left text-base mt-1 text-black -ml-5" as="p"
                        text="Let’s get to know you " />

                    <div className='mt-8'>
                        <label htmlFor="fullName" className=' font-light'>Full Name *</label>
                        <input type="text" id="fullName" className="w-full p-2 mt-1.5  py-3 px-5  rounded-xl border-[1px] border-black custom-placeholder" placeholder='Full Name' />
                    </div>
                    <div className='mt-5'>
                        <label htmlFor="email" className=' font-light'>Email *</label>
                        <input type="email" id="email" className="w-full p-2 py-3 px-5 mt-1.5 rounded-xl border-[1px] border-black custom-placeholder" placeholder='Email' />
                    </div>
                    <div className='mt-5'>
                        <label htmlFor="Phone" className=' font-light'>Phone Number*</label>
                        <input type="tel" id="Phone" className="w-full p-2 mt-1.5   py-3 px-5  rounded-xl border-[1px] border-black custom-placeholder" placeholder='phone Number' />
                    </div>
                    <div className='mt-5'>
                        <label htmlFor="Location" className=' font-light'>Location *</label>
                        <input type="text" id="Location" className="w-full p-2 mt-1.5  py-3 px-5  rounded-xl border-[1px] border-black custom-placeholder" placeholder='Location' />
                    </div>
                </div>

            </div>

            <div className=' px-40 max-md:px-5  my-20 relative '>
                <img src={EllipseForm} alt='ellipse1' className=' absolute top-10 right-0  w-96 max-md:w-40 bgRotate -z-10' />
                <div className='mx-32 max-md:mx-3.5'>
                    <Heading className="text-left font-semibold text-2xl mt-10  text-black -ml-5" as="h1" text="Team Information" />
                    <Heading className="text-left text-base mt-1 -ml-5 text-black" as="p"
                        text="Flying solo or bringing a squad? " />

                    <Heading className="text-left text-lg mt-9 text-black" as="p"
                        text="Are you applying as an individual or team? " />
                    <select name="" className=' mt-2.5 border-[1px] border-black  rounded-4xl px-5 py-2.5'>
                        <option value="0">Individual/Team</option>
                        <option value="1">Individual</option>
                        <option value="2">Team</option>

                    </select>

                    <Heading className="text-left text-xl mt-9 text-black" as="p"
                        text="If Team :  " />

                    <div className='mt-5'>
                        <label htmlFor=" Team Name" className=' font-light'>Team Name*</label>
                        <input type="text" id="Team Name" className="w-full p-2 mt-1.5   py-3 px-5  rounded-xl border-[1px] border-black custom-placeholder" placeholder='Team Name' />
                    </div>

                    <div className='mt-8 flex flex-col justify-between max-md:flex-col'>
                        <div className=' max-md:w-full'>
                            <label htmlFor="Tname" className=' font-light block'>Team Members Names*</label>
                            <textarea rows="4" id="idea" className="w-full p-2 mt-1.5   py-3 px-5  rounded-xl border-[1px] border-black custom-placeholder" placeholder='Seperate them by ,' />

                        </div>
                        </div>
                    
                        <div className="mt-8 w-[40%] max-md:w-full flex-col max-md:flex-col relative">
                            <p  className=' font-light block mb-1.5'>Drop your deck Pitch</p>
                            <input type="file" id="role" className="w-full p-2 py-3 px-5 rounded-full border-[1px] border-black custom-placeholder pl-10" placeholder='Drop Your Pitch Deck' />
                            <label htmlFor="role" className="absolute left-3 top-14 transform -translate-y-1/2">
                                <i className="fas fa-upload text-gray-500"></i>
                            </label>
                        </div>

                    </div>
            

            </div>

            <div className=' px-40 max-md:px-5  my-20 relative '>
                <img src={EllipseForm2} alt='ellipse1' className=' absolute top-10 left-0 max-md:w-40 w-96 bgRotate -z-10' />
                <div className='mx-32 max-md:mx-3.5'>
                    <Heading className="text-left font-semibold text-2xl mt-10  text-black -ml-5" as="h1" text="Your Idea/Skills" />
                    <Heading className="text-left text-base mt-1 -ml-5 text-black" as="p"
                        text="Tell us about your superpowers " />
                    <div className='mt-8'>
                        <label htmlFor="theme" className=' font-light'>Which challenge/theme excites you the most?</label>
                        <input type="text" id="Theme" className="w-full p-2 mt-1.5   py-3 px-5  rounded-xl border-[1px] border-black custom-placeholder" placeholder='AI | Sustainability | FinTech | Green Tech | Social Impact' />
                    </div>
                    <div className='mt-8'>
                        <label htmlFor="idea" className=' font-light'>Briefly describe your idea or the skills you bring to the table. (Max 150 words)</label>
                        <textarea rows="4" id="idea" className="w-full p-2 mt-1.5   py-3 px-5  rounded-xl border-[1px] border-black custom-placeholder" placeholder='describe' />
                    </div>
                </div>
            </div>

            <div className=' px-40 my-20 max-md:px-5 '>
                <div className='mx-32 max-md:mx-3.5'>
                    <Heading className="text-left font-semibold text-2xl mt-10  text-black -ml-5" as="h1" text="Experience" />
                    <Heading className="text-left text-base mt-1 -ml-5 text-black" as="p"
                        text="Show us what you’ve done before" />
                    <div className='mt-8'>
                        <label htmlFor="Phone" className=' font-light block'>Have you participated in a hackathon before?</label>
                        <select name="" className=' mt-2.5 border-[1px] border-black  rounded-4xl px-5 py-2.5'>
                            <option value="0">Yes/No</option>
                            <option value="1">Yes</option>
                            <option value="2">No</option>

                        </select>

                    </div>
                    <div className='mt-8'>
                        <label htmlFor="Phone" className=' font-light'>Links to your portfolio, GitHub, or any relevant work (optional)</label>
                        <input type="text" id="Team Name" className="w-full p-2 mt-1.5   py-3 px-5  rounded-xl border-[1px] border-black custom-placeholder" placeholder=' Links to your portfolio, GitHub, or any relevant work (optional)' />
                    </div>
                </div>
            </div>

            <div className=' px-40 my-20 max-md:px-5 '>

                <div className='mx-32 max-md:mx-3.5'>
                    <Heading className="text-left font-semibold text-2xl mt-10  text-black -ml-5" as="h1" text="Acknowledgments" />
                    <Heading className="text-left text-base mt-1 -ml-5 text-black" as="p"
                        text="A quick confirmation before we get started" />
                    <div className='mt-8'>

                        <input type="checkbox" name="terms" className='rounded-full' /><label className=' font-light ml-2.5' >I understand the Hackathon rules and guidelines.</label> <br />
                        <input type="checkbox" name="terms" className='rounded-full mt-10' /><label className=' font-light ml-2.5' >I am available to participate for the full duration of the event.</label>
                    </div>

                </div>
            </div>
            <div className='mt-16 mx-auto flex justify-between items-center flex-col'>
                <Heading className="text-center font-semibold text-4xl mt-10  text-black " as="h1" text="You’re Almost In!" />
                <Heading className="text-center mx-auto text-base mt-8 w-[30%] max-md:w-full mb-10 text-black" as="p"
                    text="Thanks for applying! Keep an eye on your inbox for updates, and get ready to create something extraordinary" />
                <Button txt="Submit" />
            </div>
        </div>
    )
}

export default Form