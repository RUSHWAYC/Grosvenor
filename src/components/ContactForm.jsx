import React from "react";

const ContactForm = () => {
  return (
    <div className="border rounded-lg shadow-lg p-6">
      <form className="max-w-xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="flex flex-col">
            <input
              id="name"
              type="text"
              placeholder="Vaše ime"
              className="block w-full px-4 py-2 border border-gray-400 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>
          <div className="flex flex-col">
            <input
              id="phone"
              type="tel"
              placeholder="Vaš broj telefona"
              className="block w-full px-4 py-2 border border-gray-400 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>
        </div>
        <div className="mt-6">
          <input
            id="email"
            type="email"
            placeholder="Vaša email adresa"
            className="block w-full px-4 py-2 border border-gray-400 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
        </div>
        <div className="mt-6">
          <textarea
            id="message"
            rows="5"
            placeholder="Vaša poruka"
            className="block w-full px-4 py-2 border border-gray-400 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          ></textarea>
        </div>
        <div className="mt-6">
          <button
            type="submit"
            className="inline-block w-full py-2 px-4 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
          >
            Pošalji poruku
          </button>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
