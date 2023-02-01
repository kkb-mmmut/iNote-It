import React,{useState,useEffect} from 'react';
import { Frown } from 'react-feather';
import Model from './Core/Model';
import Navbar from './Core/Navbar';
import SinglePage from './Core/SinglePage'; 
import "./App.css";

const App = () => {
    const [data, setData] = useState([])

    useEffect(()=>{
        setData(JSON.parse(localStorage.getItem('myNotes')) || [])
    },[])

    const [showModal, setShowModal] = useState(false)

    const refresher = () =>{
        setData(JSON.parse(localStorage.getItem('myNotes')) || [])
    }

  return (
    <>
    <Navbar setShowModal={setShowModal} data={data} setData={setData} refresher={refresher}/>
    {showModal &&
    <Model showModal={showModal} setShowModal={setShowModal} refresher={refresher}/>
    }

    {/* notes */}
    <div className='row justify-content-between mx-0 p-5'>
        {!data.length ?
        <h1 className='text-center display-1 fw-light text-seconday my-5'>
            <Frown size={100}/> No Notes. Create new one.
        </h1>
    :
        data.map((item,i)=>(
            <SinglePage key={item.id} item={item} refresher={refresher}/>
        ))
    }
    </div>
    </>
  )
}

export default App;