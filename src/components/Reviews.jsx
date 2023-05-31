import React, { useState } from 'react'
// import { GoogleMap, LoadScript, PlacesService, Autocomplete } from '@react-google-maps/api';


function Reviews(){
    // const apiKey = 'AIzaSyB1vXFKTvqgWp2Kyf0OtucbngVgQVB6Bf8';
    // const [reviews,setReviews] = useState()
    // const handlePlaceLoaded = (place) => {
    //     const service = new window.google.maps.places.PlacesService(mapRef.current);
    //     service.getDetails({
    //       placeId: place.place_id,
    //       fields: ['reviews'],
    //     }, (result, status) => {
    //       if (status === window.google.maps.places.PlacesServiceStatus.OK) {
    //         // Access the reviews in the `result` object and update your component's state
    //       }
    //     });
    //   };

    //   const mapOptions = {
    //     center: { lat: 24.56931921216352, lng: 46.7894640336675 },
    //     zoom: 12,
    //   };

    //   return (
    //     <LoadScript googleMapsApiKey={apiKey}>
    //       <GoogleMap mapContainerClassName="map-container" options={mapOptions}>
    //         <Autocomplete onLoad={handlePlaceLoaded} />
    //       </GoogleMap>
    //     </LoadScript>
    //   );

    //   return (
    //     <div>
    //       {reviews.map((review) => (
    //         <div key={review.author_name}>
    //           <p>{review.author_name}</p>
    //           <p>{review.rating}</p>
    //           <p>{review.text}</p>
    //         </div>
    //       ))}
    //     </div>
    //   );
  return (
   <>
    {/* <!--Testimonial One Start--> */}
		<section class="testimonial-one">
			<div class="container">
				<div class="section-title text-center">
					<div class="section-title__tagline-box">
						<span class="section-title__tagline">مراجعات</span>
						<div class="section-title__icon-box-1">
							<i class="fa fa-angle-left"></i>
							<i class="fa fa-angle-left"></i>
							<i class="fa fa-angle-left"></i>
						</div>
						<div class="section-title__icon-box-2">
							<i class="fa fa-angle-right"></i>
							<i class="fa fa-angle-right"></i>
							<i class="fa fa-angle-right"></i>
						</div>
					</div>
				</div>
				<div class="testimonial-one__bottom">
					<div class="testimonial-one__carousel owl-carousel owl-theme thm-owl__carousel" data-owl-options='{
                        "loop": true,
                        "autoplay": true,
                        "margin": 30,
                        "nav": false,
                        "dots": false,
                        "smartSpeed": 500,
                        "autoplayTimeout": 10000,
                        "navText": ["<span class=\"icon-right-arrow\"></span>","<span class=\"icon-right-arrow\"></span>"],
                        "responsive": {
                            "0": {
                                "items": 1
                            },
                            "768": {
                                "items": 1
                            },
                            "992": {
                                "items": 2
                            },
                            "1200": {
                                "items": 2
                            }
                        }
                    }'>
						{/* <!--Testimonial One Single Start--> */}
						<div class="item">
							<div class="testimonial-one__single">
							
								<div class="testimonial-one__shape-2"></div>
								
								<div class="testimonial-one__img">
									<img src="images/testimonial/testimonial-1-1.jpg" alt=""/>
								</div>
								<div class="testimonial-one__client-details">
									<h4 class="testimonial-one__client-name">محمد خالد</h4>
									<div class="testimonial-one__client-rate">
										<span class="fa fa-star"></span>
										<span class="fa fa-star"></span>
										<span class="fa fa-star"></span>
										<span class="fa fa-star"></span>
										<span class="fa fa-star"></span>
									</div>
								</div>
								<p class="testimonial-one__text">Leverage agile frameworks to provide a robust synopsis
									for high level overviews. Iterative approaches to corporate strategy data foster to
									collaborative thinking.</p>
							</div>
						</div>
						{/* <!--Testimonial One Single End-->
						<!--Testimonial One Single Start--> */}
						<div class="item">
							<div class="testimonial-one__single">
							
								<div class="testimonial-one__shape-2"></div>
								
								<div class="testimonial-one__img">
									<img src="images/testimonial/testimonial-1-2.jpg" alt=""/>
								</div>
								<div class="testimonial-one__client-details">
									<h4 class="testimonial-one__client-name">فيصل عبدالله</h4>
									<div class="testimonial-one__client-rate">
										<span class="fa fa-star"></span>
										<span class="fa fa-star"></span>
										<span class="fa fa-star"></span>
										<span class="fa fa-star"></span>
										<span class="fa fa-star"></span>
									</div>
								</div>
								<p class="testimonial-one__text">Leverage agile frameworks to provide a robust synopsis
									for high level overviews. Iterative approaches to corporate strategy data foster to
									collaborative thinking.</p>
							</div>
						</div>
						{/* <!--Testimonial One Single End-->
						<!--Testimonial One Single Start--> */}
						<div class="item">
							<div class="testimonial-one__single">
							
								<div class="testimonial-one__shape-2"></div>
								
								<div class="testimonial-one__img">
									<img src="images/testimonial/testimonial-1-3.jpg" alt=""/>
								</div>
								<div class="testimonial-one__client-details">
									<h4 class="testimonial-one__client-name">عبدالعزيز علي</h4>
									<div class="testimonial-one__client-rate">
										<span class="fa fa-star"></span>
										<span class="fa fa-star"></span>
										<span class="fa fa-star"></span>
										<span class="fa fa-star"></span>
										<span class="fa fa-star"></span>
									</div>
								</div>
								<p class="testimonial-one__text">Leverage agile frameworks to provide a robust synopsis
									for high level overviews. Iterative approaches to corporate strategy data foster to
									collaborative thinking.</p>
							</div>
						</div>
						{/* <!--Testimonial One Single End-->
						<!--Testimonial One Single Start--> */}
						<div class="item">
							<div class="testimonial-one__single">
							
								<div class="testimonial-one__shape-2"></div>
							
								<div class="testimonial-one__img">
									<img src="images/testimonial/testimonial-1-4.jpg" alt=""/>
								</div>
								<div class="testimonial-one__client-details">
									<h4 class="testimonial-one__client-name">عبدالله محمد</h4>
									<div class="testimonial-one__client-rate">
										<span class="fa fa-star"></span>
										<span class="fa fa-star"></span>
										<span class="fa fa-star"></span>
										<span class="fa fa-star"></span>
										<span class="fa fa-star"></span>
									</div>
								</div>
								<p class="testimonial-one__text">Leverage agile frameworks to provide a robust synopsis
									for high level overviews. Iterative approaches to corporate strategy data foster to
									collaborative thinking.</p>
							</div>
						</div>
						{/* <!--Testimonial One Single End--> */}
					</div>
				</div>
			</div>
		</section>
		{/* <!--Testimonial One End--> */}
   </>
  )
}

export default Reviews