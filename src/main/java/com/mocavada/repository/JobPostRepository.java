package com.mocavada.repository;

import com.mocavada.enitity.JobPost;
import org.springframework.stereotype.Repository;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import javax.transaction.Transactional;
import java.util.List;
import java.util.stream.Collectors;

@Transactional
@Repository
public class JobPostRepository implements IJobPostRepository {

    @PersistenceContext
    private EntityManager entityManager;

    @Override
    public List<JobPost> getAllJobPost() {
        String jpql = "select j from JobPost j order by j.id";

        return (List<JobPost>) entityManager.createQuery(jpql).getResultStream().collect(Collectors.toList());
    }

    @Override
    public void addJobPost(JobPost jobPost) {

        entityManager.persist(jobPost);
    }

    @Override
    public JobPost getJobPostById(long jobPostId) {

        return entityManager.find(JobPost.class, jobPostId);
    }

    @Override
    public void deleteJobPost(int postId) {
        entityManager.remove(getJobPostById(postId));
    }

    @Override
    public void updateJobPost(JobPost jobPost) {
        JobPost jobPost1 = getJobPostById(jobPost.getId());

        jobPost1.setCompanyName(jobPost.getCompanyName());
        jobPost1.setCompanyEmail(jobPost.getCompanyEmail());
        jobPost1.setCompanyPhone(jobPost.getCompanyPhone());
        jobPost1.setPostTitle(jobPost.getPostTitle());
        jobPost1.setJobTypeList(jobPost.getJobTypeList());
        jobPost1.setJobTitle(jobPost.getJobTitle());
        jobPost1.setJobDescription(jobPost.getJobDescription());
        jobPost1.setJobRequirement(jobPost.getJobRequirement());

        entityManager.flush();

    }









}
