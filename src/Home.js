import React, { useEffect, useState } from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import "../node_modules/bootstrap-icons/font/bootstrap-icons.css"
import { byName, fetchExact, list, read, wash } from "./API";
import { Recruite } from "./NewResource";
import { Read } from "./Read";
import { Update } from "./Update";

export const Home=()=>{

    const[tmpArray,setTmpArray]=useState([])
    const[createView,setCreateView]=useState(false)
    const[readView,setReadView]=useState(false)
    const[updateView,setUpdateView]=useState(false)
    const[pos,setPos]=useState(0)
    const[obj,setObj]=useState({})

    const hello=()=>{
        setTmpArray(list())
    }

    useEffect(()=>{
        hello()
    },[])

    return(
        <>
            {/* <Read who="2"/> */}
            {/* <Update who="3"/> */}
            <div className="container mt-5">
                {/* <button onClick={hello}>
                    View
                </button> */}
                {(createView)?
                <>
                    <Recruite/>
                    <button className="btn btn-outline-secondary" onClick={
                        ()=>{
                            setCreateView(false)
                        }
                    }>
                        <i className="bi bi-skip-backward-btn-fill"></i> Back
                    </button>
                </>
                :
                (updateView)?
                <>
                    <Update who={pos} mention={obj}/>
                    <button className="btn btn-outline-secondary" onClick={
                        ()=>{
                            setUpdateView(false)
                        }
                    }>
                        <i className="bi bi-skip-backward-btn-fill"></i> Back
                    </button>
                </>
                :
                (readView)?
                <>
                <Read who={pos}/>
                    <button className="btn btn-outline-secondary" onClick={
                        ()=>{
                            setReadView(false)
                        }
                    }>
                        <i className="bi bi-skip-backward-btn-fill"></i> Back
                    </button>
                </>
                :
                <>
                    <button className="btn btn-outline-success mb-3"
                        onClick={()=>{
                            setCreateView(true)
                        }}>
                        <i className="bi bi-person-plus-fill"></i> New
                    </button>
                    <div className="row justify-content-center">
                        <div className="table-responsive-md">
                            <table className="col-lg-8 col-md-10 col-sm-12 table table-striped p-3 shadow rounded">
                                <thead>
                                    <tr>
                                        <th>Employee Name</th>
                                        <th>Employee Place</th>
                                        <th>Employee Commercials</th>
                                        <th>Employee Skills</th>
                                        <th>Actions</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {tmpArray.map((ele,index)=>(
                                        <tr>
                                            <td>
                                                <button className="btn btn-outline-primary" onClick={()=>{
                                                    setReadView(true)
                                                    setPos(index)
                                                }}>
                                                    <i className="bi bi-book-half"></i>
                                                </button>
                                                {ele.resName}
                                            </td>
                                            <td>{ele.resArea}</td>
                                            <td>{ele.resPay}</td>
                                            <td>{ele.resSkills}</td>
                                            <td>
                                                <button className="btn btn-outline-warning rounded-circle"
                                                onClick={()=>{
                                                    setUpdateView(true)
                                                    setPos(index)
                                                    const y=fetchExact(ele.resName)
                                                    setObj(y)
                                                }}>
                                                    Edit <i className="bi bi-pencil-fill"></i>
                                                </button>
                                            </td>
                                            <td>
                                                <button className="btn btn-outline-danger rounded-circle"
                                                onClick={()=>{
                                                    setTmpArray(wash(index))
                                                }}>
                                                    Delete <i className="bi bi-trash-fill"></i>
                                                </button>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </>
                }
            </div>
        </>
    )
}