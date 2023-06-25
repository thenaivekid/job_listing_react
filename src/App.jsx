import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Jobs from './components/Jobs'
import Keywords from './components/Keywords'

function App() {
  const [jobs, setJobs] = useState([])

  useEffect(() => {
    const getJobs = async() => {
      const tasksFromServer = await fetchJobs();
      console.log(tasksFromServer);
      setJobs(tasksFromServer);
    }
    getJobs();
  }, []);

  const fetchJobs = async() => {
    const res = await fetch('https://storage.googleapis.com/programiz-static/hiring/software/job-listing-page-challenge/data.json');
      const data = await res.json();
      return data;

  };

  const [filterKeywords, setFilterKeywords] = useState([]);

  // console.log('at first', filterKeywords);
  const addFilterKeyword = (keyword) => {
    console.log('addkeyword', keyword);
    
    if (!filterKeywords.includes(keyword)) {
      setFilterKeywords([...filterKeywords, keyword]);
    }
  };

  const removeFilterKeyword = (word) => {
    setFilterKeywords(filterKeywords.filter((keyword) => keyword !== word));
    console.log('after removekeyword', filterKeywords);
  };

  const clearFilterKeywords = () => {
    setFilterKeywords([]);
  };

  // const filterJobs = (jobs) => {
    // const accumulatedKeywords = new Set();
    // jobs.forEach((job) => {      
    //   job.keywords.forEach((keyword) => {
    //     if (!accumulatedKeywords.has(keyword)) {
    //       accumulatedKeywords.add(keyword);
    //     }
    //   });
    // });
    // console.log('keywords', accumulatedKeywords);
    // setFilterKeywords(Array.from(accumulatedKeywords));

  // };

  // useEffect(()=>{
  // setFilterKeywords(filterJobs(jobs));
  // },[jobs])


// console.log('jobs from app', jobs)

  return (
    <div className='app'>
      <h1>Jobs.</h1>
      <Keywords keywords={filterKeywords} remove={removeFilterKeyword} clear={clearFilterKeywords}/>
      <Jobs jobs={jobs} keywords={filterKeywords} addKeyword={addFilterKeyword}/>
    </div>
  )
}

export default App
