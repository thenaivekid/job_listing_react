import Job from './Job';
import { useState, useEffect } from 'react';

const Jobs = ({ jobs, keywords, addKeyword }) => {
console.log('jobs1', jobs)
console.log(' incoming keywords', keywords)
  const [filteredJobs, setFilteredJobs] = useState([]);

  const selectedJobs = () => {
    if (keywords && keywords.length > 0) {
      setFilteredJobs(jobs.filter((job) => keywords.every(keyword => job.keywords.includes(keyword))));

    } else {
      setFilteredJobs(jobs);
      console.log('jobs', jobs)
    }
    console.log('filteredJobs', filteredJobs);
  };

  useEffect(() => {
    selectedJobs();
  }, [keywords,jobs]);

  return (
    <div className='jobs'>
      <ul className='card_container'>
        {filteredJobs.map((job, index) => (
          <Job key={index} job={job} addKeyword={addKeyword}/>
        ))}
      </ul>
    </div>
  );
};

export default Jobs;
