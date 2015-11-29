var express = require('express'),
    app = express();
var bodyParser = require('body-parser');
var person = require("./Model/person");
var keywords = require("./Model/keywords");
var food = require("./Model/drinks");
var exercise = require("./Model/workoutDate");

app.use(express.static(__dirname + '/public'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app
.get("/person", function(req, res){
  
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
    res.send(row);
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
  food.get(null, function(err, rows){
    res.send(rows);
  })
})
.get("/drinks/:id", function(req, res){
  food.get(req.params.id, function(err, rows){
    res.send(rows[0]);
  })
})
.post("/drinks", function(req, res){
  var errors = food.validate(req.body);
  if(errors){
    res.status(500).send(errors);
    return;
  }
  food.save(req.body, function(err, row){
      if(err){
        res.status(500).send(err);
        return;
      }
      food.get(row.id, function(err, rows){
        res.send(rows[0]);
      });
  });
})
.delete("/drinks/:id", function(req, res){
  food.delete(req.params.id, function(err, rows){
      if(err){
        res.status(500).send(err);
      }else{
        res.send(req.params.id);
      }
  })
})


.get("/workoutDate", function(req, res){
  exercise.get(null, function(err, rows){
    res.send(rows);
  })
})
.get("/workoutDate/:id", function(req, res){
  exercise.get(req.params.id, function(err, rows){
    res.send(rows[0]);
  })
})
.post("/workoutDate", function(req, res){
  var errors = exercise.validate(req.body);
  if(errors){
    res.status(500).send(errors);
    return;
  }
  exercise.save(req.body, function(err, row){
      if(err){
        res.status(500).send(err);
        return;
      }
      exercise.get(row.id, function(err, rows){
        res.send(rows[0]);
      });
  })
})
.delete("/workoutDate/:id", function(req, res){
  exercise.delete(req.params.id, function(err, rows){
      if(err){
        res.status(500).send(err);
      }else{
        res.send(req.params.id);
      }
  })
})

app.listen(process.env.PORT);