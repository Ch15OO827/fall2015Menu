var mysql = require("mysql");

module.exports =  {
    blank: function(){ return {} },
    get: function(id, ret, searchType){
        var conn = GetConnection();
        var sql = 'SELECT P.*, K.Name as TypeName FROM 2015Fall_Persons P Join 2015Fall_Keywords K ON P.TypeId = K.id ';
        if(id){
         switch (searchType) {
            case 'facebook':
              sql += " WHERE P.fbid = " + id;
              break;
            
            default:
              sql += " WHERE P.id = " + id;
          }
          
        }
        conn.query(sql, function(err,rows){
          ret(err,rows);
          conn.end();
        });        
    },
    delete: function(id, ret){
        var conn = GetConnection();
        conn.query("DELETE FROM 2015Fall_Persons WHERE id = " + id, function(err,rows){
          ret(err);
          conn.end();
        });        
    },
    save: function(row, ret){
        var sql;
        var conn = GetConnection();
        //  TODO Sanitize
        if (row.id) {
				  sql = " Update 2015Fall_Persons "
							+ " Set Name=?, Birthday=? "
						  + " WHERE id = ? ";
			  }else{
				  sql = "INSERT INTO 2015Fall_Persons "
						  + " (Name, Birthday, created_at, TypeId, fbid) "
						  + "VALUES (?, ?, Now(), ?, ? ) ";				
			  }

        conn.query(sql, [row.Name, row.Birthday, row.id],function(err,data){
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

function GetConnection(){
        var conn = mysql.createConnection({
          host: "localhost",
          user: "n02619263",
          password: "Killmaster08",
          database: "c9"
        });
    return conn;
}