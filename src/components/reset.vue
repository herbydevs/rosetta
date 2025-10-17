<template>
    <div class="resetpass-container">
      <h2>Reset Your Password</h2>
      <form @submit.prevent="submitReset">
        <div class="form-group">
          <label for="email">Email Address:</label>
          <input type="email" id="email" v-model="email" required />
        </div>
        <button type="submit">Send Reset Link</button>
        <p v-if="message" class="message">{{ message }}</p>
        <p v-if="error" class="error">{{ error }}</p>
      </form>
    </div>
  </template>

  <script setup>
    import { ref } from 'vue'
    const email = ref('')
    const message = ref('')
    const error = ref('')
    async function submitReset() {
      try {
        const response = await fetch('http://localhost:3000/reset-password', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({ email: email.value })
        })
        const data = await response.json()
        if (response.ok) {
          message.value = 'If this email is registered, a reset link has been sent.'
          error.value = ''
        } else {
          error.value = data.message || 'Error sending reset link.'
          message.value = ''
        }
      } catch (err) {
        error.value = 'Network error. Please try again later.'
        message.value = ''
        console.error(err)
      }
    }
  </script>


<style scoped>
    .resetpass-container {
        max-width: 400px;
        margin: 50px auto;
        padding: 20px;
        border: 1px solid #ccc;
        border-radius: 8px;
        background-color: #f9f9f9;
    }

    h2 {
        text-align: center;
        margin-bottom: 20px;
    }
    .form-group {
        margin-bottom: 15px;
    }
    label {
        display: block;
        margin-bottom: 5px;
    }
    input[type="email"] {
        width: 100%;
        padding: 8px;
        box-sizing: border-box;
        border: 1px solid #ccc;
        border-radius: 4px;
    }
    button {
        width: 100%;
        padding: 10px;
        background-color: #CC8A49;
        color: white;
        border: none;
        border-radius: 4px;
        cursor: pointer; 
        font-size: 16px;
    }
    button:hover {
        background-color: #b77a3f;
    }
    .message {
        color: green;
        margin-top: 15px;
        text-align: center;
    }
    .error {
        color: red;
        margin-top: 15px;
        text-align: center;
    }
</style>