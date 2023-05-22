package com.example.demo.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.model.Job;
import com.example.demo.model.Person;
import com.example.demo.repo.jobrepo;

@Service
public class jobservice {

	@Autowired
	public jobrepo jr;
	
	
	
	
	
	public void addjob(Job cuu) {
		jr.save(cuu);
		
	}





	public List<Job> getallJobs() {
		// TODO Auto-generated method stub
		return this.jr.findAll();
	}

}
