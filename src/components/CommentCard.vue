<template>
  <div class="card">
    <h2 class="card-title">{{ thread.title }}</h2>
    <p class="card-snippet">{{ thread.preview  }}</p>
    <button class="card-button" @click="goToThread(thread.id)">Read More</button>

  </div>
</template>

<script setup>
import { useRouter } from "vue-router"

defineProps({
  thread: {
    type: Object,
    required: true,
    title: String,
    snippet: String,
    id: Number
  }
})

const router = useRouter()

function goToThread(id) {
  router.push(`/thread/${id}`)
}
</script>



<style scoped>
.card {
  border: 1px solid #ccc;
  border-radius: 8px;
  padding: 16px;
  margin: 16px;
  background-color: #f9f9f9;
}
.card-title {
  font-size: 20px;
  color: #333;
  margin-bottom: 8px;
}
.card-snippet {
  font-size: 16px;
  color: #666;
  margin-bottom: 12px;
}
.card-button {
  background-color: #CC8A49;
  color: white;
  border: none;
  padding: 10px 16px;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}
.card-button:hover {
  background-color: #b77a3f;
} 


</style>