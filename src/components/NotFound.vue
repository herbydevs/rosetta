<template>
  <div class="not-found">
    <h1>404 - Page Not Found</h1>
    <p>Sorry, the page you are looking for does not exist.</p>
    <router-link to="/">Go back to Home</router-link>
  </div>
</template>


<style scoped>
.not-found {
    text-align: center;
    padding: 50px;
    font-family: 'Inter', sans-serif;
}
.not-found h1 {
    font-size: 48px;
    color: #CC8A49;
}
.not-found p {
    font-size: 20px;
    color: #333;
}
.not-found a {
    color: #CC8A49;
    text-decoration: none;
    font-weight: bold;
    cursor: pointer;
    margin-left: 10px;
}
    
    
</style>