import React from 'react'

import Header from './Components/Header'
import ProgramList from './Components/ProgramList'



function Home() {
  const imgs = [
    {
      "id":"1",
      "img":'img.jpeg'},
    {
      "id":"2",
      "img":'img.jpeg'},
    {
      "id":"3",
      "img":'img.jpeg'},
    {
      "id":"4",
      "img":'img.jpeg'},
    {
      "id":"5",
      "img":'img.jpeg'},
    {
      "id":"6",
      "img":'img.jpeg'},
    {
      "id":"7",
      "img":'img.jpeg'},
  ]
  return (
    <section id="home" className='overflow-y-auto max-h-screen min-w-[100%] grow'>
      <Header />
      <div className='w-9/12 mx-auto'>
        <ProgramList title="最近直播"  data={imgs} type='stream' />
        <ProgramList title="熱門演出(歷史影片)" data={imgs} type='video' />
      </div>

    </section>
  )
}

export default Home