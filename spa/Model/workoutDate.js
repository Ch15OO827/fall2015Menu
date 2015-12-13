var g = require("../inc/global");
var userId = 4;


module.exports =  {
    blank: function(){ return {} },
    get: function(id, userId, ret){
        var conn = g.GetConnection();
        var sql = 'SELECT E.*, K.Name as TypeName as PersonName FROM 2015Fall_WorkoutDate E '
                + '   Join 2015Fall_Persons P ON E.UserId = P.id '
                + '   Join 2015Fall_Keywords K ON E.TypeId = K.id '
                + ' WHERE E.UserId = ' + userId;
        if(id){
          sql += " AND E.id = " + id;
        }
        conn.query(sql, function(err,rows){
          ret(err,rows);
          conn.end();
        });        
    },
    delete: function(id, ret){
        var conn = g.GetConnection();
        conn.query("DELETE FROM 2015Fall_WorkoutDate WHERE id = " + id, function(err,rows){
          ret(err);
          conn.end();
        });        
    },
    save: function(row, ret){
        var sql;
        var conn = g.GetConnection();
        //  TODO Sanitize
        if (row.id) {
				  sql = " Update 22015Fall_WorkoutDate "
							+ " Set `TypeId`=?, `UserId`=?, `Name`=?, `Date`=?, `Calories=?` "
						  + " WHERE id = ? ";
			  }else{
				  sql = "INSERT INTO `2015Fall_WorkoutDate` (`created_at`, `TypeId`, `UserId`, `Name`, `Date`, `Calories`) "
						  + "VALUES (Now(), ?, ?, ?, ?, ? ) ";				
			  }

        conn.query(sql, [row.TypeId, row.UserId, row.Name, row.Date, row.Calories, row.id],function(err,data){
          if(!err && !row.id){
            row.id = data.insertId;
          }
          ret(err, row);
          conn.end();
        });        
    },
    validate: function(row){
      var errors = {};
      
      if(!row.Name) errors.Name = "is required"; 
      
      return errors.length ? errors : false;
    }
};  