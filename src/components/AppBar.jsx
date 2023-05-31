import React from 'react'

 function AppBar() {
  
  return (
    <>
 



  
 <header className="main-header">
    <nav className="main-menu">
      <div className="main-menu__wrapper">
        <div className="main-menu__wrapper-inner">
          <div className="main-menu__left">
            <div className="main-menu__logo">
              <a href="#"><img src='images/resources/logo-bg-PhotoRoom.png-PhotoRoom.png' alt="" /></a>
            </div>
            <div className="main-menu__main-menu-box">
              <a href="#" className="mobile-nav__toggler">
                <i className="fa fa-bars"></i></a>
              <ul className="main-menu__list">
                <li className="dropdown current megamenu">
                  <a href="#">الرئيسية </a>
                </li>
                <li className="dropdown">
                  <a href="#about">عنا</a>
                </li>
                <li className="dropdown">
                  <a href="#">الخدمات</a>
                </li>
                <li className="dropdown">
                  <a href="#map">المشاريع</a>
                </li>

                <li>
                  <a href="#contact">اتصل بنا</a>
                </li>
              </ul>
            </div>
          </div>
          <div className="main-menu__right">
            <div className="main-menu__call">
              <div className="main-menu__call-icon">
                <img src="../assets/images/icon/main-menu-call-icon-1.png" alt="" />
              </div>
              <div className="main-menu__call-content">
                <p className="main-menu__call-sub-title">تواصل معنا</p>
                <h5 className="main-menu__call-number">
                  <a href="tel:+928800863600">920004648</a>
                </h5>
              </div>
            </div>
            <div className="main-menu__search-cart-box">
              <div className="main-menu__search-box">
                <a href="#" className="main-menu__search search-toggler icon-magnifying-glass"></a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  </header>
  
  <div class="stricky-header stricked-menu main-menu">
			<div class="sticky-header__content"></div>
		</div>

  <section className="main-slider">
        <div
          className="main-slider__carousel owl-carousel owl-theme thm-owl__carousel"
          data-owl-options='{"loop": true, "rtl": true, "items": 1, "navText": ["<span class=\"icon-left-arrow\"></span>","<span class=\"icon-right-arrow\"></span>"], "margin": 0, "dots": true, "nav": false, "animateOut": "slideOutDown", "animateIn": "fadeIn", "active": true, "smartSpeed": 1000, "autoplay": true, "autoplayTimeout": 7000, "autoplayHoverPause": false}'
        >
          <div className="item main-slider__slide-1">
            <div
              className="main-slider__bg"
              // style="backgroundimage: url(assets/images/backgrounds/slider-1-1.jpg);"
              style={{backgroundImage: `url(images/backgrounds/slider-1-1.jpg)`}}
                                            
            ></div>
          
            <div className="main-slider__bg-two-outer">
              <div
                className="main-slider__bg-two"
                // style=" background-image: url(assets/images/backgrounds/slider-1-1.jpg);"
                style={{backgroundImage: `url(images/backgrounds/slider-1-1.jpg)`}}
              ></div>
     
            </div>
   
            <div className="main-slider__shape-1 float-bob-x">
              <img
                src="../assets/images/shapes/main-slider-shape-1-rtl.png"
                alt=""
              />
            </div>
           
            <div class="main-slider__shape-3 float-bob-x">
              <img
                src="./assets/images/shapes/main-slider-shape-3-rtl.png"
                alt=""
              />
            </div>
            <div class="container">
              <div class="main-slider__content">
                <p class="main-slider__sub-title">
                  مساكن المجدل للخدمات البترولية
                </p>
                <h2 class="main-slider__title">
                   <br />
                  ريبن
                </h2>
              </div>
            </div>
          </div>

          <div class="item main-slider__slide-2">
            <div
              class="main-slider__bg"
              style={{backgroundImage:`url(images/backgrounds/slider-1-2.jpg)`}}
              // style="
              //   background-image: url(assets/images/backgrounds/slider-1-2.jpg);
              // "
            ></div>
           
            <div class="main-slider__bg-two-outer">
              <div
                class="main-slider__bg-two"
                style={{backgroundImage: `url(images/backgrounds/slider-1-2.jpg)`}}
                // style="
                //   background-image: url(assets/images/backgrounds/slider-1-2.jpg);
                // "
              ></div>
           
            </div>
       
            <div class="main-slider__shape-1 float-bob-x">
              <img
                src="images/shapes/main-slider-shape-1-rtl.png"
                alt=""
              />
            </div>
           
            <div class="main-slider__shape-3 float-bob-x">
              <img
                src="images/shapes/main-slider-shape-3-rtl.png"
                alt=""
              />
            </div>
            <div class="container">
              <div class="main-slider__content">
                <p class="main-slider__sub-title">
                  مساكن المجدل للخدمات البترولية
                </p>
                <h2 class="main-slider__title">
                    <br />
                  ريبن
                </h2>
              </div>
            </div>
          </div>

          <div class="item main-slider__slide-3">
            <div
              class="main-slider__bg"
              style={{backgroundImage: `url(images/backgrounds/slider-1-3.jpg)`}}
              // style="
              //   background-image: url(assets/images/backgrounds/slider-1-3.jpg);
              // "
            ></div>
       
            <div class="main-slider__bg-two-outer">
              <div
                class="main-slider__bg-two"
                style={{backgroundImage: `url(images/backgrounds/slider-1-3.jpg)`}}
                // style="
                //   background-image: url(assets/images/backgrounds/slider-1-3.jpg);
                // "
              ></div>
             
            </div>
           
            <div class="main-slider__shape-1 float-bob-x">
              <img
                src="images/shapes/main-slider-shape-1-rtl.png"
                alt=""
              />
            </div>
          
            <div class="main-slider__shape-3 float-bob-x">
              <img
                src="images/shapes/main-slider-shape-3-rtl.png"
                alt=""
              />
            </div>
            <div class="container">
              <div class="main-slider__content">
                <p class="main-slider__sub-title">
                  مساكن المجدل للخدمات البترولية
                </p>
                <h2 class="main-slider__title">
                    <br />
                  ريبن
                </h2>
              </div>
            </div>
          </div>
          <div class="item main-slider__slide-3">
            <div
              class="main-slider__bg"
              style={{backgroundImage: `url(images/backgrounds/slider-1-4.jpg)`}}
              // style="
              //   background-image: url(assets/images/backgrounds/slider-1-3.jpg);
              // "
            ></div>
       
            <div class="main-slider__bg-two-outer">
              <div
                class="main-slider__bg-two"
                style={{backgroundImage: `url(images/backgrounds/slider-1-4.jpg)`}}
                // style="
                //   background-image: url(assets/images/backgrounds/slider-1-3.jpg);
                // "
              ></div>
             
            </div>
           
            <div class="main-slider__shape-1 float-bob-x">
              <img
                src="images/shapes/main-slider-shape-1-rtl.png"
                alt=""
              />
            </div>
          
            <div class="main-slider__shape-3 float-bob-x">
              <img
                src="images/shapes/main-slider-shape-3-rtl.png"
                alt=""
              />
            </div>
            <div class="container">
              <div class="main-slider__content">
                <p class="main-slider__sub-title">
                  مساكن المجدل للخدمات البترولية
                </p>
                <h2 class="main-slider__title">
                  <br />
                  ريبن
                </h2>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      






  
 
  


    </>
  )
}
export default AppBar