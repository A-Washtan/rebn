import React , { useRef } from 'react'
import emailjs from '@emailjs/browser';
export default function Email() {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm('service_plto5wb', 'template_4dob2rq', form.current, 'HBeNZ-xGECaYUaAKR')
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });

      };

  return (
    <>
    {/* <div className='form'>
    <div className='container'>
        <div className='box'>
        <p className='text-center'>عرض السعر</p>
          <h2>لتقديم عرض سعر يرجى التكرم بتعبئة البيانات التالية</h2>
          <p><svg xmlns="http://www.w3.org/2000/svg" width="300" height="100" fill="currentColor" className="bi bi-arrow-left-square" viewBox="0 0 13 17">
            <path fillRule="evenodd" d="M15 2a1 1 0 0 0-1-1H2a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V2zM0 2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2zm11.5 5.5a.5.5 0 0 1 0 1H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5H11.5z"/>
          </svg>
        </p>
        </div>
    <div className='box'>
        <form >
      <label>الاسم</label>
      <input type="text" name="user_name" />
      <label>البريد</label>
      <input type="email" name="user_email" />
      <label>التفاصيل</label>
      <textarea name="message" />
      <input type="submit" value="Send" />
    </form>
    </div>
    </div>
    
    </div> */}
    {/* <!--Contact One Start--> */}
		<section className="contact" id='contact'>
			
			<div className="container">
				<div className="row">
        <div className="col-xl-6">
						<div className="contact__left">
							<div className="contact__img">
								<img src="images/resources/contact-img-1.jpg" alt=""/>
							</div>
						</div>
					</div>
					<div className="col-xl-6">
						<div className="contact__right">
							<div className="contact__shape-2"></div>
							<div className="contact__shape-3 float-bob-x">
								<img src="images/shapes/contact-shape-3.png" alt=""/>
							</div>
							<div className="section-title text-left">
								<div className="section-title__tagline-box">
									<span className="section-title__tagline">تواصل معنا</span>
									<div className="section-title__icon-box-1">
										<i className="fa fa-angle-left"></i>
										<i className="fa fa-angle-left"></i>
										<i className="fa fa-angle-left"></i>
									</div>
									<div className="section-title__icon-box-2">
										<i className="fa fa-angle-right"></i>
										<i className="fa fa-angle-right"></i>
										<i className="fa fa-angle-right"></i>
									</div>
								</div>
								
							</div>
							<div className="contact__form-box">
								<form ref={form} onSubmit={sendEmail}  className="contact__form contact-form-validated"
									noValidate="novalidate">
									<div className="row">
										<div className="col-xl-6 col-lg-6">
											<div className="contact__form-input-box">
												<input type="text" placeholder="الاسم" name="name"/>
											</div>
										</div>
										<div className="col-xl-6 col-lg-6">
											<div className="contact__form-input-box">
												<input type="email" placeholder="البريد الالكتروني" name="email"/>
											</div>
										</div>
										<div className="col-xl-6 col-lg-6">
											<div className="contact__form-input-box">
												<input type="text" placeholder="الجوال" name="phone"/>
											</div>
										</div>
										<div className="col-xl-6 col-lg-6">
											<div className="contact__form-input-box">
												<select className="selectpicker" aria-label="Default select example">
													<option selected>محطات</option>
													<option value="1">محلات تجارية</option>
													<option value="2">مغاسل سيارات</option>
													<option value="3">كوفي شوب</option>
												</select>
											</div>
										</div>
									</div>
									<div className="row">
										<div className="col-xl-12">
											<div className="contact__form-input-box text-message-box">
												<textarea name="message" placeholder="تفاصيل "></textarea>
											</div>
											<div className="contact__btn-box">
												<button type="submit" className="thm-btn contact__btn">ارسال </button>
											</div>
										</div>
									</div>
								</form>
								<div className="result"></div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
		{/* <!--Contact One End--> */}
    </>
  )
}
