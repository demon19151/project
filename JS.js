'use strict'

let numberOfFilms;



function start() {
    numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?", '');
    while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
        numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?", '');
    }
}
start();

let personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};



    function rememberMyFilms(){
        for (let i = 0 ; i < 2; i++) {
            const a = prompt("Один из последних просмотренных фильмов?", '').trim(),
            b = prompt("На сколько оцените его?", '');
            if (a != null && b != null && a != '' && b != '' && a.length < 50 ) {
                personalMovieDB.movies[a] = b;  
                console.log('Done');
            } else {
                console.log('error');
                i--;
            }
        }      
    }
rememberMyFilms();

function detectPersonalLevel() {
    if (personalMovieDB.count < 10){
        console.log("Неплохо");
    } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30)   {
        console.log("Хорошо");
    }else if(personalMovieDB.count >= 30) {
        console.log("Хороfdsfsdfшо");
    }
    
}

detectPersonalLevel();

function showMyDB(hidden) {
    if(!hidden) {
        console.log(personalMovieDB);
    }
}

showMyDB(personalMovieDB.privat);

function showMyDB(hidden) {
    if(!hidden) {
        console.log(personalMovieDB);
    }
}

function favGanres() {
    for(let i = 1; i <= 3; i++) {
        const genre = prompt(`Ваш любимый жанр под номером ${i}`);
        personalMovieDB.genres[i - 1] = genre;
    }
}
favGanres();