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
    
    setTimeout(() =>{

    
    async function getData() {
      const res = await axios.get('https://api.covid19api.com/summary');

      console.log(res);
      console.log('data show')
      console.log(res.data.Countries[76]);
      console.log( res.data.Countries[76].NewConfirmed);
      console.log( res.data.Countries[76].NewDeaths);
      console.log('getting the data');
      const country = res.data.Countries[76];
      const confirmcase = res.data.Countries.TotalConfirmed; 
       
      setContent(country);
      console.log(country);
      console.log(res.data.Countries[76].NewDeaths);
      console.log('country getting-----------')
       
    }
    getData();

  },7000)

  }
  
   

   const data02 =[
    {name : 'NewConfirmed', value : content.NewConfirmed},
    {name : 'NewDeaths', value : content.NewDeaths},
    {name : 'NewRecovered', value : content.NewRecovered},
    {name : 'TotalConfirmed', value : content.TotalConfirmed},
    {name : 'TotalDeaths', value : content.TotalDeaths},
    {name : 'TotalRecovered', value : content.TotalRecovered}
  ]
   
  
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
            data={data02}
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
