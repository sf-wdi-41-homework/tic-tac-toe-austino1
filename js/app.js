// wait for the DOM to finish loading$(document).ready(function() {	console.log("I'm in!");	var x = "x";	var o = "o";	var count = 0;	$('div.col-sm-4.box').click(function() 	{		console.log("clicked");//check for o win// 		if ($("#1a").hasClass('o') && $("#1b").hasClass('o') && $("#1c").hasClass('o') || // 			$("#2a").hasClass('o') && $("#2b").hasClass('o') && $("#2c").hasClass('o') || // 			$("#3a").hasClass('o') && $("#3b").hasClass('o') && $("#3c").hasClass('o') || // 			$("#1a").hasClass('o') && $("#2a").hasClass('o') && $("#3a").hasClass('o') || // 			$("#1b").hasClass('o') && $("#2a").hasClass('o') && $("#3b").hasClass('o') || // 			$("#1c").hasClass('o') && $("#2c").hasClass('o') && $("#3a").hasClass('o') || // 			$("#1a").hasClass('o') && $("#2b").hasClass('o') && $("#3c").hasClass('o') || // 			$("#3a").hasClass('o') && $("#2b").hasClass('o') && $("#1c").hasClass('o'))			// //clear board			// 			{// 			alert('O has won the game. Start a new game')// 				$("div.col-sm-4.box").text(" ");// 				$("div.col-sm-4.box").removeClass('disable')// 				$("div.col-sm-4.box").removeClass('o')// 				$("div.col-sm-4.box").removeClass('x')// 				$("div.col-sm-4.box").removeClass('btn-primary')// 				$("div.col-sm-4.box").removeClass('btn-info')// 			}	// //check for x win// 		else if ($("#1a").hasClass('x') && $("#1b").hasClass("x") && $("#1c").hasClass('x') || // 			$("#2a").hasClass('x') && $("#2b").hasClass('x') && $("#2c").hasClass('x') || // 			$("#3a").hasClass('x') && $("#3b").hasClass('x') && $("#3c").hasClass('x') || // 			$("#1a").hasClass('x') && $("#2a").hasClass('x') && $("#3a").hasClass('x') || // 			$("#1b").hasClass('x') && $("#2a").hasClass('x') && $("#3b").hasClass('x') || // 			$("#1c").hasClass('x') && $("#2c").hasClass('x') && $("#3a").hasClass('x') || // 			$("#1a").hasClass('x') && $("#2b").hasClass('x') && $("#3c").hasClass('x') || // 			$("#3a").hasClass('x') && $("#2b").hasClass('x') && $("#1c").hasClass('x'))// //clear board// 			{// 			alert('X has won the game. Start a new game')// 				$("div.col-sm-4.box").text(" ");// 				$("div.col-sm-4.box").removeClass('disable')// 				$("div.col-sm-4.box").removeClass('o')// 				$("div.col-sm-4.box").removeClass('x')// 				$("div.col-sm-4.box").removeClass('btn-primary')// 				$("div.col-sm-4.box").removeClass('btn-info')// 			}			// //draw game			if (count === 8) {				alert('Its a tie. It will restart.')				$("div.col-sm-4.box").text(" ");				$("div.col-sm-4.box").removeClass('disable')				$("div.col-sm-4.box").removeClass('o')				$("div.col-sm-4.box").removeClass('x')				$("div.col-sm-4.box").removeClass('btn-primary')				$("div.col-sm-4.box").removeClass('btn-info')				count = 0					}//box already selected			else if ($(this).hasClass('disable'))				{						alert('Already selected')				}//check for player turn			else if (count%2 === 0) {				count++				$(this).text("O")				$(this).addClass('disable o btn-primary')					if ($("#1a").hasClass('o') && $("#1b").hasClass('o') && $("#1c").hasClass('o') || 				$("#2a").hasClass('o') && $("#2b").hasClass('o') && $("#2c").hasClass('o') || 				$("#3a").hasClass('o') && $("#3b").hasClass('o') && $("#3c").hasClass('o') || 				$("#1a").hasClass('o') && $("#2a").hasClass('o') && $("#3a").hasClass('o') || 				$("#1b").hasClass('o') && $("#2b").hasClass('o') && $("#3b").hasClass('o') || 				$("#1c").hasClass('o') && $("#2c").hasClass('o') && $("#3c").hasClass('o') || 				$("#1a").hasClass('o') && $("#2b").hasClass('o') && $("#3c").hasClass('o') || 				$("#3a").hasClass('o') && $("#2b").hasClass('o') && $("#1c").hasClass('o'))					{					alert('O wins');					$("div.col-sm-4.box").text(" ");					$("div.col-sm-4.box").removeClass('disable')					$("div.col-sm-4.box").removeClass('o')					$("div.col-sm-4.box").removeClass('x')					$("div.col-sm-4.box").removeClass('btn-primary')					$("div.col-sm-4.box").removeClass('btn-info')					count = 0;					}				}			else {				count++				$(this).text("X")				$(this).addClass('disable x btn-info')			if ($("#1a").hasClass('x') && $("#1b").hasClass("x") && $("#1c").hasClass('x') || 				$("#2a").hasClass('x') && $("#2b").hasClass('x') && $("#2c").hasClass('x') || 				$("#3a").hasClass('x') && $("#3b").hasClass('x') && $("#3c").hasClass('x') || 				$("#1a").hasClass('x') && $("#2a").hasClass('x') && $("#3a").hasClass('x') || 				$("#1b").hasClass('x') && $("#2b").hasClass('x') && $("#3b").hasClass('x') || 				$("#1c").hasClass('x') && $("#2c").hasClass('x') && $("#3c").hasClass('x') || 				$("#1a").hasClass('x') && $("#2b").hasClass('x') && $("#3c").hasClass('x') || 				$("#3a").hasClass('x') && $("#2b").hasClass('x') && $("#1c").hasClass('x'))					{					alert('X wins');					$("div.col-sm-4.box").text(" ");					$("div.col-sm-4.box").removeClass('disable')					$("div.col-sm-4.box").removeClass('o')					$("div.col-sm-4.box").removeClass('x')					$("div.col-sm-4.box").removeClass('btn-primary')					$("div.col-sm-4.box").removeClass('btn-info')					count = 0  					}  				}			});//reset button		$("#reset").click(function() 	{			$("div.col-sm-4.box").text(" ");			$("div.col-sm-4.box").removeClass('disable')			$("div.col-sm-4.box").removeClass('o')			$("div.col-sm-4.box").removeClass('x')			$("div.col-sm-4.box").removeClass('btn-primary')			$("div.col-sm-4.box").removeClass('btn-info')			count = 0	});});