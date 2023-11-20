import React, { useState } from 'react';
import { Link } from 'react-router-dom';


const Sidebar = ({toggleSidebar}) => {
  
  const [dropdownOpen, setDropdownOpen] = useState(true);
 
  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  const [activeItem, setActiveItem] = useState(false);

  
  

  return (
    <>
        {/* sidebar....... */}
        <div 
            className='p-4' 
            style={{
              width: toggleSidebar ? '400px' : '100px',
              minWidth: '0',
              height: '100vh',
              overflowX: 'hidden',
              backgroundColor: 'grey',
              animation: toggleSidebar ? 'openSidebar 0.5s ease-in' : 'closeSidebar 0.5s ease-in',
              transition: 'opacity 3s' // Add transition for opacity
            }}
          >    
        <div 
        className="card my-1 py-2" >
        <div className="d-flex" onClick={() => setActiveItem(activeItem)}>
                { toggleSidebar ? 
                <>

                <svg xmlns="http://www.w3.org/2000/svg" className=' my-2' width="25" height="25" style={{marginLeft:"30px"}} fill="currentColor" class="bi bi-pen-fill" viewBox="0 0 16 16">
                  <path d="m13.498.795.149-.149a1.207 1.207 0 1 1 1.707 1.708l-.149.148a1.5 1.5 0 0 1-.059 2.059L4.854 14.854a.5.5 0 0 1-.233.131l-4 1a.5.5 0 0 1-.606-.606l1-4a.5.5 0 0 1 .131-.232l9.642-9.642a.5.5 0 0 0-.642.056L6.854 4.854a.5.5 0 1 1-.708-.708L9.44.854A1.5 1.5 0 0 1 11.5.796a1.5 1.5 0 0 1 1.998-.001z"/>
                </svg>
              <Link to='/compose' style={{textDecoration:"none", color:"black"}}>

                <h5 className='m-2' >
                 compose
                </h5> 
                </Link>
                </>
                : 
                <svg xmlns="http://www.w3.org/2000/svg" className='mx-3' width="25" height="25" fill="currentColor" class="bi bi-pen-fill" viewBox="0 0 16 16">
                <path d="m13.498.795.149-.149a1.207 1.207 0 1 1 1.707 1.708l-.149.148a1.5 1.5 0 0 1-.059 2.059L4.854 14.854a.5.5 0 0 1-.233.131l-4 1a.5.5 0 0 1-.606-.606l1-4a.5.5 0 0 1 .131-.232l9.642-9.642a.5.5 0 0 0-.642.056L6.854 4.854a.5.5 0 1 1-.708-.708L9.44.854A1.5 1.5 0 0 1 11.5.796a1.5 1.5 0 0 1 1.998-.001z"/>
              </svg>
                }
            </div>

          </div>

          <div 
        className="card my-2 py-2" 
       
      >
        <div className="d-flex" onClick={() => setActiveItem(activeItem)}>
              {toggleSidebar ? 
                <>
                <svg xmlns="http://www.w3.org/2000/svg" className=' my-2' width="25" height="25" style={{marginLeft:"30px"}}fill="currentColor" class="bi bi-card-image" viewBox="0 0 16 16">
                  <path d="M6.002 5.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z"/>
                  <path d="M1.5 2A1.5 1.5 0 0 0 0 3.5v9A1.5 1.5 0 0 0 1.5 14h13a1.5 1.5 0 0 0 1.5-1.5v-9A1.5 1.5 0 0 0 14.5 2h-13zm13 1a.5.5 0 0 1 .5.5v6l-3.775-1.947a.5.5 0 0 0-.577.093l-3.71 3.71-2.66-1.772a.5.5 0 0 0-.63.062L1.002 12v.54A.505.505 0 0 1 1 12.5v-9a.5.5 0 0 1 .5-.5h13z"/>
                </svg>
                <Link to='/inbox' style={{textDecoration:"none", color:"black"}}>

                <h5 className='m-2'>
                 inbox                    
                </h5>
                </Link>

                </> :
                <svg xmlns="http://www.w3.org/2000/svg" className='mx-3' width="25" height="25" fill="currentColor" class="bi bi-card-image" viewBox="0 0 16 16">
                <path d="M6.002 5.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z"/>
                <path d="M1.5 2A1.5 1.5 0 0 0 0 3.5v9A1.5 1.5 0 0 0 1.5 14h13a1.5 1.5 0 0 0 1.5-1.5v-9A1.5 1.5 0 0 0 14.5 2h-13zm13 1a.5.5 0 0 1 .5.5v6l-3.775-1.947a.5.5 0 0 0-.577.093l-3.71 3.71-2.66-1.772a.5.5 0 0 0-.63.062L1.002 12v.54A.505.505 0 0 1 1 12.5v-9a.5.5 0 0 1 .5-.5h13z"/>
              </svg>
              }
            </div>
          </div>

          <div className="card my-2 py-2">
            <div className="d-flex">
              {toggleSidebar ? <>
                <svg xmlns="http://www.w3.org/2000/svg" className=' my-2' width="25" height="25" style={{marginLeft:"30px"}}fill="currentColor" class="bi bi-send" viewBox="0 0 16 16">
                  <path d="M15.854.146a.5.5 0 0 1 .11.54l-5.819 14.547a.75.75 0 0 1-1.329.124l-3.178-4.995L.643 7.184a.75.75 0 0 1 .124-1.33L15.314.037a.5.5 0 0 1 .54.11ZM6.636 10.07l2.761 4.338L14.13 2.576 6.636 10.07Zm6.787-8.201L1.591 6.602l4.339 2.76 7.494-7.493Z"/>
                </svg>
                <Link to='/sent-emails' style={{textDecoration:"none", color:"black"}}>
                <h5 className='m-2'>Sent</h5>
                </Link>
              </> : 
              <svg xmlns="http://www.w3.org/2000/svg" className='mx-3' width="25" height="25" fill="currentColor" class="bi bi-send" viewBox="0 0 16 16">
              <path d="M15.854.146a.5.5 0 0 1 .11.54l-5.819 14.547a.75.75 0 0 1-1.329.124l-3.178-4.995L.643 7.184a.75.75 0 0 1 .124-1.33L15.314.037a.5.5 0 0 1 .54.11ZM6.636 10.07l2.761 4.338L14.13 2.576 6.636 10.07Zm6.787-8.201L1.591 6.602l4.339 2.76 7.494-7.493Z"/>
            </svg>
            }
            </div>
          </div>

          <div className="card my-2 py-2">
            <div className="d-flex">
              {toggleSidebar ? <>
              
                <svg xmlns="http://www.w3.org/2000/svg" className=' my-2' width="25" height="25" style={{marginLeft:"30px"}}fill="currentColor" class="bi bi-star" viewBox="0 0 16 16">
                  <path d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.565.565 0 0 0-.163-.505L1.71 6.745l4.052-.576a.525.525 0 0 0 .393-.288L8 2.223l1.847 3.658a.525.525 0 0 0 .393.288l4.052.575-2.906 2.77a.565.565 0 0 0-.163.506l.694 3.957-3.686-1.894a.503.503 0 0 0-.461 0z"/>
                </svg>
                <Link to='/important-emails' style={{textDecoration:"none", color:"black"}}>
                  <h5 className='m-2'>Starred</h5>
                 </Link>
              </>:
              <svg xmlns="http://www.w3.org/2000/svg" className='mx-3' width="25" height="25" fill="currentColor" class="bi bi-star" viewBox="0 0 16 16">
              <path d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.565.565 0 0 0-.163-.505L1.71 6.745l4.052-.576a.525.525 0 0 0 .393-.288L8 2.223l1.847 3.658a.525.525 0 0 0 .393.288l4.052.575-2.906 2.77a.565.565 0 0 0-.163.506l.694 3.957-3.686-1.894a.503.503 0 0 0-.461 0z"/>
            </svg>
              }
            </div>
          </div>

          <div className="card my-2 py-2">
            <div className="d-flex">

              {toggleSidebar ? <>
              
                <svg xmlns="http://www.w3.org/2000/svg" className=' my-2' width="25" height="25" style={{marginLeft:"30px"}}fill="currentColor" class="bi bi-credit-card" viewBox="0 0 16 16">
                  <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4zm2-1a1 1 0 0 0-1 1v1h14V4a1 1 0 0 0-1-1H2zm13 4H1v5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V7z"/>
                  <path d="M2 10a1 1 0 0 1 1-1h1a1 1 0 0 1 1 1v1a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1v-1z"/>
                </svg>
                <h5 className='m-2'>Draft</h5>
              </>  :
              <svg xmlns="http://www.w3.org/2000/svg" className='mx-3' width="25" height="25" fill="currentColor" class="bi bi-credit-card" viewBox="0 0 16 16">
              <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4zm2-1a1 1 0 0 0-1 1v1h14V4a1 1 0 0 0-1-1H2zm13 4H1v5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V7z"/>
              <path d="M2 10a1 1 0 0 1 1-1h1a1 1 0 0 1 1 1v1a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1v-1z"/>
            </svg>
              }
            </div>
          </div>

          <div className="card my-2 py-2 px-3" style={{height:"50px"}}>
            <div className="d-flex">

              {toggleSidebar ? <>
              
                <svg xmlns="http://www.w3.org/2000/svg" className=' my-1' width="25" height="25" style={{marginLeft:"30px"}}fill="currentColor" class="bi bi-ui-checks-grid" viewBox="0 0 16 16">
                  <path d="M2 10h3a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1v-3a1 1 0 0 1 1-1zm9-9h3a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1h-3a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1zm0 9a1 1 0 0 0-1 1v3a1 1 0 0 0 1 1h3a1 1 0 0 0 1-1v-3a1 1 0 0 0-1-1h-3zm0-10a2 2 0 0 0-2 2v3a2 2 0 0 0 2 2h3a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2h-3zM2 9a2 2 0 0 0-2 2v3a2 2 0 0 0 2 2h3a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2H2zm7 2a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2h-3a2 2 0 0 1-2-2v-3zM0 2a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2zm5.354.854a.5.5 0 1 0-.708-.708L3 3.793l-.646-.647a.5.5 0 1 0-.708.708l1 1a.5.5 0 0 0 .708 0l2-2z"/>
                </svg>
                <h5 className='mx-3'>more</h5>
                <svg xmlns="http://www.w3.org/2000/svg" className='mx-2' onClick={toggleDropdown} width="25" height="25" fill="currentColor" class="bi bi-caret-down-fill" viewBox="0 0 16 16">
                <path d="M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z"/>
              </svg>

              {
                !dropdownOpen ? 
                <> 
                  <div className=' card p-3 px-4' >
                    <div className='fw-bold'>
                    <p className=' card px-4 p-2'>Trash</p>
                    <p className=' card px-4 p-2'>important mails</p>
                    <p className=' card px-4 p-2' >All mails</p>
                    <p className=' card px-4 p-2'>shedules</p>
                    </div>
                  </div>
                </> 
                :
                ''
              } </>  :

              <>
              
                <svg xmlns="http://www.w3.org/2000/svg" className='mx-3' width="25" height="25" fill="currentColor" class="bi bi-caret-down-fill" viewBox="0 0 16 16">
                <path d="M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z"/>
              </svg>
              </>
              }
            </div>
          </div>
          </div>
    </>
  );
};

export default Sidebar;
