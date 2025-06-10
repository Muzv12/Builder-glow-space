import { Facebook, Linkedin, Youtube, Instagram } from "lucide-react";

const Footer = () => {
  return (
    <footer className="w-full bg-white border-t border-color-border">
      <div className="max-w-[1440px] mx-auto px-20 py-12">
        <div className="flex justify-between items-start">
          {/* Left side - Site name and social icons */}
          <div className="flex flex-col gap-8">
            <h3 className="text-black font-inter text-2xl font-normal leading-[150%]">
              Site name
            </h3>
            <div className="flex items-center gap-2">
              <button className="flex w-10 h-10 p-2 justify-center items-center rounded border-0 hover:bg-gray-100 transition-colors">
                <Facebook className="w-5 h-5 text-text-secondary" />
              </button>
              <button className="flex w-10 h-10 p-2 justify-center items-center rounded border-0 hover:bg-gray-100 transition-colors">
                <Linkedin className="w-5 h-5 text-text-secondary" />
              </button>
              <button className="flex w-10 h-10 p-2 justify-center items-center rounded border-0 hover:bg-gray-100 transition-colors">
                <Youtube className="w-5 h-5 text-text-secondary" />
              </button>
              <button className="flex w-10 h-10 p-2 justify-center items-center rounded border-0 hover:bg-gray-100 transition-colors">
                <Instagram className="w-5 h-5 text-text-secondary" />
              </button>
            </div>
          </div>

          {/* Right side - Footer links */}
          <div className="flex gap-[219px]">
            <div className="flex w-[187px] flex-col gap-6">
              <h4 className="text-black font-inter text-base font-medium leading-[150%]">
                Topic
              </h4>
              <div className="flex flex-col gap-6">
                <a
                  href="#"
                  className="text-text-tertiary font-inter text-base font-medium leading-[150%] hover:text-black transition-colors"
                >
                  Page
                </a>
                <a
                  href="#"
                  className="text-text-tertiary font-inter text-base font-medium leading-[150%] hover:text-black transition-colors"
                >
                  Page
                </a>
                <a
                  href="#"
                  className="text-text-tertiary font-inter text-base font-medium leading-[150%] hover:text-black transition-colors"
                >
                  Page
                </a>
              </div>
            </div>

            <div className="flex w-[187px] flex-col gap-6">
              <h4 className="text-black font-inter text-base font-medium leading-[150%]">
                Topic
              </h4>
              <div className="flex flex-col gap-6">
                <a
                  href="#"
                  className="text-text-tertiary font-inter text-base font-medium leading-[150%] hover:text-black transition-colors"
                >
                  Page
                </a>
                <a
                  href="#"
                  className="text-text-tertiary font-inter text-base font-medium leading-[150%] hover:text-black transition-colors"
                >
                  Page
                </a>
                <a
                  href="#"
                  className="text-text-tertiary font-inter text-base font-medium leading-[150%] hover:text-black transition-colors"
                >
                  Page
                </a>
              </div>
            </div>

            <div className="flex w-[187px] flex-col gap-6">
              <h4 className="text-black font-inter text-base font-medium leading-[150%]">
                Topic
              </h4>
              <div className="flex flex-col gap-6">
                <a
                  href="#"
                  className="text-text-tertiary font-inter text-base font-medium leading-[150%] hover:text-black transition-colors"
                >
                  Page
                </a>
                <a
                  href="#"
                  className="text-text-tertiary font-inter text-base font-medium leading-[150%] hover:text-black transition-colors"
                >
                  Page
                </a>
                <a
                  href="#"
                  className="text-text-tertiary font-inter text-base font-medium leading-[150%] hover:text-black transition-colors"
                >
                  Page
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
