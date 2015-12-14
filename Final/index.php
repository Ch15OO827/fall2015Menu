<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <title>Autocomplete TextBox Assignment for Final</title>
  <link rel="stylesheet" href="//code.jquery.com/ui/1.11.4/themes/smoothness/jquery-ui.css">
  <script src="//code.jquery.com/jquery-1.10.2.js"></script>
  <script src="//code.jquery.com/ui/1.11.4/jquery-ui.js"></script>
  <script>
  $(function() {
    $( "#Name" ).autocomplete({
      source: 'search.php'
    });
  });
  </script>
</head>
<body>
 
<div class="ui-widget">
  <label for="Name">Names from Table: </label>
  <input id="Name">
</div>
</body>
</html>