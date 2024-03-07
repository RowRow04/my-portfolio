import React from "react";
import {
  FaFacebookSquare,
  FaGithubSquare,
  FaInstagram,
  FaLinkedin,
  FaYoutube,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="max-w-[1240px] mx-auto py-16 px-4 grid lg:grid-cols-3 gap-8 text-gray-300 border-t border-white">
      <div>
        <h1 className="w-full text-3xl font-bold text-blue-500">Rogelio.</h1>
        <p className="py-4 text-justify">
          I'm a web developer and a mobiles app developer. I'm also a gamer and
          a content creator. I'm a front-end developer. I'm a Game Designer.
        </p>
        <div className="flex justify-between md:w-[75%] my-6">
          <a
            href="https://www.facebook.com/rogelio.deguxman/"
            target="Rogelio Facebook"
            rel=" "
          >
            <FaFacebookSquare size={30} />
          </a>
          <a
            href="https://www.instagram.com/roggroggg/"
            target="Rpgerio Instagram"
            rel=" "
          >
            <FaInstagram size={30} />
          </a>
          <a
            href="https://www.youtube.com/channel/UC_BMuwWTXctkWy7TvXSjOdQ"
            target="Rogelio Youtube"
            rel=" "
          >
            <FaYoutube size={30} />
          </a>
          <a
            href="https://github.com/skrskrzoomzoom"
            target="Rogelio Github"
            rel=" "
          >
            <FaGithubSquare size={30} />
          </a>
          <a
            href="https://www.linkedin.com/in/rogelio-esguerra-721b99206/"
            target="Rogelio Linkedin"
            rel=" "
          >
            <FaLinkedin size={30} />
          </a>
        </div>
      </div>
      <div className="lg:col-span-2 flex justify-between mt-6">
        <div>
          <h6 className="font-medium text-gray-400">Services</h6>
          <ul>
            <li className="py-2 text-sm">Web Design</li>
            <li className="py-2 text-sm">Web Development</li>
            <li className="py-2 text-sm">Mobile App Development</li>
            <li className="py-2 text-sm">E-commerce Development</li>
          </ul>
        </div>
        <div>
          <h6 className="font-medium text-gray-400">Game</h6>
          <ul>
            <li className="py-2 text-sm">Mobile Legends: Bang Bang (MLBB)</li>
            <li className="py-2 text-sm">Call of Duty: Mobile (CODM)</li>
            <li className="py-2 text-sm">PUBG Mobile (PUBGM)</li>
            <li className="py-2 text-sm">
              League of Legends: Wild Rift (LOL:WR)
            </li>
          </ul>
        </div>
        <div>
          <h6 className="font-medium text-gray-400">Company</h6>
          <ul>
            <li className="py-2 text-sm">About</li>
            <li className="py-2 text-sm">Blog</li>
            <li className="py-2 text-sm">Jobs</li>
            <li className="py-2 text-sm">Press</li>
            <li className="py-2 text-sm">Careers</li>
          </ul>
        </div>
        <div>
          <h6 className="font-medium text-gray-400">Legal rights</h6>
          <ul>
            <li className="py-2 text-sm">Privacy Policy and Cookies</li>
            <li className="py-2 text-sm">Accessibility Statement</li>
            <li className="py-2 text-sm">Terms and Conditions</li>
          </ul>
        </div>
      </div>
      <p className="text-center text-gray-400 mt-8">
        &copy; 2024 Rogelio. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
