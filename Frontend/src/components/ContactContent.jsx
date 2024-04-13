import React from "react";
import full from "../image/full.jpg";

const ContactContent = () => {
  const handleSendMessage = () => {
    const firstName = document.getElementById("grid-first-name").value;
    const lastName = document.getElementById("grid-last-name").value;
    const senderEmailAddress = document.getElementById("grid-email").value; // Get sender's email from input field
    const recipientEmailAddress = "manan.pujara123415@marwadiuniversity.ac.in";
    const message = document.getElementById("message").value;

    const mailtoLink = `mailto:${recipientEmailAddress}?cc=${senderEmailAddress}&subject=Message from ${firstName} ${lastName}&body=${message}`;
    window.location.href = mailtoLink;
  };

  return (
    <>
      <div class="max-w-screen-md mx-auto p-5 mt-10 mb-10 bg-orange-500">
        <div class="text-center mb-16">
          <p class="mt-4 text-sm leading-7 text-green-500 font-regular uppercase">
            Contact
          </p>
          <h3 class="text-3xl sm:text-4xl leading-normal font-extrabold tracking-tight text-gray-900">
            Get In <span class="text-green-500">Touch</span>
          </h3>
        </div>

        <form class="w-full">
          <div class="flex flex-wrap -mx-3 mb-6">
            <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
              <label
                class="block uppercase tracking-wide text-white text-xs font-bold mb-2"
                for="grid-first-name"
              >
                First Name
              </label>
              <input
                class="appearance-none block w-full bg-white text-black border  rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                id="grid-first-name"
                type="text"
                placeholder="Jane"
              />
            </div>
            <div class="w-full md:w-1/2 px-3">
              <label
                class="block uppercase tracking-wide text-white text-xs font-bold mb-2"
                for="grid-last-name"
              >
                Last Name
              </label>
              <input
                class="appearance-none block w-full bg-white text-black border border-white rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-white"
                id="grid-last-name"
                type="text"
                placeholder="Doe"
              />
            </div>
          </div>
          <div class="flex flex-wrap -mx-3 mb-6">
            <div class="w-full px-3">
              <label
                class="block uppercase tracking-wide text-white text-xs font-bold mb-2"
                for="grid-password"
              >
                Your Email Address
              </label>
              <input
                class="appearance-none block w-full bg-white text-black border border-white rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-white"
                id="grid-email"
                type="email"
                placeholder="********@*****.**"
              />
            </div>
          </div>

          <div class="flex flex-wrap -mx-3 mb-6">
            <div class="w-full px-3">
              <label
                class="block uppercase tracking-wide text-white text-xs font-bold mb-2"
                for="message"
              >
                Your Message
              </label>
              <textarea
                rows="10"
                id="message"
                class="appearance-none block w-full bg-white text-black border border-white rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-white"
              ></textarea>
            </div>
            <div class="flex justify-between w-full px-3">
              <div class="md:flex md:items-center">
                <label class="block text-white font-bold">
                  <input class="mr-2 leading-tight" type="checkbox" />
                  <span class="text-sm">Send me your newsletter!</span>
                </label>
              </div>
              <button
                onClick={handleSendMessage}
                class="shadow bg-green-500 hover:bg-green-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-6 rounded"
                type="button" // Change type to button to prevent form submission
              >
                Send Message
              </button>
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

export default ContactContent;
