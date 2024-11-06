import Breadcrumb from "@/components/common/Breadcrumb";
import HeaderOne from "@/layout/headers/HeaderOne";
import EventArea from "./EventArea";
import FooterTwo from "@/layout/footers/FooterTwo";

const Event = () => {
  return (
    <>
      <HeaderOne style_1={false} style_2={false} />
      <main>
        <Breadcrumb
          page_title="Our Latest Event"
          page_list="Event"
          style={false}
        />
        <EventArea />
      </main>
      <FooterTwo />
    </>
  );
};

export default Event;
