<template>
  <div id="app">
    <header class="navbar">
      <div class="logo">CHESS OPENER</div>
      <button class="hamburger" @click="toggleMenu">☰</button>
      <nav class="nav-links" :class="{ open: menuOpen }">
        <a href="#home" @click="closeMenu">Home</a>
        <a href="#features" @click="closeMenu">Features</a>
        <a href="#about" @click="closeMenu">About</a>
      </nav>
    </header>

    <main class="main-content">
      <router-view />
    </main>

    <footer class="footer">
      <div class="footer-content">
        <p>&copy; 2025 Chess Opener</p>
        <p>Quick Links: <a href="#home">Home</a> | <a href="#about">About</a></p>
        <p>Contact: ramilguliyev02@gmail.com</p>
      </div>
    </footer>
  </div>
</template>

<script>
export default {
  data() {
    return {
      menuOpen: false
    };
  },
  methods: {
    toggleMenu() {
      this.menuOpen = !this.menuOpen;
    },
    closeMenu() {
      this.menuOpen = false;
    }
  }
};
</script>

<style>
body {
  margin: 0;
  font-family: Arial, sans-serif;
  background-color: #f5f7fa;
}

html {
  scroll-behavior: smooth;
}

.navbar {
  background-color: #153b61;
  color: white;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  flex-wrap: wrap;
}
.logo {
  font-size: 1.5rem;
  font-weight: bold;
}
.nav-links {
  display: flex;
  gap: 1rem;
}
.nav-links a {
  color: white;
  text-decoration: none;
}
.nav-links a:hover {
  text-decoration: underline;
}
.hamburger {
  display: none;
  font-size: 1.5rem;
  background: none;
  border: none;
  color: white;
  cursor: pointer;
}

.footer {
  background-color: #153b61;;
  color: white;
  text-align: center;
  padding: 0.5rem;
}
.footer a {
  color: white;
  text-decoration: none;
  margin: 0 5px;
}

@media (max-width: 768px) {
  .hamburger {
    display: block;
  }
  .nav-links {
    flex-direction: column;
    align-items: flex-start;
    width: 100%;
    display: none;
  }
  .nav-links.open {
    display: flex;
  }
}
</style>