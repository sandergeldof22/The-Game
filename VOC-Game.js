alert("Welkom bij de VOC game, het is de bedoeling dat u uw VOC schip naar een locatie brengt om daar winst te maken met handel. de crew bouwt op uw keuzes ! ")

if(prompt("De VOC vertrekt en JIJ bent haar kapitein!, er wordt u geadviseerd om westwaards te gaan voor specerijen, is dit ook uw keuze?") == "ja"){
	if(prompt("U ZIET EEN SPAANS SCHIP, PREPAREERT U UW KANNONEN?") == "ja"){
		if(prompt("De spanjaarden schrokken, volgt u hun schip?") == "nee"){
			if(prompt("Na een tijd varen merkt u dat uw scheepsvoorraden op zijn, een verlaten eiland vol gevaren is misschien uw redding, wilt u het eiland verkennen voor mogelijke voorraden") == "ja"){
				alert("Helaas, gevangen genomen door kanibalen, je bent een maaltijd geworden");
			}else{
				alert("Helaas, Na dagen zonder eten en drinken begint de crew te muiten. midden op de zee wordt u verdronken")
			}

		}else{
			alert("Helaas, je vaarde rechtstreeks in de Spaanse armada, zeg hallo tegen spaans kielhalen")
		}
	}else{
		alert("Helaas, uw schip is kanonvoer geworden")
	}
}else if(prompt("OOSTWAARDS!, maar eerst langst Spanje, bewapend u uw schip?") == "ja"){
	if(prompt("BOEM, dat zal dat schorum leren. Maar nu, varen we via de kust van Afrika?") == "ja"){
		if(prompt("Na dagenlang varen moet u beslissen aan te meren bij Kaap de Goede hoop om zo aan te vullen en verder te kunnen reizen") == "ja"){
			alert("SUCCES!!! Na aan te vullen bij Kaap de Goede hoop, wordt alles verkocht voor een dikke winst. VOORWAARDS, VOOR DE VOC")
		}else{
			alert("Na Kaap de Goede hoop over te slaan en direct verder te varen blijkt eenmaal aangekomen op het handelsfort om specerijen te verhandelen, blijkt dat alles onderweg is opgemaakt om te overleven.HELAAS alle winst is verlies")
		}
	}else{
		alert("Gibraltar is het, maar nu eenmaal daar varend  blijkt de bodem te ondiep te zijn, helaas vastgestrand bij de spaanse kust")
	}
}else{
	alert("Helaas, uw schip is kanonvoer geworden")
}