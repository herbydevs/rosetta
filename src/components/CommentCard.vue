<template>
  <div
    class="post-card"
    @click="goToThread(thread)"
    style="cursor: pointer"
  >
    <h2>{{ thread.title }}</h2>
    <p>{{ thread.preview }}</p>
    <div class="post-meta">
      <span
        @click.stop="senderProfile(thread.sender)"
        style="color: #CC8A49; cursor: pointer; text-decoration: underline;"
      >
        By {{ thread.sender }}
      </span>
    </div>
  </div>
</template>

<script setup>
import { useRouter } from "vue-router"

const router = useRouter()

function goToThread(thread) {
  router.push(`/thread/${thread.id}`)
}

function senderProfile(sender) {
  // Use senderId if available
  router.push(`/profile/${thread.sender}/${thread.senderId}`)
}

defineProps({
  thread: {
    type: Object,
    required: true
  }
})
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