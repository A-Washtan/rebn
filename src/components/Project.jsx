import React from 'react'

function Project() {
  return (
    <>
     {/* <!--Project Two Start--> */}
        <section class="project-two">
            <div class="project-two__top">
                <div class="container">
                    <div class="row">
                        <div class="col-xl-6 col-lg-6">
                            <div class="project-two__left">
                                <div class="section-title text-left">
                                    <div class="section-title__tagline-box">
                                        <span class="section-title__tagline"> اكتشف اعمالنا</span>
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
                            </div>
                        </div>
                        
                    </div>
                </div>
            </div>
            <div class="project-two__bottom">
                <div class="container">
                    <div class="project-two__carousel thm-owl__carousel owl-theme owl-carousel" data-owl-options='{
                        "items": 3,
                        "margin": 60,
                        "smartSpeed": 700,
                        "loop":true,
                        "autoplay": true,
                        "nav":false,
                        "dots":false,
                        "navText": ["<span class=\"fa fa-angle-left\"></span>","<span class=\"fa fa-angle-right\"></span>"],
                        "responsive":{
                            "0":{
                                "items":1
                            },
                            "768":{
                                "items":2
                            },
                            "992":{
                                "items": 3
                            },
                            "1200":{
                                "items":3
                            }
                        }
                    }'>
                        {/* <!--Project Two Single Start--> */}
                        <div class="item">
                            <div class="project-two__single">
                                <div class="project-two__img-box">
                                    <div class="project-two__img">
                                        <img src="images/project/project-2-1.jpg" alt=""/>
                                    </div>
                                 
                                </div>
                            </div>
                        </div>
                        {/* <!--Project Two Single End-->
                        <!--Project Two Single Start--> */}
                        <div class="item">
                            <div class="project-two__single mar-top">
                                <div class="project-two__img-box">
                                    <div class="project-two__img">
                                        <img src="images/project/project-2-2.jpg" alt=""/>
                                    </div>
                               
                                </div>
                            </div>
                        </div>
                        {/* <!--Project Two Single End-->
                        <!--Project Two Single Start--> */}
                        <div class="item">
                            <div class="project-two__single">
                                <div class="project-two__img-box">
                                    <div class="project-two__img">
                                        <img src="images/project/project-2-3.jpg" alt=""/>
                                    </div>
                                 
                                </div>
                            </div>
                        </div>
                        {/* <!--Project Two Single End-->
                        <!--Project Two Single Start--> */}
                        <div class="item">
                            <div class="project-two__single mar-top">
                                <div class="project-two__img-box">
                                    <div class="project-two__img">
                                        <img src="images/project/project-2-4.jpg" alt=""/>
                                    </div>
                                
                                </div>
                            </div>
                        </div>
                        {/* <!--Project Two Single End-->
                        <!--Project Two Single Start--> */}
                        <div class="item">
                            <div class="project-two__single">
                                <div class="project-two__img-box">
                                    <div class="project-two__img">
                                        <img src="images/project/project-2-5.jpg" alt=""/>
                                    </div>
                                   
                                </div>
                            </div>
                        </div>
                        {/* <!--Project Two Single End--> */}
                    </div>
                </div>
            </div>
        </section>
        {/* <!--Project Two End--> */}
    </>
  )
}

export default Project