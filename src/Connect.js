import axios from 'axios'

const link="http://localhost:8080/POC1Backend";

export const join=async(obj)=>{
     const hai=await axios.post(`${link}/new`,obj)
     return hai;

}
export const gather=async()=>
{
   const yet= await axios.get(`${link}/home`)
   return yet;

}
export const reachOne=async(position)=>{
     const t=await axios.get(`${link}/getting/${position}`)
     return t;
}
export const UpdateOne=async(obj)=>{
     const hai=await axios.put(`${link}/update`,obj)
     return hai;
}
export const erase=async(id)=>{
  const hai=await axios.delete(`${link}/del/${id}`)
  return hai;
}
