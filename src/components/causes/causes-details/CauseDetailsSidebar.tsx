"use client";
import SidebarRcPost from "@/components/blogs/common-blog/SidebarRcPost";
import Link from "next/link";

const tags: string[] = ["ATMS", "Volunteers"];

const CauseDetailsSidebar = () => {
  return (
    <div className="main-sidebar rmt-75">
      <div className="widget widget_search">
        <h5 className="widget-title">Search Causes</h5>
        <form onClick={(e) => e.preventDefault()} className="search-form">
          <div className="form-group">
            <input type="text" placeholder="Search key word" required />
          </div>
          <button className="submit-btn" type="submit">
            <i className="flaticon-magnifying-glass"></i>
          </button>
        </form>
      </div>

      <SidebarRcPost />

      <div className="widget widget_tag_cloud">
        <h5 className="widget-title">Tags</h5>
        <div className="tagcloud">
          {tags.map((tag, index) => (
            <Link key={index} href="#">
              {tag}
            </Link>
          ))}
        </div>
      </div>

      <div className="widget widget_cta">
        <div
          className="cta-widget-inner"
          style={{ backgroundImage: `url(assets/img/widgets/cta-bg.jpg)` }}
        >
          <h5>We have provided financial help to 5 million people</h5>
          <a className="cr-btn ml-5" href="donate.html">
            Donate Now
          </a>
        </div>
      </div>
    </div>
  );
};

export default CauseDetailsSidebar;
