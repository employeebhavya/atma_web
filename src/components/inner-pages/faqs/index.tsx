import Breadcrumb from "@/components/common/Breadcrumb";
import HeaderOne from "@/layout/headers/HeaderOne";
import Brand from "@/components/common/Brand";
import FAQ from "@/components/homes/home-one/FAQ";
import FaqStyleOne from "./FaqStyleOne";
import CtaArea from "@/components/homes/home-three/CtaArea";
import FaqStyleTwo from "./FaqStyleTwo";
import FooterTwo from "@/layout/footers/FooterTwo";

const Faqs = () => {
  return (
    <>
      <HeaderOne style_1={false} style_2={false} />
      <main>
        <Breadcrumb
          page_title="frequently asked questions"
          page_list="Faq"
          style={true}
        />
        <FAQ />
        <FaqStyleOne />
        <CtaArea />
        <FaqStyleTwo />
        <Brand style={true} />
      </main>
      <FooterTwo />
    </>
  );
};

export default Faqs;
