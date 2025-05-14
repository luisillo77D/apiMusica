# API de Música

Esta API permite gestionar usuarios, artistas, álbumes, canciones, playlists y likes de canciones. Todas las rutas (excepto autenticación) requieren autenticación JWT.

## Autenticación

### Registro
POST /api/auth/register
```json
{
  "username": "usuario",
  "email": "correo@ejemplo.com",
  "password": "123456"
}
```

### Login
POST /api/auth/login
```json
{
  "email": "correo@ejemplo.com",
  "password": "123456"
}
```
Respuesta:
```json
{
  "token": "<jwt>"
}
```

Incluye el token en el header:
```
Authorization: <jwt>
```

---

## Endpoints principales

### Usuarios `/api/users`
- `GET /` - Listar usuarios
- `GET /:id` - Obtener usuario por ID
- `POST /` - Crear usuario
- `PUT /:id` - Actualizar usuario
- `DELETE /:id` - Eliminar usuario

#### Ejemplo crear usuario
```json
{
  "username": "usuario",
  "email": "correo@ejemplo.com",
  "password": "123456"
}
```

---

### Artistas `/api/artists`
- `GET /` - Listar artistas
- `GET /:id` - Obtener artista por ID
- `POST /` - Crear artista
- `PUT /:id` - Actualizar artista
- `DELETE /:id` - Eliminar artista

#### Ejemplo crear artista
```json
{
  "name": "Nombre del artista",
  "genre": "Rock",
  "country": "México"
}
```

---

### Álbumes `/api/albums`
- `GET /` - Listar álbumes
- `GET /:id` - Obtener álbum por ID
- `POST /` - Crear álbum
- `PUT /:id` - Actualizar álbum
- `DELETE /:id` - Eliminar álbum

#### Ejemplo crear álbum
```json
{
  "title": "Nombre del álbum",
  "artist_id": 1,
  "release_date": "2024-01-01",
  "genre": "Pop"
}
```

---

### Canciones `/api/songs`
- `GET /` - Listar canciones
- `GET /:id` - Obtener canción por ID
- `POST /` - Crear canción
- `PUT /:id` - Actualizar canción
- `DELETE /:id` - Eliminar canción

#### Ejemplo crear canción
```json
{
  "title": "Nombre de la canción",
  "album_id": 1,
  "duration": 210,
  "track_number": 1,
  "artistIds": [1,2]
}
```

---

### Playlists `/api/playlists`
- `GET /` - Listar playlists
- `GET /:id` - Obtener playlist por ID
- `POST /` - Crear playlist
- `PUT /:id` - Actualizar playlist
- `DELETE /:id` - Eliminar playlist

#### Ejemplo crear playlist
```json
{
  "name": "Mi Playlist"
}
```

---

### Canciones en Playlist `/api/playlist-songs`
- `POST /` - Agregar canción a playlist
- `DELETE /:playlist_id/:song_id` - Quitar canción de playlist

#### Ejemplo agregar canción a playlist
```json
{
  "playlist_id": 1,
  "song_id": 2
}
```

---

### Likes de Canciones `/api/user-likes`
- `POST /` - Dar like a una canción
- `DELETE /:user_id/:song_id` - Quitar like

#### Ejemplo dar like
```json
{
  "user_id": 1,
  "song_id": 2
}
```

---

## Notas
- Todas las respuestas son en formato JSON.
- Para rutas protegidas, incluye el header `Authorization` con el token JWT.
- Si tienes dudas consulta el código fuente o la guía de desarrollo.
