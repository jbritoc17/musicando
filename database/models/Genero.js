module.exports = (sequelize, DataType) => {
    const alias = 'Genero';
    const cols = {
        id: {
            type: DataType.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            
        },
        name: {
            type: DataType.STRING,
            notNULL: true
        },
       
    
    }
    const config = {
        tableName: 'generos',
        timestamps: false
    }
    
    const Genero = sequelize.define(alias, cols, config);

    Genero.associate = (models) =>{
       
        Genero.hasMany(models.Cancion, {
            as: 'genero',
            timestamps: false,
            foreignKey: 'genero_id'
        })
    }
    
    
    
    
    return Genero;
};
