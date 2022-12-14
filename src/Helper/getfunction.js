// firebase 資料庫連線
import db from '../firebaseConfig/firebase'
import {collection, query,  getDocs,orderBy,where,limit,limitToLast,startAfter,endBefore,getDoc,addDoc,deleteDoc,doc,updateDoc,onSnapshot,arrayUnion, arrayRemove} from "firebase/firestore"
import { getStorage, ref, getDownloadURL,  } from "firebase/storage";
import { async } from '@firebase/util';
const storage = getStorage();





/**
 * 到 firebase 撈作品資料表 全部
 * 資料先傳到 mapDataWithImage 處理過圖片路徑再回傳 setWorkData 給網頁用 
 * 條件 display 1 設定顯示的
 * **/ 
export const getWorks = async (callback)=>{
  const q = query(collection(db, "data"),orderBy('time_added' , 'desc'), where("display", "==", '1'))
  const data = await getDocs(q);
  mapDataWithImage('data',data.docs.map(doc=> doc.data()),function(res){
    callback(res)
  })
}




const mapDataWithUid = async (data, callback)=>{
  let dataSorted = data.sort(function(a, b) {
    return b.sort_num - a.sort_num;
  });
  let latestSortNum = (parseInt(dataSorted[0].sort_num)+1).toString()
  const twoarr= dataSorted.map( async (element) => {

    return {...element , latestSortNum :latestSortNum}
   
  })
  callback(await Promise.all(twoarr))
}


/**
 * 到 firebase 撈分類資料表
 * 不用處理圖片路徑的 直接 set
 * **/ 
 export const getCategory = async (callback)=>{
  const q = query(collection(db, "category"))
  const data = await getDocs(q);
  // mapCategoryData(data.docs.map(doc=> doc.data()))
  callback(data.docs.map(doc=> doc.data()))
}


/**
 * query by catergory id
 * 按分類 分好作品  給ROW用
 * **/
export const queryByCategoryId = async (cid,callback)=>{

  const q = query(collection(db, "data"), where("category", "==", cid),orderBy('time_added' , 'desc'), where("display", "==", '1'),limit(15));
  const data = await getDocs(q);
  // console.log(data.docs.map(doc=> doc.data()))
  mapDataWithImage('data',data.docs.map(doc=> doc.data()),function(res){
    callback(res)
  })
}


/**
 * 按照分類ID 取得作品的 並且分頁
 * lastestdoc 很重要
 * **/
let latestDoc = null
export const getWorksByCategoryAndLimits = async (cid,callback)=>{

  const q = query(collection(db, "data"), 
    where("category", "==", cid),
    orderBy('time_added' , 'desc'), 
    where("display", "==", '1'))
    ;
  const data = await getDocs(q);
  latestDoc = data.docs[data.docs.length -1 ]


  mapDataWithImage('data',data.docs.map(doc=> doc.data()),function(res){
    callback(res)
  })
}

export const getNextWorksByCategoryAndLimits = async (cid,callback)=>{
  const q = query(collection(db, "data"), 
    where("category", "==", cid),
    orderBy('time_added' , 'desc'),
    startAfter(latestDoc),
    where("display", "==", '1'),limit(10))
    ;
  const data = await getDocs(q);


  mapDataWithImage('data',data.docs.map(doc=> doc.data()),function(res){
    callback(res)
  })
}






 //admin category
 export const getAllCategoryForDashboard = async (callback)=>{
  const q = query(collection(db, "category"),orderBy('sort_num' , 'desc'))
  const data = await getDocs(q);
  mapDataWithUid(data.docs.map(doc=> ({...doc.data(),uid:doc.id})),function(res){
    callback(res)
  })
}

export const createCategory = async (data , callback)=>{
  const collectionRef = collection(db ,"category")
  try {
    await addDoc(collectionRef,data)
    callback('success')
  } catch (error) {
    callback(error)
  }
}
export const deleteCategory = async(uid,callback)=>{
  const categoryDoc = doc(db , 'category' , uid)
  
  try {
    await deleteDoc(categoryDoc)
    callback('success')
  } catch (error) {
    callback(error)
  }
}
export const updateCategory = async (uid,currentData,callback)=>{
const categoryDoc = doc(db , 'category' , uid)
  
  try {
    await updateDoc( categoryDoc ,currentData)
    callback('success')
  } catch (error) {
    callback(error)
  }
}

// admin Award
export const getAwardForDashboard = async (callback) => {
  const q = query(collection(db, "awards"))
  const data = await getDocs(q);
  mapDataWithImage('img_award',data.docs.map(doc=> ({...doc.data(),uid:doc.id})),function(res){
    callback(res)
  })
}

export const createAward = async (data , callback)=>{
  const collectionRef = collection(db ,"awards")
  try {
    await addDoc(collectionRef,data)
    callback('success')
  } catch (error) {
    callback(error)
  }
}
export const deleteAward = async(uid,callback)=>{
  const awardDoc = doc(db , 'awards' , uid)
  try {
    await deleteDoc(awardDoc)
    callback('success')
  } catch (error) {
    callback(error)
  }
}
export const updateAward = async (uid,currentData,callback)=>{
  const awardDoc = doc(db , 'awards' , uid)
  try {
    await updateDoc( awardDoc ,currentData)
    callback('success')
  } catch (error) {
    callback(error)
  }
}

//admin service
export const getServiceForDashboard = async (callback) => {
  const q = query(collection(db, "service"))
  const data = await getDocs(q);
  mapDataWithImage('img_service',data.docs.map(doc=> ({...doc.data(),uid:doc.id})),function(res){
    callback(res)
  })
}

export const createService = async (data , callback)=>{
  const collectionRef = collection(db ,"service")
  try {
    await addDoc(collectionRef,data)
    callback('success')
  } catch (error) {
    callback(error)
  }
}
export const deleteService = async(uid,callback)=>{
  const serviceDoc = doc(db , 'service' , uid)
  try {
    await deleteDoc(serviceDoc)
    callback('success')
  } catch (error) {
    callback(error)
  }
}
export const updateService = async (uid,currentData,callback)=>{
  const serviceDoc = doc(db , 'service' , uid)
  try {
    await updateDoc( serviceDoc ,currentData)
    callback('success')
  } catch (error) {
    callback(error)
  }
}

/** Freeview Helper function -- start **/
/** Freeview Helper function -- start **/
/** Freeview Helper function -- start **/
/** Freeview Helper function -- start **/
/** Freeview Helper function -- start **/
/** Freeview Helper function -- start **/
/** Freeview Helper function -- start **/

/**
 * 到 firebase 撈作品資料表 
 * 資料先傳到 mapDataWithImage 處理過圖片路徑再回傳 setWorkData 給網頁用 
 * 條件 display 全部 要給後台用(admin) 
 * **/ 
export const getAllWorksForDashboard = async (callback)=>{
  const q = query(collection(db, "data"),orderBy('time_added' , 'desc'),limit(12))
  const data = await getDocs(q);

  mapDataWithImage('img_videos',data.docs.map(doc=> ({...doc.data(),uid:doc.id})),function(res){
    callback(res)
  })
}

export const getNextWorkForDashboard = async (item , callback) => {
  const q = query(collection(db, "data"),orderBy('time_added' , 'desc'),startAfter(item.time_added),limit(12))
  const data = await getDocs(q);
  mapDataWithImage('data',data.docs.map(doc=> ({...doc.data(),uid:doc.id})),function(res){
    callback(res)
  })
}

export const getPrevWorkForDashboard = async (item , callback) => {
  const q = query(collection(db, "data"),orderBy('time_added' , 'desc'),endBefore(item.time_added),limitToLast(12))
  const data = await getDocs(q);
  mapDataWithImage('data',data.docs.map(doc=> ({...doc.data(),uid:doc.id})),function(res){
    callback(res)
  })
}

export const getSearchWork = async (search , callback)=>{
 //TODO
}


// 新增作品後會新增一個留言板
export const createWork = async (data , callback)=>{
  const collectionRef = collection(db ,"data")

  try {
    await addDoc(collectionRef,data)
    callback('success')
  } catch (error) {
    callback(error)
  }
}
export const deleteWork = async(uid,callback)=>{
  const workDoc = doc(db , 'data' , uid)
  
  try {
    await deleteDoc(workDoc)
    callback('success')
  } catch (error) {
    callback(error)
  }
}
 export const updateWork = async (uid,currentData,callback)=>{
  const workDoc = doc(db , 'data' , uid)
   
    try {
      await updateDoc( workDoc ,currentData)
      callback('success')
    } catch (error) {
      callback(error)
    }
 }
//Msg Board 留言板
export const createMsgBaord = async (data,callback)=>{
console.log(data)
  const msgboardRef = collection(db ,"msg_board")
  try {
    await addDoc(msgboardRef,data)
    callback('success')
  } catch (error) {
    callback(error)
  }
}
export const updateMsgBaord = async (uid,currentData,callback)=>{
  const workDoc = doc(db , 'msg_board' , uid)
   
    try {
      await updateDoc( workDoc ,currentData)
      callback('success')
    } catch (error) {
      callback(error)
    }
 }

 export const getMsgBoardById = async (id,callback)=>{
  // const docRef = doc(db ,"msg_board", id)
  const q = query(collection(db, "msg_board"), where("v_id", "==", id))

  try {
    const snapshot = await getDocs(q);

    snapshot.docs.map((doc)=>{
      callback({...doc.data(),uid:doc.id})
    })
  } catch(error) {
    return callback(error)
  }
 }

 export const updateMsgBoardById = async (uid,currentData,callback)=>{
  const docRef = doc(db ,"msg_board", uid)
  try{
    await updateDoc(docRef, {
      msg: arrayUnion(currentData)
    });
  }catch(error){

  }
 }

//Chat room Message
export const getMessage = async (callback) =>{
  const q = query(collection(db, "message"),orderBy('createdAt' , 'desc'),limit(100))
  const unsubscribe = await onSnapshot(q,(querySnapshot)=>{
      const data =querySnapshot.docs.map(doc=>({...doc.data(),id:doc.id}))
      callback(data)
  });
}
export const createMessage = async (data,callback)=>{
  const collectionRef = collection(db ,"message")
  try {
    await addDoc(collectionRef,data)
    callback('success')
  } catch (error) {
    callback(error)
  }
}

//取歷史影片作品
/**
 * 取7筆資料
 * **/
 export const getNewestWorks = async (callback) =>{
  const q = query(collection(db, "data"),orderBy('time_added' , 'desc'), where("display", "==", '1'),limit(7))
  const data = await getDocs(q);
  mapDataWithImage('img_videos',data.docs.map(doc=> doc.data()),function(res){
    callback(res)
  })
}

//由id取得單筆作品
export const getWorkById = async (id,callback)=>{
  const q = query(collection(db,'data'),where('id', '==' , id))
  try{
    const snapshot = await getDocs(q);

    snapshot.docs.map((doc)=>{
      callback({...doc.data(),uid:doc.id})
    })
  }catch(error){
    callback(error)
  }
}

// 處理作品的圖片路徑
const mapDataWithImage =async (folder,data , callback)=>{
  let dataSorted = data.sort(function(a, b) {
    return b.sort_num - a.sort_num;
  });
  const twoarr= dataSorted.map( async (element) => {
    const imagesRef = ref(storage, `${folder}/${element.img}`);
    const newimgurl = await getDownloadURL(imagesRef).catch((error) => {
      console.log(error.code)
      switch (error.code) {
        case 'storage/object-not-found':
          break;
        case 'storage/unauthorized':
          break;
        case 'storage/canceled':
          break;
        case 'storage/unknown':
          break;
        default:
          console.log('');
      }
    });
    return {...element , imgpath :newimgurl}
  });
  callback(await Promise.all(twoarr))
};