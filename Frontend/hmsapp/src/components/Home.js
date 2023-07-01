import React from "react";
import './Home.css';
import logo from './img/heart logo.jpg';
import logo1 from './img/slide-1.jpg';
import logo2 from './img/slide-2.jpg';
import logo3 from './img/slide-3.jpg';
import logo4 from './img/doctors.jpg';
import logo5 from './img/david.jpg';
import logo6 from './img/sarah.jpg';
import logo7 from './img/heart logo.jpg';
function Home(){
    return <div>
        <div class="container-fluid bg-container">
            <header class="d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-3 mb-4 border-bottom">
            <div class="col-md-3 mb-2 mb-md-0">
                <img src={logo} alt="hospital logo" height="50" width="50"/>
            </div>
            
            <ul class="nav col-12 col-md-auto mb-2 justify-content-center mb-md-0">
                <li><a href="#" class="nav-link px-2 link-secondary">Home</a></li>
                <li><a href="#" class="nav-link px-2">Doctors</a></li>
                <li><a href="#" class="nav-link px-2">Gallery</a></li>
                <li><a href="#" class="nav-link px-2">Contact Us</a></li>
                <li><a href="#" class="nav-link px-2">About Us</a></li>
            </ul>
    
            <div class="col-md-3 text-end">
                <button type="button" class="btn btn-outline-dark me-2">Login</button>
                <button type="button" class="btn btn-dark">Sign-up</button>
            </div>
            </header>
        </div>

            
        
            <div class="container mb-2 pb-2" >
                <div id="carouselExampleCaptions" class="carousel slide d-flex">
                    <div class="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
                    </div>
                    <div class="carousel-inner">
                    <div class="carousel-item active">
                        <img src={logo1} class="d-block w-100" />
                        <div class="carousel-caption d-none d-md-block">
                        <h5>"Dedicated Professionals, Personalized Care"</h5>
                        <p>Where our compassionate experts tailor healthcare to your individual needs.</p>
                        </div>
                    </div>
                    <div class="carousel-item">
                        <img src={logo2} class="d-block w-100"/>
                        <div class="carousel-caption d-none d-md-block">
                        <h5>"A Legacy of Care: Nurturing Health for Generations"</h5>
                        <p>Caring for families, from birth to golden years, with unwavering commitment and compassion.</p>
                        </div>
                    </div>
                    <div class="carousel-item">
                        <img src={logo3} class="d-block w-100" alt="a image representing unity"/>
                        <div class="carousel-caption d-none d-md-block">
                        <h5>"Growing Stronger Together: Community Outreach Highlights"</h5>
                        <p>Join us as we make a positive impact, enriching lives beyond the walls of our hospital.</p>
                        </div>
                    </div>
                    </div>
                    <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Previous</span>
                    </button>
                    <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Next</span>
                    </button>
                </div>
            </div>

            <div class="container col-xxl-8 px-4 py-5">
                <div class="row flex-lg-row-reverse align-items-center g-5 py-5">
                  <div class="col-10 col-sm-8 col-lg-6">
                    <img src={logo4} class="d-block mx-lg-auto img-fluid"  width="700" height="500" loading="lazy"/>
                  </div>
                  <div class="col-lg-6">
                    <h4 class="display-5  text-body-emphasis lh-1 mb-3">Why Choose
                        VV Healthcare?</h4>
                    <p class="lead">VV Healthcare has a robust presence across the healthcare ecosystem. From routine wellness & preventive health care to innovative life-saving treatments and diagnostic services, VV Hospitals has touched more than 120 million lives from over 120 countries, offering the best clinical outcomes.</p>
                    
                  </div>
                </div>
              </div>
              
              <div class="container px-4 py-5 pt-0">
                <div class="row justify-content-center">
                  <div class="col-10 col-sm-8 col-lg-3">
                    <div class="icon-square text-body-emphasis bg-body-secondary d-inline-flex align-items-center justify-content-center fs-4 flex-shrink-0 me-3">
                        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" class="bi bi-heart-pulse" viewBox="0 0 16 16">
                            <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053.918 3.995.78 5.323 1.508 7H.43c-2.128-5.697 4.165-8.83 7.394-5.857.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17c3.23-2.974 9.522.159 7.394 5.856h-1.078c.728-1.677.59-3.005.108-3.947C13.486.878 10.4.28 8.717 2.01L8 2.748ZM2.212 10h1.315C4.593 11.183 6.05 12.458 8 13.795c1.949-1.337 3.407-2.612 4.473-3.795h1.315c-1.265 1.566-3.14 3.25-5.788 5-2.648-1.75-4.523-3.434-5.788-5Z"/>
                            <path d="M10.464 3.314a.5.5 0 0 0-.945.049L7.921 8.956 6.464 5.314a.5.5 0 0 0-.88-.091L3.732 8H.5a.5.5 0 0 0 0 1H4a.5.5 0 0 0 .416-.223l1.473-2.209 1.647 4.118a.5.5 0 0 0 .945-.049l1.598-5.593 1.457 3.642A.5.5 0 0 0 12 9h3.5a.5.5 0 0 0 0-1h-3.162l-1.874-4.686Z"/>
                          </svg>
                      </div>
                      <div>
                        <h5 class=" text-body-emphasis">Advanced Diagnostic Services</h5>
                        <p>Our hospital is equipped with state-of-the-art diagnostic facilities, including advanced imaging technologies such as MRI, CT scan, and digital X-ray.Our skilled radiologists provide accurate and timely diagnostic reports to aid in the precise diagnosis of various medical conditions.</p>
                        
                      </div>
                  </div>
                  <div class="col-10 col-sm-8 col-lg-3">
                    <div class="icon-square text-body-emphasis bg-body-secondary d-inline-flex align-items-center justify-content-center fs-4 flex-shrink-0 me-3">
                        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" class="bi bi-award" viewBox="0 0 16 16">
                            <path d="M9.669.864 8 0 6.331.864l-1.858.282-.842 1.68-1.337 1.32L2.6 6l-.306 1.854 1.337 1.32.842 1.68 1.858.282L8 12l1.669-.864 1.858-.282.842-1.68 1.337-1.32L13.4 6l.306-1.854-1.337-1.32-.842-1.68L9.669.864zm1.196 1.193.684 1.365 1.086 1.072L12.387 6l.248 1.506-1.086 1.072-.684 1.365-1.51.229L8 10.874l-1.355-.702-1.51-.229-.684-1.365-1.086-1.072L3.614 6l-.25-1.506 1.087-1.072.684-1.365 1.51-.229L8 1.126l1.356.702 1.509.229z"/>
                            <path d="M4 11.794V16l4-1 4 1v-4.206l-2.018.306L8 13.126 6.018 12.1 4 11.794z"/>
                          </svg>
                      </div>
                      <div>
                        <h5 class=" text-body-emphasis">Specialized Surgery Suites</h5>
                        <p>We have dedicated surgery suites equipped with modern surgical technology to perform a wide range of surgical procedures. Our team of experienced surgeons utilizes minimally invasive techniques whenever possible to ensure faster recovery and reduced post-operative discomfort.</p>
                        
                      </div>
                  </div>
                  <div class="col-10 col-sm-8 col-lg-3">
                    <div class="icon-square text-body-emphasis bg-body-secondary d-inline-flex align-items-center justify-content-center fs-4 flex-shrink-0 me-3">
                        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" class="bi bi-balloon-heart-fill" viewBox="0 0 16 16">
                            <path fill-rule="evenodd" d="M8.49 10.92C19.412 3.382 11.28-2.387 8 .986 4.719-2.387-3.413 3.382 7.51 10.92l-.234.468a.25.25 0 1 0 .448.224l.04-.08c.009.17.024.315.051.45.068.344.208.622.448 1.102l.013.028c.212.422.182.85.05 1.246-.135.402-.366.751-.534 1.003a.25.25 0 0 0 .416.278l.004-.007c.166-.248.431-.646.588-1.115.16-.479.212-1.051-.076-1.629-.258-.515-.365-.732-.419-1.004a2.376 2.376 0 0 1-.037-.289l.008.017a.25.25 0 1 0 .448-.224l-.235-.468ZM6.726 1.269c-1.167-.61-2.8-.142-3.454 1.135-.237.463-.36 1.08-.202 1.85.055.27.467.197.527-.071.285-1.256 1.177-2.462 2.989-2.528.234-.008.348-.278.14-.386Z"/>
                          </svg>
                      </div>
                      <div>
                        <h5 class=" text-body-emphasis">Maternity and Neonatal Care</h5>
                        <p>We provide comprehensive maternity care services, including prenatal care, labor and delivery, and postpartum care. Our dedicated team of obstetricians, gynecologists, and neonatologists ensures a safe and comfortable experience for expectant mothers and their newborns.</p>
                        
                      </div>
                  </div>
                </div>
              </div>
            
              
              <div class="p-5 text-center bg-body-tertiary rounded-3">
                <h6>Our Patients speak</h6>
                <h4 class="text-body-emphasis">David Johnson</h4>
                <img class="reviewers pt-1 pb-2" src={logo5} height="90"/>
                <p class="lead">
                    "Choosing VV Hospital was the best decision I made for my family's healthcare. From routine check-ups to emergency care, every visit has been met with professionalism, warmth, and a high level of expertise. The doctors and staff genuinely care about their patients, and that's what makes this hospital exceptional."
                </p>
            </div>
            
            <div class="p-5 text-center bg-body-tertiary rounded-3">
                <h4 class="text-body-emphasis">Sarah Williams</h4>
                <img class="reviewers pt-1 pb-2" src={logo6} height="90"/>
                <p class="lead">
                    "The level of care and attention I received at VV Hospital was outstanding. The doctors took the time to listen to my concerns, explain the treatment options, and involve me in the decision-making process. They made me feel empowered and supported throughout my medical journey, and I am grateful for their expertise and compassion."
                </p>
            </div>

            <div class="container-fluid">
                <footer class="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
                  <p class="col-md-4 mb-0 text-body-secondary">© 2023 VV Healthcare. All Rights Reserved.</p>
              
                  <a href="/" class="col-md-4 d-flex align-items-center justify-content-center mb-3 mb-md-0 me-md-auto link-body-emphasis text-decoration-none">
                    <img src={logo7}  width="45" height="45"/>
                  </a>
              
                  <ul class="nav col-md-4 justify-content-end">
                    <li class="nav-item"><a href="#" class="nav-link px-2 text-body-secondary">Home</a></li>
                    <li class="nav-item"><a href="#" class="nav-link px-2 text-body-secondary">Doctors</a></li>
                    <li class="nav-item"><a href="#" class="nav-link px-2 text-body-secondary">Gallery</a></li>
                    <li class="nav-item"><a href="#" class="nav-link px-2 text-body-secondary">Contact Us</a></li>
                    <li class="nav-item"><a href="#" class="nav-link px-2 text-body-secondary">About Us</a></li>
                  </ul>
                </footer>
              </div>
              <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js" integrity="sha384-geWF76RCwLtnZ8qwWowPQNguL3RmwHVBC9FhGdlKrxdiJJigb/j/68SIy3Te4Bkz" crossorigin="anonymous"></script>
        </div>
}
export default Home;