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

// Prototipos con la sintaxis de clases
class Student2 {
    constructor({
    name,
    cursosAprobados = [],
    age,
    email,
    }) {
    this.name = name;
    this.email = email;
    this.age = age;
    this.cursosAprobados = cursosAprobados;
    }

    aprobarCurso(nuevoCursito) {
    this.cursosAprobados.push(nuevoCursito);
    }
}

const miguelito = new Student2({
    name: "Miguel",
    age: 28,
    email: "miguelito@platzi.com",
});
//as