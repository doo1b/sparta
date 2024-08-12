// 탑버튼 자연스러운 스크롤 효과
let rollUp = document.querySelector("#rollUp");
let rollDown = document.querySelector("#rollDown");
let body = document.documentElement;

rollUp.addEventListener("click", () => {
  body.scrollTo({ top: 0, behavior: "smooth" });
});

rollDown.addEventListener("click", () => {
  body.scrollTo({ top: 99999, behavior: "smooth" });
});

// API 설정
const API_KEY = "8a1ee9a057e8a63eba456f044358b889";
const options = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4YTFlZTlhMDU3ZThhNjNlYmE0NTZmMDQ0MzU4Yjg4OSIsIm5iZiI6MTcyMjIxODA5MS4yNTc2MDcsInN1YiI6IjY2YTA1YzQ0YzVlMjBkNjJhODE4YjY2YSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.dslmGcz9ZjoKMF-aQaOg4fxibzGMTPW_lJXI6edTSU4"
  }
};

// 카드 레이아웃 생성
function createMovieCard(movie) {
  const card = document.createElement("div");
  card.className = "card";
  card.innerHTML = `
        <div>
        <div class="imgbox"><img class="posterimg" src="https://image.tmdb.org/t/p/w500${movie.poster_path}" alt="${movie.title}">
        </div>
        <p class="movietitle">${movie.title}</p>
        <p class="overview">${movie.overview}</p>
        </div>
        <div class="mintxt">
        <p>평점: ${movie.vote_average}</p>
        <p>개봉일: ${movie.release_date}</p>
        </div>
    `;
  card.addEventListener("click", () => alert(`Movie ID: ${movie.id}`));
  return card;
}

const categoryIds = {
  Popular: "popular",
  "Now Playing": "now_playing",
  "Top Rated": "top_rated",
  Upcoming: "upcoming"
};

// API 불러오기
function getDate(category) {
  const id = categoryIds[category];
  const url = `https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}&language=ko-KR&page=1&region=KR`;
  fetch(url, options)
    .then((response) => response.json())
    .then((data) => {
      const movies = data.results;
      const movieContainer = document.getElementById("movie-container");
      movieContainer.innerHTML = "";

      // 정렬
      const today = new Date();
      if (category === "Now Playing") {
        movies.sort((a, b) => new Date(b.release_date) - new Date(a.release_date));
      } else if (category === "Popular" || category === "Top Rated") {
        movies.sort((a, b) => b.vote_average - a.vote_average);
      } else if (category === "Upcoming") {
        movies.sort((a, b) => {
          // 개봉 예정작 정렬 현재 날짜와 가까운 순으로 변경
          let dateA = new Date(a.release_date);
          let dateB = new Date(b.release_date);
          return Math.abs(today - dateA) - Math.abs(today - dateB);
        });
      }

      // HTML에 카드 붙여넣기
      movies.forEach((movie) => {
        const card = createMovieCard(movie);
        movieContainer.appendChild(card);
      });
    })
    .catch((err) => console.error(err));
}

// 초기 화면
window.onload = () => {
  getDate("Popular");
};

// filter를 사용한 검색 기능
document.getElementById("search-btn").addEventListener("click", search);
function search() {
  const query = document.querySelector(".search-input").value.toLowerCase().trim();
  const movieCards = Array.from(document.querySelectorAll(".card"));
  movieCards
    .filter((card) => {
      const title = card.querySelector(".movietitle").textContent.toLowerCase().trim();
      return !title.includes(query);
    })
    .map((card) => (card.style.display = "none"));
}

// 엔터로 검색 작동하기
const input = document.querySelector(".search-input");
input.addEventListener("keyup", (event) => {
  if (event.keyCode === 13) {
    document.getElementById("search-btn").click();
  }
});

// 드롭다운 기능
document.querySelector(".dropbtn_click").onclick = () => {
  const v = document.querySelector(".dropdown-content");
  v.classList.toggle("show");
};
document.getElementsByClassName("Category").onclick = () => {
  showMenu(value);
};

showMenu = (value) => {
  const dropbtn_content = document.querySelector(".dropbtn_content");
  dropbtn_content.innerText = value;
  getDate(value);
};

window.onclick = (e) => {
  if (!e.target.matches(".dropbtn_click")) {
    const dropdowns = document.getElementsByClassName("dropdown-content");

    for (let i = 0; i < dropdowns.length; i++) {
      const openDropdown = dropdowns[i];
      if (openDropdown.classList.contains("show")) {
        openDropdown.classList.remove("show");
      }
    }
  }
};
