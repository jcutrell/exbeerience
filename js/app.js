var BASE = "call.php";

Handlebars.registerHelper('ifBoth', function(v1, v2, options) {
  if(v1 && v2) {
    return options.fn(this);
  }
  return options.inverse(this);
});

Handlebars.registerHelper('bitterness', function(ibu){
	return 100 * (ibu/110);
});
Handlebars.registerHelper('bitternessText', function(ibu){
	var perc = 100 * (ibu/110);
	if (ibu <= 10){
		return "very low";
	} else if (ibu > 10 && ibu <= 30){
		return "low";
	} else if (ibu > 30 && ibu <= 40){
		return "medium";
	} else if (ibu > 40 && ibu <= 60){
		return "high medium";
	} else if (ibu > 60 && ibu <= 80){
		return "high";
	} else {
		return "very high";
	}

});

$.ajaxSetup({
	cache : false,
	data : {
		"withBreweries" : "Y"
	}
});
var theRequest;

var listhtml = "";
function getBeerList(h,p,page,query){
	var data;
	$("#index").fadeIn(); $("#single").fadeOut();
	if (!h) h = "";
	if (!p) p = 1;
	if (!page) page = "recommended";
	if (!query) query = "";

	if (page=="recommended"){
		data = {method : "beers", "order" : "status", "abv":"7,12", "ibu":"20,50", "p":p};
	// } else if (page=="recommended"){
		// data = {method : "beers", "order": "availableId", "sort" :"DESC", "p":p};
	} else if (page=="atoz"){
		data = {method : "beers", "order": "name", "sort" :"ASC", "p":p};
	} else if (page=="popular"){
		// These are the most recently updated... So they must be popular, right?
		var ts = Math.round((new Date()).getTime() / 1000) - (86400*4);
		data = {method : "beers", "since": ts, "sort" :"ASC", "p":p};
	} else if (page=="seasonal"){
		// grab those spring beers, dog
		data = {method : "beers", "availableId": 5, "order" : "abv", "sort" :"DESC", "p":p};
	} else if (page=="cellar"){
		data = {method : "beers", "ids": "RZfghP,mpfjHg,NXRM7y,Qx1hbt,R0MvCF,iLlMCb,FYS1Qj,y3lFdg,f9WbNU,x6bRxw,", "sort" :"ASC", "p":p};
	} else if (page=="purchases"){
		data = {method : "beers", "ids": "Qx1hbt,R0MvCF,iLlMCb,FYS1Qj,y3lFdg,CfJ0cK,AXqmST,NoNhan,f9WbNU,x6bRxw,", "sort" :"ASC", "p":p};
	} else if (page=="search"){
		data = {method : "search", "q": query, "p":p};
	}

	theRequest = $.getJSON(BASE, data, function(data){
		console.log(data);
		var ctx = {
			beers : data.data
		}
		var source = $("#beer-list").html();
		var tpl = Handlebars.compile(source);
		h += tpl(ctx);
		var fragment = document.createDocumentFragment();
		var d = document.createElement("div");
		d.innerHTML=h;
		if ($(d).find("li").length < 60 && data.currentPage < data.numberOfPages){
			$("#beerlist").append(h);
			$(".loading-text").remove();
			return getBeerList(h,p+1,page,query);
		} else {
			$("#beerlist").append(h);
		}
	});
}
getBeerList(listhtml, 1, "recommended");


$("nav").on("click", "a", function(e){
	e.preventDefault();
	if (theRequest){
		theRequest.abort();
	}
	var el = this;
	if (!$(this).is(".current")){
		$(el).addClass("current").siblings().removeClass("current");
		var sec = $(el).attr("href").replace("#", "");
		$("#logo small").html(sec[0].toUpperCase() + sec.slice(1));
		$("#beerlist").empty().html("<h3 class='loading-text'>Loading...</h3>");
		getBeerList("", 1, sec);
		$("#contain").removeClass("nav-open");
		$(".nav-switch").removeClass("open");
	} else {
		// do nothing.
	}
});
$(".nav-switch").on("click", function(e){
	console.log(e.target);
	console.log(this);
	if ($(this).hasClass("open")){
		$(this).removeClass("open");
		$("#contain").removeClass("nav-open");
	} else {
		$(this).addClass("open");
		$("#contain").addClass("nav-open");
	}
})
$(".search-switch i").on("click", function(e){
	$(e.target).parent().toggleClass("on");
});

var tout;
$("input[name=search-input]").on("keyup", function(){
	clearTimeout(tout);
	if (theRequest){
		theRequest.abort();
	}
	$("#logo small").html("Search")
	$("#beerlist").empty().html("<h3 class='loading-text'>Loading...</h3>");
	tout = setTimeout(function(){
		getBeerList("", 1, "search", $("input[name=search-input]").val());
	}, 300);
});
$("body").on("click", ".single-link", function(e){
	$("#index").fadeOut();
	var hash = $(this).attr("href");
	var id = hash.split("/")[hash.split("/").length-1];
	var data = { method : "beer/"+id }
	var h = "";
	theRequest.abort();
	theRequest = $.getJSON(BASE, data, function(data){
		console.log(data);
		var ctx = data.data;
		var source = $("#single-beer").html();
		var tpl = Handlebars.compile(source);
		h += tpl(ctx);
		$("#single").html(h).fadeIn();
		var rating = Math.round(Math.random() * 5);
		var i = 0;
		var h = "";
		for (i = i; i < rating; i++){
			h += "<i class='icon-star'></i>";
		}
		for (i = i; i < 5; i++){
			h += "<i class='icon-star-empty'></i>";
		}
		$(".review p").first().prepend("<div>"+h+"</div>");

			rating = Math.round(Math.random() * 5);
			i = 0;
			h = "";
		for (i = i; i < rating; i++){
			h += "<i class='icon-star'></i>";
		}
		for (i = i; i < 5; i++){
			h += "<i class='icon-star-empty'></i>";
		}
		$(".review p").last().prepend("<div>"+h+"</div>");
	});
});
$("body").on("click", ".back", function(e){
	e.preventDefault();
	$("#single").fadeOut(function(){$("#single").empty();});
	$("#index").fadeIn();
});
$("body").on("click", ".styleinfo a", function(e){
	e.preventDefault();
	$(e.target).toggleClass("open");
	$(e.target).parent().next("p").slideToggle();
});
$("body").on("submit", "#add-a-review", function(e){
	e.preventDefault();
	var username = $("input[name='username']").val();
	var comments = $("textarea[name='comments']").val();
	var comment = "<div class='review'>"
                            +"<div class='review-text'>"
                                +"<h5>"+username+"</h5>"
                                +"<img src='http://placekitten.com/g/120/120' class='floatleft avatar'>"
                                +"<p>"+comments+"</p>"
                            +"</div>"
                        +"</div>"
                        +"<hr>";
    $(".reviews").append(comment);
});