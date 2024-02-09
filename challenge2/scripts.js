let students = [
  {
    name: 'Djonata',
    firstNote: 9.7,
    secondNote: 10
  },
  {
    name: 'Augusto',
    firstNote: 9.3,
    secondNote: 10
  },
  {
    name: 'João',
    firstNote: 5.8,
    secondNote: 6.5
  }
]

function calculateMedia(firstNote, secondNote) {
  return media = ((firstNote + secondNote) / 2).toFixed(1)
}

for (let student of students) {
  let studentMedia = calculateMedia(student.firstNote, student.secondNote)
  let performance = studentMedia >= 7 ? `Parabéns, ${student.name}! Você foi aprovado(a) no concurso!` : `Não foi dessa vez, ${student.name}! Tente novamente!`

  alert(`A média do(a) aluno(a) ${student.name} é: ${studentMedia}
  ${performance}`
  )
}