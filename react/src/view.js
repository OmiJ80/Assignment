import React, { useEffect, useState } from 'react';

const JobPortal = () => {
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    fetchJobs();
  }, []);

  const fetchJobs = async () => {
    try {
      const response = await fetch('http://localhost:8080/view'); // Replace '/api/jobs' with your API endpoint
      const data = await response.json();
      setJobs(data);
    } catch (error) {
      console.error('Error fetching jobs:', error);
    }
  };

  return (
    <div>
      <h1>Applied Jobs are </h1>
      {jobs.map(job => (
        <div key={job.id}>
          <h2>{job.title}</h2>
          <h4>{job.company}</h4>
          <p>{job.description}</p>
          <p>{job.requirements}</p>
          <hr />
        </div>
      ))}
       <br></br>
      <a href="/"><b>Logout</b></a> 
    </div>
  );
};

export default JobPortal;
