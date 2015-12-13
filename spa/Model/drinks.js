var g = require("../inc/global");
var userId = 4;

module.exports =  {
    blank: function(){ return {} },
    get: function(id, userId, ret){
        var conn = g.GetConnection();
        var sql = 'SELECT F.* FROM 2015Fall_DrinkDate F WHERE UserId = ' + userId;
        if(id){
          sql += " AND F.id = " + id;
        }
        conn.query(sql, function(err,rows){
          ret(err,rows);
          conn.end();
        });        
    },
    delete: function(id, ret){
        var conn = g.GetConnection();
        conn.query("DELETE FROM 2015Fall_DrinkDate WHERE id = " + id, function(err,rows){
          ret(err);
          conn.end();
        });        
    },
    save: function(row, ret){
        var sql;
        var conn = g.GetConnection();
        //  TODO Sanitize
        if (row.id) {
				  sql = " Update 2015Fall_DrinkDate "
							+ " Set `Name`=?, `Date`=?, `Calories`=?, `UserId`=? "
						  + " WHERE id = ? ";
			  }else{
				  sql = "INSERT INTO `2015Fall_DrinkDate` (`created_at`, `Name`, `Date`, `Calories`, `UserId`)"
						  + "VALUES (NOW(), ?, ?, ?, ?) ";				
			  }

        conn.query(sql, [row.Name, row.Date, row.Calories, row.UserId, row.id],function(err,data){
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