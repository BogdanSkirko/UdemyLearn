const numberOfFilms = +prompt('Скільки фільмів ви переглянули?','')

let personalMovieDB = {
    count : numberOfFilms,
    movies: {},
    actors: {},
    genres: {},
    privat: false
}
// const firstQuestion = prompt('Один из последних просмотренных фильмов?','')
// const secondQuestion = +prompt('На сколько оцените его?','')
// personalMovieDB.movies[firstQuestion] = secondQuestion

for (let i=0; i<2; i++) {
    const firstQuestion = prompt('Один из последних просмотренных фильмов?',''),
          secondQuestion = +prompt('На сколько оцените его?','')
    if (firstQuestion != null && secondQuestion != null && firstQuestion != '' && secondQuestion != '' && firstQuestion.length < 50){
        personalMovieDB.movies[firstQuestion] = secondQuestion;
        console.log('Ok');
    }
    else {
        console.log('No,Введіть менше 50 символів');
        i--
    }
}
if (personalMovieDB.count < 10) {
    console.log("Просмотрено довольно мало фильмов")}
    else if (personalMovieDB.count > 10 && personalMovieDB.count <30){
        console.log("Вы классический зритель")
}
    else if (personalMovieDB.count >= 30){
        console.log("Вы киноман")
}
    else {console.log("Произошла ошибка")}
