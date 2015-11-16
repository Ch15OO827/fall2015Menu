<?php
    require_once'../inc/global.php';

class Workout {
    public static function Get($id = null){
        $sql = "SELECT * FROM 2015Fall_WorkoutDate";
        
		if($id){
			$sql .= " WHERE id=$id ";
			$ret = FetchAll($sql);
			return $ret[0];
		}else{
			return FetchAll($sql);			
		}
		
    }
    
    static public function Delete($id)
	{
		$conn = GetConnection();
		$sql = "DELETE FROM 2015Fall_WorkoutDate WHERE id = $id";
		//echo $sql;
		$results = $conn->query($sql);
		$error = $conn->error;
		$conn->close();
		
		return $error ? array ('sql error' => $error) : false;
	}
	
	static public function Blank()
	{
		return array();
	}



		static public function Validate($row)
		{
			$errors = array();
			if(empty($row['Name'])) $errors['Name'] = "is required";
			if(strtotime($row['Date']) > time()) $errors['Date'] = "must be in the past";
			if(!is_numeric($row['Calories'])) $errors['Calories'] = "Calories must be a number";
			
			return count($errors) > 0 ? $errors : false ;
		}
	
		static public function Save(&$row)
		{
			$conn = GetConnection();
			
			$row2 = escape_all($row, $conn);
			$row2['Date'] = date( 'Y-m-d H:i:s', strtotime( $row2['Date'] ) );
			if (!empty($row['id'])) {
				$sql = "Update 2015Fall_WorkoutDate
							Set Name='$row2[Name]', Date='$row2[Date]', Calories='$row2[Calories]'
						WHERE id = $row2[id]
						";
			}else{
			$sql = "INSERT INTO 2015Fall_WorkoutDate
				(Name, Date, created_at, Calories)
				VALUES ('$row2[Name]', '$row2[Date]', Now(), '$row2[Calories]') ";				
	}
			
			
	//my_print( $sql );
			
	$results = $conn->query($sql);
	$error = $conn->error;
			
	if(!$error && empty($row['id'])){
		$row['id'] = $conn->insert_id;
	}
			
	$conn->close();
			
	return $error ? array ('sql error' => $error) : false;	}


}