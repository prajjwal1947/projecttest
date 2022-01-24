import React,{useState,useEffect} from 'react';
import axios from './axios'
import baseURL from './request'
import requestURL from './request'
import APIKEY from './request'
function Row({title}) {
    const[movies,setMovies]=useState([])
    useEffect(()=>{
        async function fetchData(){
            const request=await axios.get(baseURL+requestURL.fetchTrending);
            console.log(request);
            return request;
        }
        fetchData();
    },[])
  return (
  <div>
   <h1>{title}</h1>
  </div>
  )
}

export default Row;
