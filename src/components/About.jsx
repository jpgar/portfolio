import React from 'react'

const About = () => {
  return (
    <div name='about' className='w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white'>

        <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
            <div className='pb-8'>
                <p className='text-4xl font-bold inline border-b-4 border-gray-500'>About</p>
            </div>

            <p className='text-xl mt-20'>
            I am Full Stack Software Engineer with knowledge in JavaScript and Python driven to solve challenging problems by building innovative modern web applications. With my background in medical research at the University of Miami and Flordia International Univesity I excel on sharing creative ideas and implementing effective solutions. 
            </p>

            <br />
            <p className='text-xl'>
            Before my Software Engineering journey, I was a pre-med student providing my help as a volunteer on the emergency department at my nearest hospital. I enjoy playing video games, reading, watching tv and learning.
            </p>
        </div>

    </div>
  )
}

export default About