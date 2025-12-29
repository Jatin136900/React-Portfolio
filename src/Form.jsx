import React, { useRef } from "react";
import { motion } from "framer-motion";
import New from "./images/new.png";

export default function ContactForm() {
  const formRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();

    const name = e.target.name.value;
    const email = e.target.email.value;
    const message = e.target.message.value;

    const whatsappMessage = encodeURIComponent(
      `Hello Jatin 👋,%0A%0AI am ${name}.%0AEmail: ${email}%0AMessage: ${message}`
    );

    const phoneNumber = "919351808245";

    // open WhatsApp chat
    window.open(`https://wa.me/${phoneNumber}?text=${whatsappMessage}`, "_blank");
    e.target.reset();
  };

  return (
    // <section id="contact" className=" px-6 text-white flex flex-col items-center">
    //   <h2 className="text-4xl font-bold mb-10 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-indigo-400">
    //     Get in Touch
    //   </h2>

    //   <div>
    //     <img src={New} alt="" />
    //   </div>

    //   <motion.form
    //     ref={formRef}
    //     onSubmit={handleSubmit}
    //     className="w-full max-w-md flex flex-col gap-4 bg-[#0f1120]/60 p-8 rounded-2xl border border-purple-500/20 backdrop-blur-lg"
    //   >
    //     <input
    //       name="name"
    //       type="text"
    //       placeholder="Your Name"
    //       required
    //       className="p-4 rounded-lg bg-[#1a1c33]/70 border border-purple-500/30 focus:ring-2 focus:ring-purple-500 outline-none"
    //     />
    //     <input
    //       name="email"
    //       type="email"
    //       placeholder="Your Email"
    //       required
    //       className="p-4 rounded-lg bg-[#1a1c33]/70 border border-purple-500/30 focus:ring-2 focus:ring-purple-500 outline-none"
    //     />
    //     <textarea
    //       name="message"
    //       rows="4"
    //       placeholder="Your Message"
    //       required
    //       className="p-4 rounded-lg bg-[#1a1c33]/70 border border-purple-500/30 focus:ring-2 focus:ring-purple-500 outline-none resize-none"
    //     ></textarea>

    //     <motion.button
    //       whileHover={{ scale: 1.05, boxShadow: "0 0 25px rgba(139,92,246,0.5)" }}
    //       whileTap={{ scale: 0.95 }}
    //       type="submit"
    //       className="py-4 rounded-full bg-gradient-to-r from-purple-600 to-indigo-500 text-white font-semibold text-lg flex items-center justify-center gap-2"
    //     >
    //       <i className="fas fa-paper-plane" /> Send Message
    //     </motion.button>
    //   </motion.form>
    // </section>

    <section
  id="contact"
  className="px-6 text-white flex flex-col items-center"
>
  <h2 className="text-4xl font-bold mb-10 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-indigo-400">
    Get in Touch
  </h2>

  {/* MAIN BOX */}
  <div className="w-full max-w-5xl bg-[#0f1120]/60 backdrop-blur-lg border border-purple-500/20 rounded-3xl p-8">

    <div className="flex flex-col md:flex-row items-center gap-10">

      {/* LEFT IMAGE */}
      <div className="w-full md:w-1/2 flex justify-center">
        <img
          src={New}
          alt="Contact"
          className="max-w-sm w-full"
        />
      </div>

      {/* RIGHT FORM */}
      <form
        ref={formRef}
        onSubmit={handleSubmit}
        className="w-full md:w-1/2 flex flex-col gap-4"
      >
        <input
          name="name"
          type="text"
          placeholder="Your Name"
          required
          className="p-4 rounded-lg bg-[#1a1c33]/70 border border-purple-500/30 focus:ring-2 focus:ring-purple-500 outline-none"
        />

        <input
          name="email"
          type="email"
          placeholder="Your Email"
          required
          className="p-4 rounded-lg bg-[#1a1c33]/70 border border-purple-500/30 focus:ring-2 focus:ring-purple-500 outline-none"
        />

        <textarea
          name="message"
          rows="4"
          placeholder="Your Message"
          required
          className="p-4 rounded-lg bg-[#1a1c33]/70 border border-purple-500/30 focus:ring-2 focus:ring-purple-500 outline-none resize-none"
        />

        <motion.button
          whileHover={{ scale: 1.05, boxShadow: "0 0 25px rgba(139,92,246,0.5)" }}
          whileTap={{ scale: 0.95 }}
          type="submit"
          className="py-4 rounded-full bg-gradient-to-r from-purple-600 to-indigo-500 text-white font-semibold text-lg flex items-center justify-center gap-2"
        >
          <i className="fas fa-paper-plane" /> Send Message
        </motion.button>
      </form>

    </div>
  </div>
</section>

  );
}
