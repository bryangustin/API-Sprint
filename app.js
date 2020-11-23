// addEventListener("load", function(){

// 	fetch("https://api.nasa.gov/planetary/apod?api_key=5B6oJsSCQyekXZvNOKpsUhRPl1e7FHqjIAyHpybk")

// 	    .then(response => response.json())

// 	    .then((data) => {

// 	    		document.getElementById("title").textContent = data.title;
// 	    		document.getElementById("date").textContent = data.date;
// 	    		document.getElementById("picture").src = data.hdurl;
// 	    		document.getElementById("explanation").textContent = data.explanation;

// 	    })

// })
addEventListener("load", function(){

	let arrayData = [];

	fetch("https://api.nasa.gov/mars-photos/api/v1/rovers/opportunity/photos?sol=1000&api_key=5B6oJsSCQyekXZvNOKpsUhRPl1e7FHqjIAyHpybk")

	.then(response => response.json())
	.then((data) => {
		console.log(data);
		console.log(data.photos[3].rover);
		// console.log(data.photos[4].camera);

		for(let i=0; i < 5 ; i++){
			arrayData.push(data.photos[i]);
		};

	});

	fetch("https://api.nasa.gov/mars-photos/api/v1/rovers/spirit/photos?sol=1000&api_key=5B6oJsSCQyekXZvNOKpsUhRPl1e7FHqjIAyHpybk")

	.then(response => response.json())
	.then((data) => {
		for(let i=0; i < 5 ; i++){
			arrayData.push(data.photos[i]);
		};


	});

	fetch("https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&api_key=5B6oJsSCQyekXZvNOKpsUhRPl1e7FHqjIAyHpybk")

	.then(response => response.json())
	.then((data) => {

		arrayData.push(data.photos[0]);
		arrayData.push(data.photos[8]);
		arrayData.push(data.photos[68]);
		arrayData.push(data.photos[287]);
		arrayData.push(data.photos[678]);
		console.log(arrayData);
		console.log(data.photos.rover);
		arrayData.forEach(element => {
			let img = `<img src="${element.img_src}" id="picture" alt="astronomy image by NASA" />`;
			document.getElementById("images").insertAdjacentHTML("beforeend", img);
			let earthDate = `<img "${element.earth_date}" id="picture" alt="astronomy image by NASA" />`;
			document.getElementById("images").insertAdjacentHTML("beforeend", earthDate);
		})

	});

	// $('#nav').slick({
	//   slidesToShow: 1,
	//   slidesToScroll: 1,
	//   arrows: false,
	//   fade: true,
	//   asNavFor: '.slider-nav'
	// });
	// $('#images').slick({
	//   slidesToShow: 3,
	//   slidesToScroll: 1,
	//   asNavFor: '.slider-for',
	//   dots: true,
	//   centerMode: true,
	//   focusOnSelect: true
	// });
	// $('#images').slick();


});
