<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <!-- The above 3 meta tags *must* come first in the head; any other head content must come *after* these tags -->
    <title>Assignment 2</title>

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
    <nav class="navbar navbar-default">
        <div class="container-fluid">
            <div class="navbar-header">
                <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="$bs-example-navbar-collapse-1" aria-expanded="false">
                    <span class="sr-only">Toggle navigation</span>
                    <span class="icon-bar"></span>
                    <span class="icon-bar"></span>
                    <span class="icon-bar"></span>
                </button>
                <img class="navbar-brand" src="http://orig08.deviantart.net/3b49/f/2013/329/5/5/heearthstone_icon_by_shadow_terror-d6vme5z.png" alt="Smiley face"></img>
            </div>
            
    <!-- Collect the nav links, forms, and other content for toggling -->
    <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
      <ul class="nav navbar-nav">
        <li class="active"><a href="#">Home <span class="sr-only">(current)</span></a></li>
        <li><a href="#">Forum</a></li>
        <li class="dropdown">
          <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Support <span class="caret"></span></a>
          <ul class="dropdown-menu">
            <li><a href="#">Admins Online List</a></li>
            <li><a href="#">Contact</a></li>
            <li><a href="#">Submit Ticket</a></li>
            <li role="separator" class="divider"></li>
            <li><a href="#">About</a></li>
            <li role="separator" class="divider"></li>
            <li><a href="#">Directory</a></li>
          </ul>
        </li>
      </ul>
      <form class="navbar-form navbar-left" role="search">
        <div class="form-group">
          <input type="text" class="form-control" placeholder="Search">
        </div>
        <button type="submit" class="btn btn-default">Submit</button>
      </form>
      <ul class="nav navbar-nav navbar-right">
        <li><a href="#">Reddit Page</a></li>
        <li class="dropdown">
          <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Settings <span class="caret"></span></a>
          <ul class="dropdown-menu">
            <li><a href="#">Edit Email</a></li>
            <li><a href="#">Edit Profile</a></li>
            <li><a href="#">Edit Preferences</a></li>
            <li role="separator" class="divider"></li>
            <li><a href="#">Sign Out</a></li>
          </ul>
        </li>
      </ul>
    </div>
</div>
</nav>

    <div class="jumbotron">
      <h2>New Paltz Hearthstone League! <span class="label label-info">New</span></h2>
      <p>All changes have been made to the current ranking system as of 9/7/15. If there any errors please message any of the admins.</p>
      <p><a class="btn btn-primary btn-lg" href="#" role="button">Reply</a></p>
    </div>
    
    <div class="alert alert-warning alert-dismissible" role="alert">
      <button type="button" class="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">&times;</span></button>
      <strong>Hey!</strong> If you have not sent in your stats, please submit now!
    </div>
    
    <div class="well well-sm">Small Well example, try out!</div>
    <div class="well">Medium Well example, try out!</div>
    <div class="well well-lg">Large Well example, try out!</div>
    
    <div class="progress">
      <div class="progress-bar progress-bar-success progress-bar-striped active" role="progressbar" aria-valuenow="90" aria-valuemin="0" aria-valuemax="100" style="width: 90%;">90% done with this assignment
      </div>
    </div>
    <!-- jQuery (necessary for Bootstrap's JavaScript plugins) -->
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.3/jquery.min.js"></script>
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.5/js/bootstrap.min.js"></script>
  </body>
</html>