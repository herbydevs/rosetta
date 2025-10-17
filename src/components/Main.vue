<template>
  <div class="layout">
    <!-- Header -->
    <header class="header">
      <h1 class="logo" @click="home()" style="cursor:pointer">Rosetta</h1>
      <input type="text" placeholder="Search discussions..." class="search-bar" />
      <button class="login-btn" @click="router.push('/login')">Login</button>
    </header>

    <div class="content">
      <div class="sidebar-left">
        <sidebars type="left" />
      </div>
      <main class="feed">
        <h2 v-if="selectedTopic" style="margin-bottom:16px;">{{ selectedTopic }}</h2>
        <CommentCard
          v-for="thread in threads"
          :key="thread.id"
          :thread="thread"
        />
      </main>
      <div class="sidebar-right">
        <sidebars
          type="right"
          :popular-topics="popularTopics"
          :trending-topics="trendingTopics"
          @topic-click="handleTopicClick"
        />
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import CommentCard from './CommentCard.vue'
import sidebars from './sidebars.vue'
import axios from 'axios'
import router from '../router'

const threads = ref([])
const selectedTopic = ref(null)
const popularTopics = ref([])
const trendingTopics = ref([])

async function fetchThreads(topic = null) {
  try {
    let url = 'http://localhost:3000/test'
    if (topic) {
      url = `http://localhost:3000/threads?topic=${encodeURIComponent(topic)}`
    }
    const response = await axios.get(url)
    threads.value = response.data
  } catch (error) {
    console.error('Error fetching threads:', error)
  }
}




async function fetchPopularTopics() {
  try {
    const response = await axios.get('http://localhost:3000/popular-topics')
    popularTopics.value = response.data
  } catch (error) {
    // fallback: use thread titles from /test if /popular-topics not available
    popularTopics.value = threads.value.map(t => ({ title: t.title }))
  }
}

async function getTrendingTopics() {
  try {
    const response = await axios.get('http://localhost:3000/trending-topics')
    console.log('Trending topics response:', response.data)
    trendingTopics.value = response.data
  } catch (error) {
    console.error('Error fetching trending topics:', error)
    return []
  }
}

function handleTopicClick(topic) {
  selectedTopic.value = topic
  fetchThreads(topic)
}

function home() {
  router.push('/')
  selectedTopic.value = null
  fetchThreads()
}

onMounted(async () => {
  await fetchThreads()
  await fetchPopularTopics()
  await getTrendingTopics()
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
  grid-template-columns: 200px 1fr 200px;
  height: 100vh;
  background: #faf7f2;
}

.feed {
  grid-column: 2;
  padding: 30px 24px;
  overflow-y: auto;
  background: #f5efe6;
  min-height: 100vh;
  box-sizing: border-box; 
}

.sidebar-left {
  grid-column: 1;
}

.sidebar-right {
  grid-column: 3;
}

/* Post cards */
.post-card {
  background: #fff;
  padding: 20px;
  margin-bottom: 24px;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0,0,0,0.07);
  width: 100%;
  box-sizing: border-box;
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
