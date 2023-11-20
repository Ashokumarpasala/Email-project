import React from 'react'
import list from '../icons/list.svg'
import arrow from '../icons/arrows-angle-expand.svg'
import trash from '../icons/trash.svg'
import link from '../icons/link.svg'
import send from '../icons/send.svg'

function Compose() {
  return (
    <div>
      <div className="card border-dark animate-card mb-3 mx-5 m-5" style={{height:"100%", width:"800px", color:"black"}}>
        <div className="card-header bg-transparent border-dark p-4 animate-header">
            <div className='d-flex justify-content-between'>
              {/* ....compose head */}
              <div className='d-flex'>
                <img src={send} alt="" style={{width:"50px", paddingLeft:"10px"}} />
                <h1 className='px-3'>New Message</h1>
              </div>
             <div>
                <img src={arrow} alt="" style={{width:"30px", marginLeft:"20px", }} />
                <img src={list} alt=""  style={{width:"30px", marginLeft:"20px", }} />
                <img src={trash} alt=""  style={{width:"30px", marginLeft:"20px", }}/>
                
             </div>
            </div>
        </div>
        <div className="card-body text-dark animate-body p-5" style={{width:"80%"}}>
        {/* compose body... */}
          <div className='d-flex'>
            <img src={link} alt="" style={{width:"60px", paddingLeft:"10px"}} />
            <h5 className="card-title fs-1 py-3" style={{color:"black"}}>Mail Box</h5>
          </div>
            <p className="card-text">
            <div className="mb-3">
                <label for="exampleFormControlInput1" style={{color:"black"}} className="form-label">Mail To</label>
                <input type="email" className="form-control p-3" id="exampleFormControlInput1" placeholder=""/>
                </div>
                <div className="mb-3">
                <label for="exampleFormControlTextarea1" style={{color:"black"}} className="form-label">Enter message</label>
                <textarea className="form-control p-3" id="exampleFormControlTextarea1" rows="3"></textarea>
                </div>
            </p>
        </div>

        
        <div className="card-footer bg-transparent border-dark p-4 animate-footer">
          {/* compose fotter..... */}
            <button className='btn btn-primary px-4 p-1 d-flex'>
                <h4>Send</h4>
                <img src={send} alt="" className='py-2' style={{marginLeft:"20px"}} />
            </button>
        </div>
        </div>
    </div>
  )
}

export default Compose
