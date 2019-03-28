import React from 'react';

const Footer = () => {
    return ( 
    <footer class="footer-area">
    <div class="container">
        <div class="row justify-content-center">
            <div class="col-lg-12">
                <div class="footer-top flex-column">
                    <div class="footer-logo">
                        <a href="#">
                            <img src="img/logo.png" alt=""></img>
                        </a>
                        <h4>Follow Me</h4>
                    </div>
                    <div class="footer-social">
                        <a href="#"><i class="fa fa-facebook"></i></a>
                        <a href="#"><i class="fa fa-twitter"></i></a>
                        <a href="#"><i class="fa fa-dribbble"></i></a>
                        <a href="#"><i class="fa fa-behance"></i></a>
                    </div>
                </div>
            </div>
        </div>
        <div class="row footer-bottom justify-content-center">
            <p class="col-lg-8 col-sm-12 footer-text">
Copyright &copy;<script>document.write(new Date().getFullYear());</script> All rights reserved
            </p>
        </div>
    </div>
</footer> );
}
 
export default Footer;