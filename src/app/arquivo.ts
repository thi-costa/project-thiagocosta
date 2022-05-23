export class Aluno {
  public nome: string;
  public ru: Number;
  public nomeDoCurso: string;
  public dataDeAniversario: string;

  // Construtor de classe Aluno
  constructor(nome: string, ru: Number, nomeDoCurso: string, dataDeAniversario: string){
      this.nome = nome;
      this.ru = ru;
      this.nomeDoCurso = nomeDoCurso;
      this.dataDeAniversario = dataDeAniversario
  }
}

export const listaAlunos: Aluno[] = [
    // Array com listagem de alunos do app
  {
    nome: 'Thiago da Silva Costa Santos',
    ru: 3436373,
    nomeDoCurso: 'Análise e Desenvolvimento de Sistemas',
    dataDeAniversario: '14/04/1998',
  },
  {
    nome: 'Juliana Souza',
    ru: 1111111,
    nomeDoCurso: 'Ciências Sociais',
    dataDeAniversario: '14/02/1996',
  },
  {
    nome: 'Carla Augusta',
    ru: 2222222,
    nomeDoCurso: 'Engenharia Civil',
    dataDeAniversario: '12/01/1990',
  },
  {
    nome: 'Carlos Batista',
    ru: 3333333,
    nomeDoCurso: 'Engenharia Química',
    dataDeAniversario: '04/09/1999',
  },
  {
    nome: 'João Magno',
    ru: 4444444,
    nomeDoCurso: 'Engenharia de Software',
    dataDeAniversario: '24/12/2002',
  },
];
