import { FaLocationArrow } from "react-icons/fa6";
import { socialMedia } from "@/data";
import MagicButton from "./MagicButton";
import { useRouter } from "next/navigation";

const Footer = () => {
  const navigate = useRouter();
  return (
    <footer className="w-full pt-20 pb-10" id="contact">
      <div className="w-full absolute left-0 -bottom-72 min-h-96">
        <img
          src="/footer-grid.svg"
          alt="grid"
          className="w-full h-full opacity-50 "
        />
      </div>

      <div className="flex flex-col items-center">
        <h1 className="heading lg:max-w-[45vw]">
          Ready to develop products and solutions{" "}
          <span className="text-purple">together</span> to some of the
          challenging real-world problems?
        </h1>
        <p className="text-white-200 md:mt-10 my-5 text-center">
          Reach out to me if you have some opportunities open for me
        </p>
        <a href="mailto:ashutoshj@iitbhilai.ac.in">
          <MagicButton
            title="Let's get in touch"
            icon={<FaLocationArrow />}
            position="right"
            handleClick={() => window.open(socialMedia[2].url, "_blank")}
          />
        </a>
      </div>
      <div className="flex mt-16 md:flex-row flex-col justify-between items-center">
        <p className="md:text-base text-sm md:font-normal font-light">
          Copyright © {new Date().getFullYear()} Ashutosh Kumar Jha
        </p>

        <div className="flex items-center md:gap-3 gap-6">
          {socialMedia.map((info) => (
            <div
              key={info.id}
              className="relative group w-14 h-14 cursor-pointer flex justify-center items-center 
        backdrop-filter backdrop-blur-lg saturate-180 bg-opacity-75 bg-black-200 
        rounded-lg border border-black-300 transition-all duration-300 ease-in-out
        hover:scale-110 hover:shadow-lg hover:shadow-purple-500/30 hover:ring-2 
        hover:ring-purple-500 hover:brightness-125"
              onClick={() => window.open(info.url, "_blank")}
            >
              {/* Tooltip */}
              <div
                className="absolute -top-10 scale-0 group-hover:scale-100 transition-transform duration-300 ease-in-out 
          bg-purple-500 text-white text-xs px-3 py-1 rounded-full shadow-lg whitespace-nowrap z-20"
              >
                {info.name}
              </div>

              {/* Icon */}
              <img
                src={info.img}
                alt={info.name}
                width={28}
                height={28}
                className="object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
