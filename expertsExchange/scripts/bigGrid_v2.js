// the selection grid - yes, I'm sure there's a more simple way but I'm just learning so cut me some slack! (please... and 
// email me a better way at robert@robertmeans.com - thanks!)

function uncheck_move_a1() {
	document.getElementById("b1").checked = false;
	document.getElementById("c1").checked = false;
	document.getElementById("d1").checked = false;
	document.getElementById("e1").checked = false;
	
	if ((document.getElementById("c2").checked == false) && (document.getElementById("d2").checked == false) && (document.getElementById("e2").checked == false)) {
		document.getElementById("b2").checked = true;	
		} else if ((document.getElementById("b2").checked == false) && (document.getElementById("d2").checked == false) && (document.getElementById("e2").checked == false)) {
		document.getElementById("c2").checked = true;
		} else if ((document.getElementById("b2").checked == false) && (document.getElementById("c2").checked == false) && (document.getElementById("e2").checked == false)) {
		document.getElementById("d2").checked = true;
		} else if ((document.getElementById("b2").checked == false) && (document.getElementById("c2").checked == false) && (document.getElementById("d2").checked == false)) {
		document.getElementById("e2").checked = true;
		} else if ((document.getElementById("b3").checked == false) && (document.getElementById("b4").checked == false) && (document.getElementById("b5").checked == false)) {
		document.getElementById("b2").checked = true;	
		} else if ((document.getElementById("c3").checked == false) && (document.getElementById("c4").checked == false) && (document.getElementById("c5").checked == false)) {
		document.getElementById("c2").checked = true;
		} else if ((document.getElementById("d3").checked == false) && (document.getElementById("d4").checked == false) && (document.getElementById("d5").checked == false)) {
		document.getElementById("d2").checked = true;
		} else if ((document.getElementById("e3").checked == false) && (document.getElementById("e4").checked == false) && (document.getElementById("e5").checked == false)) {
		document.getElementById("e2").checked = true;
		}
	if ((document.getElementById("c3").checked == false) && (document.getElementById("d3").checked == false) && (document.getElementById("e3").checked == false)) {
		document.getElementById("b3").checked = true;
		} else if ((document.getElementById("b3").checked == false) && (document.getElementById("d3").checked == false) && (document.getElementById("e3").checked == false)) {
		document.getElementById("c3").checked = true;
		} else if ((document.getElementById("b3").checked == false) && (document.getElementById("c3").checked == false) && (document.getElementById("e3").checked == false)) {
		document.getElementById("d3").checked = true;
		} else if ((document.getElementById("b3").checked == false) && (document.getElementById("c3").checked == false) && (document.getElementById("d3").checked == false)) {
		document.getElementById("e3").checked = true;
		} else if ((document.getElementById("b2").checked == false) && (document.getElementById("b4").checked == false) && (document.getElementById("b5").checked == false)) {
		document.getElementById("b3").checked = true;
		} else if ((document.getElementById("c2").checked == false) && (document.getElementById("c4").checked == false) && (document.getElementById("c5").checked == false)) {
		document.getElementById("c3").checked = true;
		} else if ((document.getElementById("d2").checked == false) && (document.getElementById("d4").checked == false) && (document.getElementById("d5").checked == false)) {
		document.getElementById("d3").checked = true;
		} else if ((document.getElementById("e2").checked == false) && (document.getElementById("e4").checked == false) && (document.getElementById("e5").checked == false)) {
		document.getElementById("e3").checked = true;
		}	
	if ((document.getElementById("c4").checked == false) && (document.getElementById("d4").checked == false) && (document.getElementById("e4").checked == false)) {
		document.getElementById("b4").checked = true;
		} else if ((document.getElementById("b4").checked == false) && (document.getElementById("d4").checked == false) && (document.getElementById("e4").checked == false)) {
		document.getElementById("c4").checked = true;
		} else if ((document.getElementById("b4").checked == false) && (document.getElementById("c4").checked == false) && (document.getElementById("e4").checked == false)) {
		document.getElementById("d4").checked = true;
		} else if ((document.getElementById("b4").checked == false) && (document.getElementById("c4").checked == false) && (document.getElementById("d4").checked == false)) {
		document.getElementById("e4").checked = true;
		} else if ((document.getElementById("b2").checked == false) && (document.getElementById("b3").checked == false) && (document.getElementById("b5").checked == false)) {
		document.getElementById("b4").checked = true;
		} else if ((document.getElementById("c2").checked == false) && (document.getElementById("c3").checked == false) && (document.getElementById("c5").checked == false)) {
		document.getElementById("c4").checked = true;
		} else if ((document.getElementById("d2").checked == false) && (document.getElementById("d3").checked == false) && (document.getElementById("d5").checked == false)) {
		document.getElementById("d4").checked = true;
		} else if ((document.getElementById("e2").checked == false) && (document.getElementById("e3").checked == false) && (document.getElementById("e5").checked == false)) {
		document.getElementById("e4").checked = true;
		}
	if ((document.getElementById("c5").checked == false) && (document.getElementById("d5").checked == false) && (document.getElementById("e5").checked == false)) {
		document.getElementById("b5").checked = true;
		} else if ((document.getElementById("b5").checked == false) && (document.getElementById("d5").checked == false) && (document.getElementById("e5").checked == false)) {
		document.getElementById("c5").checked = true;
		} else if ((document.getElementById("b5").checked == false) && (document.getElementById("c5").checked == false) && (document.getElementById("e5").checked == false)) {
		document.getElementById("d5").checked = true;
		} else if ((document.getElementById("b5").checked == false) && (document.getElementById("c5").checked == false) && (document.getElementById("d5").checked == false)) {
		document.getElementById("e5").checked = true;
		} else if ((document.getElementById("b2").checked == false) && (document.getElementById("b3").checked == false) && (document.getElementById("b4").checked == false)) {
		document.getElementById("b5").checked = true;
		} else if ((document.getElementById("c2").checked == false) && (document.getElementById("c3").checked == false) && (document.getElementById("c4").checked == false)) {
		document.getElementById("c5").checked = true;
		} else if ((document.getElementById("d2").checked == false) && (document.getElementById("d3").checked == false) && (document.getElementById("d4").checked == false)) {
		document.getElementById("d5").checked = true;
		} else if ((document.getElementById("e2").checked == false) && (document.getElementById("e3").checked == false) && (document.getElementById("e4").checked == false)) {
		document.getElementById("e5").checked = true;
		}	
}
function uncheck_move_a2() {
	document.getElementById("b2").checked = false;
	document.getElementById("c2").checked = false;
	document.getElementById("d2").checked = false;
	document.getElementById("e2").checked = false;
	
	if ((document.getElementById("c1").checked == false) && (document.getElementById("d1").checked == false) && (document.getElementById("e1").checked == false)) {
		document.getElementById("b1").checked = true;	
		} else if ((document.getElementById("b1").checked == false) && (document.getElementById("d1").checked == false) && (document.getElementById("e1").checked == false)) {
		document.getElementById("c1").checked = true;
		} else if ((document.getElementById("b1").checked == false) && (document.getElementById("c1").checked == false) && (document.getElementById("e1").checked == false)) {
		document.getElementById("d1").checked = true;
		} else if ((document.getElementById("b1").checked == false) && (document.getElementById("c1").checked == false) && (document.getElementById("d1").checked == false)) {
		document.getElementById("e1").checked = true;
		} 
	if ((document.getElementById("c3").checked == false) && (document.getElementById("d3").checked == false) && (document.getElementById("e3").checked == false)) {
		document.getElementById("b3").checked = true;
		} else if ((document.getElementById("b3").checked == false) && (document.getElementById("d3").checked == false) && (document.getElementById("e3").checked == false)) {
		document.getElementById("c3").checked = true;
		} else if ((document.getElementById("b3").checked == false) && (document.getElementById("c3").checked == false) && (document.getElementById("e3").checked == false)) {
		document.getElementById("d3").checked = true;
		} else if ((document.getElementById("b3").checked == false) && (document.getElementById("c3").checked == false) && (document.getElementById("d3").checked == false)) {
		document.getElementById("e3").checked = true;
		}	
	if ((document.getElementById("c4").checked == false) && (document.getElementById("d4").checked == false) && (document.getElementById("e4").checked == false)) {
		document.getElementById("b4").checked = true;
		} else if ((document.getElementById("b4").checked == false) && (document.getElementById("d4").checked == false) && (document.getElementById("e4").checked == false)) {
		document.getElementById("c4").checked = true;
		} else if ((document.getElementById("b4").checked == false) && (document.getElementById("c4").checked == false) && (document.getElementById("e4").checked == false)) {
		document.getElementById("d4").checked = true;
		} else if ((document.getElementById("b4").checked == false) && (document.getElementById("c4").checked == false) && (document.getElementById("d4").checked == false)) {
		document.getElementById("e4").checked = true;
		}
	if ((document.getElementById("c5").checked == false) && (document.getElementById("d5").checked == false) && (document.getElementById("e5").checked == false)) {
		document.getElementById("b5").checked = true;
		} else if ((document.getElementById("b5").checked == false) && (document.getElementById("d5").checked == false) && (document.getElementById("e5").checked == false)) {
		document.getElementById("c5").checked = true;
		} else if ((document.getElementById("b5").checked == false) && (document.getElementById("c5").checked == false) && (document.getElementById("e5").checked == false)) {
		document.getElementById("d5").checked = true;
		} else if ((document.getElementById("b5").checked == false) && (document.getElementById("c5").checked == false) && (document.getElementById("d5").checked == false)) {
		document.getElementById("e5").checked = true;
		}
	if ((document.getElementById("b3").checked == false) && (document.getElementById("b4").checked == false) && (document.getElementById("b5").checked == false)) {
		document.getElementById("b1").checked = true;
		} else if ((document.getElementById("c3").checked == false) && (document.getElementById("c4").checked == false) && (document.getElementById("c5").checked == false)) {
		document.getElementById("c1").checked = true;
		} else if ((document.getElementById("d3").checked == false) && (document.getElementById("d4").checked == false) && (document.getElementById("d5").checked == false)) {
		document.getElementById("d1").checked = true;
		} else if ((document.getElementById("e3").checked == false) && (document.getElementById("e4").checked == false) && (document.getElementById("e5").checked == false)) {
		document.getElementById("e1").checked = true;
		} 
	// check row 3
	if ((document.getElementById("b1").checked == false) && (document.getElementById("b4").checked == false) && (document.getElementById("b5").checked == false)) {
		document.getElementById("b3").checked = true;
		} else if ((document.getElementById("c1").checked == false) && (document.getElementById("c4").checked == false) && (document.getElementById("c5").checked == false)) {
		document.getElementById("c3").checked = true;
		} else if ((document.getElementById("d1").checked == false) && (document.getElementById("d4").checked == false) && (document.getElementById("d5").checked == false)) {
		document.getElementById("d3").checked = true;
		} else if ((document.getElementById("e1").checked == false) && (document.getElementById("e4").checked == false) && (document.getElementById("e5").checked == false)) {
		document.getElementById("e3").checked = true;
		}
	//check row 4
	if ((document.getElementById("b1").checked == false) && (document.getElementById("b3").checked == false) && (document.getElementById("b5").checked == false)) {
		document.getElementById("b4").checked = true;
		} else if ((document.getElementById("c1").checked == false) && (document.getElementById("c3").checked == false) && (document.getElementById("c5").checked == false)) {
		document.getElementById("c4").checked = true;
		} else if ((document.getElementById("d1").checked == false) && (document.getElementById("d3").checked == false) && (document.getElementById("d5").checked == false)) {
		document.getElementById("d4").checked = true;
		} else if ((document.getElementById("e1").checked == false) && (document.getElementById("e3").checked == false) && (document.getElementById("e5").checked == false)) {
		document.getElementById("e4").checked = true;
		}
	// check row 5
	if ((document.getElementById("b1").checked == false) && (document.getElementById("b3").checked == false) && (document.getElementById("b4").checked == false)) {
		document.getElementById("b5").checked = true;
		} else if ((document.getElementById("c2").checked == false) && (document.getElementById("c3").checked == false) && (document.getElementById("c4").checked == false)) {
		document.getElementById("c5").checked = true;
		} else if ((document.getElementById("d2").checked == false) && (document.getElementById("d3").checked == false) && (document.getElementById("d4").checked == false)) {
		document.getElementById("d5").checked = true;
		} else if ((document.getElementById("e2").checked == false) && (document.getElementById("e3").checked == false) && (document.getElementById("e4").checked == false)) {
		document.getElementById("e5").checked = true;
		}		
}
function uncheck_move_a3() {
	document.getElementById("b3").checked = false;
	document.getElementById("c3").checked = false;
	document.getElementById("d3").checked = false;
	document.getElementById("e3").checked = false;
	
	if ((document.getElementById("c1").checked == false) && (document.getElementById("d1").checked == false) && (document.getElementById("e1").checked == false)) {
		document.getElementById("b1").checked = true;	
		} else if ((document.getElementById("b1").checked == false) && (document.getElementById("d1").checked == false) && (document.getElementById("e1").checked == false)) {
		document.getElementById("c1").checked = true;
		} else if ((document.getElementById("b1").checked == false) && (document.getElementById("c1").checked == false) && (document.getElementById("e1").checked == false)) {
		document.getElementById("d1").checked = true;
		} else if ((document.getElementById("b1").checked == false) && (document.getElementById("c1").checked == false) && (document.getElementById("d1").checked == false)) {
		document.getElementById("e1").checked = true;
		} 
	if ((document.getElementById("c2").checked == false) && (document.getElementById("d2").checked == false) && (document.getElementById("e2").checked == false)) {
		document.getElementById("b2").checked = true;
		} else if ((document.getElementById("b2").checked == false) && (document.getElementById("d2").checked == false) && (document.getElementById("e2").checked == false)) {
		document.getElementById("c2").checked = true;
		} else if ((document.getElementById("b2").checked == false) && (document.getElementById("c2").checked == false) && (document.getElementById("e2").checked == false)) {
		document.getElementById("d2").checked = true;
		} else if ((document.getElementById("b2").checked == false) && (document.getElementById("c2").checked == false) && (document.getElementById("d2").checked == false)) {
		document.getElementById("e3").checked = true;
		}	
	if ((document.getElementById("c4").checked == false) && (document.getElementById("d4").checked == false) && (document.getElementById("e4").checked == false)) {
		document.getElementById("b4").checked = true;
		} else if ((document.getElementById("b4").checked == false) && (document.getElementById("d4").checked == false) && (document.getElementById("e4").checked == false)) {
		document.getElementById("c4").checked = true;
		} else if ((document.getElementById("b4").checked == false) && (document.getElementById("c4").checked == false) && (document.getElementById("e4").checked == false)) {
		document.getElementById("d4").checked = true;
		} else if ((document.getElementById("b4").checked == false) && (document.getElementById("c4").checked == false) && (document.getElementById("d4").checked == false)) {
		document.getElementById("e4").checked = true;
		}
	if ((document.getElementById("c5").checked == false) && (document.getElementById("d5").checked == false) && (document.getElementById("e5").checked == false)) {
		document.getElementById("b5").checked = true;
		} else if ((document.getElementById("b5").checked == false) && (document.getElementById("d5").checked == false) && (document.getElementById("e5").checked == false)) {
		document.getElementById("c5").checked = true;
		} else if ((document.getElementById("b5").checked == false) && (document.getElementById("c5").checked == false) && (document.getElementById("e5").checked == false)) {
		document.getElementById("d5").checked = true;
		} else if ((document.getElementById("b5").checked == false) && (document.getElementById("c5").checked == false) && (document.getElementById("d5").checked == false)) {
		document.getElementById("e5").checked = true;
		}
	if ((document.getElementById("b2").checked == false) && (document.getElementById("b4").checked == false) && (document.getElementById("b5").checked == false)) {
		document.getElementById("b1").checked = true;
		} else if ((document.getElementById("c2").checked == false) && (document.getElementById("c4").checked == false) && (document.getElementById("c5").checked == false)) {
		document.getElementById("c1").checked = true;
		} else if ((document.getElementById("d2").checked == false) && (document.getElementById("d4").checked == false) && (document.getElementById("d5").checked == false)) {
		document.getElementById("d1").checked = true;
		} else if ((document.getElementById("e2").checked == false) && (document.getElementById("e4").checked == false) && (document.getElementById("e5").checked == false)) {
		document.getElementById("e1").checked = true;
		} 
	// check row 3
	if ((document.getElementById("b1").checked == false) && (document.getElementById("b4").checked == false) && (document.getElementById("b5").checked == false)) {
		document.getElementById("b2").checked = true;
		} else if ((document.getElementById("c1").checked == false) && (document.getElementById("c4").checked == false) && (document.getElementById("c5").checked == false)) {
		document.getElementById("c2").checked = true;
		} else if ((document.getElementById("d1").checked == false) && (document.getElementById("d4").checked == false) && (document.getElementById("d5").checked == false)) {
		document.getElementById("d2").checked = true;
		} else if ((document.getElementById("e1").checked == false) && (document.getElementById("e4").checked == false) && (document.getElementById("e5").checked == false)) {
		document.getElementById("e2").checked = true;
		}
	//check row 4
	if ((document.getElementById("b1").checked == false) && (document.getElementById("b2").checked == false) && (document.getElementById("b5").checked == false)) {
		document.getElementById("b4").checked = true;
		} else if ((document.getElementById("c1").checked == false) && (document.getElementById("c2").checked == false) && (document.getElementById("c5").checked == false)) {
		document.getElementById("c4").checked = true;
		} else if ((document.getElementById("d1").checked == false) && (document.getElementById("d2").checked == false) && (document.getElementById("d5").checked == false)) {
		document.getElementById("d4").checked = true;
		} else if ((document.getElementById("e1").checked == false) && (document.getElementById("e2").checked == false) && (document.getElementById("e5").checked == false)) {
		document.getElementById("e4").checked = true;
		}		
	// check row 5
	if ((document.getElementById("b1").checked == false) && (document.getElementById("b2").checked == false) && (document.getElementById("b4").checked == false)) {
		document.getElementById("b5").checked = true;
		} else if ((document.getElementById("c1").checked == false) && (document.getElementById("c2").checked == false) && (document.getElementById("c4").checked == false)) {
		document.getElementById("c5").checked = true;
		} else if ((document.getElementById("d1").checked == false) && (document.getElementById("d2").checked == false) && (document.getElementById("d4").checked == false)) {
		document.getElementById("d5").checked = true;
		} else if ((document.getElementById("e1").checked == false) && (document.getElementById("e2").checked == false) && (document.getElementById("e4").checked == false)) {
		document.getElementById("e5").checked = true;
		}		
}
function uncheck_move_a4() {
	document.getElementById("b4").checked = false;
	document.getElementById("c4").checked = false;
	document.getElementById("d4").checked = false;
	document.getElementById("e4").checked = false;
	
	if ((document.getElementById("c1").checked == false) && (document.getElementById("d1").checked == false) && (document.getElementById("e1").checked == false)) {
		document.getElementById("b1").checked = true;	
		} else if ((document.getElementById("b1").checked == false) && (document.getElementById("d1").checked == false) && (document.getElementById("e1").checked == false)) {
		document.getElementById("c1").checked = true;
		} else if ((document.getElementById("b1").checked == false) && (document.getElementById("c1").checked == false) && (document.getElementById("e1").checked == false)) {
		document.getElementById("d1").checked = true;
		} else if ((document.getElementById("b1").checked == false) && (document.getElementById("c1").checked == false) && (document.getElementById("d1").checked == false)) {
		document.getElementById("e1").checked = true;
		} 
	if ((document.getElementById("c2").checked == false) && (document.getElementById("d2").checked == false) && (document.getElementById("e2").checked == false)) {
		document.getElementById("b2").checked = true;
		} else if ((document.getElementById("b2").checked == false) && (document.getElementById("d2").checked == false) && (document.getElementById("e2").checked == false)) {
		document.getElementById("c2").checked = true;
		} else if ((document.getElementById("b2").checked == false) && (document.getElementById("c2").checked == false) && (document.getElementById("e2").checked == false)) {
		document.getElementById("d2").checked = true;
		} else if ((document.getElementById("b2").checked == false) && (document.getElementById("c2").checked == false) && (document.getElementById("d2").checked == false)) {
		document.getElementById("e3").checked = true;
		}	
	if ((document.getElementById("c3").checked == false) && (document.getElementById("d3").checked == false) && (document.getElementById("e3").checked == false)) {
		document.getElementById("b3").checked = true;
		} else if ((document.getElementById("b3").checked == false) && (document.getElementById("d3").checked == false) && (document.getElementById("e3").checked == false)) {
		document.getElementById("c3").checked = true;
		} else if ((document.getElementById("b3").checked == false) && (document.getElementById("c3").checked == false) && (document.getElementById("e3").checked == false)) {
		document.getElementById("d3").checked = true;
		} else if ((document.getElementById("b3").checked == false) && (document.getElementById("c3").checked == false) && (document.getElementById("d3").checked == false)) {
		document.getElementById("e3").checked = true;
		}
	if ((document.getElementById("c5").checked == false) && (document.getElementById("d5").checked == false) && (document.getElementById("e5").checked == false)) {
		document.getElementById("b5").checked = true;
		} else if ((document.getElementById("b5").checked == false) && (document.getElementById("d5").checked == false) && (document.getElementById("e5").checked == false)) {
		document.getElementById("c5").checked = true;
		} else if ((document.getElementById("b5").checked == false) && (document.getElementById("c5").checked == false) && (document.getElementById("e5").checked == false)) {
		document.getElementById("d5").checked = true;
		} else if ((document.getElementById("b5").checked == false) && (document.getElementById("c5").checked == false) && (document.getElementById("d5").checked == false)) {
		document.getElementById("e5").checked = true;
		}
	if ((document.getElementById("b2").checked == false) && (document.getElementById("b3").checked == false) && (document.getElementById("b5").checked == false)) {
		document.getElementById("b1").checked = true;
		} else if ((document.getElementById("c2").checked == false) && (document.getElementById("c3").checked == false) && (document.getElementById("c5").checked == false)) {
		document.getElementById("c1").checked = true;
		} else if ((document.getElementById("d2").checked == false) && (document.getElementById("d3").checked == false) && (document.getElementById("d5").checked == false)) {
		document.getElementById("d1").checked = true;
		} else if ((document.getElementById("e2").checked == false) && (document.getElementById("e3").checked == false) && (document.getElementById("e5").checked == false)) {
		document.getElementById("e1").checked = true;
		} 
	// check row 3
	if ((document.getElementById("b1").checked == false) && (document.getElementById("b3").checked == false) && (document.getElementById("b5").checked == false)) {
		document.getElementById("b2").checked = true;
		} else if ((document.getElementById("c1").checked == false) && (document.getElementById("c3").checked == false) && (document.getElementById("c5").checked == false)) {
		document.getElementById("c2").checked = true;
		} else if ((document.getElementById("d1").checked == false) && (document.getElementById("d3").checked == false) && (document.getElementById("d5").checked == false)) {
		document.getElementById("d2").checked = true;
		} else if ((document.getElementById("e1").checked == false) && (document.getElementById("e3").checked == false) && (document.getElementById("e5").checked == false)) {
		document.getElementById("e2").checked = true;
		}
	//check row 4
	if ((document.getElementById("b1").checked == false) && (document.getElementById("b2").checked == false) && (document.getElementById("b5").checked == false)) {
		document.getElementById("b3").checked = true;
		} else if ((document.getElementById("c1").checked == false) && (document.getElementById("c2").checked == false) && (document.getElementById("c5").checked == false)) {
		document.getElementById("c3").checked = true;
		} else if ((document.getElementById("d1").checked == false) && (document.getElementById("d2").checked == false) && (document.getElementById("d5").checked == false)) {
		document.getElementById("d3").checked = true;
		} else if ((document.getElementById("e1").checked == false) && (document.getElementById("e2").checked == false) && (document.getElementById("e5").checked == false)) {
		document.getElementById("e4").checked = true;
		}		
	// check row 5
	if ((document.getElementById("b1").checked == false) && (document.getElementById("b2").checked == false) && (document.getElementById("b3").checked == false)) {
		document.getElementById("b5").checked = true;
		} else if ((document.getElementById("c1").checked == false) && (document.getElementById("c2").checked == false) && (document.getElementById("c3").checked == false)) {
		document.getElementById("c5").checked = true;
		} else if ((document.getElementById("d1").checked == false) && (document.getElementById("d2").checked == false) && (document.getElementById("d3").checked == false)) {
		document.getElementById("d5").checked = true;
		} else if ((document.getElementById("e1").checked == false) && (document.getElementById("e2").checked == false) && (document.getElementById("e3").checked == false)) {
		document.getElementById("e5").checked = true;
		}		
}
function uncheck_move_a5() {
	// clear the rest of this row
	document.getElementById("b5").checked = false;
	document.getElementById("c5").checked = false;
	document.getElementById("d5").checked = false;
	document.getElementById("e5").checked = false;
	
	if ((document.getElementById("c1").checked == false) && (document.getElementById("d1").checked == false) && (document.getElementById("e1").checked == false)) {
		document.getElementById("b1").checked = true;	
		} else if ((document.getElementById("b1").checked == false) && (document.getElementById("d1").checked == false) && (document.getElementById("e1").checked == false)) {
		document.getElementById("c1").checked = true;
		} else if ((document.getElementById("b1").checked == false) && (document.getElementById("c1").checked == false) && (document.getElementById("e1").checked == false)) {
		document.getElementById("d1").checked = true;
		} else if ((document.getElementById("b1").checked == false) && (document.getElementById("c1").checked == false) && (document.getElementById("d1").checked == false)) {
		document.getElementById("e1").checked = true;
		} 
	if ((document.getElementById("c2").checked == false) && (document.getElementById("d2").checked == false) && (document.getElementById("e2").checked == false)) {
		document.getElementById("b2").checked = true;
		} else if ((document.getElementById("b2").checked == false) && (document.getElementById("d2").checked == false) && (document.getElementById("e2").checked == false)) {
		document.getElementById("c2").checked = true;
		} else if ((document.getElementById("b2").checked == false) && (document.getElementById("c2").checked == false) && (document.getElementById("e2").checked == false)) {
		document.getElementById("d2").checked = true;
		} else if ((document.getElementById("b2").checked == false) && (document.getElementById("c2").checked == false) && (document.getElementById("d2").checked == false)) {
		document.getElementById("e3").checked = true;
		}	
	if ((document.getElementById("c3").checked == false) && (document.getElementById("d3").checked == false) && (document.getElementById("e3").checked == false)) {
		document.getElementById("b3").checked = true;
		} else if ((document.getElementById("b3").checked == false) && (document.getElementById("d3").checked == false) && (document.getElementById("e3").checked == false)) {
		document.getElementById("c3").checked = true;
		} else if ((document.getElementById("b3").checked == false) && (document.getElementById("c3").checked == false) && (document.getElementById("e3").checked == false)) {
		document.getElementById("d3").checked = true;
		} else if ((document.getElementById("b3").checked == false) && (document.getElementById("c3").checked == false) && (document.getElementById("d3").checked == false)) {
		document.getElementById("e3").checked = true;
		}
	if ((document.getElementById("c4").checked == false) && (document.getElementById("d4").checked == false) && (document.getElementById("e4").checked == false)) {
		document.getElementById("b4").checked = true;
		} else if ((document.getElementById("b4").checked == false) && (document.getElementById("d4").checked == false) && (document.getElementById("e4").checked == false)) {
		document.getElementById("c4").checked = true;
		} else if ((document.getElementById("b4").checked == false) && (document.getElementById("c4").checked == false) && (document.getElementById("e4").checked == false)) {
		document.getElementById("d4").checked = true;
		} else if ((document.getElementById("b4").checked == false) && (document.getElementById("c4").checked == false) && (document.getElementById("d4").checked == false)) {
		document.getElementById("e4").checked = true;
		}
	if ((document.getElementById("b2").checked == false) && (document.getElementById("b3").checked == false) && (document.getElementById("b4").checked == false)) {
		document.getElementById("b1").checked = true;
		} else if ((document.getElementById("c2").checked == false) && (document.getElementById("c3").checked == false) && (document.getElementById("c4").checked == false)) {
		document.getElementById("c1").checked = true;
		} else if ((document.getElementById("d2").checked == false) && (document.getElementById("d3").checked == false) && (document.getElementById("d4").checked == false)) {
		document.getElementById("d1").checked = true;
		} else if ((document.getElementById("e2").checked == false) && (document.getElementById("e3").checked == false) && (document.getElementById("e4").checked == false)) {
		document.getElementById("e1").checked = true;
		} 
	// check row 3
	if ((document.getElementById("b1").checked == false) && (document.getElementById("b3").checked == false) && (document.getElementById("b4").checked == false)) {
		document.getElementById("b2").checked = true;
		} else if ((document.getElementById("c1").checked == false) && (document.getElementById("c3").checked == false) && (document.getElementById("c4").checked == false)) {
		document.getElementById("c2").checked = true;
		} else if ((document.getElementById("d1").checked == false) && (document.getElementById("d3").checked == false) && (document.getElementById("d4").checked == false)) {
		document.getElementById("d2").checked = true;
		} else if ((document.getElementById("e1").checked == false) && (document.getElementById("e3").checked == false) && (document.getElementById("e4").checked == false)) {
		document.getElementById("e2").checked = true;
		}
	//check row 4
	if ((document.getElementById("b1").checked == false) && (document.getElementById("b2").checked == false) && (document.getElementById("b4").checked == false)) {
		document.getElementById("b3").checked = true;
		} else if ((document.getElementById("c1").checked == false) && (document.getElementById("c2").checked == false) && (document.getElementById("c4").checked == false)) {
		document.getElementById("c3").checked = true;
		} else if ((document.getElementById("d1").checked == false) && (document.getElementById("d2").checked == false) && (document.getElementById("d4").checked == false)) {
		document.getElementById("d3").checked = true;
		} else if ((document.getElementById("e1").checked == false) && (document.getElementById("e2").checked == false) && (document.getElementById("e4").checked == false)) {
		document.getElementById("e3").checked = true;
		}		
	// check row 5
	if ((document.getElementById("b1").checked == false) && (document.getElementById("b2").checked == false) && (document.getElementById("b3").checked == false)) {
		document.getElementById("b4").checked = true;
		} else if ((document.getElementById("c1").checked == false) && (document.getElementById("c2").checked == false) && (document.getElementById("c3").checked == false)) {
		document.getElementById("c4").checked = true;
		} else if ((document.getElementById("d1").checked == false) && (document.getElementById("d2").checked == false) && (document.getElementById("d3").checked == false)) {
		document.getElementById("d4").checked = true;
		} else if ((document.getElementById("e1").checked == false) && (document.getElementById("e2").checked == false) && (document.getElementById("e3").checked == false)) {
		document.getElementById("e4").checked = true;
		}		
}
function uncheck_move_b1() {
	// clear the rest of this row
	document.getElementById("a1").checked = false;
	document.getElementById("c1").checked = false;
	document.getElementById("d1").checked = false;
	document.getElementById("e1").checked = false;
	
	if ((document.getElementById("c2").checked == false) && (document.getElementById("d2").checked == false) && (document.getElementById("e2").checked == false)) {
		document.getElementById("a2").checked = true;	
		} else if ((document.getElementById("c2").checked == false) && (document.getElementById("d2").checked == false) && (document.getElementById("e2").checked == false)) {
		document.getElementById("a2").checked = true;
		} else if ((document.getElementById("a2").checked == false) && (document.getElementById("c2").checked == false) && (document.getElementById("e2").checked == false)) {
		document.getElementById("d2").checked = true;
		} else if ((document.getElementById("a2").checked == false) && (document.getElementById("c2").checked == false) && (document.getElementById("d2").checked == false)) {
		document.getElementById("e2").checked = true;
		} else if ((document.getElementById("a3").checked == false) && (document.getElementById("a4").checked == false) && (document.getElementById("a5").checked == false)) {
		document.getElementById("a2").checked = true;	
		} else if ((document.getElementById("c3").checked == false) && (document.getElementById("c4").checked == false) && (document.getElementById("c5").checked == false)) {
		document.getElementById("c2").checked = true;
		} else if ((document.getElementById("d3").checked == false) && (document.getElementById("d4").checked == false) && (document.getElementById("d5").checked == false)) {
		document.getElementById("d2").checked = true;
		} else if ((document.getElementById("e3").checked == false) && (document.getElementById("e4").checked == false) && (document.getElementById("e5").checked == false)) {
		document.getElementById("e2").checked = true;
		}
	if ((document.getElementById("c3").checked == false) && (document.getElementById("d3").checked == false) && (document.getElementById("e3").checked == false)) {
		document.getElementById("a3").checked = true;
		} else if ((document.getElementById("a3").checked == false) && (document.getElementById("d3").checked == false) && (document.getElementById("e3").checked == false)) {
		document.getElementById("c3").checked = true;
		} else if ((document.getElementById("a3").checked == false) && (document.getElementById("c3").checked == false) && (document.getElementById("e3").checked == false)) {
		document.getElementById("d3").checked = true;
		} else if ((document.getElementById("a3").checked == false) && (document.getElementById("c3").checked == false) && (document.getElementById("d3").checked == false)) {
		document.getElementById("e3").checked = true;
		} else if ((document.getElementById("a2").checked == false) && (document.getElementById("a4").checked == false) && (document.getElementById("a5").checked == false)) {
		document.getElementById("a3").checked = true;
		} else if ((document.getElementById("c2").checked == false) && (document.getElementById("c4").checked == false) && (document.getElementById("c5").checked == false)) {
		document.getElementById("c3").checked = true;
		} else if ((document.getElementById("d2").checked == false) && (document.getElementById("d4").checked == false) && (document.getElementById("d5").checked == false)) {
		document.getElementById("d3").checked = true;
		} else if ((document.getElementById("e2").checked == false) && (document.getElementById("e4").checked == false) && (document.getElementById("e5").checked == false)) {
		document.getElementById("e3").checked = true;
		}		
	if ((document.getElementById("c4").checked == false) && (document.getElementById("d4").checked == false) && (document.getElementById("e4").checked == false)) {
		document.getElementById("a4").checked = true;
		} else if ((document.getElementById("a4").checked == false) && (document.getElementById("d4").checked == false) && (document.getElementById("e4").checked == false)) {
		document.getElementById("c4").checked = true;
		} else if ((document.getElementById("a4").checked == false) && (document.getElementById("c4").checked == false) && (document.getElementById("e4").checked == false)) {
		document.getElementById("d4").checked = true;
		} else if ((document.getElementById("a4").checked == false) && (document.getElementById("c4").checked == false) && (document.getElementById("d4").checked == false)) {
		document.getElementById("e4").checked = true;
		} else if ((document.getElementById("a2").checked == false) && (document.getElementById("a3").checked == false) && (document.getElementById("a5").checked == false)) {
		document.getElementById("a4").checked = true;
		} else if ((document.getElementById("c2").checked == false) && (document.getElementById("c3").checked == false) && (document.getElementById("c5").checked == false)) {
		document.getElementById("c4").checked = true;
		} else if ((document.getElementById("d2").checked == false) && (document.getElementById("d3").checked == false) && (document.getElementById("d5").checked == false)) {
		document.getElementById("d4").checked = true;
		} else if ((document.getElementById("e2").checked == false) && (document.getElementById("e3").checked == false) && (document.getElementById("e5").checked == false)) {
		document.getElementById("e4").checked = true;
		}
	if ((document.getElementById("c5").checked == false) && (document.getElementById("d5").checked == false) && (document.getElementById("e5").checked == false)) {
		document.getElementById("a5").checked = true;
		} else if ((document.getElementById("a5").checked == false) && (document.getElementById("d5").checked == false) && (document.getElementById("e5").checked == false)) {
		document.getElementById("c5").checked = true;
		} else if ((document.getElementById("a5").checked == false) && (document.getElementById("c5").checked == false) && (document.getElementById("e5").checked == false)) {
		document.getElementById("d5").checked = true;
		} else if ((document.getElementById("a5").checked == false) && (document.getElementById("c5").checked == false) && (document.getElementById("d5").checked == false)) {
		document.getElementById("e5").checked = true;
		} else if ((document.getElementById("a2").checked == false) && (document.getElementById("a3").checked == false) && (document.getElementById("a4").checked == false)) {
		document.getElementById("a5").checked = true;
		} else if ((document.getElementById("c2").checked == false) && (document.getElementById("c3").checked == false) && (document.getElementById("c4").checked == false)) {
		document.getElementById("c5").checked = true;
		} else if ((document.getElementById("d2").checked == false) && (document.getElementById("d3").checked == false) && (document.getElementById("d4").checked == false)) {
		document.getElementById("d5").checked = true;
		} else if ((document.getElementById("e2").checked == false) && (document.getElementById("e3").checked == false) && (document.getElementById("e4").checked == false)) {
		document.getElementById("e5").checked = true;
		}			
}
function uncheck_move_b2() {
	// clear the rest of this row
	document.getElementById("a2").checked = false;
	document.getElementById("c2").checked = false;
	document.getElementById("d2").checked = false;
	document.getElementById("e2").checked = false;
	
	if ((document.getElementById("c1").checked == false) && (document.getElementById("d1").checked == false) && (document.getElementById("e1").checked == false)) {
		document.getElementById("a1").checked = true;	
		} else if ((document.getElementById("a1").checked == false) && (document.getElementById("d1").checked == false) && (document.getElementById("e1").checked == false)) {
		document.getElementById("c1").checked = true;
		} else if ((document.getElementById("a1").checked == false) && (document.getElementById("c1").checked == false) && (document.getElementById("e1").checked == false)) {
		document.getElementById("d1").checked = true;
		} else if ((document.getElementById("a1").checked == false) && (document.getElementById("c1").checked == false) && (document.getElementById("d1").checked == false)) {
		document.getElementById("e1").checked = true;
		}
	if ((document.getElementById("c3").checked == false) && (document.getElementById("d3").checked == false) && (document.getElementById("e3").checked == false)) {
		document.getElementById("a3").checked = true;
		} else if ((document.getElementById("a3").checked == false) && (document.getElementById("d3").checked == false) && (document.getElementById("e3").checked == false)) {
		document.getElementById("c3").checked = true;
		} else if ((document.getElementById("a3").checked == false) && (document.getElementById("c3").checked == false) && (document.getElementById("e3").checked == false)) {
		document.getElementById("d3").checked = true;
		} else if ((document.getElementById("a3").checked == false) && (document.getElementById("c3").checked == false) && (document.getElementById("d3").checked == false)) {
		document.getElementById("e3").checked = true;
		}		
	if ((document.getElementById("c4").checked == false) && (document.getElementById("d4").checked == false) && (document.getElementById("e4").checked == false)) {
		document.getElementById("a4").checked = true;
		} else if ((document.getElementById("a4").checked == false) && (document.getElementById("d4").checked == false) && (document.getElementById("e4").checked == false)) {
		document.getElementById("c4").checked = true;
		} else if ((document.getElementById("a4").checked == false) && (document.getElementById("c4").checked == false) && (document.getElementById("e4").checked == false)) {
		document.getElementById("d4").checked = true;
		} else if ((document.getElementById("a4").checked == false) && (document.getElementById("c4").checked == false) && (document.getElementById("d4").checked == false)) {
		document.getElementById("e4").checked = true;
		}
	if ((document.getElementById("c5").checked == false) && (document.getElementById("d5").checked == false) && (document.getElementById("e5").checked == false)) {
		document.getElementById("a5").checked = true;
		} else if ((document.getElementById("a5").checked == false) && (document.getElementById("d5").checked == false) && (document.getElementById("e5").checked == false)) {
		document.getElementById("c5").checked = true;
		} else if ((document.getElementById("a5").checked == false) && (document.getElementById("c5").checked == false) && (document.getElementById("e5").checked == false)) {
		document.getElementById("d5").checked = true;
		} else if ((document.getElementById("a5").checked == false) && (document.getElementById("c5").checked == false) && (document.getElementById("d5").checked == false)) {
		document.getElementById("e5").checked = true;
		}
	if ((document.getElementById("a3").checked == false) && (document.getElementById("a4").checked == false) && (document.getElementById("a5").checked == false)) {
		document.getElementById("a1").checked = true;
		} else if ((document.getElementById("c3").checked == false) && (document.getElementById("c4").checked == false) && (document.getElementById("c5").checked == false)) {
		document.getElementById("c1").checked = true;
		} else if ((document.getElementById("d3").checked == false) && (document.getElementById("d4").checked == false) && (document.getElementById("d5").checked == false)) {
		document.getElementById("d1").checked = true;
		} else if ((document.getElementById("e3").checked == false) && (document.getElementById("e4").checked == false) && (document.getElementById("e5").checked == false)) {
		document.getElementById("e1").checked = true;
		} 
	// check row 3
	if ((document.getElementById("a1").checked == false) && (document.getElementById("a4").checked == false) && (document.getElementById("a5").checked == false)) {
		document.getElementById("a3").checked = true;
		} else if ((document.getElementById("c1").checked == false) && (document.getElementById("c4").checked == false) && (document.getElementById("c5").checked == false)) {
		document.getElementById("c3").checked = true;
		} else if ((document.getElementById("d1").checked == false) && (document.getElementById("d4").checked == false) && (document.getElementById("d5").checked == false)) {
		document.getElementById("d3").checked = true;
		} else if ((document.getElementById("e1").checked == false) && (document.getElementById("e4").checked == false) && (document.getElementById("e5").checked == false)) {
		document.getElementById("e3").checked = true;
		}
	//check row 4
	if ((document.getElementById("a1").checked == false) && (document.getElementById("a3").checked == false) && (document.getElementById("a5").checked == false)) {
		document.getElementById("a4").checked = true;
		} else if ((document.getElementById("c1").checked == false) && (document.getElementById("c3").checked == false) && (document.getElementById("c5").checked == false)) {
		document.getElementById("c4").checked = true;
		} else if ((document.getElementById("d1").checked == false) && (document.getElementById("d3").checked == false) && (document.getElementById("d5").checked == false)) {
		document.getElementById("d4").checked = true;
		} else if ((document.getElementById("e1").checked == false) && (document.getElementById("e3").checked == false) && (document.getElementById("e5").checked == false)) {
		document.getElementById("e4").checked = true;
		}		
	// check row 5
	if ((document.getElementById("a1").checked == false) && (document.getElementById("a3").checked == false) && (document.getElementById("a4").checked == false)) {
		document.getElementById("a5").checked = true;
		} else if ((document.getElementById("c1").checked == false) && (document.getElementById("c3").checked == false) && (document.getElementById("c4").checked == false)) {
		document.getElementById("c5").checked = true;
		} else if ((document.getElementById("d1").checked == false) && (document.getElementById("d3").checked == false) && (document.getElementById("d4").checked == false)) {
		document.getElementById("d5").checked = true;
		} else if ((document.getElementById("e1").checked == false) && (document.getElementById("e3").checked == false) && (document.getElementById("e4").checked == false)) {
		document.getElementById("e5").checked = true;
		}		
}
function uncheck_move_b3() {
	// clear the rest of this row
	document.getElementById("a3").checked = false;
	document.getElementById("c3").checked = false;
	document.getElementById("d3").checked = false;
	document.getElementById("e3").checked = false;
	
	if ((document.getElementById("c1").checked == false) && (document.getElementById("d1").checked == false) && (document.getElementById("e1").checked == false)) {
		document.getElementById("a1").checked = true;	
		} else if ((document.getElementById("a1").checked == false) && (document.getElementById("d1").checked == false) && (document.getElementById("e1").checked == false)) {
		document.getElementById("c1").checked = true;
		} else if ((document.getElementById("a1").checked == false) && (document.getElementById("c1").checked == false) && (document.getElementById("e1").checked == false)) {
		document.getElementById("d1").checked = true;
		} else if ((document.getElementById("a1").checked == false) && (document.getElementById("c1").checked == false) && (document.getElementById("d1").checked == false)) {
		document.getElementById("e1").checked = true;
		}
	if ((document.getElementById("c2").checked == false) && (document.getElementById("d2").checked == false) && (document.getElementById("e2").checked == false)) {
		document.getElementById("a2").checked = true;
		} else if ((document.getElementById("a2").checked == false) && (document.getElementById("d2").checked == false) && (document.getElementById("e2").checked == false)) {
		document.getElementById("c2").checked = true;
		} else if ((document.getElementById("a2").checked == false) && (document.getElementById("c2").checked == false) && (document.getElementById("e2").checked == false)) {
		document.getElementById("d2").checked = true;
		} else if ((document.getElementById("a2").checked == false) && (document.getElementById("c2").checked == false) && (document.getElementById("d2").checked == false)) {
		document.getElementById("e2").checked = true;
		}		
	if ((document.getElementById("c4").checked == false) && (document.getElementById("d4").checked == false) && (document.getElementById("e4").checked == false)) {
		document.getElementById("a4").checked = true;
		} else if ((document.getElementById("a4").checked == false) && (document.getElementById("d4").checked == false) && (document.getElementById("e4").checked == false)) {
		document.getElementById("c4").checked = true;
		} else if ((document.getElementById("a4").checked == false) && (document.getElementById("c4").checked == false) && (document.getElementById("e4").checked == false)) {
		document.getElementById("d4").checked = true;
		} else if ((document.getElementById("a4").checked == false) && (document.getElementById("c4").checked == false) && (document.getElementById("d4").checked == false)) {
		document.getElementById("e4").checked = true;
		}
	if ((document.getElementById("c5").checked == false) && (document.getElementById("d5").checked == false) && (document.getElementById("e5").checked == false)) {
		document.getElementById("a5").checked = true;
		} else if ((document.getElementById("a5").checked == false) && (document.getElementById("d5").checked == false) && (document.getElementById("e5").checked == false)) {
		document.getElementById("c5").checked = true;
		} else if ((document.getElementById("a5").checked == false) && (document.getElementById("c5").checked == false) && (document.getElementById("e5").checked == false)) {
		document.getElementById("d5").checked = true;
		} else if ((document.getElementById("a5").checked == false) && (document.getElementById("c5").checked == false) && (document.getElementById("d5").checked == false)) {
		document.getElementById("e5").checked = true;
		}
	if ((document.getElementById("a2").checked == false) && (document.getElementById("a4").checked == false) && (document.getElementById("a5").checked == false)) {
		document.getElementById("a1").checked = true;
		} else if ((document.getElementById("c2").checked == false) && (document.getElementById("c4").checked == false) && (document.getElementById("c5").checked == false)) {
		document.getElementById("c1").checked = true;
		} else if ((document.getElementById("d2").checked == false) && (document.getElementById("d4").checked == false) && (document.getElementById("d5").checked == false)) {
		document.getElementById("d1").checked = true;
		} else if ((document.getElementById("e2").checked == false) && (document.getElementById("e4").checked == false) && (document.getElementById("e5").checked == false)) {
		document.getElementById("e1").checked = true;
		} 
	// check row 3
	if ((document.getElementById("a1").checked == false) && (document.getElementById("a4").checked == false) && (document.getElementById("a5").checked == false)) {
		document.getElementById("a2").checked = true;
		} else if ((document.getElementById("c1").checked == false) && (document.getElementById("c4").checked == false) && (document.getElementById("c5").checked == false)) {
		document.getElementById("c2").checked = true;
		} else if ((document.getElementById("d1").checked == false) && (document.getElementById("d4").checked == false) && (document.getElementById("d5").checked == false)) {
		document.getElementById("d2").checked = true;
		} else if ((document.getElementById("e1").checked == false) && (document.getElementById("e4").checked == false) && (document.getElementById("e5").checked == false)) {
		document.getElementById("e2").checked = true;
		}
	//check row 4
	if ((document.getElementById("a1").checked == false) && (document.getElementById("a2").checked == false) && (document.getElementById("a5").checked == false)) {
		document.getElementById("a4").checked = true;
		} else if ((document.getElementById("c1").checked == false) && (document.getElementById("c2").checked == false) && (document.getElementById("c5").checked == false)) {
		document.getElementById("c4").checked = true;
		} else if ((document.getElementById("d1").checked == false) && (document.getElementById("d2").checked == false) && (document.getElementById("d5").checked == false)) {
		document.getElementById("d4").checked = true;
		} else if ((document.getElementById("e1").checked == false) && (document.getElementById("e2").checked == false) && (document.getElementById("e5").checked == false)) {
		document.getElementById("e4").checked = true;
		}		
	// check row 5
	if ((document.getElementById("a1").checked == false) && (document.getElementById("a2").checked == false) && (document.getElementById("a4").checked == false)) {
		document.getElementById("a5").checked = true;
		} else if ((document.getElementById("c1").checked == false) && (document.getElementById("c2").checked == false) && (document.getElementById("c4").checked == false)) {
		document.getElementById("c5").checked = true;
		} else if ((document.getElementById("d1").checked == false) && (document.getElementById("d2").checked == false) && (document.getElementById("d4").checked == false)) {
		document.getElementById("d5").checked = true;
		} else if ((document.getElementById("e1").checked == false) && (document.getElementById("e2").checked == false) && (document.getElementById("e4").checked == false)) {
		document.getElementById("e5").checked = true;
		}		
}
function uncheck_move_b4() {
	// clear the rest of this row
	document.getElementById("a4").checked = false;
	document.getElementById("c4").checked = false;
	document.getElementById("d4").checked = false;
	document.getElementById("e4").checked = false;
	
	if ((document.getElementById("c1").checked == false) && (document.getElementById("d1").checked == false) && (document.getElementById("e1").checked == false)) {
		document.getElementById("a1").checked = true;	
		} else if ((document.getElementById("a1").checked == false) && (document.getElementById("d1").checked == false) && (document.getElementById("e1").checked == false)) {
		document.getElementById("c1").checked = true;
		} else if ((document.getElementById("a1").checked == false) && (document.getElementById("c1").checked == false) && (document.getElementById("e1").checked == false)) {
		document.getElementById("d1").checked = true;
		} else if ((document.getElementById("a1").checked == false) && (document.getElementById("c1").checked == false) && (document.getElementById("d1").checked == false)) {
		document.getElementById("e1").checked = true;
		}
	if ((document.getElementById("c2").checked == false) && (document.getElementById("d2").checked == false) && (document.getElementById("e2").checked == false)) {
		document.getElementById("a2").checked = true;
		} else if ((document.getElementById("a2").checked == false) && (document.getElementById("d2").checked == false) && (document.getElementById("e2").checked == false)) {
		document.getElementById("c2").checked = true;
		} else if ((document.getElementById("a2").checked == false) && (document.getElementById("c2").checked == false) && (document.getElementById("e2").checked == false)) {
		document.getElementById("d2").checked = true;
		} else if ((document.getElementById("a2").checked == false) && (document.getElementById("c2").checked == false) && (document.getElementById("d2").checked == false)) {
		document.getElementById("e2").checked = true;
		}		
	if ((document.getElementById("c3").checked == false) && (document.getElementById("d3").checked == false) && (document.getElementById("e3").checked == false)) {
		document.getElementById("a3").checked = true;
		} else if ((document.getElementById("a3").checked == false) && (document.getElementById("d3").checked == false) && (document.getElementById("e3").checked == false)) {
		document.getElementById("c3").checked = true;
		} else if ((document.getElementById("a3").checked == false) && (document.getElementById("c3").checked == false) && (document.getElementById("e3").checked == false)) {
		document.getElementById("d3").checked = true;
		} else if ((document.getElementById("a3").checked == false) && (document.getElementById("c3").checked == false) && (document.getElementById("d3").checked == false)) {
		document.getElementById("e3").checked = true;
		}
	if ((document.getElementById("c5").checked == false) && (document.getElementById("d5").checked == false) && (document.getElementById("e5").checked == false)) {
		document.getElementById("a5").checked = true;
		} else if ((document.getElementById("a5").checked == false) && (document.getElementById("d5").checked == false) && (document.getElementById("e5").checked == false)) {
		document.getElementById("c5").checked = true;
		} else if ((document.getElementById("a5").checked == false) && (document.getElementById("c5").checked == false) && (document.getElementById("e5").checked == false)) {
		document.getElementById("d5").checked = true;
		} else if ((document.getElementById("a5").checked == false) && (document.getElementById("c5").checked == false) && (document.getElementById("d5").checked == false)) {
		document.getElementById("e5").checked = true;
		}
	if ((document.getElementById("a2").checked == false) && (document.getElementById("a3").checked == false) && (document.getElementById("a5").checked == false)) {
		document.getElementById("a1").checked = true;
		} else if ((document.getElementById("c2").checked == false) && (document.getElementById("c3").checked == false) && (document.getElementById("c5").checked == false)) {
		document.getElementById("c1").checked = true;
		} else if ((document.getElementById("d2").checked == false) && (document.getElementById("d3").checked == false) && (document.getElementById("d5").checked == false)) {
		document.getElementById("d1").checked = true;
		} else if ((document.getElementById("e2").checked == false) && (document.getElementById("e3").checked == false) && (document.getElementById("e5").checked == false)) {
		document.getElementById("e1").checked = true;
		} 
	// check row 3
	if ((document.getElementById("a1").checked == false) && (document.getElementById("a3").checked == false) && (document.getElementById("a5").checked == false)) {
		document.getElementById("a2").checked = true;
		} else if ((document.getElementById("c1").checked == false) && (document.getElementById("c3").checked == false) && (document.getElementById("c5").checked == false)) {
		document.getElementById("c2").checked = true;
		} else if ((document.getElementById("d1").checked == false) && (document.getElementById("d3").checked == false) && (document.getElementById("d5").checked == false)) {
		document.getElementById("d2").checked = true;
		} else if ((document.getElementById("e1").checked == false) && (document.getElementById("e3").checked == false) && (document.getElementById("e5").checked == false)) {
		document.getElementById("e2").checked = true;
		}
	//check row 4
	if ((document.getElementById("a1").checked == false) && (document.getElementById("a2").checked == false) && (document.getElementById("a5").checked == false)) {
		document.getElementById("a3").checked = true;
		} else if ((document.getElementById("c1").checked == false) && (document.getElementById("c2").checked == false) && (document.getElementById("c5").checked == false)) {
		document.getElementById("c3").checked = true;
		} else if ((document.getElementById("d1").checked == false) && (document.getElementById("d2").checked == false) && (document.getElementById("d5").checked == false)) {
		document.getElementById("d3").checked = true;
		} else if ((document.getElementById("e1").checked == false) && (document.getElementById("e2").checked == false) && (document.getElementById("e5").checked == false)) {
		document.getElementById("e4").checked = true;
		}		
	// check row 5
	if ((document.getElementById("a1").checked == false) && (document.getElementById("a2").checked == false) && (document.getElementById("a3").checked == false)) {
		document.getElementById("a5").checked = true;
		} else if ((document.getElementById("c1").checked == false) && (document.getElementById("c2").checked == false) && (document.getElementById("c3").checked == false)) {
		document.getElementById("c5").checked = true;
		} else if ((document.getElementById("d1").checked == false) && (document.getElementById("d2").checked == false) && (document.getElementById("d3").checked == false)) {
		document.getElementById("d5").checked = true;
		} else if ((document.getElementById("e1").checked == false) && (document.getElementById("e2").checked == false) && (document.getElementById("e3").checked == false)) {
		document.getElementById("e5").checked = true;
		}		
}
function uncheck_move_b5() {
	// clear the rest of this row
	document.getElementById("a5").checked = false;
	document.getElementById("c5").checked = false;
	document.getElementById("d5").checked = false;
	document.getElementById("e5").checked = false;
	
	if ((document.getElementById("c1").checked == false) && (document.getElementById("d1").checked == false) && (document.getElementById("e1").checked == false)) {
		document.getElementById("a1").checked = true;	
		} else if ((document.getElementById("a1").checked == false) && (document.getElementById("d1").checked == false) && (document.getElementById("e1").checked == false)) {
		document.getElementById("c1").checked = true;
		} else if ((document.getElementById("a1").checked == false) && (document.getElementById("c1").checked == false) && (document.getElementById("e1").checked == false)) {
		document.getElementById("d1").checked = true;
		} else if ((document.getElementById("a1").checked == false) && (document.getElementById("c1").checked == false) && (document.getElementById("d1").checked == false)) {
		document.getElementById("e1").checked = true;
		}
	if ((document.getElementById("c2").checked == false) && (document.getElementById("d2").checked == false) && (document.getElementById("e2").checked == false)) {
		document.getElementById("a2").checked = true;
		} else if ((document.getElementById("a2").checked == false) && (document.getElementById("d2").checked == false) && (document.getElementById("e2").checked == false)) {
		document.getElementById("c2").checked = true;
		} else if ((document.getElementById("a2").checked == false) && (document.getElementById("c2").checked == false) && (document.getElementById("e2").checked == false)) {
		document.getElementById("d2").checked = true;
		} else if ((document.getElementById("a2").checked == false) && (document.getElementById("c2").checked == false) && (document.getElementById("d2").checked == false)) {
		document.getElementById("e2").checked = true;
		}		
	if ((document.getElementById("c3").checked == false) && (document.getElementById("d3").checked == false) && (document.getElementById("e3").checked == false)) {
		document.getElementById("a3").checked = true;
		} else if ((document.getElementById("a3").checked == false) && (document.getElementById("d3").checked == false) && (document.getElementById("e3").checked == false)) {
		document.getElementById("c3").checked = true;
		} else if ((document.getElementById("a3").checked == false) && (document.getElementById("c3").checked == false) && (document.getElementById("e3").checked == false)) {
		document.getElementById("d3").checked = true;
		} else if ((document.getElementById("a3").checked == false) && (document.getElementById("c3").checked == false) && (document.getElementById("d3").checked == false)) {
		document.getElementById("e3").checked = true;
		}
	if ((document.getElementById("c4").checked == false) && (document.getElementById("d4").checked == false) && (document.getElementById("e4").checked == false)) {
		document.getElementById("a4").checked = true;
		} else if ((document.getElementById("a4").checked == false) && (document.getElementById("d4").checked == false) && (document.getElementById("e4").checked == false)) {
		document.getElementById("c4").checked = true;
		} else if ((document.getElementById("a4").checked == false) && (document.getElementById("c4").checked == false) && (document.getElementById("e4").checked == false)) {
		document.getElementById("d4").checked = true;
		} else if ((document.getElementById("a4").checked == false) && (document.getElementById("c4").checked == false) && (document.getElementById("d4").checked == false)) {
		document.getElementById("e4").checked = true;
		}
	if ((document.getElementById("a2").checked == false) && (document.getElementById("a3").checked == false) && (document.getElementById("a4").checked == false)) {
		document.getElementById("a1").checked = true;
		} else if ((document.getElementById("c2").checked == false) && (document.getElementById("c3").checked == false) && (document.getElementById("c4").checked == false)) {
		document.getElementById("c1").checked = true;
		} else if ((document.getElementById("d2").checked == false) && (document.getElementById("d3").checked == false) && (document.getElementById("d4").checked == false)) {
		document.getElementById("d1").checked = true;
		} else if ((document.getElementById("e2").checked == false) && (document.getElementById("e3").checked == false) && (document.getElementById("e4").checked == false)) {
		document.getElementById("e1").checked = true;
		} 
	// check row 3
	if ((document.getElementById("a1").checked == false) && (document.getElementById("a3").checked == false) && (document.getElementById("a4").checked == false)) {
		document.getElementById("a2").checked = true;
		} else if ((document.getElementById("c1").checked == false) && (document.getElementById("c3").checked == false) && (document.getElementById("c4").checked == false)) {
		document.getElementById("c2").checked = true;
		} else if ((document.getElementById("d1").checked == false) && (document.getElementById("d3").checked == false) && (document.getElementById("d4").checked == false)) {
		document.getElementById("d2").checked = true;
		} else if ((document.getElementById("e1").checked == false) && (document.getElementById("e3").checked == false) && (document.getElementById("e4").checked == false)) {
		document.getElementById("e2").checked = true;
		}
	//check row 4
	if ((document.getElementById("a1").checked == false) && (document.getElementById("a2").checked == false) && (document.getElementById("a4").checked == false)) {
		document.getElementById("a3").checked = true;
		} else if ((document.getElementById("c1").checked == false) && (document.getElementById("c2").checked == false) && (document.getElementById("c4").checked == false)) {
		document.getElementById("c3").checked = true;
		} else if ((document.getElementById("d1").checked == false) && (document.getElementById("d2").checked == false) && (document.getElementById("d4").checked == false)) {
		document.getElementById("d3").checked = true;
		} else if ((document.getElementById("e1").checked == false) && (document.getElementById("e2").checked == false) && (document.getElementById("e4").checked == false)) {
		document.getElementById("e3").checked = true;
		}		
	// check row 5
	if ((document.getElementById("a1").checked == false) && (document.getElementById("a2").checked == false) && (document.getElementById("a3").checked == false)) {
		document.getElementById("a4").checked = true;
		} else if ((document.getElementById("c1").checked == false) && (document.getElementById("c2").checked == false) && (document.getElementById("c3").checked == false)) {
		document.getElementById("c4").checked = true;
		} else if ((document.getElementById("d1").checked == false) && (document.getElementById("d2").checked == false) && (document.getElementById("d3").checked == false)) {
		document.getElementById("d4").checked = true;
		} else if ((document.getElementById("e1").checked == false) && (document.getElementById("e2").checked == false) && (document.getElementById("e3").checked == false)) {
		document.getElementById("e4").checked = true;
		}		
}
function uncheck_move_c1() {
	// clear the rest of this row
	document.getElementById("a1").checked = false;
	document.getElementById("b1").checked = false;
	document.getElementById("d1").checked = false;
	document.getElementById("e1").checked = false;
	
	if ((document.getElementById("b2").checked == false) && (document.getElementById("d2").checked == false) && (document.getElementById("e2").checked == false)) {
		document.getElementById("a2").checked = true;	
		} else if ((document.getElementById("a2").checked == false) && (document.getElementById("d2").checked == false) && (document.getElementById("e2").checked == false)) {
		document.getElementById("b2").checked = true;
		} else if ((document.getElementById("a2").checked == false) && (document.getElementById("b2").checked == false) && (document.getElementById("e2").checked == false)) {
		document.getElementById("d2").checked = true;
		} else if ((document.getElementById("a2").checked == false) && (document.getElementById("b2").checked == false) && (document.getElementById("d2").checked == false)) {
		document.getElementById("e2").checked = true;
		}
	if ((document.getElementById("b3").checked == false) && (document.getElementById("d3").checked == false) && (document.getElementById("e3").checked == false)) {
		document.getElementById("a3").checked = true;
		} else if ((document.getElementById("a3").checked == false) && (document.getElementById("d3").checked == false) && (document.getElementById("e3").checked == false)) {
		document.getElementById("b3").checked = true;
		} else if ((document.getElementById("a3").checked == false) && (document.getElementById("b3").checked == false) && (document.getElementById("e3").checked == false)) {
		document.getElementById("d3").checked = true;
		} else if ((document.getElementById("a3").checked == false) && (document.getElementById("b3").checked == false) && (document.getElementById("d3").checked == false)) {
		document.getElementById("e3").checked = true;
		}		
	if ((document.getElementById("b4").checked == false) && (document.getElementById("d4").checked == false) && (document.getElementById("e4").checked == false)) {
		document.getElementById("a4").checked = true;
		} else if ((document.getElementById("a4").checked == false) && (document.getElementById("d4").checked == false) && (document.getElementById("e4").checked == false)) {
		document.getElementById("b4").checked = true;
		} else if ((document.getElementById("a4").checked == false) && (document.getElementById("b4").checked == false) && (document.getElementById("e4").checked == false)) {
		document.getElementById("d4").checked = true;
		} else if ((document.getElementById("a4").checked == false) && (document.getElementById("b4").checked == false) && (document.getElementById("d4").checked == false)) {
		document.getElementById("e4").checked = true;
		}
	if ((document.getElementById("b5").checked == false) && (document.getElementById("d5").checked == false) && (document.getElementById("e5").checked == false)) {
		document.getElementById("a5").checked = true;
		} else if ((document.getElementById("a5").checked == false) && (document.getElementById("d5").checked == false) && (document.getElementById("e5").checked == false)) {
		document.getElementById("b5").checked = true;
		} else if ((document.getElementById("a5").checked == false) && (document.getElementById("b5").checked == false) && (document.getElementById("e5").checked == false)) {
		document.getElementById("d5").checked = true;
		} else if ((document.getElementById("a5").checked == false) && (document.getElementById("b5").checked == false) && (document.getElementById("d5").checked == false)) {
		document.getElementById("e5").checked = true;
		}
	if ((document.getElementById("a3").checked == false) && (document.getElementById("a4").checked == false) && (document.getElementById("a5").checked == false)) {
		document.getElementById("a2").checked = true;
		} else if ((document.getElementById("b3").checked == false) && (document.getElementById("b4").checked == false) && (document.getElementById("b5").checked == false)) {
		document.getElementById("b2").checked = true;
		} else if ((document.getElementById("d3").checked == false) && (document.getElementById("d4").checked == false) && (document.getElementById("d5").checked == false)) {
		document.getElementById("d2").checked = true;
		} else if ((document.getElementById("e3").checked == false) && (document.getElementById("e4").checked == false) && (document.getElementById("e5").checked == false)) {
		document.getElementById("e2").checked = true;
		} 
	// check row 3
	if ((document.getElementById("a2").checked == false) && (document.getElementById("a4").checked == false) && (document.getElementById("a5").checked == false)) {
		document.getElementById("a3").checked = true;
		} else if ((document.getElementById("b2").checked == false) && (document.getElementById("b4").checked == false) && (document.getElementById("b5").checked == false)) {
		document.getElementById("c3").checked = true;
		} else if ((document.getElementById("d2").checked == false) && (document.getElementById("d4").checked == false) && (document.getElementById("d5").checked == false)) {
		document.getElementById("d3").checked = true;
		} else if ((document.getElementById("e2").checked == false) && (document.getElementById("e4").checked == false) && (document.getElementById("e5").checked == false)) {
		document.getElementById("e3").checked = true;
		}
	//check row 4
	if ((document.getElementById("a2").checked == false) && (document.getElementById("a3").checked == false) && (document.getElementById("a5").checked == false)) {
		document.getElementById("a4").checked = true;
		} else if ((document.getElementById("b2").checked == false) && (document.getElementById("b3").checked == false) && (document.getElementById("b5").checked == false)) {
		document.getElementById("b4").checked = true;
		} else if ((document.getElementById("d2").checked == false) && (document.getElementById("d3").checked == false) && (document.getElementById("d5").checked == false)) {
		document.getElementById("d4").checked = true;
		} else if ((document.getElementById("e2").checked == false) && (document.getElementById("e3").checked == false) && (document.getElementById("e5").checked == false)) {
		document.getElementById("e4").checked = true;
		}
	// check row 5
	if ((document.getElementById("a2").checked == false) && (document.getElementById("a3").checked == false) && (document.getElementById("a4").checked == false)) {
		document.getElementById("a5").checked = true;
		} else if ((document.getElementById("b2").checked == false) && (document.getElementById("b3").checked == false) && (document.getElementById("b4").checked == false)) {
		document.getElementById("b5").checked = true;
		} else if ((document.getElementById("d2").checked == false) && (document.getElementById("d3").checked == false) && (document.getElementById("d4").checked == false)) {
		document.getElementById("d5").checked = true;
		} else if ((document.getElementById("e2").checked == false) && (document.getElementById("e3").checked == false) && (document.getElementById("e4").checked == false)) {
		document.getElementById("e5").checked = true;
		}		
}
function uncheck_move_c2() {
	// clear the rest of this row
	document.getElementById("a2").checked = false;
	document.getElementById("b2").checked = false;
	document.getElementById("d2").checked = false;
	document.getElementById("e2").checked = false;
	
	if ((document.getElementById("b1").checked == false) && (document.getElementById("d1").checked == false) && (document.getElementById("e1").checked == false)) {
		document.getElementById("a1").checked = checked;	
		} else if ((document.getElementById("a1").checked == false) && (document.getElementById("d1").checked == false) && (document.getElementById("e1").checked == false)) {
		document.getElementById("b1").checked = checked;
		} else if ((document.getElementById("a1").checked == false) && (document.getElementById("b1").checked == false) && (document.getElementById("e1").checked == false)) {
		document.getElementById("d1").checked = checked;
		} else if ((document.getElementById("a1").checked == false) && (document.getElementById("b1").checked == false) && (document.getElementById("d1").checked == false)) {
		document.getElementById("e1").checked = checked;
		}
	if ((document.getElementById("b3").checked == false) && (document.getElementById("d3").checked == false) && (document.getElementById("e3").checked == false)) {
		document.getElementById("a3").checked = true;
		} else if ((document.getElementById("a3").checked == false) && (document.getElementById("d3").checked == false) && (document.getElementById("e3").checked == false)) {
		document.getElementById("b3").checked = true;
		} else if ((document.getElementById("a3").checked == false) && (document.getElementById("b3").checked == false) && (document.getElementById("e3").checked == false)) {
		document.getElementById("d3").checked = true;
		} else if ((document.getElementById("a3").checked == false) && (document.getElementById("b3").checked == false) && (document.getElementById("d3").checked == false)) {
		document.getElementById("e3").checked = true;
		}		
	if ((document.getElementById("b4").checked == false) && (document.getElementById("d4").checked == false) && (document.getElementById("e4").checked == false)) {
		document.getElementById("a4").checked = true;
		} else if ((document.getElementById("a4").checked == false) && (document.getElementById("d4").checked == false) && (document.getElementById("e4").checked == false)) {
		document.getElementById("b4").checked = true;
		} else if ((document.getElementById("a4").checked == false) && (document.getElementById("b4").checked == false) && (document.getElementById("e4").checked == false)) {
		document.getElementById("d4").checked = true;
		} else if ((document.getElementById("a4").checked == false) && (document.getElementById("b4").checked == false) && (document.getElementById("d4").checked == false)) {
		document.getElementById("e4").checked = true;
		}
	if ((document.getElementById("b5").checked == false) && (document.getElementById("d5").checked == false) && (document.getElementById("e5").checked == false)) {
		document.getElementById("a5").checked = true;
		} else if ((document.getElementById("a5").checked == false) && (document.getElementById("d5").checked == false) && (document.getElementById("e5").checked == false)) {
		document.getElementById("b5").checked = true;
		} else if ((document.getElementById("a5").checked == false) && (document.getElementById("b5").checked == false) && (document.getElementById("e5").checked == false)) {
		document.getElementById("d5").checked = true;
		} else if ((document.getElementById("a5").checked == false) && (document.getElementById("b5").checked == false) && (document.getElementById("d5").checked == false)) {
		document.getElementById("e5").checked = true;
		}
	if ((document.getElementById("a3").checked == false) && (document.getElementById("a4").checked == false) && (document.getElementById("a5").checked == false)) {
		document.getElementById("a1").checked = true;
		} else if ((document.getElementById("b3").checked == false) && (document.getElementById("b4").checked == false) && (document.getElementById("b5").checked == false)) {
		document.getElementById("b1").checked = true;
		} else if ((document.getElementById("d3").checked == false) && (document.getElementById("d4").checked == false) && (document.getElementById("d5").checked == false)) {
		document.getElementById("d1").checked = true;
		} else if ((document.getElementById("e3").checked == false) && (document.getElementById("e4").checked == false) && (document.getElementById("e5").checked == false)) {
		document.getElementById("e1").checked = true;
		} 
	// check row 3
	if ((document.getElementById("a1").checked == false) && (document.getElementById("a4").checked == false) && (document.getElementById("a5").checked == false)) {
		document.getElementById("a3").checked = true;
		} else if ((document.getElementById("b1").checked == false) && (document.getElementById("b4").checked == false) && (document.getElementById("b5").checked == false)) {
		document.getElementById("b3").checked = true;
		} else if ((document.getElementById("d1").checked == false) && (document.getElementById("d4").checked == false) && (document.getElementById("d5").checked == false)) {
		document.getElementById("d3").checked = true;
		} else if ((document.getElementById("e1").checked == false) && (document.getElementById("e4").checked == false) && (document.getElementById("e5").checked == false)) {
		document.getElementById("e3").checked = true;
		}
	//check row 4
	if ((document.getElementById("a1").checked == false) && (document.getElementById("a3").checked == false) && (document.getElementById("a5").checked == false)) {
		document.getElementById("a4").checked = true;
		} else if ((document.getElementById("b1").checked == false) && (document.getElementById("b3").checked == false) && (document.getElementById("b5").checked == false)) {
		document.getElementById("b4").checked = true;
		} else if ((document.getElementById("d1").checked == false) && (document.getElementById("d3").checked == false) && (document.getElementById("d5").checked == false)) {
		document.getElementById("d4").checked = true;
		} else if ((document.getElementById("e1").checked == false) && (document.getElementById("e3").checked == false) && (document.getElementById("e5").checked == false)) {
		document.getElementById("e4").checked = true;
		}		
	// check row 5
	if ((document.getElementById("a1").checked == false) && (document.getElementById("a3").checked == false) && (document.getElementById("a4").checked == false)) {
		document.getElementById("a5").checked = true;
		} else if ((document.getElementById("b1").checked == false) && (document.getElementById("b3").checked == false) && (document.getElementById("b4").checked == false)) {
		document.getElementById("b5").checked = true;
		} else if ((document.getElementById("d1").checked == false) && (document.getElementById("d3").checked == false) && (document.getElementById("d4").checked == false)) {
		document.getElementById("d5").checked = true;
		} else if ((document.getElementById("e1").checked == false) && (document.getElementById("e3").checked == false) && (document.getElementById("e4").checked == false)) {
		document.getElementById("e5").checked = true;
		}		
}
function uncheck_move_c3() {
	// clear the rest of this row
	document.getElementById("a3").checked = false;
	document.getElementById("b3").checked = false;
	document.getElementById("d3").checked = false;
	document.getElementById("e3").checked = false;
	
	if ((document.getElementById("b1").checked == false) && (document.getElementById("d1").checked == false) && (document.getElementById("e1").checked == false)) {
		document.getElementById("a1").checked = true;	
		} else if ((document.getElementById("a1").checked == false) && (document.getElementById("d1").checked == false) && (document.getElementById("e1").checked == false)) {
		document.getElementById("b1").checked = true;
		} else if ((document.getElementById("a1").checked == false) && (document.getElementById("b1").checked == false) && (document.getElementById("e1").checked == false)) {
		document.getElementById("d1").checked = true;
		} else if ((document.getElementById("a1").checked == false) && (document.getElementById("b1").checked == false) && (document.getElementById("d1").checked == false)) {
		document.getElementById("e1").checked = true;
		}
	if ((document.getElementById("b2").checked == false) && (document.getElementById("d2").checked == false) && (document.getElementById("e2").checked == false)) {
		document.getElementById("a2").checked = true;
		} else if ((document.getElementById("a2").checked == false) && (document.getElementById("d2").checked == false) && (document.getElementById("e2").checked == false)) {
		document.getElementById("b2").checked = true;
		} else if ((document.getElementById("a2").checked == false) && (document.getElementById("b2").checked == false) && (document.getElementById("e2").checked == false)) {
		document.getElementById("d2").checked = true;
		} else if ((document.getElementById("a2").checked == false) && (document.getElementById("b2").checked == false) && (document.getElementById("d2").checked == false)) {
		document.getElementById("e2").checked = true;
		}		
	if ((document.getElementById("b4").checked == false) && (document.getElementById("d4").checked == false) && (document.getElementById("e4").checked == false)) {
		document.getElementById("a4").checked = true;
		} else if ((document.getElementById("a4").checked == false) && (document.getElementById("d4").checked == false) && (document.getElementById("e4").checked == false)) {
		document.getElementById("b4").checked = true;
		} else if ((document.getElementById("a4").checked == false) && (document.getElementById("b4").checked == false) && (document.getElementById("e4").checked == false)) {
		document.getElementById("d4").checked = true;
		} else if ((document.getElementById("a4").checked == false) && (document.getElementById("b4").checked == false) && (document.getElementById("d4").checked == false)) {
		document.getElementById("e4").checked = true;
		}
	if ((document.getElementById("b5").checked == false) && (document.getElementById("d5").checked == false) && (document.getElementById("e5").checked == false)) {
		document.getElementById("a5").checked = true;
		} else if ((document.getElementById("a5").checked == false) && (document.getElementById("d5").checked == false) && (document.getElementById("e5").checked == false)) {
		document.getElementById("b5").checked = true;
		} else if ((document.getElementById("a5").checked == false) && (document.getElementById("b5").checked == false) && (document.getElementById("e5").checked == false)) {
		document.getElementById("d5").checked = true;
		} else if ((document.getElementById("a5").checked == false) && (document.getElementById("b5").checked == false) && (document.getElementById("d5").checked == false)) {
		document.getElementById("e5").checked = true;
		}
	if ((document.getElementById("a2").checked == false) && (document.getElementById("a4").checked == false) && (document.getElementById("a5").checked == false)) {
		document.getElementById("a1").checked = true;
		} else if ((document.getElementById("b2").checked == false) && (document.getElementById("b4").checked == false) && (document.getElementById("b5").checked == false)) {
		document.getElementById("b1").checked = true;
		} else if ((document.getElementById("d2").checked == false) && (document.getElementById("d4").checked == false) && (document.getElementById("d5").checked == false)) {
		document.getElementById("d1").checked = true;
		} else if ((document.getElementById("e2").checked == false) && (document.getElementById("e4").checked == false) && (document.getElementById("e5").checked == false)) {
		document.getElementById("e1").checked = true;
		} 
	// check row 3
	if ((document.getElementById("a1").checked == false) && (document.getElementById("a4").checked == false) && (document.getElementById("a5").checked == false)) {
		document.getElementById("a2").checked = true;
		} else if ((document.getElementById("b1").checked == false) && (document.getElementById("b4").checked == false) && (document.getElementById("b5").checked == false)) {
		document.getElementById("b2").checked = true;
		} else if ((document.getElementById("d1").checked == false) && (document.getElementById("d4").checked == false) && (document.getElementById("d5").checked == false)) {
		document.getElementById("d2").checked = true;
		} else if ((document.getElementById("e1").checked == false) && (document.getElementById("e4").checked == false) && (document.getElementById("e5").checked == false)) {
		document.getElementById("e2").checked = true;
		}
	//check row 4
	if ((document.getElementById("a1").checked == false) && (document.getElementById("a2").checked == false) && (document.getElementById("a5").checked == false)) {
		document.getElementById("a4").checked = true;
		} else if ((document.getElementById("b1").checked == false) && (document.getElementById("b2").checked == false) && (document.getElementById("b5").checked == false)) {
		document.getElementById("b4").checked = true;
		} else if ((document.getElementById("d1").checked == false) && (document.getElementById("d2").checked == false) && (document.getElementById("d5").checked == false)) {
		document.getElementById("d4").checked = true;
		} else if ((document.getElementById("e1").checked == false) && (document.getElementById("e2").checked == false) && (document.getElementById("e5").checked == false)) {
		document.getElementById("e4").checked = true;
		}		
	// check row 5
	if ((document.getElementById("a1").checked == false) && (document.getElementById("a2").checked == false) && (document.getElementById("a4").checked == false)) {
		document.getElementById("a5").checked = true;
		} else if ((document.getElementById("b1").checked == false) && (document.getElementById("b2").checked == false) && (document.getElementById("b4").checked == false)) {
		document.getElementById("b5").checked = true;
		} else if ((document.getElementById("d1").checked == false) && (document.getElementById("d2").checked == false) && (document.getElementById("d4").checked == false)) {
		document.getElementById("d5").checked = true;
		} else if ((document.getElementById("e1").checked == false) && (document.getElementById("e2").checked == false) && (document.getElementById("e4").checked == false)) {
		document.getElementById("e5").checked = true;
		}		
}
function uncheck_move_c4() {
	// clear the rest of this row
	document.getElementById("a4").checked = false;
	document.getElementById("b4").checked = false;
	document.getElementById("d4").checked = false;
	document.getElementById("e4").checked = false;
	
	if ((document.getElementById("b1").checked == false) && (document.getElementById("d1").checked == false) && (document.getElementById("e1").checked == false)) {
		document.getElementById("a1").checked = true;	
		} else if ((document.getElementById("a1").checked == false) && (document.getElementById("d1").checked == false) && (document.getElementById("e1").checked == false)) {
		document.getElementById("b1").checked = true;
		} else if ((document.getElementById("a1").checked == false) && (document.getElementById("b1").checked == false) && (document.getElementById("e1").checked == false)) {
		document.getElementById("d1").checked = true;
		} else if ((document.getElementById("a1").checked == false) && (document.getElementById("b1").checked == false) && (document.getElementById("d1").checked == false)) {
		document.getElementById("e1").checked = true;
		}
	if ((document.getElementById("b2").checked == false) && (document.getElementById("d2").checked == false) && (document.getElementById("e2").checked == false)) {
		document.getElementById("a2").checked = true;
		} else if ((document.getElementById("a2").checked == false) && (document.getElementById("d2").checked == false) && (document.getElementById("e2").checked == false)) {
		document.getElementById("b2").checked = true;
		} else if ((document.getElementById("a2").checked == false) && (document.getElementById("b2").checked == false) && (document.getElementById("e2").checked == false)) {
		document.getElementById("d2").checked = true;
		} else if ((document.getElementById("a2").checked == false) && (document.getElementById("b2").checked == false) && (document.getElementById("d2").checked == false)) {
		document.getElementById("e2").checked = true;
		}		
	if ((document.getElementById("b3").checked == false) && (document.getElementById("d3").checked == false) && (document.getElementById("e3").checked == false)) {
		document.getElementById("a3").checked = true;
		} else if ((document.getElementById("a3").checked == false) && (document.getElementById("d3").checked == false) && (document.getElementById("e3").checked == false)) {
		document.getElementById("b3").checked = true;
		} else if ((document.getElementById("a3").checked == false) && (document.getElementById("b3").checked == false) && (document.getElementById("e3").checked == false)) {
		document.getElementById("d3").checked = true;
		} else if ((document.getElementById("a3").checked == false) && (document.getElementById("b3").checked == false) && (document.getElementById("d3").checked == false)) {
		document.getElementById("e3").checked = true;
		}
	if ((document.getElementById("b5").checked == false) && (document.getElementById("d5").checked == false) && (document.getElementById("e5").checked == false)) {
		document.getElementById("a5").checked = true;
		} else if ((document.getElementById("a5").checked == false) && (document.getElementById("d5").checked == false) && (document.getElementById("e5").checked == false)) {
		document.getElementById("b5").checked = true;
		} else if ((document.getElementById("a5").checked == false) && (document.getElementById("b5").checked == false) && (document.getElementById("e5").checked == false)) {
		document.getElementById("d5").checked = true;
		} else if ((document.getElementById("a5").checked == false) && (document.getElementById("b5").checked == false) && (document.getElementById("d5").checked == false)) {
		document.getElementById("e5").checked = true;
		}
	if ((document.getElementById("a2").checked == false) && (document.getElementById("a3").checked == false) && (document.getElementById("a5").checked == false)) {
		document.getElementById("a1").checked = true;
		} else if ((document.getElementById("b2").checked == false) && (document.getElementById("b3").checked == false) && (document.getElementById("b5").checked == false)) {
		document.getElementById("b1").checked = true;
		} else if ((document.getElementById("d2").checked == false) && (document.getElementById("d3").checked == false) && (document.getElementById("d5").checked == false)) {
		document.getElementById("d1").checked = true;
		} else if ((document.getElementById("e2").checked == false) && (document.getElementById("e3").checked == false) && (document.getElementById("e5").checked == false)) {
		document.getElementById("e1").checked = true;
		} 
	// check row 3
	if ((document.getElementById("a1").checked == false) && (document.getElementById("a3").checked == false) && (document.getElementById("a5").checked == false)) {
		document.getElementById("a2").checked = true;
		} else if ((document.getElementById("b1").checked == false) && (document.getElementById("b3").checked == false) && (document.getElementById("b5").checked == false)) {
		document.getElementById("b2").checked = true;
		} else if ((document.getElementById("d1").checked == false) && (document.getElementById("d3").checked == false) && (document.getElementById("d5").checked == false)) {
		document.getElementById("d2").checked = true;
		} else if ((document.getElementById("e1").checked == false) && (document.getElementById("e3").checked == false) && (document.getElementById("e5").checked == false)) {
		document.getElementById("e2").checked = true;
		}
	//check row 4
	if ((document.getElementById("a1").checked == false) && (document.getElementById("a2").checked == false) && (document.getElementById("a5").checked == false)) {
		document.getElementById("a3").checked = true;
		} else if ((document.getElementById("b1").checked == false) && (document.getElementById("b2").checked == false) && (document.getElementById("b5").checked == false)) {
		document.getElementById("b3").checked = true;
		} else if ((document.getElementById("d1").checked == false) && (document.getElementById("d2").checked == false) && (document.getElementById("d5").checked == false)) {
		document.getElementById("d3").checked = true;
		} else if ((document.getElementById("e1").checked == false) && (document.getElementById("e2").checked == false) && (document.getElementById("e5").checked == false)) {
		document.getElementById("e4").checked = true;
		}		
	// check row 5
	if ((document.getElementById("a1").checked == false) && (document.getElementById("a2").checked == false) && (document.getElementById("a3").checked == false)) {
		document.getElementById("a5").checked = true;
		} else if ((document.getElementById("b1").checked == false) && (document.getElementById("b2").checked == false) && (document.getElementById("b3").checked == false)) {
		document.getElementById("b5").checked = true;
		} else if ((document.getElementById("d1").checked == false) && (document.getElementById("d2").checked == false) && (document.getElementById("d3").checked == false)) {
		document.getElementById("d5").checked = true;
		} else if ((document.getElementById("e1").checked == false) && (document.getElementById("e2").checked == false) && (document.getElementById("e3").checked == false)) {
		document.getElementById("e5").checked = true;
		}		
}
function uncheck_move_c5() {
	// clear the rest of this row
	document.getElementById("a5").checked = false;
	document.getElementById("b5").checked = false;
	document.getElementById("d5").checked = false;
	document.getElementById("e5").checked = false;
	
	if ((document.getElementById("b1").checked == false) && (document.getElementById("d1").checked == false) && (document.getElementById("e1").checked == false)) {
		document.getElementById("a1").checked = true;	
		} else if ((document.getElementById("a1").checked == false) && (document.getElementById("d1").checked == false) && (document.getElementById("e1").checked == false)) {
		document.getElementById("b1").checked = true;
		} else if ((document.getElementById("a1").checked == false) && (document.getElementById("b1").checked == false) && (document.getElementById("e1").checked == false)) {
		document.getElementById("d1").checked = true;
		} else if ((document.getElementById("a1").checked == false) && (document.getElementById("b1").checked == false) && (document.getElementById("d1").checked == false)) {
		document.getElementById("e1").checked = true;
		}
	if ((document.getElementById("b2").checked == false) && (document.getElementById("d2").checked == false) && (document.getElementById("e2").checked == false)) {
		document.getElementById("a2").checked = true;
		} else if ((document.getElementById("a2").checked == false) && (document.getElementById("d2").checked == false) && (document.getElementById("e2").checked == false)) {
		document.getElementById("b2").checked = true;
		} else if ((document.getElementById("a2").checked == false) && (document.getElementById("b2").checked == false) && (document.getElementById("e2").checked == false)) {
		document.getElementById("d2").checked = true;
		} else if ((document.getElementById("a2").checked == false) && (document.getElementById("b2").checked == false) && (document.getElementById("d2").checked == false)) {
		document.getElementById("e2").checked = true;
		}		
	if ((document.getElementById("b3").checked == false) && (document.getElementById("d3").checked == false) && (document.getElementById("e3").checked == false)) {
		document.getElementById("a3").checked = true;
		} else if ((document.getElementById("a3").checked == false) && (document.getElementById("d3").checked == false) && (document.getElementById("e3").checked == false)) {
		document.getElementById("b3").checked = true;
		} else if ((document.getElementById("a3").checked == false) && (document.getElementById("b3").checked == false) && (document.getElementById("e3").checked == false)) {
		document.getElementById("d3").checked = true;
		} else if ((document.getElementById("a3").checked == false) && (document.getElementById("b3").checked == false) && (document.getElementById("d3").checked == false)) {
		document.getElementById("e3").checked = true;
		}
	if ((document.getElementById("b4").checked == false) && (document.getElementById("d4").checked == false) && (document.getElementById("e4").checked == false)) {
		document.getElementById("a4").checked = true;
		} else if ((document.getElementById("a4").checked == false) && (document.getElementById("d4").checked == false) && (document.getElementById("e4").checked == false)) {
		document.getElementById("b4").checked = true;
		} else if ((document.getElementById("a4").checked == false) && (document.getElementById("b4").checked == false) && (document.getElementById("e4").checked == false)) {
		document.getElementById("d4").checked = true;
		} else if ((document.getElementById("a4").checked == false) && (document.getElementById("b4").checked == false) && (document.getElementById("d4").checked == false)) {
		document.getElementById("e4").checked = true;
		}
	if ((document.getElementById("a2").checked == false) && (document.getElementById("a3").checked == false) && (document.getElementById("a4").checked == false)) {
		document.getElementById("a1").checked = true;
		} else if ((document.getElementById("b2").checked == false) && (document.getElementById("b3").checked == false) && (document.getElementById("b4").checked == false)) {
		document.getElementById("b1").checked = true;
		} else if ((document.getElementById("d2").checked == false) && (document.getElementById("d3").checked == false) && (document.getElementById("d4").checked == false)) {
		document.getElementById("d1").checked = true;
		} else if ((document.getElementById("e2").checked == false) && (document.getElementById("e3").checked == false) && (document.getElementById("e4").checked == false)) {
		document.getElementById("e1").checked = true;
		} 
	// check row 3
	if ((document.getElementById("a1").checked == false) && (document.getElementById("a3").checked == false) && (document.getElementById("a4").checked == false)) {
		document.getElementById("a2").checked = true;
		} else if ((document.getElementById("b1").checked == false) && (document.getElementById("b3").checked == false) && (document.getElementById("b4").checked == false)) {
		document.getElementById("c2").checked = true;
		} else if ((document.getElementById("d1").checked == false) && (document.getElementById("d3").checked == false) && (document.getElementById("d4").checked == false)) {
		document.getElementById("d2").checked = true;
		} else if ((document.getElementById("e1").checked == false) && (document.getElementById("e3").checked == false) && (document.getElementById("e4").checked == false)) {
		document.getElementById("e2").checked = true;
		}
	//check row 4
	if ((document.getElementById("a1").checked == false) && (document.getElementById("a2").checked == false) && (document.getElementById("a4").checked == false)) {
		document.getElementById("a3").checked = true;
		} else if ((document.getElementById("b1").checked == false) && (document.getElementById("b2").checked == false) && (document.getElementById("b4").checked == false)) {
		document.getElementById("b3").checked = true;
		} else if ((document.getElementById("d1").checked == false) && (document.getElementById("d2").checked == false) && (document.getElementById("d4").checked == false)) {
		document.getElementById("d3").checked = true;
		} else if ((document.getElementById("e1").checked == false) && (document.getElementById("e2").checked == false) && (document.getElementById("e4").checked == false)) {
		document.getElementById("e3").checked = true;
		}		
	// check row 5
	if ((document.getElementById("a1").checked == false) && (document.getElementById("a2").checked == false) && (document.getElementById("a3").checked == false)) {
		document.getElementById("a4").checked = true;
		} else if ((document.getElementById("b1").checked == false) && (document.getElementById("b2").checked == false) && (document.getElementById("b3").checked == false)) {
		document.getElementById("b4").checked = true;
		} else if ((document.getElementById("d1").checked == false) && (document.getElementById("d2").checked == false) && (document.getElementById("d3").checked == false)) {
		document.getElementById("d4").checked = true;
		} else if ((document.getElementById("e1").checked == false) && (document.getElementById("e2").checked == false) && (document.getElementById("e3").checked == false)) {
		document.getElementById("e4").checked = true;
		}		
}
function uncheck_move_d1() {
	// clear the rest of this row
	document.getElementById("a1").checked = false;
	document.getElementById("b1").checked = false;
	document.getElementById("c1").checked = false;
	document.getElementById("e1").checked = false;
	
	if ((document.getElementById("b2").checked == false) && (document.getElementById("c2").checked == false) && (document.getElementById("e2").checked == false)) {
		document.getElementById("a2").checked = true;	
		} else if ((document.getElementById("a2").checked == false) && (document.getElementById("c2").checked == false) && (document.getElementById("e2").checked == false)) {
		document.getElementById("b2").checked = true;
		} else if ((document.getElementById("a2").checked == false) && (document.getElementById("b2").checked == false) && (document.getElementById("e2").checked == false)) {
		document.getElementById("c2").checked = true;
		} else if ((document.getElementById("a2").checked == false) && (document.getElementById("b2").checked == false) && (document.getElementById("c2").checked == false)) {
		document.getElementById("e2").checked = true;
		}
	if ((document.getElementById("b3").checked == false) && (document.getElementById("c3").checked == false) && (document.getElementById("e3").checked == false)) {
		document.getElementById("a3").checked = true;
		} else if ((document.getElementById("a3").checked == false) && (document.getElementById("c3").checked == false) && (document.getElementById("e3").checked == false)) {
		document.getElementById("b3").checked = true;
		} else if ((document.getElementById("a3").checked == false) && (document.getElementById("b3").checked == false) && (document.getElementById("e3").checked == false)) {
		document.getElementById("c3").checked = true;
		} else if ((document.getElementById("a3").checked == false) && (document.getElementById("b3").checked == false) && (document.getElementById("c3").checked == false)) {
		document.getElementById("e3").checked = true;
		}		
	if ((document.getElementById("b4").checked == false) && (document.getElementById("c4").checked == false) && (document.getElementById("e4").checked == false)) {
		document.getElementById("a4").checked = true;
		} else if ((document.getElementById("a4").checked == false) && (document.getElementById("c4").checked == false) && (document.getElementById("e4").checked == false)) {
		document.getElementById("b4").checked = true;
		} else if ((document.getElementById("a4").checked == false) && (document.getElementById("b4").checked == false) && (document.getElementById("e4").checked == false)) {
		document.getElementById("c4").checked = true;
		} else if ((document.getElementById("a4").checked == false) && (document.getElementById("b4").checked == false) && (document.getElementById("c4").checked == false)) {
		document.getElementById("e4").checked = true;
		}
	if ((document.getElementById("b5").checked == false) && (document.getElementById("c5").checked == false) && (document.getElementById("e5").checked == false)) {
		document.getElementById("a5").checked = true;
		} else if ((document.getElementById("a5").checked == false) && (document.getElementById("c5").checked == false) && (document.getElementById("e5").checked == false)) {
		document.getElementById("b5").checked = true;
		} else if ((document.getElementById("a5").checked == false) && (document.getElementById("b5").checked == false) && (document.getElementById("e5").checked == false)) {
		document.getElementById("c5").checked = true;
		} else if ((document.getElementById("a5").checked == false) && (document.getElementById("b5").checked == false) && (document.getElementById("c5").checked == false)) {
		document.getElementById("e5").checked = true;
		}
	if ((document.getElementById("a3").checked == false) && (document.getElementById("a4").checked == false) && (document.getElementById("a5").checked == false)) {
		document.getElementById("a2").checked = true;
		} else if ((document.getElementById("b3").checked == false) && (document.getElementById("b4").checked == false) && (document.getElementById("b5").checked == false)) {
		document.getElementById("b2").checked = true;
		} else if ((document.getElementById("c3").checked == false) && (document.getElementById("c4").checked == false) && (document.getElementById("c5").checked == false)) {
		document.getElementById("c2").checked = true;
		} else if ((document.getElementById("e3").checked == false) && (document.getElementById("e4").checked == false) && (document.getElementById("e5").checked == false)) {
		document.getElementById("e2").checked = true;
		} 
	// check row 3
	if ((document.getElementById("a2").checked == false) && (document.getElementById("a4").checked == false) && (document.getElementById("a5").checked == false)) {
		document.getElementById("a3").checked = true;
		} else if ((document.getElementById("b2").checked == false) && (document.getElementById("b4").checked == false) && (document.getElementById("b5").checked == false)) {
		document.getElementById("b3").checked = true;
		} else if ((document.getElementById("c2").checked == false) && (document.getElementById("c4").checked == false) && (document.getElementById("c5").checked == false)) {
		document.getElementById("c3").checked = true;
		} else if ((document.getElementById("e2").checked == false) && (document.getElementById("e4").checked == false) && (document.getElementById("e5").checked == false)) {
		document.getElementById("e3").checked = true;
		}
	//check row 4
	if ((document.getElementById("a2").checked == false) && (document.getElementById("a3").checked == false) && (document.getElementById("a5").checked == false)) {
		document.getElementById("a4").checked = true;
		} else if ((document.getElementById("b2").checked == false) && (document.getElementById("b3").checked == false) && (document.getElementById("b5").checked == false)) {
		document.getElementById("b4").checked = true;
		} else if ((document.getElementById("c2").checked == false) && (document.getElementById("c3").checked == false) && (document.getElementById("c5").checked == false)) {
		document.getElementById("c4").checked = true;
		} else if ((document.getElementById("e2").checked == false) && (document.getElementById("e3").checked == false) && (document.getElementById("e5").checked == false)) {
		document.getElementById("e4").checked = true;
		}
	// check row 5
	if ((document.getElementById("a2").checked == false) && (document.getElementById("a3").checked == false) && (document.getElementById("a4").checked == false)) {
		document.getElementById("a5").checked = true;
		} else if ((document.getElementById("b2").checked == false) && (document.getElementById("b3").checked == false) && (document.getElementById("b4").checked == false)) {
		document.getElementById("b5").checked = true;
		} else if ((document.getElementById("c2").checked == false) && (document.getElementById("c3").checked == false) && (document.getElementById("c4").checked == false)) {
		document.getElementById("c5").checked = true;
		} else if ((document.getElementById("e2").checked == false) && (document.getElementById("e3").checked == false) && (document.getElementById("e4").checked == false)) {
		document.getElementById("e5").checked = true;
		}		
}

function uncheck_move_d2() {
	// clear the rest of this row
	document.getElementById("a2").checked = false;
	document.getElementById("b2").checked = false;
	document.getElementById("c2").checked = false;
	document.getElementById("e2").checked = false;
	
	if ((document.getElementById("b1").checked == false) && (document.getElementById("c1").checked == false) && (document.getElementById("e1").checked == false)) {
		document.getElementById("a1").checked = true;	
		} else if ((document.getElementById("a1").checked == false) && (document.getElementById("c1").checked == false) && (document.getElementById("e1").checked == false)) {
		document.getElementById("b1").checked = true;
		} else if ((document.getElementById("a1").checked == false) && (document.getElementById("b1").checked == false) && (document.getElementById("e1").checked == false)) {
		document.getElementById("c1").checked = true;
		} else if ((document.getElementById("a1").checked == false) && (document.getElementById("b1").checked == false) && (document.getElementById("c1").checked == false)) {
		document.getElementById("e1").checked = true;
		}
	if ((document.getElementById("b3").checked == false) && (document.getElementById("c3").checked == false) && (document.getElementById("e3").checked == false)) {
		document.getElementById("a3").checked = true;
		} else if ((document.getElementById("a3").checked == false) && (document.getElementById("c3").checked == false) && (document.getElementById("e3").checked == false)) {
		document.getElementById("b3").checked = true;
		} else if ((document.getElementById("a3").checked == false) && (document.getElementById("b3").checked == false) && (document.getElementById("e3").checked == false)) {
		document.getElementById("c3").checked = true;
		} else if ((document.getElementById("a3").checked == false) && (document.getElementById("b3").checked == false) && (document.getElementById("c3").checked == false)) {
		document.getElementById("e3").checked = true;
		}		
	if ((document.getElementById("b4").checked == false) && (document.getElementById("c4").checked == false) && (document.getElementById("e4").checked == false)) {
		document.getElementById("a4").checked = true;
		} else if ((document.getElementById("a4").checked == false) && (document.getElementById("c4").checked == false) && (document.getElementById("e4").checked == false)) {
		document.getElementById("b4").checked = true;
		} else if ((document.getElementById("a4").checked == false) && (document.getElementById("b4").checked == false) && (document.getElementById("e4").checked == false)) {
		document.getElementById("c4").checked = true;
		} else if ((document.getElementById("a4").checked == false) && (document.getElementById("b4").checked == false) && (document.getElementById("c4").checked == false)) {
		document.getElementById("e4").checked = true;
		}
	if ((document.getElementById("b5").checked == false) && (document.getElementById("c5").checked == false) && (document.getElementById("e5").checked == false)) {
		document.getElementById("a5").checked = true;
		} else if ((document.getElementById("a5").checked == false) && (document.getElementById("c5").checked == false) && (document.getElementById("e5").checked == false)) {
		document.getElementById("b5").checked = true;
		} else if ((document.getElementById("a5").checked == false) && (document.getElementById("b5").checked == false) && (document.getElementById("e5").checked == false)) {
		document.getElementById("c5").checked = true;
		} else if ((document.getElementById("a5").checked == false) && (document.getElementById("b5").checked == false) && (document.getElementById("c5").checked == false)) {
		document.getElementById("e5").checked = true;
		}
	if ((document.getElementById("a3").checked == false) && (document.getElementById("a4").checked == false) && (document.getElementById("a5").checked == false)) {
		document.getElementById("a1").checked = true;
		} else if ((document.getElementById("b3").checked == false) && (document.getElementById("b4").checked == false) && (document.getElementById("b5").checked == false)) {
		document.getElementById("b1").checked = true;
		} else if ((document.getElementById("c3").checked == false) && (document.getElementById("c4").checked == false) && (document.getElementById("c5").checked == false)) {
		document.getElementById("c1").checked = true;
		} else if ((document.getElementById("e3").checked == false) && (document.getElementById("e4").checked == false) && (document.getElementById("e5").checked == false)) {
		document.getElementById("e1").checked = true;
		} 
	// check row 3
	if ((document.getElementById("a1").checked == false) && (document.getElementById("a4").checked == false) && (document.getElementById("a5").checked == false)) {
		document.getElementById("a3").checked = true;
		} else if ((document.getElementById("b1").checked == false) && (document.getElementById("b4").checked == false) && (document.getElementById("b5").checked == false)) {
		document.getElementById("b3").checked = true;
		} else if ((document.getElementById("c1").checked == false) && (document.getElementById("c4").checked == false) && (document.getElementById("c5").checked == false)) {
		document.getElementById("c3").checked = true;
		} else if ((document.getElementById("e1").checked == false) && (document.getElementById("e4").checked == false) && (document.getElementById("e5").checked == false)) {
		document.getElementById("e3").checked = true;
		}
	//check row 4
	if ((document.getElementById("a1").checked == false) && (document.getElementById("a3").checked == false) && (document.getElementById("a5").checked == false)) {
		document.getElementById("a4").checked = true;
		} else if ((document.getElementById("b1").checked == false) && (document.getElementById("b3").checked == false) && (document.getElementById("b5").checked == false)) {
		document.getElementById("b4").checked = true;
		} else if ((document.getElementById("c1").checked == false) && (document.getElementById("c3").checked == false) && (document.getElementById("c5").checked == false)) {
		document.getElementById("c4").checked = true;
		} else if ((document.getElementById("e1").checked == false) && (document.getElementById("e3").checked == false) && (document.getElementById("e5").checked == false)) {
		document.getElementById("e4").checked = true;
		}		
	// check row 5
	if ((document.getElementById("a1").checked == false) && (document.getElementById("a3").checked == false) && (document.getElementById("a4").checked == false)) {
		document.getElementById("a5").checked = true;
		} else if ((document.getElementById("b1").checked == false) && (document.getElementById("b3").checked == false) && (document.getElementById("b4").checked == false)) {
		document.getElementById("b5").checked = true;
		} else if ((document.getElementById("c1").checked == false) && (document.getElementById("c3").checked == false) && (document.getElementById("c4").checked == false)) {
		document.getElementById("c5").checked = true;
		} else if ((document.getElementById("e1").checked == false) && (document.getElementById("e3").checked == false) && (document.getElementById("e4").checked == false)) {
		document.getElementById("e5").checked = true;
		}		
}
function uncheck_move_d3() {
	// clear the rest of this row
	document.getElementById("a3").checked = false;
	document.getElementById("b3").checked = false;
	document.getElementById("c3").checked = false;
	document.getElementById("e3").checked = false;
	
	if ((document.getElementById("b1").checked == false) && (document.getElementById("c1").checked == false) && (document.getElementById("e1").checked == false)) {
		document.getElementById("a1").checked = true;	
		} else if ((document.getElementById("a1").checked == false) && (document.getElementById("c1").checked == false) && (document.getElementById("e1").checked == false)) {
		document.getElementById("b1").checked = true;
		} else if ((document.getElementById("a1").checked == false) && (document.getElementById("b1").checked == false) && (document.getElementById("e1").checked == false)) {
		document.getElementById("c1").checked = true;
		} else if ((document.getElementById("a1").checked == false) && (document.getElementById("b1").checked == false) && (document.getElementById("c1").checked == false)) {
		document.getElementById("e1").checked = true;
		}
	if ((document.getElementById("b2").checked == false) && (document.getElementById("c2").checked == false) && (document.getElementById("e2").checked == false)) {
		document.getElementById("a2").checked = true;
		} else if ((document.getElementById("a2").checked == false) && (document.getElementById("c2").checked == false) && (document.getElementById("e2").checked == false)) {
		document.getElementById("b2").checked = true;
		} else if ((document.getElementById("a2").checked == false) && (document.getElementById("b2").checked == false) && (document.getElementById("e2").checked == false)) {
		document.getElementById("c2").checked = true;
		} else if ((document.getElementById("a2").checked == false) && (document.getElementById("b2").checked == false) && (document.getElementById("c2").checked == false)) {
		document.getElementById("e2").checked = true;
		}		
	if ((document.getElementById("b4").checked == false) && (document.getElementById("c4").checked == false) && (document.getElementById("e4").checked == false)) {
		document.getElementById("a4").checked = true;
		} else if ((document.getElementById("a4").checked == false) && (document.getElementById("c4").checked == false) && (document.getElementById("e4").checked == false)) {
		document.getElementById("b4").checked = true;
		} else if ((document.getElementById("a4").checked == false) && (document.getElementById("b4").checked == false) && (document.getElementById("e4").checked == false)) {
		document.getElementById("c4").checked = true;
		} else if ((document.getElementById("a4").checked == false) && (document.getElementById("b4").checked == false) && (document.getElementById("c4").checked == false)) {
		document.getElementById("e4").checked = true;
		}
	if ((document.getElementById("b5").checked == false) && (document.getElementById("c5").checked == false) && (document.getElementById("e5").checked == false)) {
		document.getElementById("a5").checked = true;
		} else if ((document.getElementById("a5").checked == false) && (document.getElementById("c5").checked == false) && (document.getElementById("e5").checked == false)) {
		document.getElementById("b5").checked = true;
		} else if ((document.getElementById("a5").checked == false) && (document.getElementById("b5").checked == false) && (document.getElementById("e5").checked == false)) {
		document.getElementById("c5").checked = true;
		} else if ((document.getElementById("a5").checked == false) && (document.getElementById("b5").checked == false) && (document.getElementById("c5").checked == false)) {
		document.getElementById("e5").checked = true;
		}
	if ((document.getElementById("a2").checked == false) && (document.getElementById("a4").checked == false) && (document.getElementById("a5").checked == false)) {
		document.getElementById("a1").checked = true;
		} else if ((document.getElementById("b2").checked == false) && (document.getElementById("b4").checked == false) && (document.getElementById("b5").checked == false)) {
		document.getElementById("b1").checked = true;
		} else if ((document.getElementById("c2").checked == false) && (document.getElementById("c4").checked == false) && (document.getElementById("c5").checked == false)) {
		document.getElementById("c1").checked = true;
		} else if ((document.getElementById("e2").checked == false) && (document.getElementById("e4").checked == false) && (document.getElementById("e5").checked == false)) {
		document.getElementById("e1").checked = true;
		} 
	// check row 3
	if ((document.getElementById("a1").checked == false) && (document.getElementById("a4").checked == false) && (document.getElementById("a5").checked == false)) {
		document.getElementById("a2").checked = true;
		} else if ((document.getElementById("b1").checked == false) && (document.getElementById("b4").checked == false) && (document.getElementById("b5").checked == false)) {
		document.getElementById("b2").checked = true;
		} else if ((document.getElementById("c1").checked == false) && (document.getElementById("c4").checked == false) && (document.getElementById("c5").checked == false)) {
		document.getElementById("c2").checked = true;
		} else if ((document.getElementById("e1").checked == false) && (document.getElementById("e4").checked == false) && (document.getElementById("e5").checked == false)) {
		document.getElementById("e2").checked = true;
		}
	//check row 4
	if ((document.getElementById("a1").checked == false) && (document.getElementById("a2").checked == false) && (document.getElementById("a5").checked == false)) {
		document.getElementById("a4").checked = true;
		} else if ((document.getElementById("b1").checked == false) && (document.getElementById("b2").checked == false) && (document.getElementById("b5").checked == false)) {
		document.getElementById("b4").checked = true;
		} else if ((document.getElementById("c1").checked == false) && (document.getElementById("c2").checked == false) && (document.getElementById("c5").checked == false)) {
		document.getElementById("c4").checked = true;
		} else if ((document.getElementById("e1").checked == false) && (document.getElementById("e2").checked == false) && (document.getElementById("e5").checked == false)) {
		document.getElementById("e4").checked = true;
		}		
	// check row 5
	if ((document.getElementById("a1").checked == false) && (document.getElementById("a2").checked == false) && (document.getElementById("a4").checked == false)) {
		document.getElementById("a5").checked = true;
		} else if ((document.getElementById("b1").checked == false) && (document.getElementById("b2").checked == false) && (document.getElementById("b4").checked == false)) {
		document.getElementById("b5").checked = true;
		} else if ((document.getElementById("c1").checked == false) && (document.getElementById("c2").checked == false) && (document.getElementById("c4").checked == false)) {
		document.getElementById("c5").checked = true;
		} else if ((document.getElementById("e1").checked == false) && (document.getElementById("e2").checked == false) && (document.getElementById("e4").checked == false)) {
		document.getElementById("e5").checked = true;
		}		
}
function uncheck_move_d4() {
	// clear the rest of this row
	document.getElementById("a4").checked = false;
	document.getElementById("b4").checked = false;
	document.getElementById("c4").checked = false;
	document.getElementById("e4").checked = false;
	
	if ((document.getElementById("b1").checked == false) && (document.getElementById("c1").checked == false) && (document.getElementById("e1").checked == false)) {
		document.getElementById("a1").checked = true;	
		} else if ((document.getElementById("a1").checked == false) && (document.getElementById("c1").checked == false) && (document.getElementById("e1").checked == false)) {
		document.getElementById("b1").checked = true;
		} else if ((document.getElementById("a1").checked == false) && (document.getElementById("b1").checked == false) && (document.getElementById("e1").checked == false)) {
		document.getElementById("c1").checked = true;
		} else if ((document.getElementById("a1").checked == false) && (document.getElementById("b1").checked == false) && (document.getElementById("c1").checked == false)) {
		document.getElementById("e1").checked = true;
		}
	if ((document.getElementById("b2").checked == false) && (document.getElementById("c2").checked == false) && (document.getElementById("e2").checked == false)) {
		document.getElementById("a2").checked = true;
		} else if ((document.getElementById("a2").checked == false) && (document.getElementById("c2").checked == false) && (document.getElementById("e2").checked == false)) {
		document.getElementById("b2").checked = true;
		} else if ((document.getElementById("a2").checked == false) && (document.getElementById("b2").checked == false) && (document.getElementById("e2").checked == false)) {
		document.getElementById("c2").checked = true;
		} else if ((document.getElementById("a2").checked == false) && (document.getElementById("b2").checked == false) && (document.getElementById("c2").checked == false)) {
		document.getElementById("e2").checked = true;
		}		
	if ((document.getElementById("b3").checked == false) && (document.getElementById("c3").checked == false) && (document.getElementById("e3").checked == false)) {
		document.getElementById("a3").checked = true;
		} else if ((document.getElementById("a3").checked == false) && (document.getElementById("c3").checked == false) && (document.getElementById("e3").checked == false)) {
		document.getElementById("b3").checked = true;
		} else if ((document.getElementById("a3").checked == false) && (document.getElementById("b3").checked == false) && (document.getElementById("e3").checked == false)) {
		document.getElementById("c3").checked = true;
		} else if ((document.getElementById("a3").checked == false) && (document.getElementById("b3").checked == false) && (document.getElementById("c3").checked == false)) {
		document.getElementById("e3").checked = true;
		}
	if ((document.getElementById("b5").checked == false) && (document.getElementById("c5").checked == false) && (document.getElementById("e5").checked == false)) {
		document.getElementById("a5").checked = true;
		} else if ((document.getElementById("a5").checked == false) && (document.getElementById("c5").checked == false) && (document.getElementById("e5").checked == false)) {
		document.getElementById("b5").checked = true;
		} else if ((document.getElementById("a5").checked == false) && (document.getElementById("b5").checked == false) && (document.getElementById("e5").checked == false)) {
		document.getElementById("c5").checked = true;
		} else if ((document.getElementById("a5").checked == false) && (document.getElementById("b5").checked == false) && (document.getElementById("c5").checked == false)) {
		document.getElementById("e5").checked = true;
		}
	if ((document.getElementById("a2").checked == false) && (document.getElementById("a3").checked == false) && (document.getElementById("a5").checked == false)) {
		document.getElementById("a1").checked = true;
		} else if ((document.getElementById("b2").checked == false) && (document.getElementById("b3").checked == false) && (document.getElementById("b5").checked == false)) {
		document.getElementById("b1").checked = true;
		} else if ((document.getElementById("c2").checked == false) && (document.getElementById("c3").checked == false) && (document.getElementById("c5").checked == false)) {
		document.getElementById("c1").checked = true;
		} else if ((document.getElementById("e2").checked == false) && (document.getElementById("e3").checked == false) && (document.getElementById("e5").checked == false)) {
		document.getElementById("e1").checked = true;
		} 
	// check row 3
	if ((document.getElementById("a1").checked == false) && (document.getElementById("a3").checked == false) && (document.getElementById("a5").checked == false)) {
		document.getElementById("a2").checked = true;
		} else if ((document.getElementById("b1").checked == false) && (document.getElementById("b3").checked == false) && (document.getElementById("b5").checked == false)) {
		document.getElementById("b2").checked = true;
		} else if ((document.getElementById("c1").checked == false) && (document.getElementById("c3").checked == false) && (document.getElementById("c5").checked == false)) {
		document.getElementById("c2").checked = true;
		} else if ((document.getElementById("e1").checked == false) && (document.getElementById("e3").checked == false) && (document.getElementById("e5").checked == false)) {
		document.getElementById("e2").checked = true;
		}
	//check row 4
	if ((document.getElementById("a1").checked == false) && (document.getElementById("a2").checked == false) && (document.getElementById("a5").checked == false)) {
		document.getElementById("a3").checked = true;
		} else if ((document.getElementById("b1").checked == false) && (document.getElementById("b2").checked == false) && (document.getElementById("b5").checked == false)) {
		document.getElementById("b3").checked = true;
		} else if ((document.getElementById("c1").checked == false) && (document.getElementById("c2").checked == false) && (document.getElementById("c5").checked == false)) {
		document.getElementById("c3").checked = true;
		} else if ((document.getElementById("e1").checked == false) && (document.getElementById("e2").checked == false) && (document.getElementById("e5").checked == false)) {
		document.getElementById("e4").checked = true;
		}		
	// check row 5
	if ((document.getElementById("a1").checked == false) && (document.getElementById("a2").checked == false) && (document.getElementById("a3").checked == false)) {
		document.getElementById("a5").checked = true;
		} else if ((document.getElementById("b1").checked == false) && (document.getElementById("b2").checked == false) && (document.getElementById("b3").checked == false)) {
		document.getElementById("b5").checked = true;
		} else if ((document.getElementById("c1").checked == false) && (document.getElementById("c2").checked == false) && (document.getElementById("c3").checked == false)) {
		document.getElementById("c5").checked = true;
		} else if ((document.getElementById("e1").checked == false) && (document.getElementById("e2").checked == false) && (document.getElementById("e3").checked == false)) {
		document.getElementById("e5").checked = true;
		}		
}
function uncheck_move_d5() {
	// clear the rest of this row
	document.getElementById("a5").checked = false;
	document.getElementById("b5").checked = false;
	document.getElementById("c5").checked = false;
	document.getElementById("e5").checked = false;
	
	if ((document.getElementById("b1").checked == false) && (document.getElementById("c1").checked == false) && (document.getElementById("e1").checked == false)) {
		document.getElementById("a1").checked = true;	
		} else if ((document.getElementById("a1").checked == false) && (document.getElementById("c1").checked == false) && (document.getElementById("e1").checked == false)) {
		document.getElementById("b1").checked = true;
		} else if ((document.getElementById("a1").checked == false) && (document.getElementById("b1").checked == false) && (document.getElementById("e1").checked == false)) {
		document.getElementById("c1").checked = true;
		} else if ((document.getElementById("a1").checked == false) && (document.getElementById("b1").checked == false) && (document.getElementById("c1").checked == false)) {
		document.getElementById("e1").checked = true;
		}
	if ((document.getElementById("b2").checked == false) && (document.getElementById("c2").checked == false) && (document.getElementById("e2").checked == false)) {
		document.getElementById("a2").checked = true;
		} else if ((document.getElementById("a2").checked == false) && (document.getElementById("c2").checked == false) && (document.getElementById("e2").checked == false)) {
		document.getElementById("b2").checked = true;
		} else if ((document.getElementById("a2").checked == false) && (document.getElementById("b2").checked == false) && (document.getElementById("e2").checked == false)) {
		document.getElementById("c2").checked = true;
		} else if ((document.getElementById("a2").checked == false) && (document.getElementById("b2").checked == false) && (document.getElementById("c2").checked == false)) {
		document.getElementById("e2").checked = true;
		}		
	if ((document.getElementById("b3").checked == false) && (document.getElementById("c3").checked == false) && (document.getElementById("e3").checked == false)) {
		document.getElementById("a3").checked = true;
		} else if ((document.getElementById("a3").checked == false) && (document.getElementById("c3").checked == false) && (document.getElementById("e3").checked == false)) {
		document.getElementById("b3").checked = true;
		} else if ((document.getElementById("a3").checked == false) && (document.getElementById("b3").checked == false) && (document.getElementById("e3").checked == false)) {
		document.getElementById("c3").checked = true;
		} else if ((document.getElementById("a3").checked == false) && (document.getElementById("b3").checked == false) && (document.getElementById("c3").checked == false)) {
		document.getElementById("e3").checked = true;
		}
	if ((document.getElementById("b4").checked == false) && (document.getElementById("c4").checked == false) && (document.getElementById("e4").checked == false)) {
		document.getElementById("a4").checked = true;
		} else if ((document.getElementById("a4").checked == false) && (document.getElementById("c4").checked == false) && (document.getElementById("e4").checked == false)) {
		document.getElementById("b4").checked = true;
		} else if ((document.getElementById("a4").checked == false) && (document.getElementById("b4").checked == false) && (document.getElementById("e4").checked == false)) {
		document.getElementById("c4").checked = true;
		} else if ((document.getElementById("a4").checked == false) && (document.getElementById("b4").checked == false) && (document.getElementById("c4").checked == false)) {
		document.getElementById("e4").checked = true;
		}
	if ((document.getElementById("a2").checked == false) && (document.getElementById("a3").checked == false) && (document.getElementById("a4").checked == false)) {
		document.getElementById("a1").checked = true;
		} else if ((document.getElementById("b2").checked == false) && (document.getElementById("b3").checked == false) && (document.getElementById("b4").checked == false)) {
		document.getElementById("b1").checked = true;
		} else if ((document.getElementById("c2").checked == false) && (document.getElementById("c3").checked == false) && (document.getElementById("c4").checked == false)) {
		document.getElementById("c1").checked = true;
		} else if ((document.getElementById("e2").checked == false) && (document.getElementById("e3").checked == false) && (document.getElementById("e4").checked == false)) {
		document.getElementById("e1").checked = true;
		} 
	// check row 3
	if ((document.getElementById("a1").checked == false) && (document.getElementById("a3").checked == false) && (document.getElementById("a4").checked == false)) {
		document.getElementById("a2").checked = true;
		} else if ((document.getElementById("b1").checked == false) && (document.getElementById("b3").checked == false) && (document.getElementById("b4").checked == false)) {
		document.getElementById("c2").checked = true;
		} else if ((document.getElementById("c1").checked == false) && (document.getElementById("c3").checked == false) && (document.getElementById("c4").checked == false)) {
		document.getElementById("c2").checked = true;
		} else if ((document.getElementById("e1").checked == false) && (document.getElementById("e3").checked == false) && (document.getElementById("e4").checked == false)) {
		document.getElementById("e2").checked = true;
		}
	//check row 4
	if ((document.getElementById("a1").checked == false) && (document.getElementById("a2").checked == false) && (document.getElementById("a4").checked == false)) {
		document.getElementById("a3").checked = true;
		} else if ((document.getElementById("b1").checked == false) && (document.getElementById("b2").checked == false) && (document.getElementById("b4").checked == false)) {
		document.getElementById("b3").checked = true;
		} else if ((document.getElementById("d1").checked == false) && (document.getElementById("c2").checked == false) && (document.getElementById("c4").checked == false)) {
		document.getElementById("c3").checked = true;
		} else if ((document.getElementById("e1").checked == false) && (document.getElementById("e2").checked == false) && (document.getElementById("e4").checked == false)) {
		document.getElementById("e3").checked = true;
		}		
	// check row 5
	if ((document.getElementById("a1").checked == false) && (document.getElementById("a2").checked == false) && (document.getElementById("a3").checked == false)) {
		document.getElementById("a4").checked = true;
		} else if ((document.getElementById("b1").checked == false) && (document.getElementById("b2").checked == false) && (document.getElementById("b3").checked == false)) {
		document.getElementById("b4").checked = true;
		} else if ((document.getElementById("c1").checked == false) && (document.getElementById("c2").checked == false) && (document.getElementById("c3").checked == false)) {
		document.getElementById("c4").checked = true;
		} else if ((document.getElementById("e1").checked == false) && (document.getElementById("e2").checked == false) && (document.getElementById("e3").checked == false)) {
		document.getElementById("e4").checked = true;
		}		
}
function uncheck_move_e1() {
	// clear the rest of this row
	document.getElementById("a1").checked = false;
	document.getElementById("b1").checked = false;
	document.getElementById("c1").checked = false;
	document.getElementById("d1").checked = false;
	
	if ((document.getElementById("b2").checked == false) && (document.getElementById("c2").checked == false) && (document.getElementById("d2").checked == false)) {
		document.getElementById("a2").checked = true;	
		} else if ((document.getElementById("a2").checked == false) && (document.getElementById("c2").checked == false) && (document.getElementById("d2").checked == false)) {
		document.getElementById("b2").checked = true;
		} else if ((document.getElementById("a2").checked == false) && (document.getElementById("b2").checked == false) && (document.getElementById("d2").checked == false)) {
		document.getElementById("c2").checked = true;
		} else if ((document.getElementById("a2").checked == false) && (document.getElementById("b2").checked == false) && (document.getElementById("c2").checked == false)) {
		document.getElementById("d2").checked = true;
		}
	if ((document.getElementById("b3").checked == false) && (document.getElementById("c3").checked == false) && (document.getElementById("d3").checked == false)) {
		document.getElementById("a3").checked = true;
		} else if ((document.getElementById("a3").checked == false) && (document.getElementById("c3").checked == false) && (document.getElementById("d3").checked == false)) {
		document.getElementById("b3").checked = true;
		} else if ((document.getElementById("a3").checked == false) && (document.getElementById("b3").checked == false) && (document.getElementById("d3").checked == false)) {
		document.getElementById("c3").checked = true;
		} else if ((document.getElementById("a3").checked == false) && (document.getElementById("b3").checked == false) && (document.getElementById("c3").checked == false)) {
		document.getElementById("d3").checked = true;
		}		
	if ((document.getElementById("b4").checked == false) && (document.getElementById("c4").checked == false) && (document.getElementById("d4").checked == false)) {
		document.getElementById("a4").checked = true;
		} else if ((document.getElementById("a4").checked == false) && (document.getElementById("c4").checked == false) && (document.getElementById("d4").checked == false)) {
		document.getElementById("b4").checked = true;
		} else if ((document.getElementById("a4").checked == false) && (document.getElementById("b4").checked == false) && (document.getElementById("d4").checked == false)) {
		document.getElementById("c4").checked = true;
		} else if ((document.getElementById("a4").checked == false) && (document.getElementById("b4").checked == false) && (document.getElementById("c4").checked == false)) {
		document.getElementById("d4").checked = true;
		}
	if ((document.getElementById("b5").checked == false) && (document.getElementById("c5").checked == false) && (document.getElementById("d5").checked == false)) {
		document.getElementById("a5").checked = true;
		} else if ((document.getElementById("a5").checked == false) && (document.getElementById("c5").checked == false) && (document.getElementById("d5").checked == false)) {
		document.getElementById("b5").checked = true;
		} else if ((document.getElementById("a5").checked == false) && (document.getElementById("b5").checked == false) && (document.getElementById("d5").checked == false)) {
		document.getElementById("c5").checked = true;
		} else if ((document.getElementById("a5").checked == false) && (document.getElementById("b5").checked == false) && (document.getElementById("c5").checked == false)) {
		document.getElementById("d5").checked = true;
		}
	if ((document.getElementById("a3").checked == false) && (document.getElementById("a4").checked == false) && (document.getElementById("a5").checked == false)) {
		document.getElementById("a2").checked = true;
		} else if ((document.getElementById("b3").checked == false) && (document.getElementById("b4").checked == false) && (document.getElementById("b5").checked == false)) {
		document.getElementById("b2").checked = true;
		} else if ((document.getElementById("c3").checked == false) && (document.getElementById("c4").checked == false) && (document.getElementById("c5").checked == false)) {
		document.getElementById("c2").checked = true;
		} else if ((document.getElementById("d3").checked == false) && (document.getElementById("d4").checked == false) && (document.getElementById("d5").checked == false)) {
		document.getElementById("d2").checked = true;
		} 
	// check row 3
	if ((document.getElementById("a2").checked == false) && (document.getElementById("a4").checked == false) && (document.getElementById("a5").checked == false)) {
		document.getElementById("a3").checked = true;
		} else if ((document.getElementById("b2").checked == false) && (document.getElementById("b4").checked == false) && (document.getElementById("b5").checked == false)) {
		document.getElementById("b3").checked = true;
		} else if ((document.getElementById("c2").checked == false) && (document.getElementById("c4").checked == false) && (document.getElementById("c5").checked == false)) {
		document.getElementById("c3").checked = true;
		} else if ((document.getElementById("d2").checked == false) && (document.getElementById("d4").checked == false) && (document.getElementById("d5").checked == false)) {
		document.getElementById("d3").checked = true;
		}
	//check row 4
	if ((document.getElementById("a2").checked == false) && (document.getElementById("a3").checked == false) && (document.getElementById("a5").checked == false)) {
		document.getElementById("a4").checked = true;
		} else if ((document.getElementById("b2").checked == false) && (document.getElementById("b3").checked == false) && (document.getElementById("b5").checked == false)) {
		document.getElementById("b4").checked = true;
		} else if ((document.getElementById("c2").checked == false) && (document.getElementById("c3").checked == false) && (document.getElementById("c5").checked == false)) {
		document.getElementById("c4").checked = true;
		} else if ((document.getElementById("d2").checked == false) && (document.getElementById("d3").checked == false) && (document.getElementById("d5").checked == false)) {
		document.getElementById("d4").checked = true;
		}
	// check row 5
	if ((document.getElementById("a2").checked == false) && (document.getElementById("a3").checked == false) && (document.getElementById("a4").checked == false)) {
		document.getElementById("a5").checked = true;
		} else if ((document.getElementById("b2").checked == false) && (document.getElementById("b3").checked == false) && (document.getElementById("b4").checked == false)) {
		document.getElementById("b5").checked = true;
		} else if ((document.getElementById("c2").checked == false) && (document.getElementById("c3").checked == false) && (document.getElementById("c4").checked == false)) {
		document.getElementById("c5").checked = true;
		} else if ((document.getElementById("d2").checked == false) && (document.getElementById("d3").checked == false) && (document.getElementById("d4").checked == false)) {
		document.getElementById("d5").checked = true;
		}		
}
function uncheck_move_e2() {
	// clear the rest of this row
	document.getElementById("a2").checked = false;
	document.getElementById("b2").checked = false;
	document.getElementById("c2").checked = false;
	document.getElementById("d2").checked = false;
	
	if ((document.getElementById("b1").checked == false) && (document.getElementById("c1").checked == false) && (document.getElementById("d1").checked == false)) {
		document.getElementById("a1").checked = true;	
		} else if ((document.getElementById("a1").checked == false) && (document.getElementById("c1").checked == false) && (document.getElementById("d1").checked == false)) {
		document.getElementById("b1").checked = true;
		} else if ((document.getElementById("a1").checked == false) && (document.getElementById("b1").checked == false) && (document.getElementById("d1").checked == false)) {
		document.getElementById("c1").checked = true;
		} else if ((document.getElementById("a1").checked == false) && (document.getElementById("b1").checked == false) && (document.getElementById("c1").checked == false)) {
		document.getElementById("d1").checked = true;
		}
	if ((document.getElementById("b3").checked == false) && (document.getElementById("c3").checked == false) && (document.getElementById("d3").checked == false)) {
		document.getElementById("a3").checked = true;
		} else if ((document.getElementById("a3").checked == false) && (document.getElementById("c3").checked == false) && (document.getElementById("d3").checked == false)) {
		document.getElementById("b3").checked = true;
		} else if ((document.getElementById("a3").checked == false) && (document.getElementById("b3").checked == false) && (document.getElementById("d3").checked == false)) {
		document.getElementById("c3").checked = true;
		} else if ((document.getElementById("a3").checked == false) && (document.getElementById("b3").checked == false) && (document.getElementById("c3").checked == false)) {
		document.getElementById("d3").checked = true;
		}		
	if ((document.getElementById("b4").checked == false) && (document.getElementById("c4").checked == false) && (document.getElementById("d4").checked == false)) {
		document.getElementById("a4").checked = true;
		} else if ((document.getElementById("a4").checked == false) && (document.getElementById("c4").checked == false) && (document.getElementById("d4").checked == false)) {
		document.getElementById("b4").checked = true;
		} else if ((document.getElementById("a4").checked == false) && (document.getElementById("b4").checked == false) && (document.getElementById("d4").checked == false)) {
		document.getElementById("c4").checked = true;
		} else if ((document.getElementById("a4").checked == false) && (document.getElementById("b4").checked == false) && (document.getElementById("c4").checked == false)) {
		document.getElementById("d4").checked = true;
		}
	if ((document.getElementById("b5").checked == false) && (document.getElementById("c5").checked == false) && (document.getElementById("d5").checked == false)) {
		document.getElementById("a5").checked = true;
		} else if ((document.getElementById("a5").checked == false) && (document.getElementById("c5").checked == false) && (document.getElementById("d5").checked == false)) {
		document.getElementById("b5").checked = true;
		} else if ((document.getElementById("a5").checked == false) && (document.getElementById("b5").checked == false) && (document.getElementById("d5").checked == false)) {
		document.getElementById("c5").checked = true;
		} else if ((document.getElementById("a5").checked == false) && (document.getElementById("b5").checked == false) && (document.getElementById("c5").checked == false)) {
		document.getElementById("d5").checked = true;
		}
	if ((document.getElementById("a3").checked == false) && (document.getElementById("a4").checked == false) && (document.getElementById("a5").checked == false)) {
		document.getElementById("a1").checked = true;
		} else if ((document.getElementById("b3").checked == false) && (document.getElementById("b4").checked == false) && (document.getElementById("b5").checked == false)) {
		document.getElementById("b1").checked = true;
		} else if ((document.getElementById("c3").checked == false) && (document.getElementById("c4").checked == false) && (document.getElementById("c5").checked == false)) {
		document.getElementById("c1").checked = true;
		} else if ((document.getElementById("d3").checked == false) && (document.getElementById("d4").checked == false) && (document.getElementById("d5").checked == false)) {
		document.getElementById("d1").checked = true;
		} 
	// check row 3
	if ((document.getElementById("a1").checked == false) && (document.getElementById("a4").checked == false) && (document.getElementById("a5").checked == false)) {
		document.getElementById("a3").checked = true;
		} else if ((document.getElementById("b1").checked == false) && (document.getElementById("b4").checked == false) && (document.getElementById("b5").checked == false)) {
		document.getElementById("b3").checked = true;
		} else if ((document.getElementById("c1").checked == false) && (document.getElementById("c4").checked == false) && (document.getElementById("c5").checked == false)) {
		document.getElementById("c3").checked = true;
		} else if ((document.getElementById("d1").checked == false) && (document.getElementById("d4").checked == false) && (document.getElementById("d5").checked == false)) {
		document.getElementById("d3").checked = true;
		}
	//check row 4
	if ((document.getElementById("a1").checked == false) && (document.getElementById("a3").checked == false) && (document.getElementById("a5").checked == false)) {
		document.getElementById("a4").checked = true;
		} else if ((document.getElementById("b1").checked == false) && (document.getElementById("b3").checked == false) && (document.getElementById("b5").checked == false)) {
		document.getElementById("b4").checked = true;
		} else if ((document.getElementById("c1").checked == false) && (document.getElementById("c3").checked == false) && (document.getElementById("c5").checked == false)) {
		document.getElementById("c4").checked = true;
		} else if ((document.getElementById("d1").checked == false) && (document.getElementById("d3").checked == false) && (document.getElementById("d5").checked == false)) {
		document.getElementById("d4").checked = true;
		}		
	// check row 5
	if ((document.getElementById("a1").checked == false) && (document.getElementById("a3").checked == false) && (document.getElementById("a4").checked == false)) {
		document.getElementById("a5").checked = true;
		} else if ((document.getElementById("b1").checked == false) && (document.getElementById("b3").checked == false) && (document.getElementById("b4").checked == false)) {
		document.getElementById("b5").checked = true;
		} else if ((document.getElementById("c1").checked == false) && (document.getElementById("c3").checked == false) && (document.getElementById("c4").checked == false)) {
		document.getElementById("c5").checked = true;
		} else if ((document.getElementById("d1").checked == false) && (document.getElementById("d3").checked == false) && (document.getElementById("d4").checked == false)) {
		document.getElementById("d5").checked = true;
		}		
}
function uncheck_move_e3() {
	// clear the rest of this row
	document.getElementById("a3").checked = false;
	document.getElementById("b3").checked = false;
	document.getElementById("c3").checked = false;
	document.getElementById("d3").checked = false;
	
	if ((document.getElementById("b1").checked == false) && (document.getElementById("c1").checked == false) && (document.getElementById("d1").checked == false)) {
		document.getElementById("a1").checked = true;	
		} else if ((document.getElementById("a1").checked == false) && (document.getElementById("c1").checked == false) && (document.getElementById("d1").checked == false)) {
		document.getElementById("b1").checked = true;
		} else if ((document.getElementById("a1").checked == false) && (document.getElementById("b1").checked == false) && (document.getElementById("d1").checked == false)) {
		document.getElementById("c1").checked = true;
		} else if ((document.getElementById("a1").checked == false) && (document.getElementById("b1").checked == false) && (document.getElementById("c1").checked == false)) {
		document.getElementById("d1").checked = true;
		}
	if ((document.getElementById("b2").checked == false) && (document.getElementById("c2").checked == false) && (document.getElementById("d2").checked == false)) {
		document.getElementById("a2").checked = true;
		} else if ((document.getElementById("a2").checked == false) && (document.getElementById("c2").checked == false) && (document.getElementById("d2").checked == false)) {
		document.getElementById("b2").checked = true;
		} else if ((document.getElementById("a2").checked == false) && (document.getElementById("b2").checked == false) && (document.getElementById("d2").checked == false)) {
		document.getElementById("c2").checked = true;
		} else if ((document.getElementById("a2").checked == false) && (document.getElementById("b2").checked == false) && (document.getElementById("c2").checked == false)) {
		document.getElementById("d2").checked = true;
		}		
	if ((document.getElementById("b4").checked == false) && (document.getElementById("c4").checked == false) && (document.getElementById("d4").checked == false)) {
		document.getElementById("a4").checked = true;
		} else if ((document.getElementById("a4").checked == false) && (document.getElementById("c4").checked == false) && (document.getElementById("d4").checked == false)) {
		document.getElementById("b4").checked = true;
		} else if ((document.getElementById("a4").checked == false) && (document.getElementById("b4").checked == false) && (document.getElementById("d4").checked == false)) {
		document.getElementById("c4").checked = true;
		} else if ((document.getElementById("a4").checked == false) && (document.getElementById("b4").checked == false) && (document.getElementById("c4").checked == false)) {
		document.getElementById("d4").checked = true;
		}
	if ((document.getElementById("b5").checked == false) && (document.getElementById("c5").checked == false) && (document.getElementById("d5").checked == false)) {
		document.getElementById("a5").checked = true;
		} else if ((document.getElementById("a5").checked == false) && (document.getElementById("c5").checked == false) && (document.getElementById("d5").checked == false)) {
		document.getElementById("b5").checked = true;
		} else if ((document.getElementById("a5").checked == false) && (document.getElementById("b5").checked == false) && (document.getElementById("d5").checked == false)) {
		document.getElementById("c5").checked = true;
		} else if ((document.getElementById("a5").checked == false) && (document.getElementById("b5").checked == false) && (document.getElementById("c5").checked == false)) {
		document.getElementById("d5").checked = true;
		}
	if ((document.getElementById("a2").checked == false) && (document.getElementById("a4").checked == false) && (document.getElementById("a5").checked == false)) {
		document.getElementById("a1").checked = true;
		} else if ((document.getElementById("b2").checked == false) && (document.getElementById("b4").checked == false) && (document.getElementById("b5").checked == false)) {
		document.getElementById("b1").checked = true;
		} else if ((document.getElementById("c2").checked == false) && (document.getElementById("c4").checked == false) && (document.getElementById("c5").checked == false)) {
		document.getElementById("c1").checked = true;
		} else if ((document.getElementById("d2").checked == false) && (document.getElementById("d4").checked == false) && (document.getElementById("d5").checked == false)) {
		document.getElementById("d1").checked = true;
		} 
	// check row 3
	if ((document.getElementById("a1").checked == false) && (document.getElementById("a4").checked == false) && (document.getElementById("a5").checked == false)) {
		document.getElementById("a2").checked = true;
		} else if ((document.getElementById("b1").checked == false) && (document.getElementById("b4").checked == false) && (document.getElementById("b5").checked == false)) {
		document.getElementById("b2").checked = true;
		} else if ((document.getElementById("c1").checked == false) && (document.getElementById("c4").checked == false) && (document.getElementById("c5").checked == false)) {
		document.getElementById("c2").checked = true;
		} else if ((document.getElementById("d1").checked == false) && (document.getElementById("d4").checked == false) && (document.getElementById("d5").checked == false)) {
		document.getElementById("d2").checked = true;
		}
	//check row 4
	if ((document.getElementById("a1").checked == false) && (document.getElementById("a2").checked == false) && (document.getElementById("a5").checked == false)) {
		document.getElementById("a4").checked = true;
		} else if ((document.getElementById("b1").checked == false) && (document.getElementById("b2").checked == false) && (document.getElementById("b5").checked == false)) {
		document.getElementById("b4").checked = true;
		} else if ((document.getElementById("c1").checked == false) && (document.getElementById("c2").checked == false) && (document.getElementById("c5").checked == false)) {
		document.getElementById("c4").checked = true;
		} else if ((document.getElementById("d1").checked == false) && (document.getElementById("d2").checked == false) && (document.getElementById("d5").checked == false)) {
		document.getElementById("d4").checked = true;
		}		
	// check row 5
	if ((document.getElementById("a1").checked == false) && (document.getElementById("a2").checked == false) && (document.getElementById("a4").checked == false)) {
		document.getElementById("a5").checked = true;
		} else if ((document.getElementById("b1").checked == false) && (document.getElementById("b2").checked == false) && (document.getElementById("b4").checked == false)) {
		document.getElementById("b5").checked = true;
		} else if ((document.getElementById("c1").checked == false) && (document.getElementById("c2").checked == false) && (document.getElementById("c4").checked == false)) {
		document.getElementById("c5").checked = true;
		} else if ((document.getElementById("d1").checked == false) && (document.getElementById("d2").checked == false) && (document.getElementById("d4").checked == false)) {
		document.getElementById("d5").checked = true;
		}		
}
function uncheck_move_e4() {
	// clear the rest of this row
	document.getElementById("a4").checked = false;
	document.getElementById("b4").checked = false;
	document.getElementById("c4").checked = false;
	document.getElementById("d4").checked = false;
	
	if ((document.getElementById("b1").checked == false) && (document.getElementById("c1").checked == false) && (document.getElementById("d1").checked == false)) {
		document.getElementById("a1").checked = true;	
		} else if ((document.getElementById("a1").checked == false) && (document.getElementById("c1").checked == false) && (document.getElementById("d1").checked == false)) {
		document.getElementById("b1").checked = true;
		} else if ((document.getElementById("a1").checked == false) && (document.getElementById("b1").checked == false) && (document.getElementById("d1").checked == false)) {
		document.getElementById("c1").checked = true;
		} else if ((document.getElementById("a1").checked == false) && (document.getElementById("b1").checked == false) && (document.getElementById("c1").checked == false)) {
		document.getElementById("d1").checked = true;
		}
	if ((document.getElementById("b2").checked == false) && (document.getElementById("c2").checked == false) && (document.getElementById("d2").checked == false)) {
		document.getElementById("a2").checked = true;
		} else if ((document.getElementById("a2").checked == false) && (document.getElementById("c2").checked == false) && (document.getElementById("d2").checked == false)) {
		document.getElementById("b2").checked = true;
		} else if ((document.getElementById("a2").checked == false) && (document.getElementById("b2").checked == false) && (document.getElementById("d2").checked == false)) {
		document.getElementById("c2").checked = true;
		} else if ((document.getElementById("a2").checked == false) && (document.getElementById("b2").checked == false) && (document.getElementById("c2").checked == false)) {
		document.getElementById("d2").checked = true;
		}		
	if ((document.getElementById("b3").checked == false) && (document.getElementById("c3").checked == false) && (document.getElementById("d3").checked == false)) {
		document.getElementById("a3").checked = true;
		} else if ((document.getElementById("a3").checked == false) && (document.getElementById("c3").checked == false) && (document.getElementById("d3").checked == false)) {
		document.getElementById("b3").checked = true;
		} else if ((document.getElementById("a3").checked == false) && (document.getElementById("b3").checked == false) && (document.getElementById("d3").checked == false)) {
		document.getElementById("c3").checked = true;
		} else if ((document.getElementById("a3").checked == false) && (document.getElementById("b3").checked == false) && (document.getElementById("c3").checked == false)) {
		document.getElementById("d3").checked = true;
		}
	if ((document.getElementById("b5").checked == false) && (document.getElementById("c5").checked == false) && (document.getElementById("d5").checked == false)) {
		document.getElementById("a5").checked = true;
		} else if ((document.getElementById("a5").checked == false) && (document.getElementById("c5").checked == false) && (document.getElementById("d5").checked == false)) {
		document.getElementById("b5").checked = true;
		} else if ((document.getElementById("a5").checked == false) && (document.getElementById("b5").checked == false) && (document.getElementById("d5").checked == false)) {
		document.getElementById("c5").checked = true;
		} else if ((document.getElementById("a5").checked == false) && (document.getElementById("b5").checked == false) && (document.getElementById("c5").checked == false)) {
		document.getElementById("d5").checked = true;
		}
	if ((document.getElementById("a2").checked == false) && (document.getElementById("a3").checked == false) && (document.getElementById("a5").checked == false)) {
		document.getElementById("a1").checked = true;
		} else if ((document.getElementById("b2").checked == false) && (document.getElementById("b3").checked == false) && (document.getElementById("b5").checked == false)) {
		document.getElementById("b1").checked = true;
		} else if ((document.getElementById("c2").checked == false) && (document.getElementById("c3").checked == false) && (document.getElementById("c5").checked == false)) {
		document.getElementById("c1").checked = true;
		} else if ((document.getElementById("d2").checked == false) && (document.getElementById("d3").checked == false) && (document.getElementById("d5").checked == false)) {
		document.getElementById("d1").checked = true;
		} 
	// check row 3
	if ((document.getElementById("a1").checked == false) && (document.getElementById("a3").checked == false) && (document.getElementById("a5").checked == false)) {
		document.getElementById("a2").checked = true;
		} else if ((document.getElementById("b1").checked == false) && (document.getElementById("b3").checked == false) && (document.getElementById("b5").checked == false)) {
		document.getElementById("b2").checked = true;
		} else if ((document.getElementById("c1").checked == false) && (document.getElementById("c3").checked == false) && (document.getElementById("c5").checked == false)) {
		document.getElementById("c2").checked = true;
		} else if ((document.getElementById("d1").checked == false) && (document.getElementById("d3").checked == false) && (document.getElementById("d5").checked == false)) {
		document.getElementById("d2").checked = true;
		}
	//check row 4
	if ((document.getElementById("a1").checked == false) && (document.getElementById("a2").checked == false) && (document.getElementById("a5").checked == false)) {
		document.getElementById("a3").checked = true;
		} else if ((document.getElementById("b1").checked == false) && (document.getElementById("b2").checked == false) && (document.getElementById("b5").checked == false)) {
		document.getElementById("b3").checked = true;
		} else if ((document.getElementById("c1").checked == false) && (document.getElementById("c2").checked == false) && (document.getElementById("c5").checked == false)) {
		document.getElementById("c3").checked = true;
		} else if ((document.getElementById("d1").checked == false) && (document.getElementById("d2").checked == false) && (document.getElementById("d5").checked == false)) {
		document.getElementById("d4").checked = true;
		}		
	// check row 5
	if ((document.getElementById("a1").checked == false) && (document.getElementById("a2").checked == false) && (document.getElementById("a3").checked == false)) {
		document.getElementById("a5").checked = true;
		} else if ((document.getElementById("b1").checked == false) && (document.getElementById("b2").checked == false) && (document.getElementById("b3").checked == false)) {
		document.getElementById("b5").checked = true;
		} else if ((document.getElementById("c1").checked == false) && (document.getElementById("c2").checked == false) && (document.getElementById("c3").checked == false)) {
		document.getElementById("c5").checked = true;
		} else if ((document.getElementById("d1").checked == false) && (document.getElementById("d2").checked == false) && (document.getElementById("d3").checked == false)) {
		document.getElementById("d5").checked = true;
		}		
}
function uncheck_move_e5() {
	// clear the rest of this row
	document.getElementById("a5").checked = false;
	document.getElementById("b5").checked = false;
	document.getElementById("c5").checked = false;
	document.getElementById("d5").checked = false;
	
	if ((document.getElementById("b1").checked == false) && (document.getElementById("c1").checked == false) && (document.getElementById("d1").checked == false)) {
		document.getElementById("a1").checked = true;	
		} else if ((document.getElementById("a1").checked == false) && (document.getElementById("c1").checked == false) && (document.getElementById("d1").checked == false)) {
		document.getElementById("b1").checked = true;
		} else if ((document.getElementById("a1").checked == false) && (document.getElementById("b1").checked == false) && (document.getElementById("d1").checked == false)) {
		document.getElementById("c1").checked = true;
		} else if ((document.getElementById("a1").checked == false) && (document.getElementById("b1").checked == false) && (document.getElementById("c1").checked == false)) {
		document.getElementById("d1").checked = true;
		}
	if ((document.getElementById("b2").checked == false) && (document.getElementById("c2").checked == false) && (document.getElementById("d2").checked == false)) {
		document.getElementById("a2").checked = true;
		} else if ((document.getElementById("a2").checked == false) && (document.getElementById("c2").checked == false) && (document.getElementById("d2").checked == false)) {
		document.getElementById("b2").checked = true;
		} else if ((document.getElementById("a2").checked == false) && (document.getElementById("b2").checked == false) && (document.getElementById("d2").checked == false)) {
		document.getElementById("c2").checked = true;
		} else if ((document.getElementById("a2").checked == false) && (document.getElementById("b2").checked == false) && (document.getElementById("c2").checked == false)) {
		document.getElementById("d2").checked = true;
		}		
	if ((document.getElementById("b3").checked == false) && (document.getElementById("c3").checked == false) && (document.getElementById("d3").checked == false)) {
		document.getElementById("a3").checked = true;
		} else if ((document.getElementById("a3").checked == false) && (document.getElementById("c3").checked == false) && (document.getElementById("d3").checked == false)) {
		document.getElementById("b3").checked = true;
		} else if ((document.getElementById("a3").checked == false) && (document.getElementById("b3").checked == false) && (document.getElementById("d3").checked == false)) {
		document.getElementById("c3").checked = true;
		} else if ((document.getElementById("a3").checked == false) && (document.getElementById("b3").checked == false) && (document.getElementById("c3").checked == false)) {
		document.getElementById("d3").checked = true;
		}
	if ((document.getElementById("b4").checked == false) && (document.getElementById("c4").checked == false) && (document.getElementById("d4").checked == false)) {
		document.getElementById("a4").checked = true;
		} else if ((document.getElementById("a4").checked == false) && (document.getElementById("c4").checked == false) && (document.getElementById("d4").checked == false)) {
		document.getElementById("b4").checked = true;
		} else if ((document.getElementById("a4").checked == false) && (document.getElementById("b4").checked == false) && (document.getElementById("d4").checked == false)) {
		document.getElementById("c4").checked = true;
		} else if ((document.getElementById("a4").checked == false) && (document.getElementById("b4").checked == false) && (document.getElementById("c4").checked == false)) {
		document.getElementById("d4").checked = true;
		}
	if ((document.getElementById("a2").checked == false) && (document.getElementById("a3").checked == false) && (document.getElementById("a4").checked == false)) {
		document.getElementById("a1").checked = true;
		} else if ((document.getElementById("b2").checked == false) && (document.getElementById("b3").checked == false) && (document.getElementById("b4").checked == false)) {
		document.getElementById("b1").checked = true;
		} else if ((document.getElementById("c2").checked == false) && (document.getElementById("c3").checked == false) && (document.getElementById("c4").checked == false)) {
		document.getElementById("c1").checked = true;
		} else if ((document.getElementById("d2").checked == false) && (document.getElementById("d3").checked == false) && (document.getElementById("d4").checked == false)) {
		document.getElementById("e1").checked = true;
		} 
	// check row 3
	if ((document.getElementById("a1").checked == false) && (document.getElementById("a3").checked == false) && (document.getElementById("a4").checked == false)) {
		document.getElementById("a2").checked = true;
		} else if ((document.getElementById("b1").checked == false) && (document.getElementById("b3").checked == false) && (document.getElementById("b4").checked == false)) {
		document.getElementById("c2").checked = true;
		} else if ((document.getElementById("c1").checked == false) && (document.getElementById("c3").checked == false) && (document.getElementById("c4").checked == false)) {
		document.getElementById("c2").checked = true;
		} else if ((document.getElementById("d1").checked == false) && (document.getElementById("d3").checked == false) && (document.getElementById("d4").checked == false)) {
		document.getElementById("d2").checked = true;
		}
	//check row 4
	if ((document.getElementById("a1").checked == false) && (document.getElementById("a2").checked == false) && (document.getElementById("a4").checked == false)) {
		document.getElementById("a3").checked = true;
		} else if ((document.getElementById("b1").checked == false) && (document.getElementById("b2").checked == false) && (document.getElementById("b4").checked == false)) {
		document.getElementById("b3").checked = true;
		} else if ((document.getElementById("d1").checked == false) && (document.getElementById("c2").checked == false) && (document.getElementById("c4").checked == false)) {
		document.getElementById("c3").checked = true;
		} else if ((document.getElementById("d1").checked == false) && (document.getElementById("d2").checked == false) && (document.getElementById("d4").checked == false)) {
		document.getElementById("d3").checked = true;
		}		
	// check row 5
	if ((document.getElementById("a1").checked == false) && (document.getElementById("a2").checked == false) && (document.getElementById("a3").checked == false)) {
		document.getElementById("a4").checked = true;
		} else if ((document.getElementById("b1").checked == false) && (document.getElementById("b2").checked == false) && (document.getElementById("b3").checked == false)) {
		document.getElementById("b4").checked = true;
		} else if ((document.getElementById("c1").checked == false) && (document.getElementById("c2").checked == false) && (document.getElementById("c3").checked == false)) {
		document.getElementById("c4").checked = true;
		} else if ((document.getElementById("d1").checked == false) && (document.getElementById("d2").checked == false) && (document.getElementById("d3").checked == false)) {
		document.getElementById("d4").checked = true;
		}		
}







	
