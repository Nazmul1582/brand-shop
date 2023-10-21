import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="p-10 bg-base-200 text-base-content">
      <div className="footer container mx-auto">
        <aside>
          <div>
            <Link to="/" className="font-Russo_One flex items-center gap-2">
              <span className="text-5xl text-sky-500">BS</span>
              <span className="font-bold uppercase text-lg">Brand Shop</span>
            </Link>
            <br />
            Providing reliable tech since 2012
          </div>
        </aside>
        <nav>
          <header className="footer-title">Services</header>
          <a className="link link-hover">Techonogy</a>
          <a className="link link-hover">Electronics</a>
          <a className="link link-hover">Gedgat</a>
          <a className="link link-hover">IT Products</a>
        </nav>
        <nav>
          <header className="footer-title">Company</header>
          <a className="link link-hover">About us</a>
          <a className="link link-hover">Contact</a>
          <a className="link link-hover">Jobs</a>
          <a className="link link-hover">Press kit</a>
        </nav>
        <nav>
          <header className="footer-title">Legal</header>
          <a className="link link-hover">Terms of use</a>
          <a className="link link-hover">Privacy policy</a>
          <a className="link link-hover">Cookie policy</a>
        </nav>
      </div>
    </footer>
  );
};

export default Footer;
