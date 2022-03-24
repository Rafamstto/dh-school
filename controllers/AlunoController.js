const { Aluno } = require("../database/models");

const AlunoController = {
  index: async (request, response) => {
    const alunos = await Aluno.findAll();

    response.render("index", { alunos });
  },
  create: (request, response) => {
    response.render("cadastroAluno");
  },
  store: async (request, response) => {
    const { nome, sobrenome, ano_matricula } = request.body;

    const aluno = await Aluno.create({
      nome,
      sobrenome,
      ano_matricula
    });

    return response.redirect("/alunos");
  },
  edit: async (request, response) => {
    const { id } = request.params;

    const aluno = await Aluno.findByPk(id);

    return response.render("editarAluno", { aluno })
  }

}

module.exports = AlunoController;