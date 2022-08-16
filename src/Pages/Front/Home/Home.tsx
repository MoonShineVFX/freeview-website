import React from 'react'

import Header from './Components/Header'
import ProgramList from './Components/ProgramList'



function Home() {
  const imgs = ['img.jpeg','img.jpeg','img.jpeg','img.jpeg','img.jpeg','img.jpeg','img.jpeg','img.jpeg','img.jpeg','img.jpeg','img.jpeg','img.jpeg','img.jpeg']
  return (
    <section id="home">
      <Header />
      <div className='w-9/12 mx-auto'>
        <ProgramList title="最近直播"  data={imgs}/>
        <ProgramList title="熱門演出(歷史影片)" data={imgs} />
      </div>

    </section>
  )
}

export default Home