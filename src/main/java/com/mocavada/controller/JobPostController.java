package com.mocavada.controller;

import com.mocavada.enitity.JobPost;
import com.mocavada.service.IJobPostService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.util.UriComponentsBuilder;

import java.util.List;


@RestController
@RequestMapping(path="/jobpost")
public class JobPostController {

    @Autowired
    private IJobPostService jobPostService;


    @PostMapping("/add")
    public ResponseEntity<Void> addJobPost(@RequestBody JobPost jobPost, UriComponentsBuilder builder) {
        jobPostService.addJobPost(jobPost);
        HttpHeaders headers = new HttpHeaders();
        headers.setLocation(builder.path("/add").buildAndExpand(jobPost.getId()).toUri());

        return new ResponseEntity<Void>(headers, HttpStatus.CREATED);
    }

    @GetMapping("/all")
    public ResponseEntity<List<JobPost>> getAllJobPost() {
        List<JobPost> list = jobPostService.getAllJobPost();

        return new ResponseEntity<List<JobPost>>(list, HttpStatus.OK);
    }

    @GetMapping("/all/{id}")
    public ResponseEntity<JobPost> getJobPostById(@PathVariable("id") Long id) {

        JobPost jobPost = jobPostService.getJobPostById(id);
        return new ResponseEntity<JobPost>(jobPost, HttpStatus.OK);
    }



}
