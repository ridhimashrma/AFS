import React from 'react'
import { db } from "./firebase";
import { collection, addDoc, getDocs, doc ,getDoc, updateDoc, deleteDoc  } from "firebase/firestore";

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
    let blogsData=data.docs.map((doc)=>{

    // data.forEach((doc) => {
    //   console.log(doc.id, doc.data());
    // });
    let blogData={
      id:doc.id,
      ...doc.data()
    }
    return blogData;
  });
    console.log(blogsData);
  }
  async function getBlogbyId(id) {
    let docRef=doc(db,"blogs",id);
    let response=await getDoc(docRef);
    console.log(response.data());
  }
  async function updateBlog(id){
    let docRef=doc(db,"blogs",id);
    await updateDoc(docRef,{
      title:"my updated blog ",
      desc:"this is the updated description"
    })
    getBlogbyId(id);
  }
  async function deleteBlog(id){
    let docRef=doc(db,"blogs",id);
    await deleteDoc(docRef);
    console.log("blog deleted successfully");
  }

  return (
    <div>
      <h1> firestore </h1>
      <button onClick={()=>addBlog("my first blog","this is my first blog")}>Add Blog</button>
      <button onClick={readDocs}>Read Data</button>
      <button onClick={()=>getBlogbyId("ddM2X6X295fNF1WuvqUf")}>Get Blog by Id</button>
      <button onClick={()=>updateBlog("ddM2X6X295fNF1WuvqUf")}>Update Blog</button>
      <button onClick={()=>deleteBlog("umx3DP9ku0G51fTOyRkQ")}>Delete Blog</button>

    </div>
  )
}

export default App
