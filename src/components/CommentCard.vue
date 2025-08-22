<template>
    <div class="comment-card">
      <div class="comment-meta">
        <span class="author">{{ author }}</span> · <span class="timestamp">{{ timestamp }}</span>
        <button class="reply-btn" @click="$emit('reply', commentId)">Reply</button>
      </div>
      <p class="comment-body">{{ body }}</p>
  
      <!-- Sub-comments -->
      <div class="replies" v-if="replies && replies.length">
        <CommentCard
          v-for="(reply, index) in replies"
          :key="index"
          :author="reply.author"
          :timestamp="reply.timestamp"
          :body="reply.body"
          :replies="reply.replies"
          :comment-id="reply.commentId"
          @reply="$emit('reply', $event)"
        />
      </div>
    </div>
  </template>
  
  <script setup>
  import CommentCard from './CommentCard.vue'
  
  defineProps({
    author: String,
    timestamp: String,
    body: String,
    replies: { type: Array, default: () => [] },
    commentId: Number
  })
  </script>
  
  <style scoped>
  .comment-card {
    padding: 12px;
    border-bottom: 1px solid #eee;
    margin-left: 0;
  }
  
  .replies {
    margin-left: 20px; /* Indent replies */
    margin-top: 10px;
  }
  
  .comment-meta {
    font-size: 13px;
    color: #777;
    display: flex;
    justify-content: space-between;
    margin-bottom: 6px;
  }
  
  .comment-body {
    font-size: 16px;
    color: #333;
  }
  
  .reply-btn {
    background: none;
    border: none;
    color: #CC8A49;
    cursor: pointer;
    font-size: 12px;
    padding: 0;
  }
  </style>
  