"use client";

import Image from "next/image";
import Link from "next/link";

import { merchContent } from "../../data/merch";

const Merch = () => {
  return (
    <>
      {merchContent.map((val, i) => (
        <div className="col-xl-4 col-lg-4" key={i}>
          <div className="grid-item filter-1 filter-4">
            {/* <!--Blog Post--> */}
            <article className="ptf-post ptf-post--style-4">
              <div className="ptf-post__media">
                <Image
                  width={1200}
                  height={1200}
                  style={{ width: "100%", height: "750px" }}
                  src={val.img}
                  alt="blog"
                  loading="lazy"
                />
                <div className="ptf-post__media__content">
                  <header className="ptf-post__header">
                    <div className="ptf-post__meta"></div>
                    <h3 className="ptf-post__title">{val.title}</h3>
                  </header>
                </div>
              </div>
              <div className="ptf-post__content">
                <header className="ptf-post__header">
                  <div className="ptf-post__meta"></div>
                  <h3 className="ptf-post__title">
                    <Link href={`/blog/${val.id}`}>{val.title}</Link>
                  </h3>
                </header>
                <div className="ptf-post__excerpt">
                  <p>{val.description}</p>
                </div>
              </div>
            </article>
          </div>
        </div>
      ))}
    </>
  );
};

export default Merch;
