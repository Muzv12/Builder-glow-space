import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // Handle form submission here
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <div className="flex flex-col gap-6 w-full max-w-[626px]">
      <h2 className="text-black font-inter text-[32px] font-semibold leading-[150%]">
        Contact me
      </h2>

      <form onSubmit={handleSubmit} className="flex flex-col gap-6">
        <div className="flex gap-8">
          <div className="flex flex-col gap-2 flex-1">
            <Label
              htmlFor="firstName"
              className="text-black font-inter text-base font-medium leading-[150%]"
            >
              First name
            </Label>
            <Input
              id="firstName"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              placeholder="Jane"
              className="flex px-4 py-3 border border-[#E0E0E0] rounded-lg bg-white shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)] text-text-secondary font-inter text-base font-medium leading-[150%]"
            />
          </div>

          <div className="flex flex-col gap-2 flex-1">
            <Label
              htmlFor="lastName"
              className="text-black font-inter text-base font-medium leading-[150%]"
            >
              Last name
            </Label>
            <Input
              id="lastName"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              placeholder="Smitherton"
              className="flex px-4 py-3 border border-[#E0E0E0] rounded-lg bg-white shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)] text-text-secondary font-inter text-base font-medium leading-[150%]"
            />
          </div>
        </div>

        <div className="flex flex-col gap-2">
          <Label
            htmlFor="email"
            className="text-black font-inter text-base font-medium leading-[150%]"
          >
            Email address
          </Label>
          <Input
            id="email"
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="email@janesfakedomain.net"
            className="flex px-4 py-3 border border-[#E0E0E0] rounded-lg bg-white shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)] text-text-secondary font-inter text-base font-medium leading-[150%]"
          />
        </div>

        <div className="flex flex-col gap-2">
          <Label
            htmlFor="message"
            className="text-black font-inter text-base font-medium leading-[150%]"
          >
            Your message
          </Label>
          <Textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Enter your question or message"
            rows={6}
            className="flex px-4 py-3 border border-[#E0E0E0] rounded-lg bg-white shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)] text-text-secondary font-inter text-base font-medium leading-[150%] resize-none"
          />
        </div>

        <Button
          type="submit"
          className="flex px-8 py-4 justify-center items-center gap-2 rounded-lg bg-black text-white font-inter text-xl font-medium leading-[150%] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)] hover:bg-gray-800 transition-colors w-full"
        >
          Submit
        </Button>
      </form>
    </div>
  );
};

export default ContactForm;
