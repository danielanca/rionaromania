import React from "react";
import { NavHashLink } from "react-router-hash-link";
import { useParams } from "react-router-dom";
import parse from "html-react-parser";
import styles from "./BlogPost.module.scss";
import { uniqueId } from "lodash";
import { blogs } from "./../data/blogStrings";
import { Helmet } from "react-helmet";
import strings from "./../data/strings.json";

interface BlogContent {
  link: string;
  title: string;
  postedDate: string;
  firstDescription: string;
  jsonContent: string;
  postCategory?: string;
}
interface RelatedPostProps {
  blogLink: string;
}

const BlogPost = () => {
  let { blogsArea: blogStr } = strings;
  let params = useParams();
  var thisBlogLink = "";
  thisBlogLink = params.blogLink != undefined ? params.blogLink : "";
  console.log("BlogPost saying:", thisBlogLink);

  var dani: BlogContent = blogs.posts[thisBlogLink];
  if (blogs.posts[thisBlogLink] != null) {
  }

  return (
    <>
      <Helmet>
        <title>{` ${blogs.posts[thisBlogLink].title} - MontanAir.Ro`}</title>
        <meta name="description" content={blogs.posts[thisBlogLink].firstDescription.substr(0, 110)} />
      </Helmet>
      <div className={styles.container}>
        <div className={styles.blogPostCont}>
          <div className={styles.topTitle}>
            <h3 className={styles.centerTitle}>{dani.title}</h3>
            <span className={styles.date}>{dani.postedDate}</span>
            <span className={styles.fineLine} />
            {blogs.posts[thisBlogLink].postCategory != null && (
              <span className={styles.postcategory}>{blogs.posts[thisBlogLink].postCategory}</span>
            )}
          </div>
          <div className={styles.previewArea}>
            <p className={styles.firstWords}>{}</p>
          </div>
        </div>
        <div className={styles.actualBlogContent}>{parse(dani.jsonContent)}</div>
        <div className={styles.endOfLine} />
        <div className={styles.relatedContainer}>
          <h3>{blogStr.blogsInner.similarPosts}</h3>
          <div className={styles.relatedListing}>
            {Object.keys(blogs.posts)
              .filter((key) => key != thisBlogLink)
              .map((key, index) => {
                if (index < 2) {
                  return <RelatedPost key={uniqueId()} blogLink={key} />;
                }
              })}
          </div>
        </div>
      </div>
    </>
  );
};

const RelatedPost = ({ blogLink }: RelatedPostProps) => {
  let { blogsArea: blogStr } = strings;
  const gotoElement = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className={styles.relPostItem}>
      <NavHashLink onClick={gotoElement} className={styles.HashLinkStyle} to={`/${blogStr.blogURLSuffix}/${blogLink}`}>
        <div className={styles.pictureWrapper}>
          <img className={styles.pictureStyle} src={blogs.posts[blogLink].image} />
        </div>
        <div>
          <h3 className={styles.titlePost}>{blogs.posts[blogLink].title}</h3>
        </div>
      </NavHashLink>
    </div>
  );
};

export default BlogPost;
