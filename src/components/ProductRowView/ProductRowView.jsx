import React from "react";
import { ShoppingCartIcon } from "@heroicons/react/24/outline";
import { Link } from "react-router-dom";

const ProductRowView = () => {
  return (
    <>
      <div className="flex flex-row flex-wrap gap-5 lg:even:flex-row-reverse">
        <div className="">
          <img
            src="https://lirp.cdn-website.com/a75d8971/dms3rep/multi/opt/HenrikHansson-CompleteYourThesis-Epub-1920w.jpg"
            alt="book cover"
            className="h-[400px] w-[256px] rounded-lg object-cover drop-shadow-md xl:h-[500px] xl:w-[320px]"
          />
        </div>
        <div className="flex-1 xl:px-2 xl:py-4">
          <div className="mb-8">
            <h3 className="mb-2 text-4xl font-semibold">
              Complete your thesis
            </h3>
            <p className="mb-5 text-lg">– a hybrid digital book</p>

            <p className="mb-2 font-semibold">
              A book for students writing theses.
            </p>

            <p className="mb-5 max-w-[680px]">
              The book's target group is students working on bachelor's,
              master's theses or doctoral theses" written by professor Henrik
              Hansson.
            </p>

            <p className="max-w-[680px] font-light">
              The e-book will soon be available through Amazon in English,
              French, Arabic, Ukrainian and Spanish. It will also be available
              as an audiobook in English.
            </p>
          </div>
          <div className="flex flex-wrap gap-y-4 gap-x-3">
            <Link
              to="https://www.amazon.com/Complete-your-thesis-digital-Bachelor-ebook/dp/B0B9QC8JV4/ref=sr_1_1?keywords=complete+your+thesis&qid=1661240532&s=digital-text&sr=1-1"
              target="_blank"
              rel="noopener noreferrer"
              className="flex gap-2 rounded-full bg-[#3341a9] py-3 px-6 text-[#f1f1f1]"
            >
              <ShoppingCartIcon className="h-6 w-6" />
              Buy the book
            </Link>
            <Link
              to="https://storytel.com/se/sv/books/complete-your-thesis-a-hybrid-digital-book-bachelor-master-s-and-phd-theses-1940365?appRedirect=true"
              target="_blank"
              rel="noopener noreferrer"
              className="flex gap-2 rounded-full bg-[#3341a9] py-3 px-6 text-[#f1f1f1]"
            >
              Audiobook
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductRowView;
