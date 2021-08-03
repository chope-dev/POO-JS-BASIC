const natalia = {
    name: 'Natalia',
    age: 20,
    cursosAprobados: [
        "Curso Def de HTML y CSS",
        "Curso Practico de HTML y CSS",
    ],

    aprobarCurso(nuevoCursito) {
        this.cursosAprobados.push(nuevoCursito);
    },
};

function Student (name, age, cursosAprobados) {
    this.name = name;
    this.age = age;
    this.cursosAprobados = cursosAprobados;
/*     this.aprobarCurso = function (nuevoCursito) {
        this.cursosAprobados.push(nuevoCursito);
    } */
}

Student.prototype.aprobarCurso = function (nuevoCursito) {
    this.cursosAprobados.push(nuevoCursito);
}

const juanita = new Student (
    "Juanita Alejandra",
    15,
    [
        "Curso de Introduccion a la Producción de Videojuegos",
        "Curso de Creación de personajes",
    ],
)

//Hacer que Natalia apruebe otro curso
natalia.cursosAprobados.push('Curso de Responsive Designe');

