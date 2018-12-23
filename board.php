<?php

/**
 * Chess Board Problem - Legal Knight Moves
 * PHP is responsible only for initial state of board
 */

if(!defined('BASE_PATH')) die('Direct script access not allowed');
// The board
$rows = range(0, 7);
$squares = range(1, 8);

// Initial board settings for loops
$odd = true; 
$class1 = 'light';

// black pieces
$pieces[1] = '&#9820';
$pieces[2] = '&#9822;';
$pieces[3] = '&#9821';
$pieces[4] = '&#9818;';
$pieces[5] = '&#9819;';
$pieces[6] = '&#9821';
$pieces[7] = '&#9822;';
$pieces[8] = '&#9820';
$pieces[9] = '&#9823;';
$pieces[10] = '&#9823;';
$pieces[11] = '&#9823;';
$pieces[12] = '&#9823;';
$pieces[13] = '&#9823;';
$pieces[14] = '&#9823;';
$pieces[15] = '&#9823;';
$pieces[16] = '&#9823;';

// white pieces
$pieces[49] = '&#9817;';
$pieces[50] = '&#9817;';
$pieces[51] = '&#9817;';
$pieces[52] = '&#9817;';
$pieces[53] = '&#9817;';
$pieces[54] = '&#9817;';
$pieces[55] = '&#9817;';
$pieces[56] = '&#9817;';
$pieces[57] = '&#9814;';
$pieces[58] = '&#9816;';
$pieces[59] = '&#9815;';
$pieces[60] = '&#9813;';
$pieces[61] = '&#9812;';
$pieces[62] = '&#9815;';
$pieces[63] = '&#9816;';
$pieces[64] = '&#9814;';

/**
* Function determines the colour of the first square
* in each row by returning a class flag.
*/
function getClass(&$odd, $row, $square)
{
	if(($row * 8 + $square) % 8 == 0) {
		$odd = ($odd == false) ? true : false;
	}
	if($odd) {
		$class1 = (($row * 8 + $square) % 2) ? 'dark' : 'light'; 	
	} else {
		$class1 = (($row * 8 + $square) % 2) ? 'light' : 'dark'; 
	}
	return $class1;
}
