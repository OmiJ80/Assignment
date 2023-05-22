package com.example.demo.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.model.Job;

import com.example.demo.model.Person;
import com.example.demo.service.PersonSErvice;
import com.example.demo.service.jobservice;




@RestController
@CrossOrigin(origins = "http://localhost:3000")
public class PersonC {
	
	
	@Autowired
	PersonSErvice ps;
	
	@PostMapping("/register")
	public void register(@RequestBody Person p) {
		System.out.println("Inside register constroller");
		this.ps.register(p);
	}
	@PostMapping("/login")
    public Person login(@RequestBody Person cuu) {
		System.out.println("insode login contrlller");
		 System.out.println("The cuu is -------->"+cuu);
		Person user = ps.getUserByUsername(cuu.getUsername());       
        if (user != null && user.getPassword().equals(cuu.getPassword())) {
          return user ; // Redirect to success page or perform further actions
        } else {
            return user; // Redirect to error page or display error message
        }
    }
	
	
	
	
}
