module.exports = (sequelize, DataTypes) => {
    const Curso = sequelize.define("Curso", {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
        nome: {
            type: DataTypes.STRING,
            allowNull: false
        },
        areas_id: {
            type: DataTypes.INTEGER,
            allowNull: false
        }
    }, {
        tableName: "cursos",
        timestamps: false
    });

    Curso.associate = (models) => {
        Curso.belongsTo(models.Area, {
            foreignKey: "areas_id",
            as: "area"
        });

        Curso.hasMany(models.Turma, {
            foreignKey: "cursos_id",
            as: "turmas"
        });
    }

    return Curso;
}