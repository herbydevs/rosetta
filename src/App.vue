<script setup>
import { useRoute } from 'vue-router'

const route = useRoute()
const threadId = route.params.id  // this is now safe
</script>

<template>
  <router-view />
</template>