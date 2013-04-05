var BASE = "call.php";

$.getJSON(BASE, {method : "beers"}, function(data){
	console.log("Beers");
	console.log(data);
	var ctx = {
		beers : data.data
	}
	var source   = $("#beer-list").html();
	var tpl = Handlebars.compile(source);
	$(".beerlist").html(tpl(ctx));
});

$.getJSON(BASE, {method : "menu/categories"}, function(data){
	console.log("Categories");
	console.log(data);
});
$.getJSON(BASE, {method : "search", q : "stout"}, function(data){
	console.log("stouts");
	console.log(data);
});