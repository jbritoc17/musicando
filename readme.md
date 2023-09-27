# Musicando-Api

_Esta en una api de canciones que cuenta con los siguientes endpoints:_

# -GET canciones: http://localhost:3000/canciones

    _Este endpoint permite obtener una lista de todas las canciones disponibles en la base de datos._
    Respuesta
    Código de estado: 200 OK
    Cuerpo de respuesta: Lista de canciones en formato JSON

# -POST createCancion: http://localhost:3000/canciones

    _Este endpoint permite crear una nueva canción en la base de datos._

    Parámetros:
    Método de envío de datos: urlencoded

    Campos requeridos en el cuerpo de la solicitud:

    titulo: Título de la canción.
    duracion: Duración de la canción en segundos.
    genero: ID del género al que pertenece la canción.
    album: ID del álbum al que pertenece la canción.
    artista: ID del artista que interpreta la canción.

    Respuesta
    Cuerpo de respuesta: Datos de la canción recién creada en formato JSON

# -DELETE deleteCancion: http://localhost:3000/canciones/:id

    _Este endpoint permite eliminar una canción específica de la base de datos._

    Parámetros:
    Parámetro de ruta: id (ID de la canción que se desea eliminar)

# -GET detailCancion: http://localhost:3000/canciones/:id

    _Este endpoint permite obtener detalles específicos de una canción en la base de datos._

    Parámetros:
    Parámetro de ruta: id (ID de la canción de la que se desean detalles)

# -PUT updateCancion: http://localhost:3000/canciones/:id

    _Este endpoint permite actualizar los detalles de una canción específica en la base de datos._

    Parámetros:
    Parámetro de ruta: id (ID de la canción que se desea actualizar)
    Método de envío de datos: urlencoded
    Campos requeridos en el cuerpo de la solicitud (se pueden actualizar):

    titulo: Nuevo título de la canción.
    duracion: Nueva duración de la canción en segundos.
    genero: Nuevo ID del género al que pertenece la canción.
    album: Nuevo ID del álbum al que pertenece la canción.
    artista: Nuevo ID del artista que interpreta la canción.

# -GET generos: http://localhost:3000/generos

    _Este endpoint permite obtener una lista de todos los géneros musicales disponibles en la base de datos._

    Parámetros:
    Ninguno

    Respuesta
    Código de estado: 200 OK

    Cuerpo de respuesta: Lista de géneros musicales en formato JSON, con la cantidad y cada una de las canciones que pertenecen a determinado género.

# Musicando

### Esta es la base de datos musicando, a continuación vas a ver como fue creada

_Esta base de datos está compuesta por las siguientes tablas_

- Artistas
- Canciones
- Albumes
- Generos

_Las relaciones están definidas de la siguiente forma_

- Una canción tiene un album
- Un albun tiene muchas canciones

- Una canción tiene un genero
- Un genero tiene muchas canciones

- Una canción tiene un artista
- Un artista tiene muchas canciones
