package com.example.demo.repo;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.demo.model.Job;

public interface jobrepo extends JpaRepository<Job,Integer>{

}
