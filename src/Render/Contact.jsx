import React, { useState } from "react";
import Moto from "./Moto.jsx"


function Contact(){
    const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "b5e97878-a951-4b9e-818b-3d86f1e936b6");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

  
    return(
    <div className="flex flex-col gap-5">

            <form className="grid grid-rows-2 border-gray-500 rounded-xl  shadow-2xl bg-gray-900 p-5 gap-5" onSubmit={onSubmit}>
                <h2 className="md:text-2xl text-xl font-bold text-left underline decoration-blue-500">Contact-form</h2>
                <div className=" grid grid-cols-2 gap-5">
                    <input className="md:h-15 h-8 border border-gray-200  rounded-lg text-center placeholder:text-center" type="text" name="fullname" placeholder="Full name" required  />

                    <input className="md:h-15 h-8 border border-gray-200  rounded-lg text-center placeholder:text-center" type="email" name="email"  placeholder="Email address" required  />
                </div>

                <textarea className="md:h-20 h-16 border rounded-xl bg-gray-900 text-center placeholder:text-center placeholder:align-middle py-5 resize-none" name="message"  placeholder="Your Message" required ></textarea>
                <div className="flex justify-end">
                    <button type="submit" className="contact-btn gap-2 px-4 py-2 text-white md:h-12 h-8" >
                <ion-icon name="paper-plane"></ion-icon>
                <span>Send Message</span>
                </button>

                </div>
                
            </form>
            <Moto/>
            <div className="fixed left-0 bottom-0">
                @sparsha sawant
            </div>
    </div>
    );
}

export default Contact;