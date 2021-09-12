"use strict";
var filmesCategorias = ["Comédia", "Drama", "Romance", "Aventura"];
// filmesCategorias.push("Rom");
// filmesCategorias.push(123456);
var filmesAnos = [];
for (var ano_1 = 2000; ano_1 <= new Date().getFullYear(); ano_1++) {
    filmesAnos.push(ano_1);
}
console.log(filmesAnos);
