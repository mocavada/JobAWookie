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



}
