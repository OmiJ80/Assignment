import React from 'react';
import PortalService from './PortalService';
import { useNavigate } from 'react-router-dom';

const jobs = [
  {
    id: 0,
    title: 'Software Engineer',
    description: 'We are seeking a talented software engineer to join our team...',
    company: 'ABC Technologies',
    requirements: 'Qualifications: Bachelor\'s degree in Computer Science or related field...',
  },
  {
    id: 1,
    title: 'Graphic Designer',
    description: 'We are looking for a creative graphic designer to create engaging and innovative designs...',
    company: 'XYZ Design Studio',
    requirements: 'Qualifications: Bachelor\'s degree in Graphic Design or related field...',
  },
  // Add more job objects here
];


const JobPortal = () => {
  const navigate= useNavigate();
  const handleApply = (jobId) => {
    // Perform the desired action when the "Apply" button is clicked
    console.log(`Applying to job with ID ${jobId}`);
   PortalService.addJob(jobs[jobId]);
   console.log(jobs[jobId])
    // You can redirect to a job application form or trigger any other functionality
    navigate("/Thanks")
  };

  return (
    <div>
      <h1>Job Portal</h1>
      {jobs.map(job => (
        <div key={job.id}>
          <h2>{job.title}</h2>
          <h4>{job.company}</h4>
          <p>{job.description}</p>
          <p>{job.requirements}</p>
          <button onClick={(e) => handleApply(job.id)}>Apply</button>
          <hr />
        </div>
      ))}
       <br></br>
      <a href="/"><b>Logout</b></a> 
    </div>
  );
};

export default JobPortal;
