<template>
    <div class="settings-container">
      <div class="settings-sidebar">
        <h1>Settings</h1>
        <ul id="options-list">
          <li>Account</li>
          <li>Notifications</li>
          <li>Privacy</li>
          <li>Theme</li>
          <li>Language</li>
          <li>Help</li>
          <li>About</li>
        </ul>
        <button @click="$emit('logout')">Logout</button>
      </div>
  
      <div class="settings-content">
        <p>Adjust your account settings, manage notifications, and customize your experience.</p>
        <p>More options coming soon!</p>
      </div>
    </div>
  </template>
  
  <style scoped>
  .settings-container {
    display: flex;
    flex-direction: row; /* sidebar on left, content on right */
    height: 100vh;
    background-color: #faf7f2;
    font-family: 'EB Garamond', serif;
  }
  
  .settings-sidebar {
    width: 250px;
    padding: 20px;
    background: #fff;
    border-right: 1px solid #e0d6c9;
    box-shadow: 2px 0 8px rgba(0,0,0,0.05);
    display: flex;
    flex-direction: column;
  }
  
  .settings-sidebar h1 {
    font-size: 24px;
    color: #CC8A49;
    margin-bottom: 20px;
  }
  
  #options-list {
    list-style: none;
    padding: 0;
    flex-grow: 1; /* pushes logout button to bottom */
  }
  
  #options-list li {
    padding: 10px;
    border-bottom: 1px solid #e0d6c9;
    cursor: pointer;
  }
  
  #options-list li:hover {
    background: #f0e8d9;
  }
  
  .settings-sidebar button {
    margin-top: auto; /* stays at bottom */
    padding: 10px 20px;
    background: #CC8A49;
    color: white;
    border: none;
    border-radius: 6px;
    cursor: pointer;
    font-size: 16px;
  }
  
  .settings-sidebar button:hover {
    background: #b77a3f;
  }
  
  .settings-content {
    flex: 1;
    padding: 30px;
    font-size: 16px;
    color: #555;
    overflow-y: auto;
  }
  </style>
  