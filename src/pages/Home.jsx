import React from 'react'
import Email from '../components/Email'
import Reviews from '../components/Reviews'
import Project from '../components/Project'
import Mylocation from '../components/Mylocation'
import About from './About'

function Home() {
  return (
<>
<section class="sliding-text">
        <div class="sliding-text__wrap">
          <ul class="sliding-text__list list-unstyled">
            <li>محطات وقود </li>
            <li>مغاسل سيارات </li>
            <li>سوبر ماركت </li>
            <li>مغاسل سيارات </li>
            <li>مصليات </li>
            <li>دورات مياه </li>
            <li>استراحات </li>
          </ul>
        </div>
</section>

<section class="video-one">
			<div class="container">
				<div class="video-one__inner">
					<div class="video-one__bg-1"
              style={{backgroundImage: `url(images/backgrounds/video-one-bg-1.jpg)`}}>
            </div>
					<div class="video-one__bg-2"
						
            style={{backgroundImage: `url(images/backgrounds/video-one-bg-2-rtl.png)`}}>
              
            </div>
					
					<div class="video-one__video-box">
          <div class="about-two__video-link">
                                    <a  href="https://www.youtube.com/watch?v=xMKthMQ7-y4" target='' class="video-popup" >
                                        <div class="about-two__video-icon">
                                            <span class="fa fa-play"></span>
                                            <i class="ripple"></i>
                                        </div>
                                    </a>
                                </div>
						<h3 class="video-one__title">مساكن
							المجدل
							للخدمات
							البترولية</h3>
					</div>
				</div>
			</div>
		</section>
    {/* <!--Counter One Start--> */}
   
        <section class="counter-two">
            <div class="container">
                <ul class="counter-two__inner list-unstyled">
                    <li class="counter-two__single">
                        <div class="counter-two__icon">
                            <i class="icon-checking"></i>
                        </div>
                        <div class="counter-two__content">
                            <h3 class="odometer" data-count="886">00</h3>
                            <p class="counter-two__text">work Completed</p>
                        </div>
                    </li>
                    <li class="counter-two__single">
                        <div class="counter-two__icon">
                            <i class="icon-recommend"></i>
                        </div>
                        <div class="counter-two__content">
                            <h3 class="odometer" data-count="601">00</h3>
                            <p class="counter-two__text">happy customers</p>
                        </div>
                    </li>
                    <li class="counter-two__single">
                        <div class="counter-two__icon">
                            <i class="icon-increment"></i>
                        </div>
                        <div class="counter-two__content">
                            <h3 class="odometer" data-count="960">00</h3>
                            <p class="counter-two__text">Repeat customers</p>
                        </div>
                    </li>
                    <li class="counter-two__single">
                        <div class="counter-two__icon">
                            <i class="icon-consulting"></i>
                        </div>
                        <div class="counter-two__content">
                            <h3 class="odometer" data-count="240">00</h3>
                            <p class="counter-two__text">smartest team</p>
                        </div>
                    </li>
                </ul>
            </div>
        </section>
     
        {/* <!--Counter One End--> */}
    <Reviews/>

    <Email/>
    <About/>
    <Project/>
    <Mylocation/>
   

</>

  )
}
export default Home