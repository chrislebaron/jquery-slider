$( document ).ready(function() {
	//Put the thumbnails on the page
	var placeThumbs = function() {
		var picHTML = '';
		var thumbDiv = document.getElementById('thumbDiv');
		for (var cat_index in piclist) {
			var category = piclist[cat_index];
			var divName = 'category' + (parseInt(cat_index)+1);
			var newWidth = (85) * category.length + 'px';
			// make a separate div for each category that resizes to about the width of all the images with a bit of margin
			picHTML += '<div id="' + divName + '" class="category"><div id="category-images'+ (parseInt(cat_index)+1) + '" style="width: ' + newWidth + ';">'; 
			for (var image_index in category) {
				var imagepair = category[image_index];
				var fullsize = baseurl + imagepair[0];
				var thumbnail = baseurl + imagepair[1];
				//add the image to the category div
				picHTML += '<img src="' + thumbnail + '" class="thumbnail" >';
				
			};
			picHTML += '</div></div>'; //end the divs we started a second ago

		};
		thumbDiv.innerHTML = picHTML;
	};

	var intialSetup = function() {
		$('#category2').addClass('hidden');
		$('#category3').addClass('hidden');
		$('#category4').addClass('hidden');
		$('<img src="http://russ.php.cs.dixie.edu/gardens/medium/viva01.jpg">').appendTo('#mainSlider');
	};

	var setThumbClickHandlers = function() {
		$('#thumbDiv').click(function (event){
			if ($(event.target).is('.thumbnail')) {
				// alert("an image has been touched!");
				var picURL = $(event.target).attr('src').split("/").pop();
				newPicURL = baseurl + 'medium/' + picURL;
				console.log(newPicURL);
				
				// not working need to fix this!
				// $('#mainSlider:first-child').attr('src', newPicURL);

			};
		});

	};

	var setButtonClickHandlers = function() {
		$('#buttons').click(function (event){
			if ($(event.target).is('.button')) {
				// alert("button:" + event.target.id);
				if (event.target.id == 'cat1Button'){
					$('#category2').addClass('hidden');
					$('#category3').addClass('hidden');
					$('#category4').addClass('hidden');
					$('#category1').removeClass('hidden');
				};
				if (event.target.id == 'cat2Button'){
					$('#category1').addClass('hidden');
					$('#category3').addClass('hidden');
					$('#category4').addClass('hidden');
					$('#category2').removeClass('hidden');
				};
				if (event.target.id == 'cat3Button'){
					$('#category1').addClass('hidden');
					$('#category2').addClass('hidden');
					$('#category4').addClass('hidden');
					$('#category3').removeClass('hidden');
				};
				if (event.target.id == 'cat4Button'){
					$('#category1').addClass('hidden');
					$('#category2').addClass('hidden');
					$('#category3').addClass('hidden');
					$('#category4').removeClass('hidden');
				};
			};
		});

	};





	placeThumbs();
	intialSetup();
	setThumbClickHandlers();
	setButtonClickHandlers();
});