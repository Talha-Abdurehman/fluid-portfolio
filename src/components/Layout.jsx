import Navbar from "./Navbar";
import Footer from "./Footer";

const Layout = ({ children }) => {
  return (
    <div className="max-w-screen bg-black">
      <header className="fixed w-full top-0 left-0 z-50">
        <Navbar />
      </header>

      <main className="flex flex-col px-4">{children}</main>

      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default Layout;
