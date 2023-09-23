const { raw } = require("mysql2");
const { Genero, Artista, Album, Cancion } = require("../database/models");

const musicandoControllers = {
  getListGenero: async (req, res) => {
    try {
      const generoList = await Genero.findAll({
        raw: true,
        nest: true,
        include: [{ model: Cancion, as: "cancion", required: false }],
      });

      const cancionesGenero = {};

      generoList.forEach((genero) => {
        const nombreGenero = genero.name;

        if (!cancionesGenero[nombreGenero]) {
          cancionesGenero[nombreGenero] = {
            numero_Canciones: 0,
            canciones: [],
          };
        }
        if (genero.cancion.id !== null) {
          cancionesGenero[nombreGenero].canciones.push({
            id: genero.cancion.id,
            titulo: genero.cancion.titulo,
            duracion: genero.cancion.duracion,
            genero_id: genero.cancion.genero_id,
            album_id: genero.cancion.album_id,
            artista_id: genero.cancion.artista_id,
          });
          cancionesGenero[nombreGenero].numero_Canciones++;
        }
      });

      res.json({
        codigo_estado: 200,

        resultado: cancionesGenero,
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
        data: artistaList.length,
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
        data: albumList.length,
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
      const canciones = await Cancion.findAll({
        include: ["genero", "artista", "album"],
        raw: true,
        nest: true,
      });

      res.json({
        meta: {
          status: 200,
          total: canciones.length,
        },
        data: { canciones },
      });
    } catch (error) {
      res.status(500).json({
        codigo_estado: 500,
        resultado: "Error en el servidor",
      });
      console.log(error);
    }
  },

  getCreate: async (req, res) => {
    const nuevaCacion = {
      titulo: req.body.titulo,
      duracion: req.body.duracion,
      genero_id: req.body.genero,
      album_id: req.body.album,
      artista_id: req.body.artista,
    };
    try {
      const newSongs = await Cancion.create(nuevaCacion);
      res.json({
        meta: {
          status: 201,
        },
        data: {
          cancion_creada: newSongs.dataValues,
        },
      });
    } catch (error) {
      res.status(500).json({
        codigo_estado: 500,
        resultado: "Error en el servidor",
      });
      console.log(error);
    }
  },

  getDetailCancion: async (req, res) => {
    try {
      const detailCancion = await Cancion.findByPk(req.params.id);
      if (!detailCancion) {
        res.status(400).json({
          codigo_estado: 404,
          resultado: "Cancion no encontrada",
        });
      } else {
        res.json(detailCancion.dataValues);
      }
    } catch (error) {
      res.status(500).json({
        codigo_estado: 500,
        resultado: "Error en el servidor",
      });
      console.log(error);
    }
  },

  getUpdateCancion: async (req, res) => {
   
  },

  getDeleteCancion: async (req, res) => {
    let idCancion = req.params.id;
    try {
      const cancionDelete = await Cancion.destroy({
        where: { id: idCancion },
      });

      res.json(cancionDelete.dataValues);
    } catch (error) {
      res.status(500).json({
        codigo_estado: 500,
        resultado: "Error en el servidor",
      });
      console.log(error);
    }
  },
  getUpdateCancion: async (req, res) => {
    let cancionId = req.params.id;
    try {
      const updateCancion = await Cancion.update(
        {
          titulo: req.body.titulo,
          duracion: req.body.duracion,
          genero_id: req.body.genero,
          album_id: req.body.album,
          artista_id: req.body.artista,
        },
        {
          where: { id: cancionId },
        }
      );

      res.json({
        meta: {
          status: 200,
          msg: "Actualizacion exitosa",
        },
        data: req.body,
      });
      console.log(updateCancion)
    } catch (error) {
      res.status(500).json({
        codigo_estado: 500,
        resultado: "Error en el servidor",
      });
      console.log(error);
    }
  }
};

module.exports = musicandoControllers;
