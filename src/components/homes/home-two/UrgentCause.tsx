import Image from "next/image";
import Link from "next/link";

import urgentCauseThumb from "@/assets/img/causes/urgent-causes-left.png";

const UrgentCause = () => {
  return (
    <div className="urgent-cause-two py-80">
      <div className="container">
        <div
          className="urgent-cause-inner bgs-cover p-60 py-120"
          style={{
            backgroundImage: `url(/assets/img/causes/urgent-causes-bg.jpg)`,
          }}
        >
          <div className="row gap-40 align-items-center">
            <div className="col-lg-6">
              <div className="urgent-cause-left-image rmb-65">
                <Image src={urgentCauseThumb} alt="Causes" />
              </div>
            </div>

            <div className="col-lg-6">
              <div className="urgent-cause-right-content">
                <div className="section-title mb-30">
                  <span className="section-title__subtitle mb-30">
                    Promoting Charitable Work
                  </span>
                  <h2>
                    Extending ATMA-CF Foundation&#39;s Charitable{" "}
                    <span>Mission Internationally</span>
                  </h2>
                </div>
                <p>
                  In January, 2005, a group of ten Tamil physicians in the
                  United States established the American Tamil Medical
                  Association (ATMA). Now there are more than 800 physicians and
                  allied healthcare professionals as members and the membership
                  is growing. It is a 501(c) 3, IRS tax exempt, charitable
                  organization.
                </p>
                <div className="urgent-cause-btn">
                  <Link className="cr-btn" href="#">
                    Donate now
                  </Link>
                  <Link className="cr-btn btn--green" href="#">
                    Know More
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UrgentCause;
