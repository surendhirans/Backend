import axios from 'axios'

const connect="http://localhost:8081/POC1Backend";

export const join=async(obj)=>{
     const hai=await axios.post(`$ {connect}/sam`,obj)
     return hai;

}
