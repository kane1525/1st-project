const numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');
const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};


// for(let i = 0; i < 2; i++) {
//     const a = prompt('Один из последних просмотренных фильмов?', ''),
//           b = prompt('На сколько оцените его?', '');

//     if (a != null && b != null && a != '' && b != '' && a.length < 50) {
//         personalMovieDB.movies[a] = b;
//         console.log('done');
//     } else {
//         console.log('Error');
//         i--;
//     }
// }

// for(let i = 0; i < 2; i++) {
//     const a = prompt('Один из последних просмотренных фильмов?', ''),
//           b = prompt('На сколько оцените его?', '');

//     if (a === null || b === null || a === '' || b === '' || a.length > 50) {
//         console.log('error1');
//         i--;
//     } else {
//         personalMovieDB.movies[a] = b;
//         console.log('done1');
//     }
// }

let num = 0;

// while (num < 2) {
//     const a = prompt('Один из последних просмотренных фильмов?', '');
//     const b = prompt('На сколько оцените его?', '');
//     num++;
// }

do {
    const a = prompt('ОдиH из последних просмотренных фильмов?', '');
    const b = prompt('НA сколько оцените его?', '');
    num++;
}
while (num < 2);

// for(let i = 0; i < 2; i++) {
//     const a = prompt('Один из последних просмотренных фильмов?', ''),
//           b = prompt('На сколько оцените его?', '');

//     if (a === null || b === null || a === '' || b === '' || a.length > 50) {
//         console.log('error1');
//         i--;
//     } else {
//         personalMovieDB.movies[a] = b;
//         console.log('done1');
//     }
// }



if (personalMovieDB.count < 10) {
    console.log('Просмотрено довольно мало фильмов');
} else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
    console.log('Вы классический зритель');
} else if (personalMovieDB.count >= 30) {
    console.log('Вы киноман!');
} else {
    console.log(Error);
}

console. log(personalMovieDB);

