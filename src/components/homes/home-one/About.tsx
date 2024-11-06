import Image from "next/image";
import Link from "next/link";

import aboutImg_1 from "@/assets/img/about/about1.jpg";
import aboutImg_2 from "@/assets/img/about/about2.jpg";
import aboutImg_3 from "@/assets/img/about/about3.jpg";

const About = () => {
  return (
    <div className="about-area py-120">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6">
            <div className="about-image-part">
              <div className="row">
                <div className="col-sm-6">
                  <div className="image">
                    <Image src={aboutImg_1} alt="About" />
                  </div>
                  <div className="project-complete mb-30">
                    <div className="project-complete__icon">
                      <i className="flaticon-charity"></i>
                    </div>
                    <div className="project-complete__content">
                      <h5>We Complate 15000+ Project</h5>
                      <span>Donet for charity</span>
                    </div>
                  </div>
                </div>

                <div className="col-sm-6">
                  <div className="image mt-65 rmt-15 rel">
                    <Image src={aboutImg_2} alt="About" />
                    <div className="experiences-years">
                      <span className="experiences-years__number">25</span>
                      <span className="experiences-years__text">
                        Years Experiences
                      </span>
                    </div>
                  </div>
                  <div className="image">
                    <Image src={aboutImg_3} alt="About" />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-6">
            <div className="about-content-part rmt-65">
              <div className="section-title mb-60">
                <span className="section-title__subtitle mb-10">
                  Our History
                </span>
                <h2>
                  <span>About Us</span>
                </h2>
              </div>
              <p>
                In January, 2005, a group of ten Tamil physicians in the United
                States established the American Tamil Medical Association
                (ATMA). Now there are more than 800 physicians and allied
                healthcare professionals as members and the membership is
                growing. It is a 501(c) 3, IRS tax exempt, charitable
                organization.
              </p>
              <ul className="list-style-one pt-15">
                <li>
                  In sit amet augue non dui sodale In sit amet augue non dui
                  sodale
                </li>
                <li>
                  In sit amet augue non dui sodale In sit amet augue non dui
                  sodale
                </li>
                <li>
                  In sit amet augue non dui sodale In sit amet augue non dui
                  sodale
                </li>
                <li>
                  In sit amet augue non dui sodale In sit amet augue non dui
                  sodale
                </li>
              </ul>
              <Link className="cr-btn ml-5 mt-25" href="#">
                Know More
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
