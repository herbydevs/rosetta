<template>
    <div class="post-card">
      <h2>{{ title }}</h2>
      <p>{{ snippet }}</p>
      <div class="post-meta">
        {{ votes }} upvotes · {{ comments }} comments
      </div>
    </div>
  </template>
  
  <script setup>
  defineProps({
    title: String,
    snippet: String,
    votes: Number,
    comments: Number
  })
  </script>
  
  <style scoped>
  .post-card {
    background: white;
    padding: 15px;
    margin-bottom: 15px;
    border-radius: 10px;
    box-shadow: 0 2px 6px rgba(0,0,0,0.05);
  }
  
  .post-card h2 {
    margin: 0 0 10px;
    font-family: 'EB Garamond', serif;
    font-size: 20px;
    color: #2b2b2b;
  }
  
  .post-card p {
    margin: 0 0 8px;
    color: #555;
  }
  
  .post-meta {
    font-size: 13px;
    color: #777;
  }
  </style>
  