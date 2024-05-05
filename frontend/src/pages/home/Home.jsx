import React from 'react'
import Sidebar from '../../components/sidebar/Sidebar'
import MessageContainer from '../../components/message/MessageContainer'

const Home = () => {
  return (
    <div className='p-2 flex sm:h-[450px] md:h-[550px] lg:h-[650px] lg:w-[900px] xl:h-[750px] xl:w-[1200px] ld rounded-xl overflow-hidden bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-0 border border-gray-600'>
      <Sidebar/>
      <MessageContainer/>
    </div>
  )
}

export default Home