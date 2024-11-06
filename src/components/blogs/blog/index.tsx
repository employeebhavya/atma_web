import Breadcrumb from "@/components/common/Breadcrumb";
import HeaderOne from "@/layout/headers/HeaderOne";
import BlogArea from "./BlogArea";
import FooterTwo from "@/layout/footers/FooterTwo";

const Blog = () => {
  return (
    <>
      <HeaderOne style_1={false} style_2={false} />
      <main>
        <Breadcrumb page_title="Blog Post" page_list="Blog" style={false} />
        <BlogArea />
      </main>
      <FooterTwo />
    </>
  );
};

export default Blog;
