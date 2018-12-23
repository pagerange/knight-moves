<?php

define('BASE_PATH', __DIR__ . '/..');
require BASE_PATH . '/board.php';

?><!DOCTYPE html>
<html>
<head>
	<title>Chess</title>
	<meta charset="utf-8" />
	<link rel="stylesheet" type="text/css" href="app.css" />
</head>
<body>

<div class="table">

<div id="board" class="board">

<?php foreach($rows as $row) : ?>

<?php foreach($squares as $square) : ?>

<div data-row="<?=$row?>" data-square="<?=$square?>" data-piece="<?=!empty($pieces[$row * 8 + $square]) ? trim($pieces[$row * 8 + $square], '&#;') : '' ?>"  class="square <?=$class1?>">
<div data-square="<?=$row * 8 + $square?>" class="text"><?=($pieces[$row * 8 + $square]) ?? '' ?></div>
</div>

<?php $class1 = getClass($odd, $row, $square); ?>

<?php endforeach; // end square loop ?>

<?php endforeach; // end row loop ?>

</div>

</div>

<script src="https://code.jquery.com/jquery-2.2.4.min.js"></script>
<script src="app.js"></script>

</body>
</html>

