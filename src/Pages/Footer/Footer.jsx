import { FaPhoneAlt } from "react-icons/fa";
import { FiMail } from "react-icons/fi";
import { MdLocationPin } from "react-icons/md";

const Footer = () => {
  return (
    <div className="bg-my-bg1">
      <footer className="footer p-10 max-w-7xl mx-auto bg-my-bg1 text-base-content">
        <div>
          <span className="footer-title">Quick Links</span>
          <a className="link link-hover">About Us</a>
          <a className="link link-hover">Colleges</a>
          <a className="link link-hover">Admission</a>
          <a className="link link-hover">Profile</a>
        </div>
        <div>
          <span className="footer-title">Useful Links</span>
          <a className="link link-hover">Privacy Policy</a>
          <a className="link link-hover">Terms and Conditions</a>
          <a className="link link-hover">Support</a>
          <a className="link link-hover">FAQ</a>
        </div>
        <div>
          <span className="footer-title">Contact Info</span>
          <a className="link link-hover flex items-center gap-1">
            <FaPhoneAlt /> <span>+1800-001-658</span>
          </a>
          <a className="link link-hover flex items-center gap-1">
            <FiMail></FiMail>
            <span>educateyourself@gmail.com</span>
          </a>
          <a className="link link-hover flex items-center gap-1">
            <MdLocationPin></MdLocationPin> Envato HQ 24 Fifth st., Los Angeles,
            USA
          </a>
        </div>

        <div>
          <span className="footer-title">Newsletter</span>
          <div className="form-control w-80">
            <label className="label">
              <span className="label-text">Enter your email address</span>
            </label>
            <div className="relative">
              <input
                type="text"
                placeholder="youremail@provider.com"
                className="input input-bordered w-full pr-16"
              />
              <button className="btn btn-success absolute top-0 right-0 rounded-l-none">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </footer>

      <footer className="footer footer-center p-4 bg-my-bg2 text-base-content">
        <div>
          <p>Copyright © 2023 - All right reserved by Educate YourSelf</p>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
