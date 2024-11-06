import Breadcrumb from "@/components/common/Breadcrumb";
import HeaderOne from "@/layout/headers/HeaderOne";
import ErrorArea from "./ErrorArea";
import FooterTwo from "@/layout/footers/FooterTwo";

const NotFound = () => {
  return (
    <>
      <HeaderOne style_1={false} style_2={false} />
      <main>
        <Breadcrumb page_title="Error Page" page_list="404" style={false} />
        <ErrorArea />
      </main>
      <FooterTwo />
    </>
  );
};

export default NotFound;
