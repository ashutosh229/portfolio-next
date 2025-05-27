import React from "react";
import { workExperience } from "@/data";
import { Button } from "./ui/MovingBorders";

const Experience = () => {
  return (
    <div className="py-20 w-full">
      <h1 className="heading">
        My <span className="text-purple">work experience</span>
      </h1>

      <div className="w-full mt-12 grid lg:grid-cols-4 grid-cols-1 gap-10">
        {workExperience.map((card) => (
          <Button
            key={card.id}
            duration={Math.floor(Math.random() * 10000) + 10000}
            borderRadius="1.75rem"
            style={{
              background: "rgb(4,7,29)",
              backgroundColor:
                "linear-gradient(90deg, rgba(4,7,29,1) 0%, rgba(12,14,35,1) 100%)",
              borderRadius: `calc(1.75rem* 0.96)`,
            }}
            className={`flex-1 text-black dark:text-white border-neutral-200 dark:border-slate-800 ${card.className}`}
          >
            <div className="flex lg:flex-row flex-col lg:items-center p-3 py-6 md:p-5 lg:p-10 gap-4">
              <img
                src={card.thumbnail}
                alt={card.title}
                className="lg:w-32 md:w-20 w-16 object-contain"
              />
              <div className="lg:ms-5 text-start space-y-2">
                <h1 className="text-xl md:text-2xl font-bold">{card.title}</h1>
                {card.organization && (
                  <p className="text-sm font-medium text-gray-400">
                    {card.organization}
                  </p>
                )}
                <div className="flex flex-wrap gap-2 text-sm text-gray-300">
                  {card.time && <span>📅 {card.time}</span>}
                  {card.location && <span>📍 {card.location}</span>}
                </div>
                {card.desc && (
                  <p className="mt-2 text-white-100 text-sm md:text-base">
                    {card.desc}
                  </p>
                )}
                {card.skills && (
                  <p className="mt-1 text-xs md:text-sm text-purple font-medium">
                    🔧 Skills: {card.skills}
                  </p>
                )}
                {card.link && (
                  <a
                    href={card.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block mt-3 underline text-blue-400 hover:text-blue-300 text-sm"
                  >
                    View More ↗
                  </a>
                )}
              </div>
            </div>
          </Button>
        ))}
      </div>
    </div>
  );
};

export default Experience;
