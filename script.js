document.addEventListener('DOMContentLoaded', function() {
    const movies = [
      { title: 'The Dark Knight', genre: 'action' },
      { title: 'Inception', genre: 'action' },
      { title: 'Superbad', genre: 'comedy' },
      { title: 'The Hangover', genre: 'comedy' },
      { title: 'The Shawshank Redemption', genre: 'drama' },
      { title: 'Forrest Gump', genre: 'drama' }
    ];
  
    const moviesContainer = document.getElementById('movies-container');
    const genreSelect = document.getElementById('genre-select');
  
    function renderMovies(genre) {
      moviesContainer.innerHTML = '';
  
      movies
        .filter(movie => genre === 'all' || movie.genre === genre)
        .map(movie => {
          const movieElement = document.createElement('div');
          movieElement.className="movie-details";
          movieElement.classList.add('movie');
          movieElement.textContent = movie.title;
          moviesContainer.appendChild(movieElement);
          movieElement.style.transition='0.5s';
        });
    }
  
    genreSelect.addEventListener('change', function () {
      renderMovies(this.value);
    });
  
    renderMovies('all');
  });
  