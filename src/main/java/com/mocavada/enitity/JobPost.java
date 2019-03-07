package com.mocavada.enitity;

import javax.persistence.*;
import java.util.Date;

@Entity
@Table(name = "jobpost")
public class JobPost {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name ="post_id")
    private long id;

    @Column(name ="company_name")
    private String companyName;

    @Column(name ="company_email")
    private String companyEmail;

    @Column(name ="company_phone")
    private Long companyPhone;

    @Column(name ="post_title")
    private String postTitle;

    @Column(name ="job_type")
    private String jobTypeList;

    @Column(name ="job_title")
    private String jobTitle;

    @Column(name ="job_description")
    private String jobDescription;

    @Column(name ="job_requirement")
    private String jobRequirement;

    @Basic(optional = false)
    @Temporal(TemporalType.TIMESTAMP)
    @Column(name = "date_created", insertable = false, updatable = false,
            columnDefinition = "TIMESTAMP DEFAULT CURRENT_TIMESTAMP")
    private Date dateCreated;

    public JobPost() {
    }

    public JobPost(String companyName, String companyEmail, Long companyPhone, String postTitle, String jobTypeList, String jobTitle, String jobDescription, String jobRequirement, Date dateCreated) {
        this.companyName = companyName;
        this.companyEmail = companyEmail;
        this.companyPhone = companyPhone;
        this.postTitle = postTitle;
        this.jobTypeList = jobTypeList;
        this.jobTitle = jobTitle;
        this.jobDescription = jobDescription;
        this.jobRequirement = jobRequirement;
        this.dateCreated = dateCreated;
    }

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public String getCompanyName() {
        return companyName;
    }

    public void setCompanyName(String companyName) {
        this.companyName = companyName;
    }

    public String getCompanyEmail() {
        return companyEmail;
    }

    public void setCompanyEmail(String companyEmail) {
        this.companyEmail = companyEmail;
    }

    public Long getCompanyPhone() {
        return companyPhone;
    }

    public void setCompanyPhone(Long companyPhone) {
        this.companyPhone = companyPhone;
    }

    public String getPostTitle() {
        return postTitle;
    }

    public void setPostTitle(String postTitle) {
        this.postTitle = postTitle;
    }

    public String getJobTypeList() {
        return jobTypeList;
    }

    public void setJobTypeList(String jobTypeList) {
        this.jobTypeList = jobTypeList;
    }

    public String getJobTitle() {
        return jobTitle;
    }

    public void setJobTitle(String jobTitle) {
        this.jobTitle = jobTitle;
    }

    public String getJobDescription() {
        return jobDescription;
    }

    public void setJobDescription(String jobDescription) {
        this.jobDescription = jobDescription;
    }

    public String getJobRequirement() {
        return jobRequirement;
    }

    public void setJobRequirement(String jobRequirement) {
        this.jobRequirement = jobRequirement;
    }

    public Date getDateCreated() {
        return dateCreated;
    }

    public void setDateCreated(Date dateCreated) {
        this.dateCreated = dateCreated;
    }
}
