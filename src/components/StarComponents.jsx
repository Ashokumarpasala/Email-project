import React from 'react'
import star from '../icons/star.svg'

function StarComponents() {
  return (
    <div className='card' style={{height:"60vh"}}>
        <div className='d-flex mx-3' style={{borderBottom:"2px solid black"}}>
        <h1 className='p-3'>Stared Emails</h1>
        <img src={star} alt="" style={{width:"60px"}} />
        <img src={star} alt="" style={{width:"50px", paddingTop:"15px", paddingLeft:"5px"}} />
        <img src={star} alt="" style={{width:"40px", paddingTop:"25px", paddingLeft:"5px"}} />
        <img src={star} alt="" style={{width:"30px", paddingTop:"30px", paddingLeft:"5px"}} />
        <img src={star} alt="" style={{width:"20px", paddingTop:"40px", paddingLeft:"5px"}} />
        </div>

      
    </div>
  )
}

export default StarComponents
