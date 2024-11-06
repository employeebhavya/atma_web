import Breadcrumb from "@/components/common/Breadcrumb";
import HeaderOne from "@/layout/headers/HeaderOne";
import Brand from "@/components/common/Brand";
import EventDetailsArea from "./EventDetailsArea";
import FooterTwo from "@/layout/footers/FooterTwo";

const EventDetails = () => {
  return (
    <>
      <HeaderOne />
      <main>
        <Breadcrumb page_title="Our Events Slider" page_list="Event" />
        <EventDetailsArea />
        <Brand style={true} />
      </main>
      <FooterTwo />
    </>
  );
};

export default EventDetails;
