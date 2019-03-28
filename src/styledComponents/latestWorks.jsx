import React from 'react';

const LatestWorks = () => {
    return ( <section class="work-area section-gap-top section-gap-bottom-90" id="work">
    <div class="container">
        <div class="row d-flex justify-content-between align-items-end mb-80">
            <div class="col-lg-6">
                <div class="section-title">
                    <h2>Latest Works</h2>
                    <p>If you are looking at blank cassettes on the web, you may be very confused at the difference in price. You may see
                        some for as low as $.17 each.</p>
                </div>
            </div>

            <div class="col-lg-6">
                <div class="filters">
                    <ul>
                        <li class="active" data-filter=".all">All Categories</li>
                        <li data-filter=".branding">Branding</li>
                        <li data-filter=".creative">Creative Work</li>
                        <li data-filter=".web-design">Web Design</li>
                    </ul>
                </div>
            </div>
        </div>

        <div class="filters-content">
            <div class="row grid">
                <div class="single-work col-lg-4 col-md-6 col-sm-12 all creative wow fadeInUp" data-wow-duration="2s">
                    <div class="relative">
                        <div class="thumb">
                            <div class="overlay overlay-bg"></div>
                            <img class="image img-fluid" src="img/work/w1.jpg" alt=""></img>
                        </div>
                        <div class="middle">
                            <h4>2D Vinyl Design</h4>
                            <div class="cat">Client Project</div>
                        </div>
                        <a class="overlay" href="portfolio-details.html"></a>
                    </div>
                </div>
                <div class="single-work col-lg-4 col-md-6 col-sm-12 all web-design branding wow fadeInUp" data-wow-duration="2s" data-wow-delay="0.2s">
                    <div class="relative">
                        <div class="thumb">
                            <div class="overlay overlay-bg"></div>
                            <img class="image img-fluid" src="img/work/w2.jpg" alt=""></img>
                        </div>
                        <div class="middle">
                            <h4>2D Vinyl Design</h4>
                            <div class="cat">Client Project</div>
                        </div>
                        <a class="overlay" href="portfolio-details.html"></a>
                    </div>
                </div>
                <div class="single-work col-lg-4 col-md-6 col-sm-12 all branding web-design wow fadeInUp" data-wow-duration="2s" data-wow-delay="0.4s">
                    <div class="relative">
                        <div class="thumb">
                            <div class="overlay overlay-bg"></div>
                            <img class="image img-fluid" src="img/work/w3.jpg" alt=""></img>
                        </div>
                        <div class="middle">
                            <h4>2D Vinyl Design</h4>
                            <div class="cat">Client Project</div>
                        </div>
                        <a class="overlay" href="portfolio-details.html"></a>
                    </div>
                </div>
                <div class="single-work col-lg-4 col-md-6 col-sm-12 all web-design wow fadeInUp" data-wow-duration="2s" data-wow-delay="0.6s">
                    <div class="relative">
                        <div class="thumb">
                            <div class="overlay overlay-bg"></div>
                            <img class="image img-fluid" src="img/work/w6.jpg" alt=""></img>
                        </div>
                        <div class="middle">
                            <h4>2D Vinyl Design</h4>
                            <div class="cat">Client Project</div>
                        </div>
                        <a class="overlay" href="portfolio-details.html"></a>
                    </div>
                </div>
                <div class="single-work col-lg-4 col-md-6 col-sm-12 all creative wow fadeInUp" data-wow-duration="2s">
                    <div class="relative">
                        <div class="thumb">
                            <div class="overlay overlay-bg"></div>
                            <img class="image img-fluid" src="img/work/w4.jpg" alt=""></img>
                        </div>
                        <div class="middle">
                            <h4>2D Vinyl Design</h4>
                            <div class="cat">Client Project</div>
                        </div>
                        <a class="overlay" href="portfolio-details.html"></a>
                    </div>
                </div>
                <div class="single-work col-lg-4 col-md-6 col-sm-12 all branding wow fadeInUp" data-wow-duration="2s" data-wow-delay="0.2s">
                    <div class="relative">
                        <div class="thumb">
                            <div class="overlay overlay-bg"></div>
                            <img class="image img-fluid" src="img/work/w5.jpg" alt=""></img>
                        </div>
                        <div class="middle">
                            <h4>2D Vinyl Design</h4>
                            <div class="cat">Client Project</div>
                        </div>
                        <a class="overlay" href="portfolio-details.html"></a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section> );
}
 
export default LatestWorks;