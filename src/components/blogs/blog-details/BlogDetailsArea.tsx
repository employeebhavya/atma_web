import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import CommonSocialIcon from "@/components/common/SocialIcon";
import BlogDetailsForm from "@/components/forms/BlogDetailsForm";
import BlogSidebar from "../common-blog";

import blogDetailsThumb from "@/assets/img/blog/blog-clasic1.jpg";

interface ContentData {
  title_1: string;
  blockquote: JSX.Element;
  desc_1: JSX.Element;
  desc_2: JSX.Element;
  desc_3: JSX.Element;
  desc_4: JSX.Element;
  tags: string[];
}

const details_content: ContentData = {
  title_1: "Pelhabita morbi tristique",
  blockquote: (
    <>
      Donec interdum metus hendrerit dolor <br />
      Wiam sagittis ligula egestas.
    </>
  ),
  desc_1: (
    <>
      You’ve switched your charity’s office to renewable energy. You’ve cut most
      flights. The office fridge is stacked high with oat milk, and lycra-clad
      staff are proudly showing off their subsidised bicycles. On your way to
      net-zero, right? But operational emissions are just one part of the
      net-zero picture: your money, too, has a carbon cost attached.
    </>
  ),
  desc_2: (
    <>
      Cras varius. Donec vitae orci sed dolor rutrum auctor. Fusce egestas elit
      eget lorem. Suspendisse nisl elit, rhoncus eget elementum acondimentum
      eget, diam. Nam at tortor in tellus interdum sagitliquam lobortis. Donec
      orci lectus, aliquam ut, faucibus non, euismod id, nulla. Curabitur
      blandit mollis lacus. Nam adipiscing. Vestibulum eu odio. Vivamus laoreet.
      rem available market standard dummy text available market industry Lorem
      Ipsum simply dummy text of free available market.There are many variations
      of passages of Lorem Ipsum available, but the majority have suffered
      alteration{" "}
    </>
  ),
  desc_3: (
    <>
      Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque
      penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec
      quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla
      consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec,
      vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis
      vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer
      tincidunt.
    </>
  ),
  desc_4: (
    <>
      Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo
      ligula eget dolor. Aenean massa. Cum sociis natoque penatibus etmagnis
      disparturient montesnascetur ridiculus mus. Donec quam felis, ultricies
      nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim.
      Donec pede justo, fringilla vel aliquet nec, vulputate eget, arcu. In enim
      justo rhoncus utimperdiet a venenatis vitae justo.
    </>
  ),
  tags: ["ATMA", "Volunteers"],
};

const { title_1, blockquote, desc_1, desc_2, desc_3, desc_4, tags } =
  details_content;

const BlogDetailsArea = ({ single_blog }: any) => {
  return (
    <div className="blog-details-area py-120">
      <div className="container">
        <div className="row gap-60">
          <div className="col-lg-8">
            <div className="blog-details-content mb-55">
              <div className="details-image rel mb-35">
                {single_blog?.thumb ? (
                  <Image src={single_blog.thumb} alt="image" />
                ) : (
                  <Image src={blogDetailsThumb} alt="image" />
                )}
                <div className="post-date">
                  <b>{single_blog?.date ? single_blog.date : 13}</b>
                  <span>dec</span>
                </div>
              </div>
              <ul className="blog-meta">
                <li>
                  <i className="flaticon-user"></i> <Link href="#">ATMA</Link>
                </li>
                <li>
                  <i className="flaticon-bubble-chat"></i>{" "}
                  <Link href="#">05 Comment</Link>
                </li>
              </ul>
              <p>{desc_1}</p>
              <p>{desc_2}</p>
              <blockquote>
                <div className="quote-icon">
                  <i className="flaticon-quote"></i>
                </div>
                {blockquote}
              </blockquote>
              <p>{desc_3}</p>
              <h5>{title_1}</h5>
              <p>{desc_4}</p>
              <div className="row pb-25">
                <div className="col-md-5 col-sm-6">
                  <ul className="list-style-two">
                    <li>Kam adipiscin estibulum</li>
                    <li>Kam adipiscin estibulum</li>
                    <li>Volenteer</li>
                  </ul>
                </div>
                <div className="col-md-5 col-sm-6">
                  <ul className="list-style-two">
                    <li>Food help for african people</li>
                    <li>Suport Homeless people</li>
                    <li>Donation</li>
                  </ul>
                </div>
              </div>
              <hr />

              <div className="tag-and-share">
                <div className="row align-items-center">
                  <div className="col-md-7">
                    <div className="tags">
                      <strong>Tag : </strong>
                      {tags.map((tag, i) => (
                        <a key={i} href="#">
                          {tag}
                        </a>
                      ))}
                    </div>
                  </div>
                  <div className="col-md-5 text-md-end">
                    <div className="share-area">
                      <strong>Share: </strong>
                      <CommonSocialIcon />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <BlogDetailsForm />
          </div>
          <div className="col-lg-4">
            <BlogSidebar />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogDetailsArea;
