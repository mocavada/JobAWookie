package com.mocavada.service;

import com.mocavada.enitity.JobPost;

import java.util.List;

public interface IJobPostService {
    void addJobPost(JobPost jobPost);
    List<JobPost> getAllJobPost();
    JobPost getJobPostById(long jobPostId);
}
