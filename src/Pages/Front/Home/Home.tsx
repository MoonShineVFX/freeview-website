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