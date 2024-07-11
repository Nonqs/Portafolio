import { ChangeEvent, FormEvent, useRef, useState } from "react";
import emailjs from "emailjs-com";
import { useIntersectionObserver } from "../../hook/IntersectionObserver";
import email from "../../public/svgs/email.svg";
import telephone from "../../public/svgs/telephone.svg";
import github from "../../public/svgs/github.svg";
import "../../styles/Contact.css";

export default function ContactPage() {
  const contactRef = useRef<HTMLDivElement>(null);
  const isVisible = useIntersectionObserver(contactRef);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [status, setStatus] = useState("");

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const serviceID = process.env.SERVICE_ID;
    const templateID = process.env.TEMPLATE_ID;
    const userID = process.env.USER_ID;

    if (serviceID && templateID && userID) {
      emailjs
        .send(serviceID, templateID, formData, userID)
        .then((response) => {
          console.log("SUCCESS!", response.status, response.text);
          setStatus("Message sent successfully!");
        })
        .catch((err) => {
          console.error("FAILED...", err);
          setStatus("Failed to send message. Please try again.");
        });
    }
  };

  return (
    <section
      ref={contactRef}
      className="container flex flex-col items-center justify-center"
    >
      <h2
        className={`text-[#01c38d] text-center mb-10 text-2xl md:text-4xl font-bold p-2 border-animated w-4/5 md:w-full ${
          isVisible ? "animate-border" : ""
        }`}
      >
        Contact Me
      </h2>
      <div className="flex flex-col md:flex-row w-full justify-center">
        <div className="w-full md:w-1/2 flex justify-center items-center">
          <div className="box flex justify-center items-center rounded-xl w-2/3">
            <form
              onSubmit={handleSubmit}
              className="bg-white p-6 rounded-xl shadow-lg w-full"
            >
              <div className="mb-4">
                <label
                  htmlFor="name"
                  className="block text-black font-semibold text-xs md:text-base mb-2"
                >
                  Name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full p-2 border border-gray-300 rounded-md"
                  required
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="email"
                  className="block text-black text-xs md:text-base font-semibold mb-2"
                >
                  Email <span className="text-red-500">*</span>
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full p-2 border border-gray-300 rounded-md"
                  required
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="message"
                  className="block text-black text-xs md:text-base font-semibold mb-2"
                >
                  Message <span className="text-red-500">*</span>
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full p-2 border border-gray-300 rounded-md h-32"
                  required
                />
              </div>
              <div className="flex items-center justify-center">
                <button
                  type="submit"
                  className="bg-[#01c38d] text-xs md:text-base text-white p-2 rounded-md hover:bg-[#00a377] transition duration-300"
                >
                  Send message
                </button>
              </div>
              {status && <p className="text-center mt-4">{status}</p>}
            </form>
          </div>
        </div>
        <div className="w-full md:w-1/2 h-full mt-10 md:mt-10 flex items-center justify-center">
          <div className="flex flex-col justify-evenly h-full">
            <a href="mailto:tomastrujillogz@gmail.com?subject=Asunto%20del%20correo&body=Cuerpo%20del%20correo">
              <article className="flex items-center">
                <img
                  src={email}
                  alt=""
                  className="p-2 w-16 bg-white rounded-xl shadow-lg max-w-lg me-5 hover:drop-shadow-2xl transform hover:scale-110 transition-transform duration-200 ease-in-out"
                />
                <div className="flex flex-col my-5 md:my-0">
                  <span className="font-semibold text-xs md:text-base">
                    Email
                  </span>
                  <span className="font-thin text-xs md:text-base">
                    tomastrujillogz@gmail.com
                  </span>
                </div>
              </article>
            </a>
            <article className="flex items-center">
              <img
                src={telephone}
                alt=""
                className="p-2 w-16 bg-white rounded-xl shadow-lg max-w-lg me-5 hover:drop-shadow-2xl transform hover:scale-110 transition-transform duration-200 ease-in-out"
              />
              <div className="flex flex-col my-5 md:my-0">
                <span className="font-semibold text-xs md:text-base">
                  Telephone
                </span>
                <span className="font-thin text-xs md:text-base">
                  +34 619640313
                </span>
              </div>
            </article>
            <article className="flex items-center">
              <a
                href="https://github.com/Nonqs"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src={github}
                  alt=""
                  className="p-2 w-16 bg-white rounded-xl shadow-lg max-w-lg me-5 hover:drop-shadow-2xl transform hover:scale-110 transition-transform duration-200 ease-in-out"
                />
              </a>
              <div className="flex flex-col my-5 md:my-0 mb-5 md:mb-0">
                <span className="font-semibold text-xs md:text-base">
                  Github
                </span>
                <span className="font-thin text-xs md:text-base">@Nonqs</span>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
}
