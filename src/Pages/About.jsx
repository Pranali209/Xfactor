import React, { useEffect, useState } from 'react';
import Button from '../Component/Button';
import about1 from '../assets/about1.svg'
import about2 from '../assets/about2.svg'
import about3 from '../assets/about3.svg'
import { useNavigate } from 'react-router-dom'
import Header from '../Component/Headers';
import Footer from '../Component/Footer';
import Heading from '../Component/Heading';

const AboutUs = () => {
  const navigate = useNavigate()
  const [currentIndex, setCurrentIndex] = useState(0);





  function handleForm(params) {
    navigate('/form');
  }


  return (
    <div className='  backGrid ' >
     <section className=' backX'>
      <Header />
      <section className='px-24 w-[80%] max-md:px-5 max-md:w-full'>
        <Heading className="text-2xl mb-5 font-semibold " as="h1" text="Where Innovators Take the Lead " />
        <Heading className="text-[17px] mt-5  text-gray-800" as="p"
          text="At X-Factor, we don’t believe in playing it safe. We exist for those who challenge the norm, push boundaries, and build what others only dream of. If you’re the kind of person who sees problems as opportunities and dares to create the future, you’ve found your place." />

        <p className='mt-8 text-gray-800'>This is <b>Not for EveryOne</b></p>

        <p className='mt-0.5 text-gray-800 '>Most people follow the rules. X-Factor is for those who rewrite them.
        </p>
        <p className='mt-0.5 text-gray-800'>We are here for:</p>
        <ul className=' list-disc list-inside text-gray-800'>
          <li className='ml-1.5'>The problem-solvers who see what could be, not just what is.</li>
          <li className='ml-1.5'>The relentless minds who turn frustration into innovation.</li>
          <li className='ml-1.5'>The ones who won’t settle for anything less than extraordinary.</li>
        </ul>
        <p className='mt-0.5 text-gray-800'>
        If you thrive on breaking barriers, you belong here.</p>

        <Heading className="text-2xl mt-8 font-semibold " as="h1" text=" Concretely  " />
        <p className='mt-5 text-gray-800'> X-Factor is not just a startup accelerator or a hackathon—it’s a launchpad for the boldest ideas and brightest minds. We create spaces where:
       </p>
       <ul className='mt-5 text-gray-800'>
         <li className='mt-0.5 text-gray-800'>- Startups scale faster with access to world-class mentorship, funding, and networks.</li>
         <li className='mt-0.5 text-gray-800'>- Hackers and builders solve real-world challenges with cutting-edge solutions. </li>
         <li className='mt-0.5 text-gray-800'>- Game-changing innovations come to life through collaboration, resources, and execution. </li>
       </ul>
       <p className='mt-5 text-gray-800'> We give you the tools, the support, and the environment—the rest is up to you.
       </p>

       <Heading className="text-2xl mt-8 font-semibold " as="h1" text=" No Rules. Just Results. " />
       <p className='mt-5 text-gray-800'> We don’t believe in rigid structures, unnecessary bureaucracy, or following outdated playbooks. Instead, we believe in: 
       </p>
       <ul className=' list-inside text-gray-800 mt-5'>
          <li className='ml-1.5'>🧠 First-principles thinking – Question everything, rebuild from the ground up.
          </li>
          <li className='ml-1.5'>⚡ Execution over ideas – The best idea means nothing without action.</li>
          <li className='ml-1.5'>🔬 Tech-driven progress – Innovation should move humanity forward.
          </li>
          <li className='ml-1.5'>🔥 Going all in – If you're not fully committed, you're wasting time.
          </li>
        </ul>

        <Heading className="text-2xl mt-8 font-semibold " as="h1" text=" The Future Starts Here" />
        <p className='mt-5 text-gray-800'> At X-Factor, we’re building something different. A place where the next generation of groundbreaking startups and revolutionary technologies will emerge.
       </p>
       <p className='mt-5 text-gray-800'>
       This isn’t just another program. <b>It’s a movement.
       </b></p>
       <p className='mt-0.5 text-gray-800'>
       Are you ready to be part of it?</p>
           <Button className="!w-44 !px-0.5 my-10  max-md:mx-auto max-md:mt-5" txt="Join the Movement" onClick={handleForm} /> 
      </section>

      <Footer/>







  
      </section>
    </div>
  );
}

export default AboutUs;
