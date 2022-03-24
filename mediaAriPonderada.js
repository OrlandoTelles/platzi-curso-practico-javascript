const notes = [
    {
        materia: "Educación Física",
        note: 10,
        credit: 2,
    },

    {
        materia: "Progamacíon",
        note: 8,
        credit: 5,
    },

    {
        materia: "Finanzas Personales",
        note: 7,
        credit: 5,
    },
];

const noteWithCredits = notes.map(
    function(noteObject){
        return noteObject.note * noteObject.credit;
    }
);

const sumNoteWithCredits = noteWithCredits.reduce(
    function(sum = 0, newValue){
        return sum + newValue;
    }
);

const arrayCredits = notes.map(
    function(Object){
        return Object.credit;
    }
);

const sumCredits = arrayCredits.reduce(
    function(sum = 0, newValue){
        return sum + newValue;
    }
);

const m_a_ponderada = sumNoteWithCredits / sumCredits;
