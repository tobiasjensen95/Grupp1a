function formMessage() {
	$('#pnummer').val('');
    $('#antalp').val('');
    $('#lagerhylla').val('');
    $('#byggnad').val('');
    $('#adress').val('');
	document.getElementById("formInfo").innerHTML = ("Skickat!");
}

function sorterabostader () {
  properties.name.sort();
}