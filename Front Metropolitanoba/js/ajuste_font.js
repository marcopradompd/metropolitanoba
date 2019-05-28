function fonte(e) {

	var elemento = $(".ajustarFonte");
	var fonte = parseInt(elemento.css('font-size'));
	
	e == 'a' ? fonte++ : fonte--;

	elemento.css("fontSize", fonte);
	
}