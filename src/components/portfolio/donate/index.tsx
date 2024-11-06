import Breadcrumb from "@/components/common/Breadcrumb";
import HeaderOne from "@/layout/headers/HeaderOne";
import DonateArea from "./DonateArea";
import FooterTwo from "@/layout/footers/FooterTwo";

const Donate = () => {
  return (
    <>
      <HeaderOne style_1={false} style_2={false} />
      <main>
        <Breadcrumb page_title="Donate Now" page_list="Donate" style={false} />
        <DonateArea />
      </main>
      <FooterTwo />
    </>
  );
};

export default Donate;
