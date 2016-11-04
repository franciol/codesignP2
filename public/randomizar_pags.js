
t1 = window.setTimeout(
	function sorteia(){

		var rnd = Math.random();

		var pg_a = "indexy/Sublime Text - Download.html";
		var pg_b = "indexy/Sublime Text-V2 - Download.html";

		var destino = "";

		if (rnd < 0.5){
			destino =pg_a;
		} else {
			destino = pg_b;
		}

	window.location.replace(destino);
	},3000);