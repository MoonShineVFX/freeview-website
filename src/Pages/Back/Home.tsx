import React, { useState, useEffect } from 'react'
import { useRecoilState } from 'recoil';
import { formDisplayState,formStatusState,workState } from './atoms/fromTypes';

//components
// import EditForm from './Components/EditForm';
import WorkForm from './Components/WorkForm';
// react-confirm-alert
import { confirmAlert } from 'react-confirm-alert'; 
import 'react-confirm-alert/src/react-confirm-alert.css'; 

//helper
import {getAllWorksForDashboard ,getCategory, getNextWorkForDashboard,getPrevWorkForDashboard,createWork,deleteWork,updateWork,createMsgBaord} from '../../Helper/getfunction'
import {LoadingAnim} from '../../Helper/HelperComponents'
//檔案上傳方法
import { useStorage } from "../../Helper/useStorage";

function Home(props:{types:string}) {
  const [workData, setWorkData] = useState([]);
  const [categoryData, setCategoryData] = useState([]);
  const [showModal, setShowModal] = useRecoilState(formDisplayState);
  const [formStatus, setFormStatus] = useRecoilState(formStatusState);
  const [singleWork, setSingleWork] = useRecoilState(workState);

  const [file, setFile] = useState<object | null>(null);
  const [error, setError] = useState<string | null>(null);
  const types = ["image/png", "image/jpeg", "image/jpg"];
  // 若setFile有資料會執行檔案上傳
  const { progress, url } = useStorage(file);

  const fetchWorkDoneFun = (customStr, res)=>{
    setShowModal(false)
    if(res === 'success'){
      getAllWorksForDashboard((res)=>{
        setWorkData(res)
      })
    }else{
      showErrorAlert(customStr,res)
    }
  }
  const showErrorAlert = (str,res) =>{
    confirmAlert({
      title: str+ res,
      buttons: [
        {
          label: '確定',
        },
        {
          label: '取消',
        }
      ]
    });
  }

  const handleCreateWork = (data) =>{
    let currentDate = Date.now().toString(36)
    let currentData ={
      "id": currentDate,
      "time_added": new Date(+new Date() + 8 * 3600 * 1000).toISOString().replace(/T/, ' ').replace(/\..+/, '')  ,
      "title": data.title,
      "eng_title":data.eng_title,
      "intro": data.intro,
      "video_host": data.video_host,
      "video_url": data.video_url,
      "sort_num": data.sort_num ? data.sort_num : '666',
      "display":data.display ,
      "category":data.category ? data.category : '1',
      "msg_board_video_id":currentDate,
      "years":data.years,
      "total_duration":data.total_duration,
      "resolution":data.resolution
    }
    let newboardData = {
      "id": Date.now().toString(36),
      "v_id": currentDate,
      "msg":{}
    }
    createWork(currentData,function(res){
      console.log(res)
      fetchWorkDoneFun('新增資料失敗，錯誤訊息:',res)
    })
    createMsgBaord(newboardData,function(res){
      console.log(res)
      fetchWorkDoneFun('新增資料失敗，錯誤訊息:',res)
    })
  }

  const handleEditWork = (uid,data) =>{
    let selectedFile = data.file[0];
    // 設定圖檔重新命名
    const imgFileName:string = Date.now()+'.jpg'
    let currentDataWithoutImg ={
      "title": data.title,
      "eng_title":data.eng_title,
      "intro": data.intro,
      "video_host": data.video_host,
      "video_url": data.video_url,
      "sort_num": data.sort_num ,
      "display":data.display,
      "category":data.category,
      "years":data.years,
      "total_duration":data.total_duration,
      "resolution":data.resolution
    }
    // 如果有圖檔存在 執行新增資料 否則不執行
    if (selectedFile) {
      if (types.includes(selectedFile.type)) {
          setError(null);
          setFile({
            "filename":imgFileName,
            "file":selectedFile,
            "folder":'img_videos/',
            "maxWidth":517,
            "maxHeight":290,
            "compressFormat":"JPEG",
            "quality":75
          });
      } else {
          setFile(null);
          setError("Please select an image file (png or jpg)");
      }
      updateWork(uid,{...currentDataWithoutImg , "img": imgFileName },function(res){
        console.log(res)
        fetchWorkDoneFun('編輯資料失敗，錯誤訊息:',res)

      })
    } else{
      updateWork(uid,currentDataWithoutImg,function(res){
        console.log(res)
        fetchWorkDoneFun('編輯資料失敗，錯誤訊息:',res)
      })
    }

  }
  const onDelete = (uid)=>{
    confirmAlert({
      title: '確認刪除這筆資料',
      buttons: [
        {
          label: '確定',
          onClick: () =>  deleteWork(uid,function(res){
            fetchWorkDoneFun('刪除資料失敗，錯誤訊息:',res)
          })
        },
        {
          label: '取消',
        }
      ]
    });
   
  }
  console.log(props.types)
  useEffect(()=>{
    getAllWorksForDashboard((res)=>{
      setWorkData(res)
      console.log(res)
    })
    // getCategory((res)=>{
    //   setCategoryData(res)
    // })

  },[])

  return (
    <div className='w-full bg-white p-5 text-black relative'>
      <div className='w-full border-b mb-10'>
        <h1>{props.types === 'history'? '管理VOD影片' : '管理直播影片'}</h1>
      </div>
      <button 
        className='text-xs  rounded-md bg-black text-white py-2 px-6 hover:bg-slate-600'
        onClick={() => {
          setShowModal(true);
          setFormStatus('ADD')
        }}
      >新增 </button>
      <div id="table" className='w-full mt-5' >
        <table className="table-auto   border border-slate-200 w-full rounded-md ">
          <thead>
            <tr>
              <th className='bg-zinc-100 border-b border-zinc-300 text-left'>作品ID</th>
              <th className='bg-zinc-100 border-b border-zinc-300 text-left'>排序</th>
              <th className='bg-zinc-100 border-b border-zinc-300 text-left'>作品名稱</th>
              <th className='bg-zinc-100 border-b border-zinc-300 text-left'>位置</th>
              <th className='bg-zinc-100 border-b border-zinc-300 text-left'>狀態</th>
              <th className='bg-zinc-100 border-b border-zinc-300 text-left'>上傳日期</th>
              <th className='bg-zinc-100 border-b border-zinc-300 text-left'>編輯</th>
            </tr>
          </thead>
          <tbody className='divide-y divide-slate-200'>
            {
              workData ?
              workData.map((item,index)=>{
                const {uid,id, display, title, time_added,category,sort_num,msg_board_video_id,video_host,video_url} =item
                return(
                  <tr className=' hover:bg-zinc-200' key={id+title}>
                    <td className='p-2 text-xs'>{id} </td>
                    <td className='p-2 text-xs'>{sort_num}</td>
                    <td className='p-2 text-xs'>{title}</td>
                    <td className='p-2 text-xs'>
                    {video_host}/{video_url}
                      {/* {categoryData.map((item) => {
                        if(item['id'] === category)
                          return <div key={item['id']}>{item['name']}</div>
                      })} */}
                    </td>
                    <td className='p-2 text-xs'>{display === '1' ? '顯示' : '不顯示'}</td>
                    <td className='p-2 text-xs'>{time_added}</td>
                    <td className='p-2 text-xs'>
                      <button 
                      className='text-xs  rounded-md bg-black text-white py-2 px-6 hover:bg-slate-600 '
                      onClick={() => {
                        setShowModal(true);
                        setSingleWork(item)
                        setFormStatus('EDIT')
                      }}>編輯</button>
                      <button 
                      className='text-xs  rounded-md bg-black text-white py-2 px-6 hover:bg-slate-600 '
                      onClick={()=> {onDelete(uid)}}>刪除</button>

                    </td>
                  </tr>
                )
              }): <LoadingAnim />
            }

          
          </tbody> 
        </table>
      </div>
      {showModal && <WorkForm categoryData={categoryData} handleCreateWork={handleCreateWork} handleEditWork={handleEditWork} />}
    </div>
  )
}

export default Home