import Logo from "../Logo/Logo";
import { FaGithub, FaYoutube, FaFacebook } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer sm:footer-horizontal items-center justify-between gap-6 rounded-t-2xl border-t-2 border-base-300 bg-black p-6 text-neutral-content sm:p-10">
      <aside className="gap-3">
        <Logo />

        <p className=" text-gray-300 text-2xl">Explore the Cinema Universe.</p>

        <p className=" text-gray-400 text-xs">
          Copyright © {new Date().getFullYear()} - All rights reserved by Movie
          Explorer.
        </p>
      </aside>

      <nav className="gap-3">
        <h6 className="footer-title">Social</h6>

        <div className="flex items-center gap-5">
          <a
            href="https://github.com/Protap55?tab=repositories"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="text-2xl transition-colors hover:text-secondary"
          >
            <FaGithub />
          </a>

          <a
            href="https://www.youtube.com/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="YouTube"
            className="text-2xl transition-colors hover:text-secondary"
          >
            <FaYoutube />
          </a>

          <a
            href="https://www.facebook.com/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Facebook"
            className="text-2xl transition-colors hover:text-secondary"
          >
            <FaFacebook />
          </a>
        </div>
      </nav>
    </footer>
  );
};

export default Footer;

// https://github.com/Protap55?tab=repositories
