import React from "react";

function Footer() {
  return (
    <div>
      {/* <!--Site Footer Start--> */}
      <footer class="site-footer">
        <div
          class="site-footer__bg"
          style={{backgroundImage:"url(assets/images/backgrounds/site-footer-bg.png)"}}
        ></div>
        <div class="container">
          <div class="site-footer__top">
            <div class="row">
              <div
                class="col-xl-3 col-lg-3 col-md-6 wow fadeInUp"
                data-wow-delay="100ms"
              >
                <div class="footer-widget__column footer-widget__about">
                  <div class="footer-widget__logo">
                    <a href="index.html">
                      <img
                        src="images/resources/logo-bg-PhotoRoom.png-PhotoRoom.png"
                        alt=""
                      />
                    </a>
                  </div>
                  <p class="footer-widget__about-text">
                    نسعى دائما لتقديم افضل الخدمات البترولية
                  </p>
                  <div class="site-footer__social">
                    <a href="https://twitter.com/reben17509630" target='_blank'>
                      <i class="fab fa-twitter"></i>
                    </a>
                    <a href="https://www.youtube.com/@masakenalmejdl1196" target='_blank'>
                    <i class="fab fa-youtube"></i>
                    </a>
                    <a href="#">
                      <i class="fab fa-instagram"></i>
                    </a>
                  </div>
                </div>
              </div>
              <div
                class="col-xl-2 col-lg-2 col-md-6 wow fadeInUp"
                data-wow-delay="200ms"
              >
                <div class="footer-widget__column footer-widget__link">
                  <div class="footer-widget__title-box">
                    <h3 class="footer-widget__title">اكتشف</h3>
                  </div>
                  <ul class="footer-widget__link-list list-unstyled">
                    <li>
                      <a href="#">الرئيسية</a>
                    </li>
                    <li>
                      <a href="#">اتصل بنا</a>
                    </li>
                    <li>
                      <a href="#">عنا</a>
                    </li>
                    <li>
                      <a href="#">الخدمات</a>
                    </li>
                    <li>
                      <a href="#">المشاريع</a>
                    </li>
                  </ul>
                </div>
              </div>
              <div
                class="col-xl-3 col-lg-3 col-md-6 wow fadeInUp"
                data-wow-delay="500ms"
              >
                <div class="footer-widget__column footer-widget__Contact">
                  <div class="footer-widget__title-box">
                    <h3 class="footer-widget__title">تواصل معنا</h3>
                  </div>
                  <p class="footer-widget__Contact-text">
                  المملكة العربية السعودية , الرياض11497 <br />
                  حي المروة ,  شارع الصحراء المغربية 
                  </p>
                  <ul class="footer-widget__Contact-list list-unstyled">
                    <li>
                      <div class="icon">
                        <span class="fas fa-envelope"></span>
                      </div>
                      <div class="text">
                        <a href="reben@msaken-almejdl.com" target='_blank'>
                        reben@msaken-almejdl.com
                        </a>
                      </div>
                    </li>
                    <li>
                      <div class="icon">
                        <span class="fas fa-phone-square"></span>
                      </div>
                      <div class="text">
                        <a href="tel:+926668880000">920004648</a>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
              <div
                class="col-xl-4 col-lg-4 col-md-6 wow fadeInUp"
                data-wow-delay="500ms"
              >
                <div class="footer-widget__column footer-widget__newsletter">
                  <div class="footer-widget__title-box">
                    <h3 class="footer-widget__title">اخر الاخبار</h3>
                  </div>
                  <div class="footer-widget__newsletter-form-box">
                    <form
                      class="footer-widget__newsletter-form mc-form"
                      data-url="MC_FORM_URL"
                      noValidate="novalidate"
                    >
                      <div class="footer-widget__newsletter-form-input-box">
                        <input
                          type="email"
                          placeholder="Email Address"
                          name="EMAIL"
                        />
                        <button
                          type="submit"
                          class="footer-widget__newsletter-btn"
                        >
                          <span class="fas fa-paper-plane"></span>
                        </button>
                      </div>
                    </form>
                    <div class="mc-form__response"></div>
                    <div class="checked-box">
                      <input
                        type="checkbox"
                        name="skipper1"
                        id="skipper"
                        checked=""
                      />
                   
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="site-footer__bottom">
          <div class="container">
            <div class="row">
              <div class="col-xl-12">
                <div class="site-footer__bottom-inner">
                  <p class="site-footer__bottom-text">
                    ©   2023  مساكن المجدل <a href="#">للخدمات البترولية</a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
      {/* <!--Site Footer End--> */}
    </div>
  );
}

export default Footer;
