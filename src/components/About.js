import React from 'react';
import CountUp from 'react-countup';
import {useInView} from 'react-intersection-observer'
import {motion} from 'framer-motion'
import { fadeIn } from '../variants';

const About = () => {
  const [ref, inView] = useInView({
    threshold:0.5,
  })
  return <section className='section' id='about' ref={ref}>
    <div className='container mx-auto'>
      <div className='flex flex-col gap-y-10 lg:flex-row lg:items-center lg:gap-x-20 lg:gap-y-0 h-screen'>
        {/* image */}
        <motion.div 
        variants={fadeIn('right', 0.3)}
        initial="hidden"
        whileInView={"show"}
        viewport={{once:false, amount:0.3}}
        className='flex-1 bg-about bg-contain bg-no-repeat h-[640px] mix-blend-lighten bg-top'></motion.div>
        {/* text */}
        <motion.div 
        variants={fadeIn('left', 0.5)}
        initial="hidden"
        whileInView={"show"}
        viewport={{once:false, amount:0.3}}
        className='flex-1'>
          <h2 className='h2 text-accent'>About me.</h2>
          <h3 className='h3 mb-4'>I'm a Freelance Front-end Develiper with over 5 years of experience.</h3>
          <p className='mb-6'>
           Greetings from my website! I am an enthusiastic software development student who places a lot of emphasis on developing websites and applications that are user-friendly. I'm excited to start this path of creating digital experiences.

React and other frameworks are of particular interest to me, and I appreciate using these potent tools to create dynamic and interactive web solutions. I enjoy using code to make ideas come to life.

In addition to having experience with front-end development, I've also experimented in back-end development using Node.js and studied databases.

UI/UX design is something I'm quite interested in, although I haven't had the chance to learn much about it yet. Also, code testing programs are of interest to me.
Thank you for visiting my web page!
         
          </p>
          {/* stats */}
          <div className='flex gap-x-6 lg:gap-x-10 mb-12'>
            <div>
              <div className='text-[40px] font-tertiary text-gradient mb-2'>
                {
                  inView ?
                  <CountUp start={0} end={13} duration={3} /> :null}
              </div>
              <div className='font-primary text-sm tracking-[2px]'>
                Years of <br />
                Experoence
              </div>
            </div>
            <div>
              <div className='text-[40px] font-tertiary text-gradient mb-2'>
                {
                  inView ?
                  <CountUp start={0} end={15} duration={3} /> :null}
                  K+
              </div>
              <div className='font-primary text-sm tracking-[2px]'>
                Projects <br />
                Completed
              </div>
            </div>
            <div>
              <div className='text-[40px] font-tertiary text-gradient mb-2'>
                {
                  inView ?
                  <CountUp start={0} end={12} duration={3} /> :null}
                  K+
              </div>
              <div className='font-primary text-sm tracking-[2px]'>
                Stisfied <br />
                Clients
              </div>
            </div>
          </div>
          <div className='flex gap-x-8 items-center'>
            <button className='btn btn-lg'>Contact me</button>
            <a href='#' className='text-gradient btn-link'>
              My Portfolio
            </a>
          </div>
        </motion.div>
      </div>
    </div>
    </section>;
};

export default About;
