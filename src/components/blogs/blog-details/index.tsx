import Breadcrumb from "@/components/common/Breadcrumb";
import HeaderOne from "@/layout/headers/HeaderOne";
import BlogDetailsArea from "./BlogDetailsArea";
import FooterTwo from "@/layout/footers/FooterTwo";

const BlogDetails = () => {
  return (
    <>
      <HeaderOne style_1={false} style_2={false} />
      <main>
        <Breadcrumb
          page_title="Blog Details"
          page_list="Blog Details"
          style={false}
        />
        <BlogDetailsArea />
      </main>
      <FooterTwo />
    </>
  );
};

export default BlogDetails;
