<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <!-- The above 3 meta tags *must* come first in the head; any other head content must come *after* these tags -->
    <title>Fitness App</title>

    <!-- Bootstrap -->
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.5/css/bootstrap.min.css"><link href="css/bootstrap.min.css" rel="stylesheet">

    <!-- HTML5 shim and Respond.js for IE8 support of HTML5 elements and media queries -->
    <!-- WARNING: Respond.js doesn't work if you view the page via file:// -->
    <!--[if lt IE 9]>
      <script src="https://oss.maxcdn.com/html5shiv/3.7.2/html5shiv.min.js"></script>
      <script src="https://oss.maxcdn.com/respond/1.4.2/respond.min.js"></script>
    <![endif]-->
  </head>
  <body>
  <div class="container">
  <h2>Diet-Tracking Tool</h2>
  <form role="form">
    <div class="form-group">
      <div class="col-xs-2">
      <input type="Food" class="form-control" id="food" placeholder="Enter Food Item">
      </div>
    </div>
    
    <div class="btn-group">
    <button data-toggle="dropdown" class="btn btn-default dropdown-toggle">Serving Size <span class="caret"></span></button>
    <ul class="dropdown-menu">
      <li><input type="checkbox" id="ID"><label for="ID" name="1oz" value="1">1 oz</label></li>
      <li><input type="checkbox" id="ID"><label for="ID" name="2oz" value="2">2 oz</label></li>
      <li><input type="checkbox" id="ID"><label for="ID" name="3oz" value="3">3 oz</label></li>
      <li><input type="checkbox" id="ID"><label for="ID" name="4oz" value="4">4 oz</label></li>
      <li><input type="checkbox" id="ID"><label for="ID" name="5oz" value="5">5 oz</label></li>
      <!-- Other items -->
    </ul>
    </div>
    
    <button type="submit" class="btn btn-default">Submit</button>
  </form>
</div>
  <!-- jQuery (necessary for Bootstrap's JavaScript plugins) -->
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.3/jquery.min.js"></script>
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.5/js/bootstrap.min.js"></script>
    <script type="text/javascript">
        
    </script>
  </body>
 </html> 