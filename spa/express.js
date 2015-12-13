var express = require('express'),
    app = express();
var bodyParser = require('body-parser');
var session = require('express-session');

var person = require("./Model/person");
var keywords = require("./Model/keywords");
var drinks = require("./Model/drinks");
var workoutDate = require("./Model/workoutDate");
var unirest = require('unirest');
var Twit = require('twit');

var twit = new Twit({
    consumer_key:         '2X0whkZ4lmM09AEi7JtNdpBdC'
  , consumer_secret:      'Ku7t4xDOGvn3ga8r6ueju3QCSGWaFGIBlsAXqBiOGJVO277Qqz'
  , access_token:         '436211423-SGK0npbNAgQzSBw24bI8ICHVDTDwnScFdQTmESut'
  , access_token_secret:  'IKGQtPQXbd73ZaecyAoYhLV1ol5FhXrd56UOvtawJUkum'
})

app.use(express.static(__dirname + '/public'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(session({ secret: 'Merry Christmas' }));

app.get("/person", function(req, res){
  
  person.get(null, function(err, rows){
    res.send(rows);
  })
    
})
.get("/person/:id", function(req, res){
  
  person.get(req.params.id, function(err, rows){
    res.send(rows[0]);
  })
  
})
.post("/person", function(req, res){
  var errors = person.validate(req.body);
  if(errors){
    res.status(500).send(errors);
    return;
  }
  person.save(req.body, function(err, row){
      if(err){
        res.status(500).send(err);
        return;
      }
    res.redirect("/person/" + row.id);
  })
})
.delete("/person/:id", function(req, res){
  
  person.delete(req.params.id, function(err, rows){
      if(err){
        res.status(500).send(err);
      }else{
        res.send(req.params.id);
      }
  })
})

.get("/keywords", function(req, res){
  keywords.get(null, function(err, rows){
    res.send(rows);
  })
})

.get("/drinks", function(req, res){
  drinks.get(null, req.session.user.id, function(err, rows){
    res.send(rows);
  })
})
.get("/drinks/:id", function(req, res){
  drinks.get(req.params.id, req.session.user.id, function(err, rows){
    res.send(rows[0]);
  })
})
.get("/drinks/search/:term", function(req, res){
    unirest.get("https://nutritionix-api.p.mashape.com/v1_1/search/" + req.params.term + "?fields=item_name%2Citem_id%2Cbrand_name%2Cnf_calories%2Cnf_total_fat")
    .header("X-Mashape-Key", "Dqx4Lx6nK4mshlqJDRUtnhxCfT1Xp14yJ2DjsnHjMDXxEeQ3PS")
    .header("Accept", "application/json")
    .end(function (result) {
        res.send(result.body);
    });
    
})
.post("/drinks", function(req, res){
  var errors = drinks.validate(req.body);
  if(errors){
    res.status(500).send(errors);
    return;
  }
  req.body.UserId = req.session.user.id
  drinks.save(req.body, function(err, row){
      if(err){
        res.status(500).send(err);
        return;
      }
      res.redirect("/drinks/" + row.id);
      })
})
.delete("/drinks/:id", function(req, res){
  drinks.delete(req.params.id, function(err, rows){
      if(err){
        res.status(500).send(err);
      }else{
        res.send(req.params.id);
      }
  })
})


.get("/workoutDate", function(req, res){
  workoutDate.get(null, req.session.user.id, function(err, rows){
    res.send(rows);
  })
})
.get("/workoutDate/:id", function(req, res){
  workoutDate.get(req.params.id, req.session.user.id, function(err, rows){
    res.send(rows[0]);
  })
})
.post("/workoutDate", function(req, res){
  var errors = workoutDate.validate(req.body);
  if(errors){
    res.status(500).send(errors);
    return;
  }
  
  twit.post('statuses/update', { status: 'I just ran ' + req.body.duration + ' at ' + req.body.Name }, function(err, data, response) {
      console.log(data)
    })
    
  req.body.UserId = req.session.user.id;
  exercise.save(req.body, function(err, row){
      if(err){
        res.status(500).send(err);
        return;
      }
      res.redirect("/workoutDate/" + row.id);
      })
  })
.delete("/workoutDate/:id", function(req, res){
  workoutDate.delete(req.params.id, function(err, rows){
      if(err){
        res.status(500).send(err);
      }else{
        res.send(req.params.id);
      }
  })
})
.post("/login", function(req, res){
    unirest.get("https://graph.facebook.com/me?access_token=" + req.body.access_token + "&fields=id,name,email")
    .end(function (result) {
        var fbUser = req.session.fbUser = JSON.parse(result.body);
        fbUser.access_token = req.body.access_token;
        person.get(fbUser.id, function(err, rows) {
            if(rows && rows.length){
                req.session.user = rows[0];
            }else{
                person.save({ Name: fbUser.name, fbid: fbUser.id, Birthday: '2015-01-01', TypeId: 6 }, function(err, row) {
                    req.session.user = row;
                })
            }
           res.send(result.body);
        }, 'facebook');
    });
})
.get("/fbUser", function(req, res){
    res.send(req.session.fbUser);
})
.get("/user", function(req, res){
    res.send(req.session.user);
});



app.listen(process.env.PORT);