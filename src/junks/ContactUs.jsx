import React from "react";

const ContactUs = () => {
  return (
    <>
      <div className=" bg-[#001193] py-28 xl:px-20">
        <div className="flex flex-row flex-wrap">
          <div className="w-full lg:flex-1">
            <div className="text-[#F8FAFC] ">
              <h3 className="mb-6 text-6xl font-extrabold">Contact Us.</h3>
              <p className="max-w-[380px]">
                Lorem quisque lectus cursus faucibus sit. Cursus amet, tellus
                leo orci tincidunt proin porttitor donec.
              </p>
            </div>
          </div>

          <div className="w-full lg:flex-1">
            <div className="mb-4 max-w-[520px]">
              <label
                htmlFor="nameInput"
                className="ml-5 mb-1 inline-block text-[#F8FAFC] "
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
            <div className="mb-4 max-w-[520px]">
              <label
                htmlFor="mailInput"
                className="ml-5 mb-1 inline-block text-[#F8FAFC] "
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
            <div className="mb-4 max-w-[520px]">
              <label
                htmlFor="businessInput"
                className="ml-5 mb-1 inline-block text-[#F8FAFC] "
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
                className="ml-5 mb-1 inline-block text-[#F8FAFC] "
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
            <div className="mb-4 max-w-[520px]">
              <button
                type="button"
                className="ml-auto flex flex-row items-center justify-center gap-2 rounded-full border border-white px-16 py-5 text-center text-white"
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
