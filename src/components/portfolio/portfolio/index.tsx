import Breadcrumb from "@/components/common/Breadcrumb";
import ChooseArea from "@/components/homes/home-one/ChooseArea";
import HeaderOne from "@/layout/headers/HeaderOne";
import PortfolioArea from "./PortfolioArea";
import FooterTwo from "@/layout/footers/FooterTwo";

const Portfolio = () => {
  return (
    <>
      <HeaderOne style_1={false} style_2={false} />
      <main>
        <Breadcrumb
          page_title="Our Recent Work"
          page_list="Portfolio"
          style={false}
        />
        <PortfolioArea />
        <ChooseArea />
      </main>
      <FooterTwo />
    </>
  );
};

export default Portfolio;
