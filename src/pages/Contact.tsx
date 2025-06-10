import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ContactForm from "@/components/ContactForm";

const Contact = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="max-w-[1440px] mx-auto px-20 py-16">
        <div className="flex gap-[119px] items-start">
          {/* Left Content */}
          <div className="flex w-[624px] flex-col gap-6">
            <h1 className="text-black font-inter text-[64px] font-bold leading-normal tracking-[-1.28px]">
              Contact
            </h1>
            <p className="text-text-secondary font-inter text-2xl font-normal leading-[150%]">
              Subheading for description or instructions
            </p>
            <div className="text-black font-inter text-xl font-medium leading-[150%]">
              <p className="mb-4">
                Body text for your whole article or post. We'll put in some
                lorem ipsum to show how a filled-out page might look:
              </p>
              <p>
                Excepteur efficient emerging, minim veniam anim aute carefully
                curated Ginza conversation exquisite perfect nostrud nisi
                intricate Content. Qui international first-class nulla ut.
                Punctual adipisicing, essential lovely queen tempor eiusmod
                irure. Exclusive izakaya charming Scandinavian impeccable aute
                quality of life soft power pariatur Melbourne occaecat
                discerning. Qui wardrobe aliquip, et Porter destination Toto
                remarkable officia Helsinki excepteur Basset hound. Zürich
                sleepy perfect consectetur.
              </p>
            </div>
          </div>

          {/* Right Image */}
          <div className="w-[508px] h-[657px] rounded-lg overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=508&h=657&fit=crop&crop=face"
              alt="Hero image"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="max-w-[1440px] mx-auto px-20 py-16">
        <div className="flex justify-start">
          <ContactForm />
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;
