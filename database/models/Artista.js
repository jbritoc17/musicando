module.exports = (sequelize, DataType) => {
    const alias = 'Artista';
    const cols = {
        id: {
            type: DataType.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            
        },
        nombre: {
            type: DataType.STRING,
            notNULL: true
        },
        apellido: {
            type: DataType.STRING,
            notNULL: true
        }, 
       
       
    
    }
    const config = {
        tableName: 'artistas',
        timestamps: false
    }
    
    const Artista = sequelize.define(alias, cols, config);

    Artista.associate = (models) =>{
       
        Artista.hasMany(models.Cancion, {
            as: 'artista',
            timestamps: false,
            foreignKey: 'artista_id'
        })
    }
    
    
    
    
    return Artista;
};
