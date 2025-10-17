<template>

      <!-- Header -->
      <header class="header">
      <h1 class="logo" @click="home()" style="cursor:pointer">Rosetta</h1>
      <input type="text" placeholder="Search discussions..." class="search-bar" />
      <button class="login-btn" @click="router.push('/login')">Login</button>
    </header>

 

    <div class="thread-container">
  <!-- Left Sidebar -->
  <div class="sidebar-left">
    <sidebars type="left" />
  </div>

  <!-- Main Thread Content -->
  <div class="thread-main">
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

    <!-- Add Comment -->
    <div class="add-comment">
      <textarea v-model="newComment" placeholder="Add your thoughts..."></textarea>
      <button @click="submitComment">Post Comment</button>
    </div>

    <!-- Comments Section -->
    <div class="comments-section">
      <h2>Comments</h2>

      <div 
        v-for="(comment, index) in comments" 
        :key="index" 
        class="comment"
      >
        <div class="comment-header">
          <span class="comment-author">{{ comment.author }}</span>
          <span class="comment-timestamp">· {{ comment.timestamp }}</span>
        </div>
        <p class="comment-body">{{ comment.body }}</p>
      </div>

      <div v-if="comments.length === 0" class="no-comments">
        No comments yet — be the first to share your thoughts.
      </div>
    </div>
  </div>

  <!-- Right Sidebar -->
  <div class="sidebar-right">
    <sidebars
      type="right"
      :popular-topics="popularTopics"
      :trending-topics="trendingTopics"
      @topic-click="handleTopicClick"
    />
  </div>
</div>



  </template>
  
  <script setup>
import { ref, onMounted } from 'vue'
import { useRoute } from 'vue-router'
import CommentCard from './CommentCard.vue'
import sidebars from './sidebars.vue'
import axios from 'axios'

const route = useRoute()
const threadId = route.params.id
console.log('Thread ID from route:', threadId)

const post = ref({})
const comments = ref([])
const newComment = ref("")



async function fetchThread() {
  try {
    const response = await axios.get(`http://localhost:3000/threads/${threadId}`)
    console.log('API response for thread:', response.data)

    // assign directly since API returns the thread itself
    post.value = {
      title: response.data.title,
      author: response.data.author,
      body: response.data.preview, // adapt field name
      votes: response.data.votes || 0,
      category: response.data.category || "General",
      timestamp: response.data.timestamp || "Unknown"
    }

    // normalize comment structure
    comments.value = (response.data.comments || []).map(c => ({
      author: c.username,
      body: c.content,
      timestamp: c.timestamp || "Just now"
    }))
  } catch (err) {
    console.error('Error fetching thread:', err)
  }
}


function submitComment() {
  if (newComment.value.trim()) {
    comments.value.push({
      author: "You",
      timestamp: "just now",
      body: newComment.value
    })
    newComment.value = ""
    // optionally post to API here
  }
}

// ✅ Use thread data from router state if available
const state = history.state
if (state && state.thread) {
  console.log('Loaded thread from router state')
  post.value = state.thread
  comments.value = state.thread.comments || []
} else {
  console.log('No state found, fetching from API')
  onMounted(fetchThread)
}
</script>

  
  <style scoped>
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



.sidebar-left {
  grid-column: 1;
}

.sidebar-right {
  grid-column: 3;
}



.thread-container {
  display: grid;
  grid-template-columns: minmax(200px, 1fr) minmax(600px, 2fr) minmax(200px, 1fr);
  gap: 30px;
  width: 90%;
  max-width: 1600px;
  margin: 20px auto;
  padding: 30px;
  background: #faf7f2;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0,0,0,0.05);
  font-family: 'EB Garamond', serif;
}

@media (max-width: 900px) {
  .thread-container {
    grid-template-columns: 1fr; /* stack everything */
  }

  .sidebar-left,
  .sidebar-right {
    order: 2; /* move sidebars below main */
  }

  .main-content {
    order: 1;
  }
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


  .comment {
  background: #fff;
  padding: 12px;
  margin-bottom: 12px;
  border-radius: 8px;
  box-shadow: 0 1px 3px rgba(0,0,0,0.05);
}

.comment-header {
  display: flex;
  gap: 6px;
  font-size: 14px;
  color: #555;
  margin-bottom: 6px;
}

.comment-author {
  font-weight: bold;
}

.comment-body {
  font-size: 16px;
  line-height: 1.4;
}

  </style>
