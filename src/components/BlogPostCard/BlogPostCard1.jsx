import React from "react";

const BlogPostCard1 = (props) => {
  return (
    <>
      <div className="flex w-[340px] flex-shrink-0 flex-col rounded-[56px] bg-[#F8FAFC] p-8 text-lg text-[#0F172A]">
        <img
          src={props?.poster}
          alt={props?.title}
          className="mb-6 h-auto w-full rounded-3xl"
        />
        <h3 className="mb-8 font-extrabold">{props?.title}</h3>
        <p className="mb-[72px]">{props?.text}</p>
        <a
          href={props?.link ? props?.link : "#"}
          target="_blank"
          rel="noopener noreferrer"
          className="mb-2 ml-auto flex items-center"
        >
          Read more
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1}
            stroke="currentColor"
            className="ml-2 h-6 w-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
            />
          </svg>
        </a>
      </div>
    </>
  );
};

export default BlogPostCard1;
