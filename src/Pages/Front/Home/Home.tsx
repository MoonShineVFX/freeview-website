import React,{useState,useEffect} from 'react'

import Header from '../Components/Header'
import ProgramList from '../Components/ProgramList'
import {getNewestWorks} from '../../../Helper/getfunction'


function Home() {
  const [work,setWork] = useState([])
  useEffect(()=>{
    getNewestWorks((res)=>{
      console.log(res)
      setWork(res)
    })
  },[])

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
    <section id="home" className=' pb-44  '>
      <Header />
      <div className='w-10/12 mx-auto'>
        {/* <ProgramList title="最近直播"  data={work} type='newest' /> */}
        <ProgramList title="熱門演出(VOD)" data={work} type='videos' />
      </div>

    </section>
  )
}

export default Home