<template>
    <div class="profile-container">
      <!-- User Info -->
      <div class="profile-header">
        <img class="avatar" :src="user?.avatar || '/default-avatar.png'" alt="Avatar" />
        <div class="user-info">
          <h2>{{ user?.username || 'Loading...' }}</h2>
          <p>{{ user?.bio }}</p>
        </div>
        <button @click="editProfile">Edit Profile</button>
      </div>
  
      <hr class="divider" />
  
      <!-- Stats -->
      <div class="profile-stats">
        <div class="stat">
          <p class="number">{{ user?.posts || 0 }}</p>
          <p class="label">Posts</p>
        </div>
        <div class="stat">
          <p class="number">{{ user?.threads || 0 }}</p>
          <p class="label">Threads</p>
        </div>
        <div class="stat">
          <p class="number">{{ user?.comments || 0 }}</p>
          <p class="label">Comments</p>
        </div>
      </div>
  
      <hr class="divider" />
  
      <!-- Recent activity -->
      <div class="recent-activity">
        <h3>Recent Posts</h3>
        <ul>
          <li v-for="post in user?.recentPosts || []" :key="post.id">
            <router-link :to="`/thread/${post.threadId}`">{{ post.title }}</router-link>
          </li>
        </ul>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref, onMounted } from 'vue'
  
  const user = ref({
    username: '',
    avatar: '/default-avatar.png',
    bio: '',
    posts: 0,
    threads: 0,
    comments: 0,
    recentPosts: []
  })
  
  onMounted(async () => {
    try {
      // Replace with your actual API call
      // const res = await fetch('/api/user')
      // const data = await res.json()
      // user.value = data
  
      // Example static data
      user.value = {
        username: 'RosettaUser',
        avatar: '/default-avatar.png',
        bio: 'Loves literature, history, and art.',
        posts: 12,
        threads: 5,
        comments: 34,
        recentPosts: [
          { id: 1, threadId: 42, title: 'Exploring Plato’s Cave' },
          { id: 2, threadId: 43, title: 'Renaissance Art Discussion' }
        ]
      }
    } catch (err) {
      console.error(err)
    }
  })
  
  function editProfile() {
    alert('Edit profile functionality coming soon!')
  }
  </script>
  
  <style scoped>
  .profile-container {
    max-width: 800px;
    margin: 20px auto;
    padding: 20px;
    font-family: 'EB Garamond', serif;
    background-color: #faf7f2;
    border-radius: 12px;
    box-shadow: 0 4px 12px rgba(0,0,0,0.05);
  }
  
  .profile-header {
    display: flex;
    align-items: center;
    gap: 20px;
    margin-bottom: 20px;
  }
  
  .avatar {
    width: 100px;
    height: 100px;
    border-radius: 50%;
    object-fit: cover;
    border: 2px solid #CC8A49;
  }
  
  .user-info h2 {
    margin: 0;
    color: #CC8A49;
    font-size: 24px;
  }
  
  .user-info p {
    color: #555;
    margin-top: 5px;
  }
  
  button {
    margin-left: auto;
    background-color: #CC8A49;
    color: white;
    border: none;
    padding: 8px 16px;
    border-radius: 6px;
    cursor: pointer;
    font-size: 14px;
  }
  
  button:hover {
    background-color: #b77a3f;
  }
  
  .divider {
    border: none;
    border-top: 1px solid #e0d6c9;
    margin: 20px 0;
  }
  
  .profile-stats {
    display: flex;
    justify-content: space-around;
    margin-bottom: 20px;
    text-align: center;
  }
  
  .stat .number {
    font-weight: bold;
    font-size: 20px;
  }
  
  .stat .label {
    color: #555;
    font-size: 14px;
  }
  
  .recent-activity h3 {
    margin-bottom: 10px;
    color: #CC8A49;
  }
  
  .recent-activity ul {
    list-style: none;
    padding: 0;
  }
  
  .recent-activity li {
    margin-bottom: 10px;
    padding: 8px;
    border-radius: 6px;
    transition: background 0.2s;
  }
  
  .recent-activity li:hover {
    background-color: #f0e8d9;
  }
  </style>
  