import React, { useEffect, useState } from 'react'
import axios from 'axios'
import sentOk from '../icons/send-check-fill.svg'
function Sent() {
    const [mails, setMails] = useState([]);

  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/comments')
      .then((resp) => {
        const comments = resp.data;
        setMails(comments);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, []);

  return (
    <div className='card p-3 '>
        <h1 className='p-3'>List of sent mails</h1>
      {mails.slice(40, 46).map(mail => (
        <div className='card p-1 my-3 px-3' key={mail.id}>
            <div className='d-flex'>

            <img src={sentOk} alt="" className='mx-3' style={{width:"20px"}} />
            <p className='fw-bold'>{mail.email}</p>
            </div>
        </div>
      ))}
    </div>
  );
}
  

export default Sent
