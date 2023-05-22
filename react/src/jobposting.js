import React, { useEffect, useState } from 'react';
import jobPostingService from './jobservice';

function JobPostings() {
  const [jobPostings, setJobPostings] = useState([]);

  useEffect(() => {
    fetchJobPostings();
  }, []);

  const fetchJobPostings = async () => {
    try {
      const data = await jobPostingService.getJobPostings();
      setJobPostings(data);
    } catch (error) {
      // Handle error
    }
  };

  return (
    <div>
      <h1>Job Postings</h1>
      {jobPostings.map((jobPosting) => (
        <div key={jobPosting.id}>
          <h3>{jobPosting.title}</h3>
          <p>{jobPosting.description}</p>
          <p>{jobPosting.company}</p>
          <p>{jobPosting.requirements}</p>
          <hr />
        </div>
      ))}
    </div>
  );
}

export default JobPostings;
