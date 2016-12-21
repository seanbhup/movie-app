$(document).ready(function(){
	// THE BASE URL FOR ALL API CALLS

	$('#arrow1').click(function(){
		$('#page1,#page2,#page3').css({
			"right":"100vw"
		});
	})
	$('#arrow2').click(function(){
		$('#page1,#page2,#page3').css({
			"right":"0vw"
		});
	})
	$('#arrow3').click(function(){
		$('#page1,#page2,#page3').css({
			"right":"200vw"
		});
	})
	$('arrow4').click(function(){
		$("#page1,#page2,#page3").css({
			"right":"100vw"
		});
	})

	$("#movie-form").submit(function(){
		event.preventDefault();

		var apiBaseUrl = "http://api.themoviedb.org/3/";
		var imageBaseUrl = "http://image.tmdb.org/t/p/";
		var category = $("#search-category").val(); //tvshow/movie/person/company/keyword/collections
		var lowerCaseCategory = category.toLowerCase();
		var whatYouSearch = $("#search-name").val();
		const searchUrl = "https://api.themoviedb.org/3/search/"+lowerCaseCategory+"?api_key="+apiKey+"&language=en-US&page=1&query="+whatYouSearch;

		$.getJSON(searchUrl, function(searchData){
			// console.log(searchData)
			var searchDataHTML = "";
			for(let i = 0; i < searchData.results.length; i++){
				var posterUrl = imageBaseUrl + "w600" + searchData.results[i].poster_path;
				// var movieId = searchData.results[i].id
				// console.log(posterUrl);
				searchDataHTML += "<div class='col-sm-3'>";
					searchDataHTML += "<img src='"+posterUrl+"'>";
				searchDataHTML += "</div>";
			}
			$("#search-grid").html(searchDataHTML)
		// });
			// console.log(searchUrl)
		// var idUrl = 
		// $.getJSON(idUrl)
		// ------------------POSSIBLE VIDEO/TRAILER STUFF---------------------
		// movieId = "38030";
		// const videoUrl = "https://api.themoviedb.org/3/movie/"+movieId+"/videos?api_key="+apiKey+"&language=en-US"
		// // console.log(videoUrl);
		// $.getJSON(videoUrl, function(videoData){
		// 	var videoDataHTML = "";
		// 	// console.log(videoData.results[1].key);
		// 	// console.log(videoData);
		// 	for(let i = 0; i < videoData.results.length; i++){
		// 		var videoKey = videoData.results[i].key;
		// 		videoDataHTML += "<div class='col-sm-3'>";
		// 			videoDataHTML += "<a href='youtu.be/"+videoKey+"'</a>";
		// 		videoDataHTML += "</div>";
		// 		// console.log(videoData.results[i].key);
		// 	}
		// 	$("#video-link").html(videoDataHTML);
		// 	console.log(videoUrl);
		// });
		// -----------------------------------------------------------------
	});
	});
		var apiBaseUrl = "http://api.themoviedb.org/3/";
		var imageBaseUrl = "http://image.tmdb.org/t/p/";
		const nowPlayingUrl = apiBaseUrl + "movie/now_playing?api_key="+apiKey;
		$.getJSON(nowPlayingUrl, function(nowPlayingData){
			// console.log(nowPlayingData);
			var nowPlayingHTML = "";
			for(let i = 0; i < nowPlayingData.results.length; i++){
				var posterUrl = imageBaseUrl + "w300" + nowPlayingData.results[i].poster_path;

				// console.log(posterUrl);
				nowPlayingHTML += "<div class='col-sm-3'>";
					nowPlayingHTML += "<img src='"+posterUrl+"'>";
				nowPlayingHTML += "</div>";
			}
			$("#movie-grid").html(nowPlayingHTML);
		});

		var apiBaseUrl = "http://api.themoviedb.org/3/";
		var imageBaseUrl = "http://image.tmdb.org/t/p/";
		const upcomingUrl = apiBaseUrl + "movie/upcoming?api_key="+apiKey+"&language=en-US&page=1";
		$.getJSON(upcomingUrl, function(upcomingData){
			// console.log(upcomingData);
			var upcomingHTML = "";
			for(let i = 0; i < upcomingData.results.length; i++){
				var posterUrl = imageBaseUrl + "w300" + upcomingData.results[i].poster_path;

				// console.log(posterUrl);
				upcomingHTML += "<div class='col-sm-3'>";
					upcomingHTML += "<img src='"+posterUrl+"'>";
				upcomingHTML += "</div>";
			}
			$("#upcoming-movie-grid").html(upcomingHTML);
		});


});