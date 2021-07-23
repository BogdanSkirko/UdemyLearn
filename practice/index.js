const numberOfFilms = +prompt('Скільки фільмів ви переглянули?','')

let personalMovieDB = {
    count : numberOfFilms,
    movies: {},
    actors: {},
    genres: {},
    privat: false
}
const firstQuestion = prompt('Один из последних просмотренных фильмов?','')
const secondQuestion = +prompt('На сколько оцените его?','')
personalMovieDB.movies[firstQuestion] = secondQuestion
