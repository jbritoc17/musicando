module.exports = (sequelize, DataType) => {
    const alias = 'Cancion';
    const cols = {
        id: {
            type: DataType.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            
        },
        titulo: {
            type: DataType.STRING,
            allowNull: false
        },
        duracion: {
            type: DataType.INTEGER,
            allowNull: false
        },
        genero_id: {
            type: DataType.INTEGER,
            allowNull: false,
            references: {
                model: 'generos',
                key: 'id'
            }
        },
       
        album_id: {
            type: DataType.INTEGER,
            allowNull: false,
            references: {
                model: 'albumes',
                key: 'id'
            }
        },
        artista_id: {
            type: DataType.INTEGER,
            allowNull: false,
            references: {
                model: 'artistas',
                key: 'id'
            }

        },

    
    }
    const config = {
        tableName: 'canciones',
        timestamps: false
    }
    
    const Cancion = sequelize.define(alias, cols, config);

    Cancion.associate = (models) =>{
        Cancion.belongsTo(models.Genero, {
            as: 'genero',
            timestamps: false,
            foreignKey: 'genero_id'
        })
        Cancion.belongsTo(models.Album, {
            as: 'album',
            timestamps: false,
            foreignKey: 'album_id'
        })
        Cancion.belongsTo(models.Artista, {
            as: 'artista',
            foreignKey: 'artista_id'
            
        })

        Cancion.belongsTo(models.Genero, { 
            as: 'cancion',
            foreignKey: 'genero_id', 
            timestamps: false,
         });
    
    }
    
    
    
    
    return Cancion;
};
