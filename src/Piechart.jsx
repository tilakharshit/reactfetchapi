import React, { useState, PureComponent, useEffect } from 'react';
import './App.css';
import Tablechart from './Tablechart';
import { PieChart, Pie, Tooltip } from 'recharts';
import axios from 'axios';
import { useHistory } from 'react-router-dom';


const Piechart = () => {
  
  const [piChartData, setpiChart] = useState();
  const[content, setContent] = useState([]);
  
  const history = useHistory();
  const show = () => {
  
    async function getData() {
      const res = await axios.get('https://api.covid19api.com/summary');

      console.log(res);
      console.log('data show')
      console.log(res.data.Countries[76]);
      console.log( res.data.Countries[76].NewConfirmed);
      console.log( res.data.Countries[76].NewDeaths);
      console.log('getting the data');
      const country = res.data.Countries;
      const confirmcase = res.data.Countries.TotalConfirmed; 
       
      setContent({
        name : 'NewConfirmed', value : res.data.Countries[76].NewConfirmed,
        name : 'NewDeaths', value : res.data.Countries[76].NewDeaths,
        name : 'NewRecovered', value : res.data.Countries[76].NewRecovered,
        name : 'TotalConfirmed', value : res.data.Countries[76].TotalConfirmed,
        name : 'TotalDeaths', value : res.data.Countries[76].TotalDeaths,
        name : 'TotalRecovered', value : res.data.Countries[76].TotalRecovered,
        
      });
       
    }
    getData();

  }
  
  
  const data01 = [
     { name: 'NewConfirmed', value: 362727},
    //  { name: 'NewDeaths', value: 4120 },
    { name: 'NewRecovered', value: 352181 },
    { name: 'TotalConfirmed', value: 23703665 },
    { name: 'TotalDeaths', value: 258317 },
    { name: 'TotalRecovered', value: 19734823 },
     
   ];
  


  return (
    <>
      <div className='piechart'>
        <h1 id='piechart'>pie chart showing coronavirus data of India</h1>
        <button
          onClick={show}
          className='show_btn'>get data</button>
        <button
          onClick={() => history.push('/')}
          className='pag1_btn'>goto page 1</button>

        <PieChart width={500} height={500}>
          <Pie
            dataKey="value"

            isAnimationActive={false}
            data={data01}
            cx="50%"
            cy="50%"
            outerRadius={150}
            fill="#8884d8"
            label
          />
          <Tooltip />
        </PieChart>
      </div>
    </>
  )
}

export default Piechart;
