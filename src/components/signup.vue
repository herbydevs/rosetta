<template>

<div class="signup-container">
    <h1 class="stext">Sign up</h1>
    <div class="signup-form">
        <div class="form-group">
            <label for="username">Username</label>
            <input type="text" id="username" v-model="username" required>
            <label for="password">Password</label>
            <input type="password" id="password" v-model="password" required>
            <label for="email">Email</label>
            <input type="email" id="email" v-model="email" required>
            <button @click="signup" class="signup-button">Signup</button>
        </div>
    </div>

</div>


</template>


<style>
    .signup-container {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        height: 100vh;
        background-color: #faf7f2;
        font-family: 'EB Garamond', serif;
    }

    .signup-form {
        background: white;
        padding: 20px;
        border-radius: 8px;
        box-shadow: 0 2px 8px rgba(0,0,0,0.1);
        width: 300px;
    }

    .form-group {
        display: flex;
        flex-direction: column;
    }

    label {
        margin-bottom: 8px;
        font-size: 16px;
        color: #333;
    }

    input {
        padding: 10px;
        margin-bottom: 15px;
        border: 1px solid #ccc;
        border-radius: 4px;
        font-size: 14px;
    }


    .stext {
        font-size: 32px;
        color: #CC8A49;
        margin-bottom: 20px;
    }

     
    .signup-button{
        background-color: #CC8A49;
        color: #faf7f2;
        border: none;
        border-radius: 4px;
        padding: 12px 0;
        font-size: 16px;
        font-family: 'EB Garamond', serif;
        width: 100%;
        cursor: pointer;
        transition: background .2s;
        margin-top: 10px;
    }


    .signup-button:hover{
        background-color: #a86c36   ;
    }

</style>
