// Usando o objeto criado no exercício 5, crie uma função que retorne o número total de estudantes em todas as aulas.

const lesson1 = {
    materia: 'Matemática',
    numeroEstudantes: 20,
    professor: 'Maria Clara',
    turno: 'manhã',
  };
  
  const lesson2 = {
    materia: 'História',
    numeroEstudantes: 20,
    professor: 'Carlos',
  };
  
  const lesson3 = {
    materia: 'Matemática',
    numeroEstudantes: 10,
    professor: 'Maria Clara',
    turno: 'noite',
  };

  const addkey = (objeto,chave,valor) => {
      objeto[chave] = valor;
  }

  addkey(lesson2,'turno','noite');
  
  const allLessons = {};
  Object.assign(allLessons,{lesson1},{lesson2},{lesson3});

  console.log(allLessons.lesson1);



  const numberOfStudents = (objeto) => {
    let total = 0;
    const objChave =  Object.keys(objeto);
    for (i in objChave) {
      total += objeto[objChave[i]].numeroEstudantes;
    }
    return total;
  }

  console.log(`total de estudantes: ${numberOfStudents(allLessons)}`);