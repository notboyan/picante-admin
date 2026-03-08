<template>
  <header class="app-header">
    <div class="brand">
      Picante Admin
    </div>

    <nav class="nav">
      <RouterLink to="/classes" class="nav-item">Classes</RouterLink>
      <RouterLink to="/groups" class="nav-item">Groups</RouterLink>
      <RouterLink to="/events" class="nav-item">Events</RouterLink>
    </nav>

    <!-- Placeholder for future right-side items -->
    <div class="right"></div>
  </header>
</template>

<style scoped>
.app-header {
  background-color: black;
  color: white;
  height: 64px;
  display: grid;
  grid-template-columns: 1fr auto 1fr;
  align-items: center;
  padding: 0 24px;
}

.brand {
  font-weight: 600;
  font-size: 18px;
}

.nav {
  display: flex;
  gap: 32px;
  justify-content: center;
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

.right {
  display: flex;
  justify-content: flex-end;
}
</style>