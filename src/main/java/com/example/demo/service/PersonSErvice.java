package com.example.demo.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import org.springframework.stereotype.Service;

import com.example.demo.model.Person;
import com.example.demo.repository.PersonRepo;

@Service
public class PersonSErvice {
	
	
	
	@Autowired
	public PersonRepo pr;
	
	
	
	public void register(Person p) {
	   pr.save(p);
	}



	public Person getUserByUsername(String username) {
		// TODO Auto-generated method stub
		
		
		return pr.findByUsername(username);
	}


}