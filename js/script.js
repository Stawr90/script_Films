'use strict';

const numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели', '');

let personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

for (let i = 1; i < 3; i++) {
    const a = prompt('Один из последних просмотренных фильмов', ''),
        b = +prompt('На сколько оцените его?', '');

    if (a != "" && b != "" && a != null && b != null && a.length <= 50) {
        console.log("Все введено верно!");
        personalMovieDB.movies[a] = b;
    } else {
        console.log("Попробуйте еще раз");
        alert("Попробуйте ввести еще раз!");
        i--;
    }
}

if (personalMovieDB.count < 10) {
    alert("Просмотрено довольно мало фиьмов");
} else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
    alert("Вы классический зритель");
} else if (personalMovieDB.count >= 30) {
    alert("Вы киноман");
} else {
    alert("Произошла ошибка");
}

console.log(personalMovieDB);