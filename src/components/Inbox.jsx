import { useEffect, useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import axios from 'axios'
import star from '../icons/star.svg'
import right from '../icons/arrow-right-square-fill.svg'
import left from '../icons/arrow-left-square-fill.svg'


function Inbox() {
  const [index, setIndex] = useState(0);
  const [data, setData] = useState([])

  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/comments')
      .then(response => {
        setData(response.data.slice(0, 20));
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  return (
    <Carousel activeIndex={index} onSelect={handleSelect}>
      <Carousel.Item>
        <div className='d-flex'>

      <img src={left} alt="" className="left-img"  style={{width:"50px", marginLeft:"90px"}} />

       <div className='m-5 card p-3'>
      <ul>
      <h2 className='p-3'>List of user Page-1</h2>
        {data.slice(0, 5).map(user => (
          <div key={user.id}>
            <div className='card my-3 p-3'>
            <div class="row">
                <div class="col col-lg-2 d-flex align-items-center  ">
                    <div className='d-flex '>
                  <div>
                  <input class="form-check-input" type="checkbox" style={{width:"25px",height:"25px", marginLeft:"30px"}} value="" id="flexCheckDefault"/>
                  </div>
                    <div>

                  <img src={star} alt="" style={{width:"25px", marginLeft:"30px"}} />
                    </div>
                    </div>
                </div>
                <div class="col-md-auto d-flex align-items-center " style={{width:"200px", marginRight:"50px"}}>
                 <p className='fw-bold'>{user.email}</p>
                </div>
                <div class="col ">
                 <p >{user.body}</p>
                </div>
            </div>
            </div>
          </div>
        ))}
      </ul>
       </div>
       <img src={right} alt="" className='right-img'  style={{width:"50px"}} />

        </div>
      </Carousel.Item>

      <Carousel.Item>
      <div className='d-flex'>

      <img src={left} alt=""   style={{width:"50px"}} />
       <div className='m-5 card p-3'>
      <ul>
        <h2 className='p-3'>List of user Page-2</h2>
        {data.slice(6, 11).map(user => (
          <div key={user.id}>
            <div className='card my-3 p-3'>
            <div class="row">
                <div class="col col-lg-2  ">
                    <div className='d-flex align-item-center'>
                  <div>
                  <input class="form-check-input" type="checkbox" style={{width:"25px",height:"25px", marginLeft:"30px"}} value="" id="flexCheckDefault"/>
                  </div>
                    <div>

                    <img src={star} alt="" style={{width:"25px", marginLeft:"30px"}} />
                    </div>
                    </div>
                </div>
                <div class="col-md-auto " style={{width:"200px"}}>
                 <p className='fw-bold'>{user.email}</p>
                </div>
                <div class="col ">
                 <p>{user.body}</p>
                </div>
            </div>
            </div>
          </div>
        ))}
      </ul>
       </div>
       <img src={right} alt=""   style={{width:"50px"}} />

        </div>
      </Carousel.Item>

      <Carousel.Item>
      <div className='d-flex'>

      <img src={left} alt=""  style={{width:"50px"}} />
       <div className='m-5 card p-3'>
      <ul>
      <h2 className='p-3'>List of user Page-3</h2>
        {data.slice(11, 16).map(user => (
          <div key={user.id}>
            <div className='card my-3 p-3'>
            <div class="row">
                <div class="col col-lg-2  ">
                    <div className='d-flex align-item-center'>
                  <div>
                  <input class="form-check-input" type="checkbox" style={{width:"25px",height:"25px", marginLeft:"30px"}} value="" id="flexCheckDefault"/>

                  </div>
                    <div>

                    <img src={star} alt="" style={{width:"25px", marginLeft:"30px"}} />
                    </div>
                    </div>
                </div>
                <div class="col-md-auto " style={{width:"200px"}}>
                 <p className='fw-bold'>{user.email}</p>
                </div>
                <div class="col ">
                 <p>{user.body}</p>
                </div>
            </div>
            </div>
          </div>
        ))}
      </ul>
       </div>
       <img src={right} alt=""   style={{width:"50px"}} />

        </div>
      </Carousel.Item>



      {/* <Carousel.Item>
      <div className='card'>
      <ul>
        {data.map(user => (
          <div key={user.id}>
            <div className='card'>
            <strong>Email:</strong> {user.email}<br />

            <strong>Body:</strong> {user.body}
            </div>
          </div>
        ))}
      </ul>
       </div>
      </Carousel.Item>

      <Carousel.Item>
      <div className='card'>
      <ul>
        {data.map(user => (
          <div key={user.id}>
            <div className='card'>
            <strong>Email:</strong> {user.email}<br />

            <strong>Body:</strong> {user.body}
            </div>
          </div>
        ))}
      </ul>
       </div>
      </Carousel.Item> */}
    </Carousel>
  );
}

export default Inbox;