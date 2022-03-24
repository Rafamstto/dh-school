module.exports = (sequelize, DataTypes) => {
    const Matricula = sequelize.define("Matricula", {
        numero_faltas: {
            type: DataTypes.INTEGER,
            allowNull: false
        }
    }, {
        tableName: "alunos_has_turmas",
        timestamps: false
    });

    return Matricula;
}