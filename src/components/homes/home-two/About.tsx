"use client";
import Image from "next/image";

import aboutRightImg from "@/assets/img/about/about-right.jpg";
import Link from "next/link";

interface ContentData {
  sub_title: string;
  title: JSX.Element;
  desc: JSX.Element;
  desc2: JSX.Element;
}

const about_content: ContentData = {
  sub_title: "President Message",
  title: (
    <>
      Ashok Kumar, <span>MD</span>
    </>
  ),
  desc: (
    <>
      I thank everyone for giving me an opportunity to serve as the President of
      ATMA- American Tamil Medical Association. I am very honored and privileged
      to serve in this role. As I take this great responsibility during the
      ongoing pandemic, I wish to work with everyone as a team to enhance the
      role of ATMA in providing medical needs to our community in Tamil Nadu as
      well as locally.
    </>
  ),
  desc2: (
    <>
      In the last 15 years ATMA has been involved in many projects that have
      benefitted several thousands, including multiple projects during the COVID
      pandemic. We will continue to do so as needed.
    </>
  ),
};

const { sub_title, title, desc, desc2 } = about_content;

const About = () => {
  return (
    <div className="about-us-two">
      <div className="container">
        <div className="row gap-100 align-items-center">
          <div className="col-xl-6">
            <div className="about-us-content-part mb-50">
              <div className="section-title mb-50">
                <span className="section-title__subtitle mb-10">
                  {sub_title}
                </span>
                <h2>{title}</h2>
              </div>
              <p>{desc}</p>
              <p>{desc2}</p>
              <Link className="cr-btn mt-30" href="#">
                Read More
              </Link>
            </div>
          </div>

          <div className="col-xl-6">
            <div className="about-us-image-part mb-65 rel">
              <Image src={aboutRightImg} alt="About" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
