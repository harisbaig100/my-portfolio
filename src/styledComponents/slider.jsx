import React from 'react';

const Slider = () => {
    return ( 
    <section class="home-banner-area" style={{marginBottom: 50}}>
    <div class="container">
        <div class="row fullscreen d-flex align-items-center">
            <div class="banner-content col-lg-6 col-md-12 justify-content-center ">
                <div class="me wow fadeInDown" data-wow-duration="1s" data-wow-delay="1.2s">It's me</div>
                <h1 class="wow fadeInUp" data-wow-duration="1s" data-wow-delay="1.7s">Kenedy Jackson</h1>
                <div class="designation mb-50 wow fadeInUp" data-wow-duration="1s" data-wow-delay="2.1s">
                    Senior Creative
                    <span class="designer">Designer</span>
                    and Content
                    <span class="developer">Developer</span>
                </div>
                <a href="#" class="primary-btn" data-text="Hire Me">
                    <span>H</span>
                    <span>i</span>
                    <span>r</span>
                    <span>e</span>
                    <span> </span>
                    <span>M</span>
                    <span>e</span>
                </a>
            </div>
            <div class="banner-img col-lg-6 col-md-6 align-self-end">
                <img class="img-fluid" src="img/banner-img.png" alt=""></img>
            </div>
            </div>
        </div>
    </section> 
);
}
 
export default Slider;