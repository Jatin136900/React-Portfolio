import React, { useState } from "react";
import fullstack from './images/fsl.png';
import burgerfarm from './images/burger.png';
import tanishq from './images/tanishq.png';
import amazon from './images/amazon.png';
import impact from './images/impact.png';
import marvel from './images/marvels.png';
import atom from './images/atom.png';
import cards from './images/cards.png';
import netflix from './images/netflix.png'
import pokemon from './images/pokemon.png'
import ecom from './images/ecom.png'
import ec from './images/ecom2.png'
import ipl from './images/ipl.png'
import color from './images/color.png'
import bill from './images/bill.png'
import quiz from './images/quiz.png'
import change from './images/changer.png'
import yoga from './images/yoga.png'
import recom from './images/recom.png'
import todo from './images/todo.png'
import poki from './images/poki.png'
import royse from './images/royse.png'
import Area from './images/area.png'
import hotel from './images/hotel.png'
import truec from './images/trucaller.png'
import school from './images/school.png'
import Spotify from './images/spotify.png'



export default function Projects() {
    const [activeTab, setActiveTab] = useState("html");

    const projects = {
        html: [
            {
                title: "Full Stack",
                desc: "This Full Stack Developer portfolio website is crafted using HTML and CSS to present both frontend creativity and backend expertise in a sleek, professional format.",
                img: fullstack,
                demo: "https://full-stack-chi-sandy.vercel.app/",
            },
            {
                title: "Burger Farm",
                desc: "The Burger Farm website is creatively built using HTML, CSS, and JavaScript to deliver a mouth-watering digital experience. Featuring a delicious layout.",
                img: burgerfarm,
                demo: "https://burger-farm.vercel.app/",
            },
            {
                title: "Amazon",
                desc: "This Amazon-inspired website is built entirely using HTML and CSS, showcasing a clean and modern layout. It features a responsive header with a logo, search bar, and cart icon, along with well-organized product sections.",
                img: amazon,
                demo: "https://amazon-five-liart.vercel.app/",
            },
            {
                title: "Impact",
                desc: "The Impact website is built using HTML and CSS to deliver a bold and dynamic digital presence. Designed with a strong visual hierarchy, impactful typography, and vibrant color contrasts, it grabs user attention instantly.",
                img: impact,
                demo: "https://new-imapct.vercel.app/",
            },
            {
                title: "Marvels Films",
                desc: "This Marvel Films-themed website is built using HTML and CSS, bringing the excitement of the Marvel universe to life on screen. It features a cinematic layout with high-quality posters, bold typography, and a dark, heroic color scheme.",
                img: marvel,
                demo: "https://marvels-e3c9.vercel.app/",
            },
            {
                title: "Atom",
                desc: "This Atom-themed website is creatively designed using HTML and CSS to visually represent the atomic structure. It features a central nucleus with orbiting electrons animated using pure CSS, making science interactive and engaging.",
                img: atom,
                demo: "https://atom-orcin.vercel.app/",
            },
            {
                title: "Cards",
                desc: "This cards-based website layout is built using HTML and CSS, offering a modern and structured way to display content. Each card neatly presents information such as images, titles, and descriptions, enhanced with smooth hover effects and clean design.",
                img: cards,
                demo: "https://card-rho-orpin.vercel.app/",
            },

        ],

        js: [

            {
                title: "Netflix Clone",
                desc: "This Netflix Clone website is built using HTML, CSS, and JavaScript to replicate the sleek, dark-themed interface of the original streaming platform. It features a responsive design with a dynamic banner section that displays movie titles and overviews fetched via API.",
                img: netflix,
                demo: "https://netflix-clone-api-two.vercel.app/",
            },
            {
                title: "Pokémon cards.",
                desc: "This Pokémon website is developed using HTML, CSS, and JavaScript to display a dynamic collection of Pokémon cards. The interface fetches real-time data from the PokéAPI and shows detailed information such as names, images, and stats.",
                img: pokemon,
                demo: "https://pokemon-wheat-one.vercel.app/",
            },
            {
                title: "E-commerce website",
                desc: "This E-commerce website is built using HTML, CSS, and JavaScript to provide a clean, responsive, and fully functional online shopping experience. The layout features interactive product cards, wishlist and cart buttons, and dynamic content powered by JavaScript.",
                img: ecom,
                demo: "https://new-e-com-jade.vercel.app/",
            },
            {
                title: "Second E-commerce website.",
                desc: "This E-commerce website is built using HTML, CSS, and JavaScript to provide a clean, responsive, and fully functional online shopping experience. The layout features interactive product cards, wishlist and cart buttons, and dynamic content powered by JavaScript.",
                img: ec,
                demo: "https://e-commerce-iota-six-69.vercel.app/",
            },
            {
                title: "IPL Stats Dashboard",
                desc: "This IPL Stats Dashboard is designed using HTML, CSS, and JavaScript to showcase key player performance data from the 2025 season. Users can filter stats by categories such as Orange Cap, Most Fours, Sixes, Centuries, and Fifties.",
                img: ipl,
                demo: "https://ipl-lac.vercel.app/",
            },
            {
                title: "Color Code Changer",
                desc: "This Color Code Changer website is built using HTML, CSS, and JavaScript to allow users to dynamically change and view color codes in real-time. With a clean and interactive UI, users can click buttons or use input fields.",
                img: color,
                demo: "https://color-code-changer.vercel.app/",
            },
            {
                title: "Bill Generator",
                desc: "This Bill Generator website is built using HTML, CSS, and JavaScript to create professional and printable bills with ease. Users can input item details, prices, quantities, taxes, and discounts, and the system automatically.",
                img: bill,
                demo: "https://bill-calculater-tau.vercel.app/",
            },
            {
                title: "This Quiz Game",
                desc: "This Quiz Game website is built using HTML, CSS, and JavaScript to deliver an engaging and interactive experience. The interface features well-designed question cards, multiple-choice answers, score tracking.",
                img: quiz,
                demo: "https://quiz-game-bice-nu.vercel.app/",
            },
            {
                title: "Glowing Colour Changer",
                desc: "This Glowing Color Changer website is created using HTML, CSS, and JavaScript to deliver a visually dynamic and interactive experience. With glowing effects powered by CSS and real-time background or text color changes.",
                img: change,
                demo: "https://spotify-sxzt.vercel.app/",
            },





        ],
        react: [
            {
                title: "Yoga Website",
                desc: "This Yoga & Wellness website is beautifully designed using React JS to promote peace, balance, and healthy living through a calming and modern interface.",
                img: yoga,
                demo: "https://yoga-website-react-navy.vercel.app/",
            },
            {
                title: "E-Commerce",
                desc: "This E-Commerce website is fully functional and built using React JS, offering a seamless shopping experience with dynamic product listings, cart management, and responsive design.",
                img: recom,
                demo: "https://e-commerce-react-henna-five.vercel.app/",
            },
            {
                title: "Todo App",
                desc: "This Todo App is built using React JS, designed to help users stay organized with smooth task management, intuitive UI, and real-time updates.",
                img: todo,
                demo: "https://avtar-rust.vercel.app/",
            },
            {
                title: "Pokemon Kingdom",
                desc: "This Pokémon App is built using React JS and powered by an external API, dynamically fetching and displaying Pokémon data with smooth animations and an engaging interface.",
                img: poki,
                demo: "https://pokemon-react-six-bay.vercel.app/",
            },
            {
                title: "Rolls-Royce",
                desc: "This Rolls-Royce website is designed using React JS to reflect the brand’s legacy of luxury, sophistication, and unmatched engineering excellence.",
                img: royse,
                demo: "https://rolls-royce-coral.vercel.app/",
            },
        ],
        tailwind: [
            {
                title: "Area",
                desc: "The Area website is crafted using pure Tailwind CSS, focusing on clean design and modern layout. With a bold hero section, smooth typography, and organized content blocks, it effectively showcases services, projects.",
                img: Area,
                demo: "https://new-area.vercel.app/",
            },
            {
                title: "Vrindavan Hotel",
                desc: "This Vrindavan-themed website is beautifully designed using Tailwind CSS to capture the spiritual and cultural essence of the holy city. Featuring serene color tones, devotional imagery, and traditional fonts.",
                img: hotel,
                demo: "https://vrindavan-183c.vercel.app/",
            },
        ],
        bootstrap: [
            {
                title: "Tanishq Jewellery",
                desc: "This Tanishq Jewelry website is elegantly designed using HTML and CSS to reflect the luxury and sophistication of the brand.",
                img: tanishq,
                demo: "https://new-tanishq.vercel.app/",
            },
            {
                title: "Truecaller",
                desc: "This Truecaller-inspired website is designed using bootstrap to mimic the clean and functional interface of the original app. It features a simple, modern layout with sections for caller identification, contact search.",
                img: truec,
                demo: "https://truecaller-kappa.vercel.app/",
            },
            {
                title: "Random School",
                desc: "This School website is designed using bootstrap to provide a clean, organized, and welcoming digital space for students, parents, and teachers. It features sections for announcements, admissions, academic programs.",
                img: school,
                demo: "https://newbootstrap-ck3o.vercel.app/",
            },
            {
                title: "Spotify",
                desc: "This Spotify-inspired website is designed using bootstrap to replicate the sleek, modern feel of the original platform. It features a dark-themed interface with smooth layout sections for playlists, albums, and music controls.",
                img: Spotify,
                demo: "https://spotify-delta-ruby.vercel.app/",
            },
        ],
    };

    return (
        <div className="min-h-screen px-8 py-14">
            <h1 className="text-4xl font-bold text-center mb-10 tracking-wide">
                My Projects
            </h1>
    




             






            {/* Glass Tabs */}
            <div className="flex justify-center gap-6 mb-12 backdrop-blur-md px-6 py-3">
                {["html", "js", "react", "tailwind", "bootstrap"].map((tab) => (
                    <button
                        key={tab}
                        onClick={() => setActiveTab(tab)}
                        className={`px-6 py-2 rounded-full transition-all duration-300 font-medium text-sm sm:text-base 
            ${activeTab === tab
                                ? "bg-blue-600/90 shadow-[0_0_15px_rgba(37,99,235,0.7)] text-white scale-105"
                                : "bg-white/5 hover:bg-white/15 text-gray-300 hover:text-white"
                            }`}
                    >
                        {tab === "html" && "HTML & CSS"}
                        {tab === "js" && "JavaScript"}
                        {tab === "react" && "React"}
                        {tab === "tailwind" && "Tailwind"}
                        {tab === "bootstrap" && "Bootstrap"}
                    </button>
                ))}
            </div>

            {/* Projects Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {projects[activeTab].map((proj, i) => (
                    <div
                        key={i}
                        className="bg-[#1c1037]/80 backdrop-blur-xl border border-white/10 rounded-2xl p-5 
            hover:shadow-[0_0_25px_rgba(59,130,246,0.4)] hover:scale-[1.04] transition-all duration-300"
                    >
                        {proj.img && (
                            <img
                                src={proj.img}
                                alt={proj.title}
                                className="rounded-xl mb-4 w-full h-44 object-cover"
                            />
                        )}
                        <h2 className="text-xl font-bold text-white mb-2">{proj.title}</h2>
                        <p className="text-gray-300 mb-4">{proj.desc}</p>
                        {proj.demo && (
                            <a
                                href={proj.demo}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-green-400 hover:text-green-300 transition-all font-medium"
                            >
                                Live Demo ↗
                            </a>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
}
