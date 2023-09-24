module.exports = (sequelize, DataType) => {
    const alias = 'Album';
    const cols = {
        id: {
            type: DataType.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            
        },
        nombre: {
            type: DataType.STRING,
            alowNull: true
        },
        duracion: {
            type: DataType.INTEGER,
            alowNull: true
        },
       
    
    }
    const config = {
        tableName: 'albumes',
        timestamps: false
    }
    
    const Album = sequelize.define(alias, cols, config);

    Album.associate = (models) =>{
       
        Album.hasMany(models.Cancion, {
            as: 'album',
            timestamps: false,
            foreignKey: 'album_id'
        })
    }
    
    
    
    
    return Album;
};
