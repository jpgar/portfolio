import React from 'react'
import twitter from '../assets/portfolio/twitter.png'
import snake from '../assets/portfolio/snake.png'
import weather from '../assets/portfolio/weather.png'
import myPortfolio from '../assets/portfolio/myPortfolio.png'

const Portfolio = () => {

  const portfolios = [
    {
      id: 1,
      src: twitter,
      href: 'https://twitterclone.jpgar.com/'
      
    },
    {
      id: 2,
      src: snake,
      
    },
    {
      id: 3,
      src: weather,
      href: 'https://weather-rho-one.vercel.app/'
    },
    {
      id: 4,
      src: myPortfolio,
      href: 'https://my-website-eight-nu.vercel.app/'
    },
  ]

  return (
    <div name='portfolio' className='bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen'>

      <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
        <div className='pb-8'>
          <p className='text-4xl font-bold inline border-b-4 border-gray-500'>Portfolio</p>
          <p className='py-6'>Check out my projects</p>
        </div>

        
          
            <div className='grid sm:grid-cols-2 md:grid-cols-4 gap-8 px-12 sm:px-0'>
                { portfolios.map(({id, src, href}) => (
            <div key={id} className='shadow-md shadow-gray-600 rounded-lg'>
              <img src={src} alt='' className='rounded-md duration-200 hover:scale-105' />
              <div className='flex items-center justify-center'>
              <a href={href}> <button  className='w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105'>Demo</button> </a>
              <a href='https://github.com/jpgar?tab=repositories'>  <button  className='w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105'>Code</button> </a>
              </div>
            </div>
    
           
          ))
        }
         </div>
        
      </div>

    </div>
  )
}

export default Portfolio