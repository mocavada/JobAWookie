package com.mocavada.service;

import com.mocavada.enitity.JobPost;
import com.mocavada.repository.IJobPostRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.List;

@Transactional
@Service
public class JobPostService implements IJobPostService  {

    @Autowired
    private IJobPostRepository jobPostRepository;

    @Override
    public void addJobPost(JobPost jobPost) {
        jobPostRepository.addJobPost(jobPost);
    }

    @Override
    public List<JobPost> getAllJobPost() {

        return jobPostRepository.getAllJobPost();
    }

    @Override
    public JobPost getJobPostById(long jobPostId) {

        return jobPostRepository.getJobPostById(jobPostId);
    }


}
