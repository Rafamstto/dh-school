module.exports = (sequelize, DataTypes) => {
    const Turma = sequelize.define("Turma", {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
        duracao: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        ano_inicio: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        semestre: {
            type: DataTypes.TINYINT(1),
            allowNull: false
        },
        cursos_id: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        professores_id: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
    }, {
        tableName: "turmas",
        timestamps: false
    });

    Turma.associate = (models) => {
        Turma.belongsTo(models.Professor, {
            foreignKey: "professores_id",
            as: "professor"
        });

        Turma.belongsTo(models.Curso, {
            foreignKey: "cursos_id",
            as: "turma"
        });

        Turma.belongsToMany(models.Aluno, {
            foreignKey: "turmas_id",
            as: "alunos",
            through: models.Matricula
        });
    }

    return Turma;
}