const express = require('express');
const cors = require("cors");
const connection = require("./config");
const port = 8081;
const app = express();

app.use(express.json())
app.use(cors());

app.get("/", (req, res) => {
  res.send("Welcome to my albums manager");
});

app.get("/albums", (req, res) => {
  connection.query("SELECT * FROM album", (err, results) => {
    if(err) {
      res.setStatus(500);
    } else if (results.length === 0) {
      res.sendStatus(404);
    } else {
      res.status(200).json(results);
    }
  })
});

//as a user, I want to be able to create a new album.
app.post("/albums", (req, res) => {
  const { title, genre, picture, artist, date, description } = req.body;
  connection.query(
    "INSERT INTO album(title, genre, picture, artist, date, description) VALUES(?, ?, ?, ?, ?, ?)",
    [title, genre, picture, artist, date, description], 
    (err, results) => {
          if (err) {
            res.status(500).send(err);
          } else {
            res.status(201).json({...req.body, id: results.insertId});
          }
        }
    ); 
});

//as a user, I want to be able to see an album by entering its id in the url.
app.get("/albums/:id", (req, res) => {
  connection.query(
    `SELECT * FROM album WHERE id=?`,
    [req.params.id],
    (err, results) => {
      if (err) {
        res.status(500).send(err);
      } else if (results.length === 0) {
        res.sendStatus(404);
      } else {
        res.status(200).json(results[0]);
      }
    }
  );
});

//as a user, I want to create and assign a song to an album.
app.post("/albums/:id/tracks", (req, res) => {
  const { title, url, duration, id_album } = req.body;
  // const id_album = req.params.id;
  connection.query(
    `INSERT INTO track(title, url, duration, id_album) VALUES (?, ?, ?, ?)`,
    [title, url, duration, id_album],
    (err, results) => {
          if (err) {
            res.status(500).send(err);
          } else {
            res.status(201).json({...req.body, id: results.insertId});
          }
        }
    ); 
});

//as a user, I want to list all the songs from an album.
app.get("/albums/:id/tracks", (req, res) => {
  const id_album = req.params.id;
  connection.query(
    `SELECT * FROM track WHERE id_album=?`,
    [id_album],
     (err, results) => {
    if(err) {
      res.setStatus(500);
    } else if (results.length === 0) {
      res.sendStatus(404);
    } else {
      res.status(200).json(results);
    }
  })
});

//as a user, I want to be able to delete an album.
app.delete("/albums/:id", (req, res) => {
  const idAlbum = req.params.id;
  connection.query(
    "DELETE FROM album WHERE id = ?",
    [idAlbum],
    (err, results) => {
      if (err) {
        res.status(500).send(err);
      } else {
        res.status(204).send("Album deleted!");
      }
    }
  );
});

//as a user, I want to be able to modify an album.
app.put("/albums/:id", (req, res) => {
  const idAlbum = req.params.id;
  const newAlbum = req.body;
  connection.query(
    "UPDATE album SET ? WHERE id = ?",
    [newAlbum, idAlbum],
    (err, results) => {
      if (err) {
        res.status(500).send(err);
      } else {
        res.status(200).json({...req.body});
      }
    }
  );
});

//as a user, I want to delete a song.
app.delete("/albums/:id_album/tracks/:id", (req, res) => {
  const id_album = req.params.id_album;
  const id = req.params.id;
  connection.query(
    "DELETE FROM track WHERE id_album = ? AND id = ?",
    [id_album, id],
    (err, results) => {
      if (err) {
        res.status(500).send(err);
      } else {
        res.status(204).send("Song deleted!");
      }
    }
  );
});

app.listen(port, () => {
  console.log(`Server is runing on ${port}`);
});