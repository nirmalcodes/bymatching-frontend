import React from "react";
import { BlogPostCard } from "../../components";

const Blog = () => {
  return (
    <>
      <div className="min-h-screen py-28 xl:pl-20">
        <div className="mb-16 flex flex-row items-center justify-between">
          <h3 className="text-6xl font-extrabold">Blog.</h3>
          <a
            href="#"
            target="_blank"
            rel="noopener noreferrer"
            className="mr-28 w-fit rounded-full border border-[#001193] px-14 py-5 text-[#001193]"
          >
            More posts
          </a>
        </div>
        <div className="flex flex-row gap-x-8 gap-y-4 overflow-hidden overflow-x-auto">
          <BlogPostCard
            poster="https://api.lorem.space/image/furniture?w=1280&h=720"
            title="Communicate with companies."
            text="Three tips when communicating with a company!"
            link="#"
          />
          <BlogPostCard
            poster="https://api.lorem.space/image/furniture?w=1380&h=720"
            title="Communicate with companies."
            text="Three tips when communicating with a company!"
            link="#"
          />
          <BlogPostCard
            poster="https://api.lorem.space/image/furniture?w=1480&h=720"
            title="Communicate with companies."
            text="Three tips when communicating with a company!"
            link="#"
          />
          <BlogPostCard
            poster="https://api.lorem.space/image/furniture?w=1580&h=720"
            title="Communicate with companies."
            text="Three tips when communicating with a company!"
            link="#"
          />
        </div>
      </div>
    </>
  );
};

export default Blog;
