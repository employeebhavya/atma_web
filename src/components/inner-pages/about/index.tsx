import Breadcrumb from "@/components/common/Breadcrumb";
import HeaderOne from "@/layout/headers/HeaderOne";
import About from "@/components/homes/home-one/About";
import Features from "@/components/homes/home-one/Features";
import Volunteer from "@/components/homes/home-two/Volunteer";
import FAQ from "@/components/homes/home-one/FAQ";
import FooterTwo from "@/layout/footers/FooterTwo";

const InnerAbout = () => {
  return (
    <>
      <HeaderOne style_1={false} style_2={false} />
      <main>
        <Breadcrumb page_title="About Us" page_list="About" style={false} />
        <About />
        <Features />
        <div style={{ backgroundColor: "#ffe7e6" }}>
          <Volunteer style={true} />
        </div>
        <FAQ />
      </main>
      <FooterTwo />
    </>
  );
};

export default InnerAbout;
