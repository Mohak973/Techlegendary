import React from 'react'
import { useEffect,useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { add, filter, getdatarequest, getdatasuccess, pagedec, pageinc } from '../Redux/action'
import { store } from '../Redux/store'
import {Link,useNavigate} from "react-router-dom"




function Home() {
  const navigate=useNavigate()
  
    const dispatch=useDispatch()
   const detail=useSelector((store)=>store.data)
   const page=useSelector((store)=>store.page);
   const name=useSelector((store)=>store);
   const domain=useSelector((store)=>store.domain);
   const gender = useSelector((store)=>store.gender);
   const available=useSelector((store)=>store.available);
   const {data}=detail
  const [dom,setdom]=useState(false);
  const [gen,setgen]=useState(false);
  const [avail,setavail]=useState(false);
  const filtered = useSelector((store)=>store.data)
  
 const [count,setcount]=useState(0)
   
    const getdata=()=>{
            dispatch(getdatarequest())
            
        fetch(`https://techle.onrender.com/posts?_page=${page.page}&_limit=20`).then((res)=>res.json()).then((res)=>{
            
        dispatch(getdatasuccess(res))
        })
       
     }
    

     const handleDec=(page)=>{
      dispatch(pagedec(page.page))
     }
     const handleInc=(page)=>{
   dispatch(pageinc(page.page))
     }
     
     let last_name='';
     let first_name='';
     const handlename=(n)=>{
     let  Name =n.split(" ");
    
      first_name=Name[0];
      last_name=Name[1];
     
     console.log(first_name,last_name)
     }
     
     const handleSearch=()=>{
      fetch(`https://techle.onrender.com/posts?first_name=${first_name}&last_name=${last_name}`).then((res)=>res.json()).then((res)=>{
           dispatch(getdatasuccess(res))
      })
     }
    
     const handledomain=(d)=>{
   
   dispatch(filter(d));
      
  
     }
      const handlegender=(g)=>{
         dispatch(filter(g))
      }
    const handleavailable=(a)=>{
    a=  JSON.parse(a)
  dispatch(filter(a))
    }

    const handleAdd=(item)=>{
    dispatch(add(item));
    }
     
     

     
    useEffect(()=>{
      getdata()
      
    },[page.page])
  return (
    <div id='container'>
      <button onClick={()=>navigate("/Teampage")}>Teampage</button>
     
     <h2>Filter</h2>
     <label>Domain</label>
    <select onChange={(e)=>handledomain(e.target.value)} name='Domain' >
    <option >Domains</option>
    <option value="Sales">Sales</option>
    <option value="Finance">Finance</option>
    <option value="Marketing">Marketing</option>
    <option value="Management">Manangement</option>
    <option value="UI Designing">UI Designing</option>
    <option value="IT">IT</option>
    <option value="Business Development">Business Development</option>
    </select>
    <label>Gender</label>
    <select onChange={(e)=>handlegender(e.target.value)}>
      <option >Gender</option>
      <option value='Male'>Male</option>
      <option value='Female'>Female</option>
    </select>
    <label>Availability</label>
    <select onChange={(e)=>handleavailable(e.target.value)}>
      <option value="">Availablity</option>
      <option value="true">Yes</option>
      <option value="false">No</option>
    </select>
    <br />
      <input placeholder='Search by name' onChange={(e)=>handlename(e.target.value)}/>
      <button onClick={handleSearch}>Search</button>
  {filtered.x.length<=0?data.map((el)=>(
    <div key={el.id}>
        <img  src={el.avatar} alt='img'/>
        <h4>{el.first_name} {el.last_name} </h4>
        <p>{el.domain}</p>
        <p>{el.gender}</p>
        <p>{el.available ? "Yes" :"No"}</p>
        <button onClick={()=>handleAdd(el)}>Add to Team</button>
    </div>
  )):
 filtered.x.map((el)=>(
  <div key={el.id}>
        <img  src={el.avatar} alt='img'/>
        <h4>{el.first_name} {el.last_name} </h4>
        <p>{el.domain}</p>
        <p>{el.gender}</p>
        <p>{el.available ? "Yes" :"No"}</p>
        <button onClick={()=>handleAdd(el)}>Add to Team</button>
    </div>
 ))


}
  <button onClick={handleDec} disabled={page.page===1}>Previous</button>
  <button>{page.page}</button>
  <button onClick={handleInc}>Next</button>
    </div>
  )
}

export default Home