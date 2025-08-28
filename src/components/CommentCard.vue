<template>
  <div class="card">
    <h2 class="card-title">{{ thread.title }}</h2>
    <p class="card-snippet">{{ thread.snippet }}</p>
    <button class="card-button" @click="goToThread(thread.id)">Read More</button>

  </div>
</template>

<script setup>
import { useRouter } from "vue-router"

const router = useRouter()

const threads = [
  { id: 1, title: "How to Train Discipline", snippet: "A deep dive into building habits and routines for long-term success..." },
  { id: 2, title: "The Future of AI", snippet: "Discussion about where artificial intelligence is heading in the next decade..." },
  { id: 3, title: "Greek Philosophy Thread", snippet: "Exploring Plato, Aristotle, and the roots of Western thought..." }
]

function goToThread(id) {
  router.push(`/thread/${id}`)
}
</script>



<style scoped>
.thread-card {
  border: 1px solid #ccc;
  border-radius: 8px;
  padding: 16px;
  margin: 16px 0;
}
.thread {
  font-size: 1.5em;
  margin-bottom: 8px;
}
.thread-info {
  display: flex;
  justify-content: space-between;
  font-size: 0.9em;
  color: #555;
}
.thread-info p {
  margin: 0;
}
.thread-info .comments,
.thread-info .upvotes {
  display: flex;
  align-items: center;
}
.thread-info .created-at {
  color: #888;
}
.thread-info .description {
  flex: 1;
  margin-right: 16px;
}
.thread-info .description::after {
  content: '';
  display: block;
  height: 1px;
  background: #eee;
  margin-top: 8px;
}
.thread-info .description {
  flex: 1;
  margin-right: 16px;
}
.thread-info .description::after {
  content: '';
  display: block;
  height: 1px;
  background: #eee;
  margin-top: 8px;
}
.thread-info .upvotes {
  color: #f39c12;
}
.thread-info .comments {
  color: #3498db;
}
.thread-info .created-at {
  color: #7f8c8d;
}
.thread-info .upvotes {
  color: #e74c3c;
}
</style>