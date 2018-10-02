alert("Welkom bij de VOC game, het is de bedoeling dat u uw VOC schip naar een locatie brengt om daar winst te maken met handel. De crew bouwt op uw keuzes!")

if(prompt("De VOC vertrekt en JIJ bent haar kapitein!, er wordt u geadviseerd om westwaards te gaan voor specerijen, is dit ook uw keuze?") == "ja"){
	if(prompt("U ZIET EEN SPAANS SCHIP, HOEVEEL KANONNEN PREPAREERT U?") >= "10"){
		var masten = prompt("Boem, dat schorum is weg, hoeveel van de masten gaan open");
		if( masten == "3"){
			if(prompt("Nu westwaards!! gaan we op volle kracht door het midden van de zee of gaan we voorzichtig via het zuidelijke eilanden, maar achter de spaanse vloot aanvaren kan ook een leuk idee zijn") == "volle kracht" || "eilanden") {
				alert("We zitten helemaal nergens, na een inheems eiland te bezoeken worden we gevangen genomen door de oorspronkelijke bewonders, helaas")
		    }else{
				alert("Na dagen spotten de spanjaarden je en schieten je schip kapot, helaas");
			}
		} else if ("masten" == "1") {
			alert("1 MAST, we gaan niet snel genoeg helaas");
		} else {
			alert("2 masten? het schip trekt zichzelf zo in twee, helaas");
		}	
}else if(prompt("OOSTWAARDS!, maar eerst langst Spanje, daarginds is al een schip, hoeveel kanonnen preparen we?") >= "10") {
	var mastjes = prompt("Boem dat schorum is weg, hoeveel van de masten gaan open");
	if( mastjes == "3"){
		if(prompt("Perfecte keueze mijnheer, alleen Spanje ligt nabij. we moeten kiezen, gaan we via Gibraltar of Afrika") == "Afrika") {
			if(prompt("Nu moeten we beslissen of we nog aanvaren bij kaap de goede hoop of de zuideilanden, of allebei?") == "allebei") {
				var koper = prompt("Eindelijk wordt de handelspot bereikt na al die tijd. er wordt ons 5 koper aangeboden, is dit genoeg. hoeveel koper moeten we vragen om genoeg te verdienen en het toch te kopen?")
				if( koper = "10"){
					alert("We hebben ze verdiend en keren terug naar Nedeland, GEFELICITEERD !")
				}else if ("koper" < "10" && "koper" > "10") {
					alert("We worden volgens mij bedrogen meneer. op deze manier verdienenen we er niet aan");
			}else{
				alert("voordat we onze eindbestemming bereiken zijn onze voorraden op en is er muiterij, u wordt gekielhaald");
			}
		}else{
			alert("Gibraltar? helaas is de bodem te ondiep en zijn we gestrand bij Spanje, helaas");
		}
	} else if("mastjes" == "1") {
		alert("1 MAST, we gaan niet snel genoeg helaas");
	} else {
		alert("2 masten? het schip trekt zichzelf zo in twee, helaas");
	}
}else {
	alert("Uw schip is kanonvoer geworden voor de spanjaarden");
	}
}
}





		
