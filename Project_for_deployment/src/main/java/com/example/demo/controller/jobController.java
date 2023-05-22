package com.example.demo.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.model.Job;
import com.example.demo.service.jobservice;
@RestController()
@CrossOrigin( origins = "*")
public class jobController {
	@Autowired
	jobservice js;
	


	
	@PostMapping("/addjob")
    public void job(@RequestBody Job cuu) {
		System.out.println("inside job cuuu" + cuu);
		this.js.addjob(cuu);
	
    }
	@GetMapping("view")
	public List<Job> view() {
		return this.js.getallJobs();
	}
}
