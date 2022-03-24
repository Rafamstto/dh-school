module.exports = (sequelize, DataTypes) => {
    const Area = sequelize.define("Area", {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
        tipo: {
            type: DataTypes.STRING,
            allowNull: false
        }
    }, {
        tableName: "areas",
        timestamps: false
    });

    Area.associate = (models) => {
        Area.hasMany(models.Curso, {
            foreignKey: "areas_id",
            as: "cursos"
        })
    }

    return Area;
}