<template>
  <div v-if="type === 'left'">
    <ul>
      <li><a href="#">📚 Literature</a></li>
      <li><a href="#">🏛 History</a></li>
      <li><a href="#">🎨 Art</a></li>
      <li><a href="#">💭 Philosophy</a></li>
      <li><a href="#">🗣 Languages</a></li>
      <li><a href="#">🔬 Science</a></li>
      <li><a href="#">🌍 Culture</a></li>
      <li><a href="#">🎭 Theater</a></li>
      <li><a href="#">🎶 Music</a></li>
      <li><a href="#">✍ Poetry</a></li>
    </ul>
  </div>
  <div v-else>
    <h3>Trending Discussions</h3>
    <ul>
      <li v-for="topic in trendingTopics" :key="topic.title">
        <a href="#" @click.prevent="$emit('topic-click', topic.title)">
          {{ topic.title }}
        </a>
      </li>
    </ul>
    <h3 style="margin-top:24px;">Popular Topics</h3>
    <ul>
      <li v-for="topic in popularTopics" :key="topic.title">
        <a href="#" @click.prevent="$emit('topic-click', topic.title)">
          {{ topic.title }}
        </a>
      </li>
    </ul>
  </div>
</template>

<script setup>
const props = defineProps({
  type: {
    type: String,
    default: 'left'
  },
  popularTopics: {
    type: Array,
    default: () => []
  }
})

const trendingTopics = [
  { title: 'The Renaissance' },
  { title: 'Existentialism in Modern Times' },
  { title: 'The Evolution of Language' },
  { title: 'Impressionism vs Realism' },
  { title: 'The Role of Music in Society' }
]
</script>

<style>
.sidebar-left, .sidebar-right {
    width: 200px;
    padding: 20px;
    background-color: #faf7f2;
    border: 1px solid #ddd;
    border-radius: 8px;
    /* Remove position: fixed, left, right, top, height, overflow-y */
}

.sidebar-left ul, .sidebar-right ul {
    list-style: none;
    padding: 0;
}
.sidebar-left li, .sidebar-right li {
    margin: 10px 0;
    font-size: 16px;
}
.sidebar-right h3 {
    margin-bottom: 15px;
}
.sidebar-right p {
    margin: 8px 0;
    font-size: 14px;
}

.sidebar-left a {
    color: inherit;
    text-decoration: none;
    transition: color 0.2s;
}
.sidebar-left a:hover {
    color: #CC8A49;
    text-decoration: underline;
}
</style>