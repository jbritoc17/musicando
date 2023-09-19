const path = require("path");
const Sequelize = require("sequelize");
const { Op } = Sequelize;
const { Genero, Artista, Album, Cancion } = require("../database/models");


const musicandoControllers = {
    getListGenero: async (req, res) => {
      try {
        const generoList = await Genero.findAll({
          raw: true,
          nest: true,
        });
  
        res.render("generos", {
          generoList
        });
      } catch (error) {
        res.render("generos", {
          generoList: []
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
  
        res.render("artistas", {
          artistaList
        });
      } catch (error) {
        res.render("artistas", {
          artistaList: []
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
  
        res.render("albumes", {
          albumList
        });
      } catch (error) {
        res.render("albumes", {
          albumList: []
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
  
        res.render("canciones", {
          cancionList
        });
      } catch (error) {
        res.render("canciones", {
          cancionList: []
        });
        console.log(error);
      }
    },
   
  };
  
  module.exports = musicandoControllers;
  