const path = require("path");
const Sequelize = require("sequelize");
const { Op } = Sequelize;
const { Genero, Artista, Album, Cancion } = require("../database/models");


const musicandoControllers = {
    getListGenero: async (req, res) => {
      try {
        const generoList = await Genero.findAll({
          include: [{ model: Cancion, as: 'cancion', required: false }],
          raw: true,
          nest: true,
          
        });
  
        res.json({
          data:generoList.length,
          codigo_estado: 200,
          resultado: generoList,
        });
      } catch (error) {
        res.status(500).json({
          codigo_estado: 500,
          resultado: "Error en el servidor",
        });
        console.log(error);
      }
    },

    getListArtista: async (req, res) => {
      try {
        const artistaList = await Artista.findAll({
          raw: true,
          nest: true,
        });
        res.json({
          data:artistaList.length,
          codigo_estado: 200,
          resultado: artistaList,
        });
        
      } catch (error) {
        res.status(500).json({
          codigo_estado: 500,
          resultado: "Error en el servidor",
        });
        console.log(error);
        
      }
    },
    getListAlbumes: async (req, res) => {
      try {
        const albumList = await Album.findAll({
          raw: true,
          nest: true,
        });
  
        res.json({
          data:albumList.length,
          codigo_estado: 200,
          resultado: albumList,
        });
      } catch (error) {
        res.status(500).json({
          codigo_estado: 500,
          resultado: "Error en el servidor",
        });
        console.log(error);
        
      }
    },
    getListCanciones: async (req, res) => {
      try {
        const cancionList = await Cancion.findAll({
          include:["genero","artista","album"],
          raw: true,
          nest: true,
        });
  
        res.json({
          data:cancionList.length,
          codigo_estado: 200,
          resultado:
          cancionList,
        });
      } catch (error) {
        res.status(500).json({
          codigo_estado: 500,
          resultado: "Error en el servidor",
        });
        console.log(error);
      }
    },
   
  };
  
  module.exports = musicandoControllers;
  