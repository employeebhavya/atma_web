import Breadcrumb from "@/components/common/Breadcrumb";
import HeaderOne from "@/layout/headers/HeaderOne";
import CauseArea from "./CauseArea";
import FooterTwo from "@/layout/footers/FooterTwo";

const Causes = () => {
  return (
    <>
      <HeaderOne style_1={false} style_2={false} />
      <main>
        <Breadcrumb page_title="Our Causes" page_list="Causes" style={false} />
        <CauseArea />
      </main>
      <FooterTwo />
    </>
  );
};

export default Causes;
