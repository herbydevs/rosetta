<template>
  <div class="login-container">
    <p class="login-text">Login</p>
    <form @submit.prevent="login(username, password)">
      <div class="form-group">
        <label for="username">Username:</label>
        <input type="text" id="username" v-model="username" required>
      </div>
      <div class="form-group">
        <label for="password">Password:</label>
        <input type="password" id="password" v-model="password" required>
      </div>
      <button type="submit">Login</button>
      <p v-if="error" style="color:red">{{ error }}</p>
    </form>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const username = ref('')
const password = ref('')
const error = ref('')

async function login() {
  console.log('Attempting login')
  try {
    const response = await fetch('http://localhost:3000/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        username: username.value,
        password: password.value
      })
    })

    const data = await response.json()

    if(response.ok){
      localStorage.setItem('token', data.token)
      console.log('Login successful:', data.user)
      error.value = ''
    } else {
      error.value = data.message
    }
  } catch (err) {
    error.value = 'Network error'
    console.error(err)
  }
}
</script>

<style scoped>
.login-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh; /* centers vertically */
  background-color: #faf7f2; /* subtle parchment tone */
  border-color: #b77a3f; /* border color */
  border-width: 30px;

  width: 100%;
}

.login-text {
  font-family: 'EB Garamond', serif;
  font-size: 28px;
  font-weight: bold;
  margin-bottom: 20px;
  color: #CC8A49;
}

form {
  width: 320px;
  padding: 25px;
  border: 1px solid #e0d6c9;
  border-radius: 10px;
  border-color: #b77a3f;
  box-shadow: 0 4px 12px rgba(0,0,0,0.05);
  align-items: right;
  
}

.form-group {
  margin-bottom: 15px;
}

label {
  display: block;
  margin-bottom: 5px;
  font-family: 'EB Garamond', serif;
  font-size: 16px;
}

input[type="text"],
input[type="password"] {
  width: 100%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 15px;
}

button {
  width: 100%;
  background-color: #CC8A49;
  color: white;
  border: none;
  padding: 12px;
  cursor: pointer;
  font-size: 16px;
  border-radius: 6px;
  transition: background-color 0.3s ease;
}

button:hover {
  background-color: #b77a3f;
}
</style>
