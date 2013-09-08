$.get("bicycle_orders.json", function(data) {
	console.log(data);	

	var output = '';
		$.each(data, function(key, val){
			console.log("in json");
			console.log(key);
			output += '<div class="slide">';
			output += '<h3>' + val.name + '</h3>';
			output += '<h4>' + val.wheel_set.name + '</h4>';
			// output += '<div class="overlay"></div>';
			// output += '<img src="img/' + val.image + '">';
			output += '</div>';
		});
	$('.content').append(output);
});

