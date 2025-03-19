const studenti = [
  { ime: "Marko", prezime: "Petrović", godina: 3, ocjene: [9, 8, 7, 10, 9] },
  { ime: "Ana", prezime: "Jovanović", godina: 1, ocjene: [7, 6, 8, 6, 7] },
  { ime: "Luka", prezime: "Simić", godina: 2, ocjene: [10, 9, 10, 8, 9] },
  { ime: "Maja", prezime: "Nikolić", godina: 4, ocjene: [6, 5, 7, 6, 6] },
  { ime: "Ivana", prezime: "Stanković", godina: 1, ocjene: [9, 10, 9, 8, 9] },
];

function prosjecnaVrijednost(vrijednosti) {
  return vrijednosti.reduce((a, b) => a + b) / vrijednosti.length;
}

function ispisStudenta(student, full) {
  if (full) {
    console.log(student);
    return;
  }

  console.log(student.ime + " " + student.prezime);
}

function zad1() {
  for (let i = 0; i < studenti.length; i++) {
    let student = studenti[i];
    let prosjecnaOcjena = prosjecnaVrijednost(student["ocjene"]);

    if (prosjecnaOcjena > 8.5) {
      ispisStudenta(student, true);
    } else {
      ispisStudenta(student);
    }
  }
}

function zad2() {
  let najboljiProsjek = 0;
  let najboljiStudent;

  for (let i = 0; i < studenti.length; i++) {
    let student = studenti[i];
    let prosjek = prosjecnaVrijednost(student["ocjene"]);

    if (najboljiProsjek < prosjek) {
      najboljiProsjek = prosjek;
      najboljiStudent = student;
    }
  }

  ispisStudenta(najboljiStudent, true);
}

function zad3() {
  let prosjek = 0;
  for (let i = 0; i < studenti.length; i++) {
    prosjek += prosjecnaVrijednost(studenti[i]["ocjene"]);
  }
  console.log(prosjek / studenti.length);
}

function zad4() {
  zad5();

  studenti.sort((a, b) => b.prosjek - a.prosjek);
}

function zad5() {
  for (let i = 0; i < studenti.length; i++) {
    let student = studenti[i];
    let prosjecnaOcjena = prosjecnaVrijednost(student["ocjene"]);

    student.prosjek = prosjecnaOcjena;
  }

  console.log(studenti);
}
