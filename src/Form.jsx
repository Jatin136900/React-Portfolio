import React, { useRef } from "react";
import { motion } from "framer-motion";

export default function ContactForm() {
  const formRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("✅ Your message has been sent successfully!");
    e.target.reset();
  };

  return (
    <section
      id="contact"
      className="relative w-full flex flex-col items-center justify-center py-20 px-4 sm:px-8 md:px-12 text-white overflow-hidden"
    >
      {/* Title */}
      <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-12 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-indigo-400 tracking-wider text-center">
        Get in Touch
      </h2>

      {/* Contact Container */}
      <div
        className="w-full max-w-[1100px] rounded-3xl p-6 sm:p-10 md:p-14 flex flex-col md:flex-row gap-10 justify-center 
        bg-[#0f1120]/60 border border-purple-500/20 backdrop-blur-lg 
        shadow-[0_0_25px_rgba(139,92,246,0.15)] transition-all duration-300"
      >
        {/* Info Section */}
        <div className="flex-1 min-w-[260px] flex flex-col gap-6">
          {[
            {
              icon: "fas fa-envelope",
              title: "Email",
              value: "jatinverma2428@gmail.com",
              href: "mailto:jatinverma2428@gmail.com",
            },
            {
              icon: "fas fa-phone",
              title: "Phone",
              value: "+91 9351808245",
              href: "tel:+919351808245",
            },
            {
              icon: "fas fa-map-marker-alt",
              title: "Location",
              value: "Jaipur, India",
            },
          ].map((item, i) => (
            <motion.div
              key={i}
              whileHover={{
                scale: 1.05,
                boxShadow: "0 0 25px rgba(139,92,246,0.4)",
              }}
              className="flex items-center gap-5 rounded-2xl p-5 border border-purple-500/20 
                bg-[#15172a]/60 transition-all duration-300 hover:bg-[#1a1c33]/70"
            >
              <i className={`${item.icon} text-purple-400 text-2xl sm:text-3xl`}></i>
              <div className="flex flex-col">
                <h4 className="font-semibold text-base sm:text-lg">{item.title}</h4>
                {item.href ? (
                  <a
                    href={item.href}
                    className="text-gray-300 hover:text-purple-400 text-sm sm:text-base break-words"
                  >
                    {item.value}
                  </a>
                ) : (
                  <p className="text-gray-300 text-sm sm:text-base">{item.value}</p>
                )}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Form Section */}
        <motion.form
          ref={formRef}
          onSubmit={handleSubmit}
          id="contactForm"
          className="flex-1 min-w-[260px] flex flex-col gap-5"
        >
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            required
            className="p-4 sm:p-5 rounded-xl border border-purple-500/30 
              bg-[#1a1c33]/70 text-white placeholder-gray-400 
              focus:ring-2 focus:ring-purple-500 outline-none transition-all"
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            required
            className="p-4 sm:p-5 rounded-xl border border-purple-500/30 
              bg-[#1a1c33]/70 text-white placeholder-gray-400 
              focus:ring-2 focus:ring-purple-500 outline-none transition-all"
          />
          <textarea
            name="message"
            rows="4"
            placeholder="Your Message"
            required
            className="p-4 sm:p-5 rounded-xl border border-purple-500/30 
              bg-[#1a1c33]/70 text-white placeholder-gray-400 
              focus:ring-2 focus:ring-purple-500 outline-none transition-all resize-none"
          ></textarea>

          <motion.button
            whileHover={{
              scale: 1.08,
              boxShadow: "0 0 30px rgba(139,92,246,0.5)",
            }}
            whileTap={{ scale: 0.95 }}
            type="submit"
            className="mt-3 py-4 rounded-full bg-gradient-to-r 
              from-purple-600 to-indigo-500 text-white font-semibold text-lg 
              flex items-center justify-center gap-3 transition-all duration-300"
          >
            <i className="fas fa-paper-plane"></i> Send Message
          </motion.button>
        </motion.form>
      </div>
    </section>
  );
}
