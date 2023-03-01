import React from "react";

const ContactUs = () => {
  return (
    <>
      <div className="min-h-screen py-20 px-5 xl:py-28 xl:px-20">
        <div className="flex flex-row flex-wrap gap-x-10 gap-y-4 xl:mt-20">
          <div className="w-full lg:flex-1">
            <div className="text-[#0F172A] ">
              <h3 className="header-text mb-3">Contact Us.</h3>
              <p className="max-w-[380px]">
                Lorem quisque lectus cursus faucibus sit. Cursus amet, tellus
                leo orci tincidunt proin porttitor donec.
              </p>
            </div>
          </div>

          <div className="w-full lg:flex-1">
            <div className="mb-2 max-w-[520px]">
              <label
                htmlFor="nameInput"
                className="ml-5 mb-1 inline-block text-[#0F172A] "
              >
                Name*
              </label>
              <input
                type="text"
                name=""
                id="nameInput"
                className="block w-full rounded-3xl border-gray-300 shadow-sm focus:ring-blue-500"
              />
            </div>
            <div className="mb-2 max-w-[520px]">
              <label
                htmlFor="mailInput"
                className="ml-5 mb-1 inline-block text-[#0F172A] "
              >
                Mail*
              </label>
              <input
                type="text"
                name=""
                id="mailInput"
                className="block w-full rounded-3xl border-gray-300 shadow-sm focus:ring-blue-500"
              />
            </div>
            <div className="mb-2 max-w-[520px]">
              <label
                htmlFor="businessInput"
                className="ml-5 mb-1 inline-block text-[#0F172A] "
              >
                Business
              </label>
              <input
                type="text"
                name=""
                id="businessInput"
                className="block w-full rounded-3xl border-gray-300 shadow-sm focus:ring-blue-500"
              />
            </div>
            <div className="mb-8 max-w-[520px]">
              <label
                htmlFor="messageInput"
                className="ml-5 mb-1 inline-block text-[#0F172A] "
              >
                Message
              </label>
              <textarea
                name=""
                id="messageInput"
                rows={4}
                className="block w-full rounded-3xl border-gray-300 shadow-sm focus:ring-blue-500"
              />
            </div>
            <div className="max-w-[520px]">
              <button
                type="button"
                className="ml-auto flex flex-row items-center justify-center gap-2 rounded-full border border-[#3341a9] px-16 py-4 text-center text-[#3341a9] transition-all duration-300 hover:bg-[#3341a9] hover:text-[#F8FAFC]"
              >
                Send
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactUs;
