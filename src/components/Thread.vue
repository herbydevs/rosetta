<template>
    <div class="thread-container">
      <!-- Main Post -->
      <div class="thread-post">
        <h1 class="thread-title">{{ post.title }}</h1>
        <div class="thread-meta">
          Posted by <span class="author">{{ post.author }}</span> 
          in <span class="category">{{ post.category }}</span> 
          · {{ post.timestamp }}
        </div>
        <p class="thread-body">{{ post.body }}</p>
        <div class="thread-stats">
          👍 {{ post.votes }} · 💬 {{ comments.length }} comments
        </div>
      </div>
  
      <!-- Comments Section -->
      <div class="comments-section">
        <h2>Comments</h2>
        <CommentCard 
          v-for="(comment, index) in comments" 
          :key="index" 
          :author="comment.author"
          :timestamp="comment.timestamp"
          :body="comment.body"
        />
      </div>
  
      <!-- Add Comment -->
      <div class="add-comment">
        <textarea v-model="newComment" placeholder="Add your thoughts..."></textarea>
        <button @click="submitComment">Post Comment</button>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue'
  import CommentCard from './CommentCard.vue'
  
  // Dummy post data
  const post = {
    title: "The Cave and Modern Media",
    author: "Adafa",
    category: "Philosophy",
    timestamp: "3 hours ago",
    body: "Plato’s allegory of the cave seems eerily predictive of how media shapes our reality today...",
    votes: 42
  }
  
  // Dummy comments
  const comments = ref([
    { author: "Sophia", timestamp: "2h ago", body: "Exactly, we’re chained to screens much like the cave prisoners." },
    { author: "Marcus", timestamp: "1h ago", body: "But the allegory also speaks to the difficulty of education itself." }
  ])
  
  const newComment = ref("")
  
  function submitComment() {
    if (newComment.value.trim()) {
      comments.value.push({
        author: "You",
        timestamp: "just now",
        body: newComment.value
      })
      newComment.value = ""
    }
  }
  </script>
  
  <style scoped>
  .thread-container {

    scale: 100%;
    margin: 20px auto;
    padding: 20px;
    background: #faf7f2;
    border-radius: 12px;
    box-shadow: 0 2px 8px rgba(0,0,0,0.05);
    font-family: 'EB Garamond', serif;
  }
  
  .thread-title {
    font-size: 28px;
    margin-bottom: 10px;
  }
  
  .thread-meta {
    font-size: 14px;
    color: #777;
    margin-bottom: 15px;
  }
  
  .thread-body {
    font-size: 18px;
    line-height: 1.6;
    margin-bottom: 20px;
  }
  
  .thread-stats {
    font-size: 14px;
    color: #555;
    margin-bottom: 20px;
  }
  
  .comments-section {
    margin-top: 30px;
  }
  
  .add-comment {
    margin-top: 20px;
    display: flex;
    flex-direction: column;
  }
  
  .add-comment textarea {
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 8px;
    min-height: 80px;
    margin-bottom: 10px;
  }
  
  .add-comment button {
    align-self: flex-end;
    padding: 8px 16px;
    background: #CC8A49;
    color: white;
    border: none;
    border-radius: 6px;
    cursor: pointer;
  }
  
  .add-comment button:hover {
    background: #b77a3f;
  }
  </style>
  