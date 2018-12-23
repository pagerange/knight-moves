/*
Exercise:
 - Show Knight legal moves on click
 - Allow knight to move to legal squares by clicking on one
*/

var black = new Array(9820,9822,9821,9818,9819,9821,9822,9820,9823,9823,
	9823,9823,9823,9823,9823,9823);

var white = new Array(9817,9817,9817,9817,9817,9817,9817,9817,9814,9816,
	9815,9813,9812,9815,9816,9814);

$(document).ready(function(){
	
	init();
});

function init()
{
	window.piece = null;
	window.row = null;
	window.square = null;
	window.orig_square = null;

	$('.square').click(function(){
		var piece = $(this).data('piece');
		var square = $(this).data('square');
		var row = $(this).data('row');
		window.piece = piece;
		window.row = row;
		window.square = square;
		window.orig_square = $(this);
		var knights = [9822, 9816];
		$('.square').removeClass('pink');
		if(jQuery.inArray(piece, knights) >= 0) {
			var allowed = getAllowed(row, square, piece);
			allowed.forEach(function(value){
				var r = row + value[0];
				var s = square + value[1];
				$('.square').each(function(){
					if($(this).data('row') == r && $(this).data('square') == s) {
						$(this).addClass('pink');
						move();
					}
				});
			});
		}
		
	});
}

function move()
{
	var piece = window.piece;
	var orig_square = window.orig_square;
	$('.square.pink').click(function(e){
		// Remove piece from old square
		orig_square.data('piece', '');
		orig_square.find('.text').first().html('');
		// Set piece on new square
		$(this).data('piece', piece);
		$(this).find('.text').first().html('&#' + piece + ';');
		// Clear all valid squares 
		$(this).removeClass('pink');
		init();
	});
}

/**
* Gets an array of allowed moves for a specific Knigt
* @depends-on: occupied(), get_pieces()
*/
function getAllowed(row, square, piece)
{
		var allowed = new Array();

		// A knight can make a possible of 8 moves,
		// at most, depending on position on the
		// board, and depending on which squares are
		// occupied by same-colored 

		// These functions test how close the knight
		// is to the edges of the board (top, bottom
		// left, right), and whether or not the 
		// potential move is occupied.

		// If it's a legal move, we push the square
		// coordinates (delta) onto the allowed array.



		if((row - 1) >= 0 && (square - 2) > 0) {
			if(!occupied(piece, [-1, -2])) {
				allowed.push([-1, -2]);
			}
		}
		if((row - 2) >= 0 && (square - 1) > 0) {
			if(!occupied(piece, [-2, -1])) {
				allowed.push([-2, -1]);
			}
		}

		if((row - 1) >= 0 && (square + 2) <= 8) {
			if(!occupied(piece, [-1, 2])) {
				allowed.push([-1, 2]);
			}
		}

		if((row - 2) >= 0 && (square + 1) <= 8) {
			if(!occupied(piece, [-2, 1])) {
				allowed.push([-2, 1]);
			}
		}

		if((row +  1) < 8 && (square + 2) <= 8) {
			if(!occupied(piece, [1, 2])) {
				allowed.push([1, 2]);
			}
		}
		if((row + 2) < 8 && (square + 1) <= 8) {
			if(!occupied(piece, [2, 1])) {
				allowed.push([2, 1]);
			}
		}

		if((row +  1) < 8 && (square - 2) > 0) {
			if(!occupied(piece, [1, -2])) {
				allowed.push([1, -2]);
			}
		}
		if((row + 2) < 8 && (square - 1) > 0) {
			if(!occupied(piece, [2, -1])) {
				allowed.push([2, -1]);
			}
		}
		
		return allowed;
}
function occupied(piece, target)
{
	var pieces = get_pieces(piece);
	var r = row + target[0];
	var s = square + target[1];
	var sq = $('.square[data-row=' + r + '][data-square=' + s + ']').first();
	var target_piece = sq.data('piece');
	if(jQuery.inArray(target_piece, pieces) != -1) {
		return true;
	};
	return false;
}

function get_pieces(piece)
{
	if(jQuery.inArray(piece, white) != -1) {
		return white;
	};
	if(jQuery.inArray(piece, black) != -1) {
		return black;
	};

	return new Array();
}