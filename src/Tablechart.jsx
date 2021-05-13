import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Tablechart.css';
import {useHistory} from 'react-router-dom';

const Tablechart = () => {

  const [loading, setLoading] = useState(true);
  const [content, setContent] = useState([]);
  const history = useHistory();


  // useEffect(() => {

  const ApiShow = () => {

    setTimeout(() => {

      console.log('helloo api ... ..')
      async function getData() {
    
        const res = await axios.get('https://api.covid19api.com/summary');

        console.log(res);
        console.log(res.data.Countries[76].Country);
        console.log(res.data.Countries[76].TotalConfirmed);
        // {res.data.Countries.map(val => { <p>{val.Country}</p> 
        //                                  console.log(val.TotalConfirmed)  })}

        setContent(res.data.Countries);

      }
      getData();

    }, 7000)

  }


  return (
    <>
      <div className="table">

        <div className='header_btn'>

          <button className='btn' onClick={ApiShow}>click to get data</button>
          <button
            onClick={() => history.push('/Piechart')}
            className='pag2_btn'>goto page 2</button>


          <h1><i style={{ color: 'blue' }}>country wise corona confirm cases</i></h1>
          <br />
          <hr />
          <td> <span style={{ color: 'blueviolet', border: '2px solid ', padding: '4px', fontSize: 'large', paddingTop: '1px' }}>country</span></td>

          <td><span style={{ color: 'blueviolet', border: '2px solid', padding: '4px', fontSize: 'large', marginLeft: '100px', paddingTop: '1px' }}>confirmed cases</span> </td>
          <br />
        </div>


        {
          content.map(val =>
            <tr>
              <td id='colmn'> {val.Country} </td>
              <td id='colmn'>{val.TotalConfirmed} </td>

            </tr>

          )
        }

      </div>
    </>
  )
}

export default Tablechart
