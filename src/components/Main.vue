
  
<template>
    <div class="layout">
      <!-- Header -->
      <header class="header">
        <h1 class="logo">Rosetta</h1>
        <input type="text" placeholder="Search discussions..." class="search-bar" />
        <button class="login-btn">Login</button>
      </header>
  
      <div class="content">
        <!-- Sidebar -->
        <aside class="sidebar">
          <ul>
            <li>📚 Literature</li>
            <li>🏛 History</li>
            <li>🎨 Art</li>
            <li>💭 Philosophy</li>
            <li>🗣 Languages</li>
            <li>🔬 Science</li>
            <li>🌍 Culture</li>
            <li>🎭 Theater</li>
            <li>🎶 Music</li>
            <li>✍ Poetry</li>
          </ul>
        </aside>
  
        <!-- Main Feed -->
        <main class="feed">
         <CommentCard author="Alice" timestamp="2 hours ago" body="Great post! I totally agree with your points." :comment-id="1" @reply="handleReply"/>
          <CommentCard author="Bob" timestamp="1 hour ago" body="I have a different perspective on this topic." :comment-id="2" @reply="handleReply"/>
        </main>
  
        <!-- Right Sidebar -->
        <aside class="rightbar">
          <h3>Top Discussions</h3>
          <p>1. Aristotle vs. Confucius</p>
          <p>2. The future of classical studies</p>
        </aside>
      </div>
    </div>
  </template>
  
<script setup>
import { ref, onMounted } from 'vue'
import CommentCard from './CommentCard.vue'

// reactive array for threads
const threads = ref([])

// dummy fetch (later replace with real backend call)
onMounted(() => {
  threads.value = [
    {
      id: 1,
      author: 'Alice',
      timestamp: '2 hours ago',
      body: 'Great post! I totally agree with your points.'
    },
    {
      id: 2,
      author: 'Bob',
      timestamp: '1 hour ago',
      body: 'I have a different perspective on this topic.'
    },
    {
      id: 3,
      author: 'Claire',
      timestamp: '10 minutes ago',
      body: 'This reminds me of something I read in Dostoevsky.'
    }
  ]
})

const handleReply = (commentId) => {
  console.log('Reply to comment:', commentId)
}
</script>



  <style scoped>
  /* Layout */
  .layout {
    display: flex;
    flex-direction: column;
    height: 200vh;
  }
  
  .header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    background: #CC8A49;
    padding: 10px 20px;
    color: white;
  }
  
  .logo {
    font-family: 'EB Garamond', serif;
  }
  
  .search-bar {
    flex: 1;
    margin: 0 20px;
    padding: 8px;
    border-radius: 6px;
    border: none;
  }
  
  .login-btn {
    background: white;
    color: #CC8A49;
    padding: 8px 12px;
    border-radius: 6px;
    border: none;
    cursor: pointer;
  }
  
  /* Content grid */
  .content {
    display: grid;
    grid-template-columns: 200px 1fr 250px;
    flex: 1;
    background: #faf7f2;
  }
  
  .sidebar, .rightbar {
    padding: 20px;
    font-family: 'Inter', sans-serif;
  }
  
  .feed {
    padding: 20px;
    overflow-y: auto;
  }
  
  /* Post cards */
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
  

  <style scoped>
  /* Layout */
  .layout {
    display: flex;
    flex-direction: column;
    height: 200vh;
  }
  
  .header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    background: #CC8A49;
    padding: 10px 20px;
    color: white;
  }
  
  .logo {
    font-family: 'EB Garamond', serif;
  }
  
  .search-bar {
    flex: 1;
    margin: 0 20px;
    padding: 8px;
    border-radius: 6px;
    border: none;
  }
  
  .login-btn {
    background: white;
    color: #CC8A49;
    padding: 8px 12px;
    border-radius: 6px;
    border: none;
    cursor: pointer;
  }
  
  /* Content grid */
  .content {
    display: grid;
    grid-template-columns: 200px 1fr 250px;
    flex: 1;
    background: #faf7f2;
  }
  
  .sidebar, .rightbar {
    padding: 20px;
    font-family: 'Inter', sans-serif;
  }
  
  .feed {
    padding: 20px;
    overflow-y: auto;
  }
  
  /* Post cards */
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
  