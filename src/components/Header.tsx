import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";

const Header = () => {
  const location = useLocation();

  return (
    <header className="w-full bg-white">
      <div className="flex h-[164px] px-20 justify-between items-center max-w-[1440px] mx-auto">
        <div className="flex items-center">
          <Link
            to="/"
            className="text-black font-inter text-xl font-medium leading-[150%]"
          >
            Site name
          </Link>
        </div>

        <nav className="flex items-center gap-12">
          <div className="flex items-center gap-12">
            <Link
              to="/"
              className="text-black font-inter text-xl font-medium leading-[150%] hover:text-gray-600 transition-colors"
            >
              HOME
            </Link>
            <Link
              to="/shop"
              className="text-black font-inter text-xl font-medium leading-[150%] hover:text-gray-600 transition-colors"
            >
              SHOP
            </Link>
            <Link
              to="/contact"
              className="text-black font-inter text-xl font-medium leading-[150%] hover:text-gray-600 transition-colors"
            >
              CONTACT
            </Link>
          </div>

          <Button className="flex px-6 py-[14px] justify-center items-center gap-2 rounded-lg bg-black text-white font-inter text-base font-medium leading-[150%] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)] hover:bg-gray-800 transition-colors">
            Button
          </Button>
        </nav>
      </div>
    </header>
  );
};

export default Header;
