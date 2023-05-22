package com.example.demo.model;

import jakarta.persistence.*;

@Entity
public class Job {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    @Column
    private String title;

    @Column
    private String description;

    @Column
    private String company;

    @Column
    private String requirements;

    public Job() {
        // Default constructor required by JPA
    }

    public Job(String title, String description, String company, String requirements) {
        this.title = title;
        this.description = description;
        this.company = company;
        this.requirements = requirements;
    }

    // Getters and Setters (omitted for brevity)

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public String getCompany() {
        return company;
    }

    public void setCompany(String company) {
        this.company = company;
    }

    public String getRequirements() {
        return requirements;
    }

    public void setRequirements(String requirements) {
        this.requirements = requirements;
    }

	@Override
	public String toString() {
		return "Job [id=" + id + ", title=" + title + ", description=" + description + ", company=" + company
				+ ", requirements=" + requirements + "]";
	}
    
}
