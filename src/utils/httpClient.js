const API = "https://api.themoviedb.org/3";

export function get(path) {
  return fetch(API + path, {
    headers: {
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmYjY5ZWZlZmZiOGVhYjRhZDMwYWMwYzJlNzcxY2ZiNiIsInN1YiI6IjYxNjQ4MTRmNTA3MzNjMDAyYWI0Yjk2NiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Id46vkBdxkGvBlBXjpfMyr98y85HC6oyGPAp01CYY2g",
      "Content-Type": "application/json;charset=utf-8",
    },
  }).then((result) => result.json());
}
