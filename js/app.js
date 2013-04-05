var BASE = "call.php";

Handlebars.registerHelper('ifBoth', function(v1, v2, options) {
  if(v1 && v2) {
    return options.fn(this);
  }
  return options.inverse(this);
});
$.ajaxSetup({
	cache : false
});
var theRequest;

var listhtml = "";
function getBeerList(h,p,page,query){
	var data;
	
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
		var ctx = {
			beers : data.data
		}
		console.log(data);
		var source   = $("#beer-list").html();
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