const navTemplate = `
<div>
<nav id="headroom" class="navbar navbar-top-default navbar-expand-lg static-nav bg-white2"
>
<div class="container">
  <a class="logo link" href="javascript:void(0)">
    <img
      src="images/logotext.png"
      alt="logo"
      title="Logo"
      class="logo-default"
    />
    <img
      src="images/logotext.png"
      alt="logo"
      title="Logo"
      class="logo-scrolled"
    />
    <span class="logoText">Convergent</span>
    <span class="logtag">Building Solutions together...</span>
  </a>
  <div
    id="menu"
    class="collapse navbar-collapse d-none d-lg-block mod-menu"
  >
    <ul class="nav navbar-nav ml-auto">
      <li class="nav-item" data-link="home">
        <a href="index.html" class="nav-link link">home </a>
      </li>
      <li class="nav-item mega-menu four-col" data-link="product">
        <a
          href="javascript:void(0)"
          class="nav-link link dropdown-arrow product_menu"
        >
          Products & Services
        </a>
        <ul class="hide-cursor product_dropdown_menu">
          <li>
            <a href="#">OUR PRODUCTS</a> <span class="arrow"></span>
            <ul>
              <li>
                <a href="travelsuite.html">Travel Leisure and Aviation</a>
              </li>
              <li>
                <a href="healthcare.html">
                  Healthcare Ecosystem
                </a>
              </li>
              
              <li>
                <a href="visa.html">
                  Visa Process Automation
                </a>
              </li>
                           
              
            </ul>
          </li>
          <li>
            <a href="#">OUR SERVICES</a> <span class="arrow"></span>
            <ul>
              <li>
                <a href="cybersecurity.html">Cybersecurity</a>
              </li>
              <li>
                <a href="analytics.html">Enterprise Analytics</a>
              </li>
              
              <li>
                <a href="salesforce.html">Salesforce</a>
              </li>
              <li>
                <a href="resource.html">Resource Fulfillment</a>
              </li>

              <li>
              <a href="#" style="font-weight:600; ">ZOHO &lpar;IMPLEMENTATION AND CUSTOMIZATION&rpar; </a> <span class=""></span>
              <ul>
                <li>
                  <a href="zoho_ksp.html">Zoho CRM Kick Starter Pack
                  </a>
                </li>
                <li>
                  <a href="zoho_one.html">Zoho One
                  </a>
                </li>
                
              </ul>
            </li>


            </ul>

          </li>






          <li>
            <a href="#">Project Engineering</a>
            <span class="arrow"></span>
            <ul>
              <li>
                <a href="devops.html">DevOps</a>
              </li>
              <li>
                <a href="mobileapp.html">Mobile App Dev</a>
              </li>
              <li>
                <a href="poc.html">Proof Of Concept</a>
              </li>
              <li>
                <a href="uiprototype.html">UI Prototype</a>
              </li>
              <li>
                <a href="quality.html">Quality Assurance</a>
              </li>
            </ul>
          </li>
          <li>
            <a href="#">Our Solutions</a> <span class="arrow"></span>
            <ul>
              <li>
                <a href="invoice.html">
                  Invoice Automation
                </a>
              </li>              
              <li>
                <a href="passport.html">
                  Passport Data Harvestor
                </a>
              </li>
              <li>
                <a href="document.html">
                    Document Management system
                </a>
              </li>
            </ul>
          </li>
          <li>
            <a href="#">Automation</a> <span class="arrow"></span>
            <ul>
              <li>
                <a href="rpa.html">Robotic Process Automation</a>
              </li>
              <li>
                <a href="aiml.html">AI & ML</a>
              </li>
            </ul>
          </li>
        </ul>
      </li>
      <li class="nav-item" data-link="technology">
        <a href="technology.html" class="nav-link link">
          Technology
        </a>
      </li>
      <li class="nav-item" data-link="about">
        <a href="about.html" class="nav-link link">About </a>
      </li>
      <li class="nav-item right" data-link="contact">
        <a href="contact.html" class="nav-link link"> contact </a>
      </li>
    </ul>
  </div>
  <div class="header-social d-none d-lg-inline-block">
    <a href="https://www.facebook.com/Convergent-Technology-Solutions-Pvt-Ltd-109853143858696" class="facebook-text-hvr link"
      ><i class="ti ti-facebook" aria-hidden="true"></i
    ></a>
    <a href="https://twitter.com/ConvergentLtd/" class="twitter-text-hvr link"
      ><i class="ti ti-twitter-alt" aria-hidden="true"></i
    ></a>
    <a href="https://www.linkedin.com/company/convergent-technology-solutions-pvt-ltd/" class="linkedin-text-hvr link"
      ><i class="ti ti-linkedin" aria-hidden="true"></i
    ></a>
  </div>
  <a class="menu_bars d-inline-block menu-bars-setting animated-wrap" id="sidemenu_toggle">
      <div class="menu-lines animated-element">
          <span></span>
          <span></span>
          <span></span>
      </div>
  </a>
</div>
</nav>
<div class="side-menu d-none">
  <div class="inner-wrapper nav-icon">
    <span class="btn-close link" id="btn_sideNavClose"></span>
    <nav class="side-nav w-100">
      <div class="position-relative">
        <div class="navbar-nav side-main-menu">
          <a class="nav-link link active" href="index.html"> Home </a>
          <a class="nav-link link active" href="about.html"> About </a>
          <a
            class="nav-link link sidenav-arrow multi-item2"
            href="javascript:void(0)"
            >Products</a
          >
          <a
            class="nav-link link sidenav-arrow single-item1"
            href="javascript:void(0)"
            >Services</a
          >
          <a
            class="nav-link link sidenav-arrow single-item2"
            href="javascript:void(0)"
            >Project Engineering</a
          >
          <a
            class="nav-link link sidenav-arrow multi-item4"
            href="javascript:void(0)"
            >Our Solutions</a
          >
          <a
            class="nav-link link sidenav-arrow multi-item3"
            href="javascript:void(0)"
            >Automation</a
          >
          <a class="nav-link link" href="technology.html">Technology</a>
          <a class="nav-link link" href="contact.html">Contact</a>

          <a class="menu-line"
            ><i class="ti ti-angle-right" aria-hidden="true"></i
          ></a>
        </div>

        <div class="navbar-nav sub-multi-item2">
          <a class="nav-link link" href="travelsuite.html">
            Travel Leisure and Aviation
          </a>
          <a class="nav-link link" href="healthcare.html">
            Healthcare Ecosystem
          </a>
          
          <a class="nav-link link" href="visa.html">
            Visa Process Automation
          </a>
          
          <a class="menu-line">
            <i class="ti ti-angle-right" aria-hidden="true"></i>
          </a>
          <a
            class="nav-link link arrow-back back-main"
            href="javascript:void(0)"
          >
            Back
          </a>
        </div>

        <div class="navbar-nav side-sub-menu single-item1">
          <a class="nav-link link" href="cybersecurity.html">
            Cybersecurity
          </a>
          <a class="nav-link link" href="analytics.html">
            Enterprise Analytics
          </a>
          
          <a class="nav-link link" href="salesforce.html">
            Salesforce
          </a>
          <a class="nav-link link" href="zoho_ksp.html">
            Zoho CRM Kick Starter Pack
          </a>
          <a class="nav-link link" href="zoho_one.html">
            Zoho One
          </a>
          <a class="menu-line"
            ><i class="ti ti-angle-right" aria-hidden="true"></i
          ></a>
          <a
            class="nav-link link arrow-back back-main"
            href="javascript:void(0)"
          >
            Back
          </a>
        </div>

        <div class="navbar-nav side-sub-menu single-item2">
          <a class="nav-link link" href="devops.html"> DevOps </a>
          <a class="nav-link link" href="mobileapp.html">
            Mobile App Dev
          </a>
          <a class="nav-link link" href="poc.html">
            Proof Of Concept
          </a>
          <a class="nav-link link" href="uiprototype.html">
            UI Prototype
          </a>
          <a class="nav-link link" href="quality.html">
            Quality Assurance
          </a>
          <a class="menu-line">
            <i class="ti ti-angle-right" aria-hidden="true"></i>
          </a>
          <a
            class="nav-link link arrow-back back-main"
            href="javascript:void(0)"
          >
            Back
          </a>
        </div>

        <div class="navbar-nav sub-multi-item4">
          <a class="nav-link link" href="invoice.html">
            Invoice Automation
          </a>
          <a class="nav-link link" href="passport.html">
            Passport Data Harvestor
          </a>
          <a class="nav-link link" href="document.html">
            Document Management system
          </a>
          <a
            class="nav-link link arrow-back back-main"
            href="javascript:void(0)"
          >
            Back
          </a>
        </div>

        <div class="navbar-nav sub-multi-item3">
          <a class="nav-link link" href="rpa.html">
            Robotic Process Automation
          </a>
          <a class="nav-link link" href="aiml.html"> AI & ML </a>

          <a class="menu-line">
            <i class="ti ti-angle-right" aria-hidden="true"></i>
          </a>
          <a
            class="nav-link link arrow-back back-main"
            href="javascript:void(0)"
          >
            Back
          </a>
        </div>
      </div>
    </nav>
  </div>
</div>
<a id="close_side_menu" href="javascript:void(0);"></a>
</div>`;
Vue.component('nav-bar', {
  template: navTemplate,
  props: ['activeLink'],
  data: () => ({
    activePage: this.activeLink,
  }),
  mounted() {
    console.log('activePage', this.activeLink);
  },
});

const banner = `<section class="page_header pb-0 w-100" :style="bg">
<div class="container">
  <div class="row">
    <div class="col-md-12 page-content position-relative">
      <h2 class="text-white mt-5 mb-2">{{title}}</h2>
      <div class="page_nav bg-white d-inline-block">
        <a href="index.html" class="d-inline-block color-black">Home</a>
        <span class="color-summer-sky">
        <i class="ti ti-angle-double-right"></i>{{breadcrumb}}
        </span>
      </div>
    </div>
  </div>
</div>
</section>`;
Vue.component('banner', {
  template: banner,
  props: ['title', 'breadcrumb', 'bannerImg'],
  data: () => ({
    bg: '"background: url({{this.bannerImg}}) no-repeat"',
  }),
  mounted() {
    this.bg = '"background: url({{this.bannerImg}}) no-repeat"';
  },
});

Vue.component('client-section', {
  template: `<section id="clients" class="bg-change bg-white p-0 cursor-light no-transition d-none">
    <h2 class="d-none">heading</h2>
    <div class="section-padding parallax-setting parallaxie parallax1">
      <div class="container">
        <div class="row">
          <div
            class="col-lg-12 col-md-12 col-sm-12 text-center wow fadeIn"
            data-wow-delay="300ms"
          >
            <h5
              class="mb-10px font-weight-normal line-height-17px color-summer-sky text-capitalize"
            >
              Worldwide feedback
            </h5>
            <h2
              class="mb-25px font-weight-light line-height-normal black color-black"
            >
              Happy Clients
            </h2>
          </div>
        </div>
        <div class="testimonial-images">
          <div class="owl-thumbs owl-dots d-lg-block d-none">
            <div class="owl-dot animated-wrap active">
              <img
                src="images/testimonial/male.png"
                alt=""
                class="animated-element"
              />
            </div>
            <div class="owl-dot animated-wrap">
              <img
                src="images/testimonial/female.png"
                alt=""
                class="animated-element"
              />
            </div>
            <div class="owl-dot animated-wrap">
              <img
                src="images/testimonial/female.png"
                alt=""
                class="animated-element"
              />
            </div>
            <div class="owl-dot animated-wrap">
              <img
                src="images/testimonial/male.png"
                alt=""
                class="animated-element"
              />
            </div>

            <div class="owl-dot animated-wrap">
              <img
                src="images/testimonial/female.png"
                alt=""
                class="animated-element"
              />
            </div>
            <div class="owl-dot animated-wrap">
              <img
                src="images/testimonial/male.png"
                alt=""
                class="animated-element"
              />
            </div>
            <div class="owl-dot animated-wrap">
              <img
                src="images/testimonial/female.jpg"
                alt=""
                class="animated-element"
              />
            </div>
            <div class="owl-dot animated-wrap">
              <img
                src="images/testimonial/male.jpg"
                alt=""
                class="animated-element"
              />
            </div>
          </div>
        </div>

        <div class="row align-items-center position-relative">
          <div class="col-md-12">
            <div
              class="owl-carousel owl-theme testimonial-two hide-cursor mx-auto wow zoomIn"
              data-wow-delay="400ms"
            >
              <div class="testimonial-item">
                <p class="color-black testimonial-para mb-15px">
                  Curabitur mollis bibendum luctus. Duis suscipit vitae dui
                  sed suscipit. Vestibulum auctor nunc vitae diam eleifend,
                  in maximus metus sollicitudin. Quisque vitae sodales
                  lectus. Nam porttitor justo sed mi finibus, vel tristique
                  risus faucibus.
                </p>
                <div class="testimonial-post">
                  <a href="javascript:void(0)" class="post"
                    ><img src="images/testimonial/male.png" alt="image"
                  /></a>
                  <div class="text-content">
                    <h5 class="color-black text-capitalize">
                      David Walker
                    </h5>
                    <p class="color-grey">Chairman, AcroEx</p>
                    <div class="rating">
                      <i class="ti ti-star"></i>
                      <i class="ti ti-star"></i>
                      <i class="ti ti-star"></i>
                      <i class="ti ti-star"></i>
                      <i class="ti ti-star"></i>
                    </div>
                  </div>
                </div>
              </div>
              <div class="testimonial-item hide-cursor">
                <p class="color-black testimonial-para mb-15px">
                  Curabitur mollis bibendum luctus. Duis suscipit vitae dui
                  sed suscipit. Vestibulum auctor nunc vitae diam eleifend,
                  in maximus metus sollicitudin. Quisque vitae sodales
                  lectus. Nam porttitor justo sed mi finibus, vel tristique
                  risus faucibus.
                </p>

                <div class="testimonial-post">
                  <a href="javascript:void(0)" class="post"
                    ><img src="images/testimonial/female.png" alt="image"
                  /></a>
                  <div class="text-content">
                    <h5 class="color-black text-capitalize">
                      Christina Williams
                    </h5>
                    <p class="color-grey">HR Manager</p>
                    <div class="rating">
                      <i class="ti ti-star"></i>
                      <i class="ti ti-star"></i>
                      <i class="ti ti-star"></i>
                      <i class="ti ti-star"></i>
                      <i class="ti ti-star"></i>
                    </div>
                  </div>
                </div>
              </div>
              <div class="testimonial-item">
                <p class="color-black testimonial-para mb-15px">
                  Curabitur mollis bibendum luctus. Duis suscipit vitae dui
                  sed suscipit. Vestibulum auctor nunc vitae diam eleifend,
                  in maximus metus sollicitudin. Quisque vitae sodales
                  lectus. Nam porttitor justo sed mi finibus, vel tristique
                  risus faucibus.
                </p>

                <div class="testimonial-post">
                  <a href="javascript:void(0)" class="post"
                    ><img src="images/testimonial/female.png" alt="image"
                  /></a>
                  <div class="text-content">
                    <h5 class="color-black text-capitalize">Sarah Jones</h5>
                    <p class="color-grey">Sales Executive</p>
                    <div class="rating">
                      <i class="ti ti-star"></i>
                      <i class="ti ti-star"></i>
                      <i class="ti ti-star"></i>
                      <i class="ti ti-star"></i>
                      <i class="ti ti-star"></i>
                    </div>
                  </div>
                </div>
              </div>
              <div class="testimonial-item">
                <p class="color-black testimonial-para mb-15px">
                  Curabitur mollis bibendum luctus. Duis suscipit vitae dui
                  sed suscipit. Vestibulum auctor nunc vitae diam eleifend,
                  in maximus metus sollicitudin. Quisque vitae sodales
                  lectus. Nam porttitor justo sed mi finibus, vel tristique
                  risus faucibus.
                </p>

                <div class="testimonial-post">
                  <a href="javascript:void(0)" class="post"
                    ><img src="images/testimonial/male.png" alt="image"
                  /></a>
                  <div class="text-content">
                    <h5 class="color-black text-capitalize">
                      Chris Gorgano
                    </h5>
                    <p class="color-grey">Photographer</p>
                    <div class="rating">
                      <i class="ti ti-star"></i>
                      <i class="ti ti-star"></i>
                      <i class="ti ti-star"></i>
                      <i class="ti ti-star"></i>
                      <i class="ti ti-star"></i>
                    </div>
                  </div>
                </div>
              </div>

              <div class="testimonial-item">
                <p class="color-black testimonial-para mb-15px">
                  Curabitur mollis bibendum luctus. Duis suscipit vitae dui
                  sed suscipit. Vestibulum auctor nunc vitae diam eleifend,
                  in maximus metus sollicitudin. Quisque vitae sodales
                  lectus. Nam porttitor justo sed mi finibus, vel tristique
                  risus faucibus.
                </p>

                <div class="testimonial-post">
                  <a href="javascript:void(0)" class="post"
                    ><img src="images/testimonial/female.png" alt="image"
                  /></a>
                  <div class="text-content">
                    <h5 class="color-black text-capitalize">Kate Carter</h5>
                    <p class="color-grey">Model</p>
                    <div class="rating">
                      <i class="ti ti-star"></i>
                      <i class="ti ti-star"></i>
                      <i class="ti ti-star"></i>
                      <i class="ti ti-star"></i>
                      <i class="ti ti-star"></i>
                    </div>
                  </div>
                </div>
              </div>
              <div class="testimonial-item">
                <p class="color-black testimonial-para mb-15px">
                  Curabitur mollis bibendum luctus. Duis suscipit vitae dui
                  sed suscipit. Vestibulum auctor nunc vitae diam eleifend,
                  in maximus metus sollicitudin. Quisque vitae sodales
                  lectus. Nam porttitor justo sed mi finibus, vel tristique
                  risus faucibus.
                </p>

                <div class="testimonial-post">
                  <a href="javascript:void(0)" class="post"
                    ><img src="images/testimonial/male.png" alt="image"
                  /></a>
                  <div class="text-content">
                    <h5 class="color-black text-capitalize">Alex Curtis</h5>
                    <p class="color-grey">Manager</p>
                    <div class="rating">
                      <i class="ti ti-star"></i>
                      <i class="ti ti-star"></i>
                      <i class="ti ti-star"></i>
                      <i class="ti ti-star"></i>
                      <i class="ti ti-star"></i>
                    </div>
                  </div>
                </div>
              </div>
              <div class="testimonial-item">
                <p class="color-black testimonial-para mb-15px">
                  Curabitur mollis bibendum luctus. Duis suscipit vitae dui
                  sed suscipit. Vestibulum auctor nunc vitae diam eleifend,
                  in maximus metus sollicitudin. Quisque vitae sodales
                  lectus. Nam porttitor justo sed mi finibus, vel tristique
                  risus faucibus.
                </p>

                <div class="testimonial-post">
                  <a href="javascript:void(0)" class="post"
                    ><img src="images/testimonial/female.jpg" alt="image"
                  /></a>
                  <div class="text-content">
                    <h5 class="color-black text-capitalize">
                      Ashley Wilson
                    </h5>
                    <p class="color-grey">Actor</p>
                    <div class="rating">
                      <i class="ti ti-star"></i>
                      <i class="ti ti-star"></i>
                      <i class="ti ti-star"></i>
                      <i class="ti ti-star"></i>
                      <i class="ti ti-star"></i>
                    </div>
                  </div>
                </div>
              </div>
              <div class="testimonial-item">
                <p class="color-black testimonial-para mb-15px">
                  Curabitur mollis bibendum luctus. Duis suscipit vitae dui
                  sed suscipit. Vestibulum auctor nunc vitae diam eleifend,
                  in maximus metus sollicitudin. Quisque vitae sodales
                  lectus. Nam porttitor justo sed mi finibus, vel tristique
                  risus faucibus.
                </p>

                <div class="testimonial-post">
                  <a href="javascript:void(0)" class="post"
                    ><img src="images/testimonial/male.jpg" alt="image"
                  /></a>
                  <div class="text-content">
                    <h5 class="color-black text-capitalize">
                      Johnny Perkins
                    </h5>
                    <p class="color-grey">Athlete</p>
                    <div class="rating">
                      <i class="ti ti-star"></i>
                      <i class="ti ti-star"></i>
                      <i class="ti ti-star"></i>
                      <i class="ti ti-star"></i>
                      <i class="ti ti-star"></i>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>`,
});

const mapTemplate = `<section id="contact" class="bg-light-gray parallax-setting parallaxie parallax5">
<div class="bg-overlay bg-black2 opacity-9"></div>
<div class="container">
  <div class="row pb-xs-0">
    <div
      class="col-lg-6 col-md-12 col-sm-12 mb-3 wow fadeInUp"
      data-wow-delay="400ms"
    >
      <div class="contact-box-shadow">
        <div class="text-left sm-text-center w-100">
          <h2
            class="color-black font-weight-normal mb-2rem text-capitalize"
          >
            Connect with Convergent.
          </h2>
          <p class="contact-para-setting">
            Reach out to us and our team of experts would be happy to
            help you. When we say we are just a click away, we mean
            it. Drop us a mail and we will get back to you
          </p>
        </div>
        <div class="contact-info sm-text-center">
          <div class="icon-box">
            <i class="ti ti-mobile color-summer-sky"></i>
            <p class="color-grey">+91-44-45561433</p>
          </div>
          <div class="icon-box">
            <i class="ti ti-email color-yellow"></i>
            <p>
              <a
                href="mailto:support@convergentechnologies.com"
                class="color-grey"
                >support@convergentechnologies.com</a
              >
            </p>
          </div>
          <div class="icon-box">
            <i class="ti ti-location-pin color-green"></i>
            <p class="color-grey">
              #88 5th Floor Anmol Palani, G N Chetty Road, T Nagar,
              Chennai 600017
            </p>
          </div>
        </div>
      </div>
    </div>
    <div
      class="col-lg-6 col-md-12 col-sm-12 mb-3 col-map wow fadeInUp"
      data-wow-delay="400ms"
    >
    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3886.8672348781574!2d80.23835081430498!3d13.044121716813338!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a5267aabad5cddf%3A0xdbfbc0e3b0fc5e8e!2sConvergent%20Technology%20Solutions%20Pvt%20Ltd!5e0!3m2!1sen!2sin!4v1602514764766!5m2!1sen!2sin" width="100%" height="450" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>
    </div>
  </div>
</div>
</section>`;

Vue.component('map-section', {
  template: mapTemplate,
});

Vue.component('page-footer', {
  template: `<footer class="bg-black2">
    <div class="container">
      <div class="row">
        <div class="col-md-12 col-sm-12 text-center">
          <ul class="footer-icons mb-2">
            <li>
              <a href="https://www.facebook.com/Convergent-Technology-Solutions-Pvt-Ltd-109853143858696
              " class="wow fadeInUp facebook"
                ><i class="ti ti-facebook"></i>
              </a>
            </li>
            <li>
              <a href="https://twitter.com/ConvergentLtd/" class="wow fadeInDown twitter"
                ><i class="ti ti-twitter"></i>
              </a>
            </li>
            
            <li>
              <a href="https://www.linkedin.com/company/convergent-technology-solutions-pvt-ltd/" class="wow fadeInDown linkedin"
                ><i class="ti ti-linkedin"></i>
              </a>
            </li>
            <li>
              <a href="https://www.instagram.com/convergentechnologysolutions/" class="wow fadeInUp instagram"
                ><i class="ti ti-instagram"></i>
              </a>
            </li>
            
          </ul>
          <p class="copyrights mt-2 mb-2">© 2020 Convergent Technologies</p>
        </div>
      </div>
    </div>
  </footer>`,
});

const getStart = {
  products: [
    {
      title: 'Travel, Leisure And Aviation',
      desc:
        "Convergent's Travel Solutions Comes Packed With An Exhaustive Range Of Services That Are The Best And Most Pocket Friendly In The Industry. Our Solutions Are Compatible With Both Your Business And Client Needs In A More Comprehensive Way.",
      link: 'travelsuite.html',
    },
    {
      title: 'Healthcare',
      desc:
        'Technicalities of the IT converges into the healthcare sector at Convergent Technologies. While we claim to provide the best healthcare solutions ranging from patients to doctors and pharmaceutical laboratories, our wide range of services surely speaks a lot.',
      link: 'healthcare.html',
    },
   
    {
      title: 'Visa Automation',
      desc:
        'Modern travel technologies have taken over the world and so has the need for the Visa Automation. We at Convergent provide efficient click and proceed integrations for visa generation.',
      link: 'visa.html',
    },
    
  ],
  services: [
    {
      title: 'Cybersecurity',
      desc:
        'Let your firm have the best security measures with Convergent’s Cybersecurity technical and compliance solutions. We are committed to protecting your data and privacy behind the strongest possible walls.',
      link: 'cybersecurity.html',
    },
    {
      title: 'Enterprise Analytics',
      desc:
        'With a large amount of data inflow into the system comes the indeed to provide analysis methods that would be the means for providing information on the patterns, customer behaviour and other specific info that the data could provide. The experts at Convergent keep coming up with excellent solutions for the same.',
      link: 'analytics.html',
    },
    
    {
      title: 'SalesForce',
      desc:
        'Ranked the best CRM tool worldwide, Salesforce is your one stop platform for all your customer management services. And we are here to ease your burden by helping you get along with it.',
      link: 'salesforce.html',
    },
    {
      title: 'Zoho CRM Kick Starter Pack',
      desc:
        'This exceptional package is perfect for businesses aiming to initiat the use of Zoho CRM without extensive time and cost investments. Benefit from our expertise in implementing SaaS Products for top-tier clients, which guarantees best results. The scope of this package is meticulously crafted to enable any Zoho CRM immediately after implementation.',
      link: 'zoho_crm.html',
    },
    {
      title: 'Zoho One',
      desc:
        'This exceptional package is perfect for businesses aiming to initiat the use of Zoho One products without extensive time and cost investments. Benefit from our expertise in implementing SaaS Products for top-tier clients, which guarantees best results. The scope of this package is meticulously crafted to enable any Zoho One product immediately after implementation.',
      link: 'zoho_one.html',
    },
  ],
  projects: [
    {
      title: 'Devops',
      desc:
        'To be in pace with the dynamic market structure in today’s world, incorporating DevOps to streamline the workflow is very essential. With Convergent, apply the right combination of DevOps technologies, culture and processes to enable continual software delivery and better value for customers.',
      link: 'devops.html',
    },
    {
      title: 'Mobile App Development',
      desc:
        'When customer focus shifts to the small screens, creating and managing interactive and easily navigable mobile applications become a necessity for any business. Create smart, interactive and navigable Mobile Applications with Convergent.',
      link: 'mobileapp.html',
    },
    {
      title: 'Proof Of Concept',
      desc:
        'Proof of Concept is the best way to get started with your wishlist of ideas. At Convergent, we drill down to the hows and whys and come up with the best plausible way of implementing your vision. So be it a brand new concept or adding features to an existing application, we got it for you.',
      link: 'poc.html',
    },
    {
      title: 'UI Prototypes',
      desc:
        'Get a thorough understanding of your product/market fit by testing your key hypotheses before moving to production. Our process is based on rapid ideas and agile methods with iterative delivery and tangible product models. Because, it always helps to have a blueprint before deployment',
      link: 'uiprototype.html',
    },
    {
      title: 'Quality Assurance',
      desc:
        'Convergent caters to end-to-end performance, functional and automation testing to produce an absolutely bug-free product. We mitigate our client’s technical and business risks through our custom-designed quality assurance frameworks, methodologies and accelerators.',
      link: 'quality.html',
    },
  ],
  solutions: [
    {
      title: 'Invoice Automation',
      desc:
        'Automatically generate invoices for your clients and create a better impression of acing your work and early payment reminders as soon as the item is dispatched.',
      link: 'invoice.html',
    },
    {
      title: 'Passport Data Harvestor',
      desc:
        'Enable easy and automatic passport scans to record data for documenting and verification needed in hotels, hospitals, aviation etc with Convergent’s Passport Data Harvesting Services.',
      link: 'passport.html',
    },
    {
      title: 'Document Management System',
      desc:
        'Opensource and free solution for handling all your online and offline documents with proper indexing, versions controls, compression on the server and detailed searches.',
      link: 'document.html',
    },
  ],
  automation: [
    {
      title: 'Robotic Process Automation',
      desc:
        'Harness the true potential of Robotic Automation to reduce delivery costs and pace up work with greater accuracy. Give your enterprise the tough new edge with Convergent’s Automation Solutions.',
      link: 'rpa.html',
    },
    {
      title: 'AI & ML',
      desc:
        'Working with artificial intelligence opens up a world of endless opportunities. From face detection to document classification and behaviour tracking, machine learning algorithms are a new way forward. Convergent helps customers optimize their businesses, boost their productivity, and deliver breakthrough innovations to deliver competitive advantages using our advanced cutting edge solutions and expertise.',
      link: 'aiml.html',
    },
  ],
};

const vueApp = new Vue({
  el: '#vapp',
  data: () => ({
    getStart: getStart,
  }),
});
