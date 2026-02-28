<template>
    <header class="app-header">
      <nav class="nav">
        <RouterLink to="/classes" class="nav-item">Classes</RouterLink>
        <RouterLink to="/groups" class="nav-item">Groups</RouterLink>
        <RouterLink to="/events" class="nav-item">Events</RouterLink>
      </nav>
    </header>
  </template>
  
  <script setup>
  </script>
  
  <style scoped>
  .app-header {
    background-color: black;
    padding: 0 2rem;
    height: 64px;
    display: flex;
    align-items: center;
  }
  
  .nav {
    display: flex;
    gap: 2rem;
  }
  
  .nav-item {
    color: white;
    text-decoration: none;
    font-weight: 500;
    transition: opacity 0.2s ease;
  }
  
  .nav-item:hover {
    opacity: 0.7;
  }
  
  .router-link-active {
    border-bottom: 2px solid white;
    padding-bottom: 4px;
  }
  </style>