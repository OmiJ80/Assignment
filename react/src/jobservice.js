import axios from 'axios';

const BASE_URL = 'http://localhost:8080/register'; // Replace with your backend API base URL

const jobPostingService = {
  getJobPostings: async () => {
    try {
      const response = await axios.get(BASE_URL);
      return response.data;
    } catch (error) {
      console.error('Error fetching job postings:', error);
      throw error;
    }
  },
};

export default jobPostingService;
