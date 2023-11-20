import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import '../index.css';

function MainHeader({toggleSidebar}) {

  const [isOpen, setIsOpen] = useState(false);

 


  return (
    <div>
      <div class="row ">
        <div class="col">
          <div className=" my-2 p-3 " style={{backgroundColor:"grey", color:"white", width:"100%"}}>
            <div className=" my-2 py-2">
                <div className="d-flex justify-content-between">
                    {/* hamburger menu icon...... */}
                    <div className='d-flex'>
                    <div className="icon" onClick={() => {toggleSidebar(); setIsOpen(!isOpen);}} style={{ borderRadius:'50%', width:"55px", height:"55px", padding:"10px"}}>
                    <div className={`line ${isOpen ? 'link' : ''}`}></div>
                    <div className={`line ${isOpen ? 'link' : ''}`}></div>
                    <div className={`line ${isOpen ? 'link' : ''}`}></div>
                  </div>
                  <img src="https://www.computerhope.com/jargon/g/gmail.png" style={{width:"65px", height:"50px"}} alt="" />
                    <h1 className='px-3'> Gmail menu</h1>      
                  </div>
                  <div>
                  <Link to='/' style={{textDecoration:"none", color:"white"}}>
                    <div className='d-flex'>

                    <img src='https://cdn-icons-png.flaticon.com/256/25/25694.png' alt="" style={{width:"50px", paddingRight:"10px"}}/>
                     <h3> Go to Home Page</h3>
                    </div>
                    </Link>
                  </div>
                    
                    {/* <svg xmlns="http://www.w3.org/2000/svg" className='mx-3'   style={{backgroundColor:'lightgray', borderRadius:'50%', width:"45px", height:"45px", padding:"10px"}} width="30" height="30" fill="currentColor" class="bi bi-list" viewBox="0 0 16 16">
                    <path fill-rule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"/>
                  </svg> */}
                    
                </div>
              </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default MainHeader;
