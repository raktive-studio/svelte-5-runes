<script>
let favoriteMovies = $state(['Inception', 'The Matrix', 'Interstellar']);

function addMovie() {
    const movie = prompt("Enter your favorite movie:");
    if (movie) {
        favoriteMovies.push(movie);
    }
}
</script>

<div>
    <h3>Favorite Movies:</h3>
    <ul>
        {#each favoriteMovies as movie}
            <li>{movie}</li>
        {/each}
    </ul>
    <button onclick={addMovie}>Add Movie</button>
</div>

<style>
  div {
      max-width: 400px;
      margin: auto;
      text-align: center;
  }
  ul {
      list-style-type: none;
      padding: 0;
  }
  li {
      background: #f0f0f0;
      margin: 5px 0;
      padding: 10px;
      border-radius: 4px;
  }
  button {
      padding: 10px 15px;
      background-color: #007bff;
      color: white;
      border: none;
      border-radius: 4px;
      cursor: pointer;
  }
  button:hover {
      background-color: #0056b3;
  }
</style>