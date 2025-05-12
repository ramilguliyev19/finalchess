<template>
    <div>
      <h1>About Chess Openings</h1>
      
      <input v-model="search" placeholder="Search openings..." @input="fetchData" />
      <ul>
        <li v-for="opening in openings" :key="opening._id">
          <strong>{{ opening.name }}</strong> ({{ opening.eco }}): {{ opening.moves }}
        </li>
      </ul>
  
      <section>
        <h2>What Are Chess Openings?</h2>
        <p>
          Chess openings are the first moves in a chess game. They are designed to help players control the center,
          develop their pieces efficiently, and prepare for the middle game.
        </p>
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
        if (this.search.length === 0) {
          this.openings = [];
          return;
        }
        const res = await fetch(`http://localhost:5050/api/openings?name=${this.search}`);
        this.openings = await res.json();
      }
    }
  };
  </script>
  
  <style>
  input {
    padding: 8px;
    width: 300px;
    margin-bottom: 16px;
  }
  section {
    margin-top: 2rem;
    padding: 1rem;
    background-color: #f0f0f0;
    border-radius: 8px;
  }
  </style>
  