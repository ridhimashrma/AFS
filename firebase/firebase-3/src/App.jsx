import React from 'react'
import { db } from "./firebase";
import { collection, addDoc,getDocs  } from "firebase/firestore";

const App = () => {
  async function addBlog(title,desc){
    try{
    let response=await addDoc(collection(db,"blogs"),{
      title:title,
      desc:desc
    })
    console.log(response);
  }catch (error){
    console.log(error)
  }
  }
  async function readDocs() {
    const data = await getDocs(collection(db, "blogs"));
  
    data.forEach((doc) => {
      console.log(doc.id, doc.data());
    });
  }
  

  return (
    <div>
      <h1> firestore </h1>
      <button onClick={()=>addBlog("my first blog","this is my first blog")}>Add Blog</button>
      <button onClick={readDocs}>Read Data</button>

    </div>
  )
}

export default App
