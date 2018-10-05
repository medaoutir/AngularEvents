module.exports=()=>{
var jsonServer = require('json-server')
var server = jsonServer.create()
var router = jsonServer.router('db.json')
var empty = require('is-empty');
var fs = require('fs');
const editJsonFile = require("edit-json-file");
var JsonDB = require('node-json-db');
var middlewares = jsonServer.defaults()
var db = new JsonDB("db.json", true, false);

let file = editJsonFile('db.json',{autosave: true});

server.use(middlewares)
// Add custom routes before JSON Server router

server.get('/data/:id/sessions', function (req, res) {
    // See https://github.com/typicode/lowdb
    var obj;
    var sessions;
    fs.readFile('db.json', 'utf8', function (err, data) {
        if (err) throw err;
        obj = JSON.parse(data);
        sessions=obj['data'][(req.params.id)-1].sessions
        // console.log(sessions)
        if (empty(sessions)) {
            res.sendStatus(404)
        } 
        else {
            res.jsonp(sessions)
        }
      });  
  })

  server.get('/data/:id/sessions/:sessionId', function (req, res) {
    // See https://github.com/typicode/lowdb 
    var obj;
    var session;
    fs.readFile('db.json', 'utf8', function (err, data) {
        if (err) throw err;
        obj = JSON.parse(data);
        session=obj['data'][(req.params.id)-1].sessions[(req.params.sessionId)-1]
        console.log(session)
        if (empty(session)) {
            res.sendStatus(404)
        } 
        else {
            res.jsonp(session)
        }
      });  
  })

  server.get('/data/:id/sessions/:sessionId/voters/:voterName', function (req, res) {
    // See https://github.com/typicode/lowdb
    console.log('I am here')
    console.log(req.params.voterName)
    var obj;

    fs.readFile('db.json', 'utf8', function (err, data) {
        if (err) throw err;
        obj = JSON.parse(data);
        voters=obj['data'][(req.params.id)-1].sessions[(req.params.sessionId)-1].voters
        var index=voters.findIndex((voterName)=>{return voterName===req.params.voterName})
        console.log(index)
        if (index===-1) {
            res.sendStatus(404)
        } 
        else {
            res.jsonp(req.params.voterName)
        }
      });  
  })

  server.post('/data/:id/sessions/:sessionId/voters/:voterName', function (req, res) {
    // See https://github.com/typicode/lowdb
    console.log('I am here')
    console.log(req.params.voterName)
    // db.push(`/data/${req.params.id}/sessions/${req.params.sessionId}/voters`,req.params.voterName)
    // db.push($['data'][`${req.params.id}`]['sessions'][`${req.params.sessionId}`]['voters'],req.params.voterName)
    // db.save()
    // db.reload()
    var obj;
    fs.readFile('db.json', 'utf8', function (err, data) {
      if (err) throw err;
      const file = JSON.parse(data);
      file['data'][(req.params.id)-1].sessions[(req.params.sessionId)-1].voters.push(req.params.voterName)
      const json = JSON.stringify(file);
      fs.writeFile('db.json', json, 'utf8', function(err){
        if(err){ 
              console.log(err); 
        } else {
              //Everything went OK!
        }});
    }); 
    
  })



  server.delete('/data/:id/sessions/:sessionId/voters/:voterName', function (req, res) {
    // See https://github.com/typicode/lowdb
    console.log('I am here')
    console.log(req.params.voterName)
    // db.delete(`/data/${req.params.id}/sessions/${req.params.sessionId}/voters/${req.params.voterName}`)
    // db.delete($['data'][`${req.params.id}`]['sessions'][`${req.params.sessionId}`]['voters'][`${req.params.voterName}`])
    // db.save()
    // db.reload() 
  })    



server.use(function (req, res, next) {
  if (req.method === 'POST') {
    // req.body.createdAt = Date.now()
  }
  // Continue to JSON Server router
  next()
})

// Use default router
server.use(router)
server.listen(3000, function () {
  console.log('JSON Server is running')
})}
