import React from 'react'
import user from '../icons/person-square.svg'

function LoginPage() {
  return (
    <>
    <div>
        <h1 style={{ fontWeight:"bold", fontSize:"60px", margin:"30px"}}>WELCOME USER</h1>
    </div>
    
    <div className='card m-3 p-5 py-5' style={{ width:"80%", height:"600px", opacity: 0, animation: 'fadeIn 3s forwards' }}>
        {/* user.......heading */}
       <div className="d-flex py-3" style={{ opacity: 0, animation: 'fadeIn 1s forwards 2s' }}>
        <img src={user} alt="" style={{width:"60px"}} />
        <h1 className='px-3'>User Login </h1>

        </div>
        {/* user...form...... */}
        <form class="row g-3" style={{ opacity: 0, animation: 'fadeIn 1s forwards 4s' }}>
        <div class="col-md-6">
            <label for="inputEmail4" class="form-label fw-bold">Email</label>
            <input type="email" class="form-control" id="inputEmail4" />
        </div>
        <div class="col-md-6">
            <label for="inputPassword4" class="form-label fw-bold">Password</label>
            <input type="password" class="form-control" id="inputPassword4" />
        </div>
        <div class="col-12">
            <label for="inputAddress" class="form-label fw-bold">Address</label>
            <input type="text" class="form-control" id="inputAddress" placeholder="" />
        </div>
        <div class="col-12">
            <label for="inputAddress2" class="form-label fw-bold">Address 2</label>
            <input type="text" class="form-control" id="inputAddress2" placeholder="" />
        </div>
        <div class="col-md-6">
            <label for="inputCity" class="form-label fw-bold">City</label>
            <input type="text" class="form-control" id="inputCity" />
        </div>
        <div class="col-md-4">
            <label for="inputState" class="form-label fw-bold">State</label>
            <select id="inputState" class="form-select">
            <option selected>Choose...</option>
            <option>...</option>
            </select>
        </div>
        <div class="col-md-2">
            <label for="inputZip" class="form-label fw-bold">Zip</label>
            <input type="text" class="form-control" id="inputZip" />
        </div>
        <div class="col-12">
            <div class="form-check">
            <input class="form-check-input" type="checkbox" id="gridCheck" />
            <label class="form-check-label fw-bold" for="gridCheck">
                Check me out
            </label>
            </div>
        </div>
        <div class="col-12">
            <button type="submit" class="btn btn-primary fw-bold">Sign in</button>
        </div>
        </form>
    </div>
    </>
  )
}

export default LoginPage
