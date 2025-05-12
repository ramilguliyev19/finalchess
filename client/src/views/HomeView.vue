<template>
  <div class="home">
    <!-- Hero-->
    <section id="home" class="hero">
      <div class="icon">♟️</div>
      <h1>Welcome to Chess Opening Explorer</h1>
      <p>Search and learn chess openings. Master your first moves in style.</p>
      <div class="hero-buttons">
        <a href="#about" class="btn primary">Learn More</a>
      </div>
    </section>

   
    <section class="search-section">
      <input v-model="search" placeholder="Search openings..." @input="fetchData" />
      <ul v-if="search && openings.length">
        <li v-for="opening in openings" :key="opening._id">
          <strong>{{ opening.name }}</strong> ({{ opening.eco }}): {{ opening.moves }}
        </li>
      </ul>
      <br>
    </section>

    <!--Features-->
    <section id="features" class="features">
      <h2>Why You'll Love It</h2>
      <div class="cards">
        <div class="card">
          <h3>🎯 Precision Search</h3>
          <p>Find chess openings by name with instant results.</p>
        </div>
        <div class="card">
          <h3>📖 Opening Encyclopedia</h3>
          <p>Explore hundreds of popular openings and variants.</p>
        </div>
        <div class="card">
          <h3>📱 Mobile Friendly</h3>
          <p>Use the app smoothly on any screen size or device.</p>
        </div>
        <div class="card">
          <h3>🧠 Learn the Strategy</h3>
          <p>Get better with every move you study.</p>
        </div>
      </div>
    </section>

    <!-- About-->
    <section id="about" class="about-section">
      <h2>Random Chess Facts</h2>
      <p>Number of possible ways of playing the first four moves for both sides in a game of chess is 318,979,564,000.</p>
      <p>The longest game of chess that is theoretically possible is 5,949 moves.</p>
      <p>The first chess game played between space and earth was on June 9, 1970 by the Soyez-9 crew.</p>
    </section>
  </div>
</template>

<script>
export default {
  data() {
    return {
      search: '',
      openings: []
    };
  },
  methods: {
    async fetchData() {
      if (!this.search) {
        this.openings = [];
        return;
      }
      const res = await fetch(`http://localhost:5050/api/openings?name=${this.search}`);
      this.openings = await res.json();
    }
  }
};
</script>

<style scoped>
.home {
  text-align: center;
}
.hero {
  padding: 2rem 1rem;
  background-color: #e1e5e7;
}
.icon {
  font-size: 4rem;
}
.hero h1 {
  margin: 1rem 0 0.5rem;
}
.hero p {
  font-size: 1.1rem;
  color: #555;
}
.hero-buttons .btn {
  margin-top: 1rem;
  padding: 0.6rem 1.2rem;
  text-decoration: none;
  background-color: #153b61;;
  color: white;
  border-radius: 5px;
}
.hero-buttons .btn:hover {
  background-color: #1a252f;
}

.search-section {
  margin: 2rem auto;
  width: 90%;
  max-width: 500px;
}
.search-section input {
  padding: 10px;
  width: 100%;
  border: 1px solid #ccc;
  border-radius: 6px;
}

.features {
  padding: 2rem 1rem;
  background-color: #ffffff;
}
.features h2 {
  margin-bottom: 1rem;
}
.cards {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 1rem;
}
.card {
  padding: 1rem;
  border: 1px solid #ddd;
  border-radius: 8px;
  background: #e1e5e7;
}
.card h3 {
  margin-bottom: 0.5rem;
}

.about-section {
  padding: 2rem 1rem;
  background-color: #eef2f3;
}
.about-section h2 {
  margin-bottom: 1rem;
}
</style>
