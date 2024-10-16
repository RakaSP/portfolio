import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircle } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

const Experience = () => {
  const [activeTimeline, setActiveTimeline] = useState("Experience");
  const educations = [
    {
      startDate: new Date("September 2022"),
      endDate: new Date(),
      title: "Bachelor Informatics",
      institution: "Ahmad Dahlan University",
    },
    {
      startDate: new Date("August 2024"),
      endDate: new Date(),
      title: "Cloud Computing",
      institution: "Bangkit Academy",
    },
  ];

  const experiences = [
    {
      startDate: new Date("March 2024"),
      endDate: new Date(),
      title: "Informatics Laboratory Assistant",
      institution: "Ahmad Dahlan University",
    },
  ];

  const renderTimelineBar = () => {
    const startDate = new Date("September 2022");
    const currentDate = new Date();

    const getYearDifference = (start, end) => {
      return end.getFullYear() - start.getFullYear();
    };

    const getMonthDifference = (start, end) => {
      const yearsDifference = getYearDifference(start, end);
      const monthsDifference = end.getMonth() - start.getMonth();
      return yearsDifference * 12 + monthsDifference;
    };

    const timelineMonthDiff = getMonthDifference(startDate, currentDate);
    const yearPositions = [];

    yearPositions.push({
      year: 2022,
      position: 0,
    });

    for (
      let year = startDate.getFullYear() + 1;
      year <= currentDate.getFullYear();
      year++
    ) {
      const yearStartDate = new Date(year, 0, 1);
      const monthsPassed = getMonthDifference(startDate, yearStartDate);
      const position = (monthsPassed / timelineMonthDiff) * 100;

      yearPositions.push({
        year,
        position,
      });
    }

    let activities;
    if (activeTimeline === "Experience") {
      activities = experiences;
    } else {
      activities = educations;
    }

    return (
      <>
        {yearPositions.map(({ year, position }) => (
          <p
            key={year}
            className="absolute -top-8 lga:text-xl sm:text-lg"
            style={{ left: `calc(${position}% + 16px)` }}
          >
            {year}
          </p>
        ))}

        {activities.map((activity) => {
          const itemStartPercentage =
            (getMonthDifference(startDate, activity.startDate) /
              timelineMonthDiff) *
            100;
          const activityBarWidth =
            (getMonthDifference(activity.startDate, activity.endDate) /
              timelineMonthDiff) *
            100;

          return (
            <div
              key={activity.title}
              className="bg-gradient-to-r from-violet-500 to-fuchsia-500 rounded-full px-4 font-semibold"
              style={{
                marginLeft: `calc(${itemStartPercentage}%)`,
                width: `calc(${activityBarWidth}%)`,
              }}
            >
              <p className="truncate sm:text-sm lga:text-base">
                {activity.title}
              </p>
            </div>
          );
        })}
      </>
    );
  };

  const renderTimelineDesc = () => {
    let activities;
    if (activeTimeline === "Experience") {
      activities = experiences;
    } else {
      activities = educations;
    }
    return activities.map((activity, index) => (
      <article className="flex flex-row xla:gap-8 lga:gap-4 gap-2 w-full lga:mt-4 mt-1 items-start">
        <div className="flex flex-row pt-2 justify-end relative lga:gap-4 gap-1 lga:mr-4 mr-1 min-w-[25%] max-w-[25%]">
          <p className="font-semibold h-4 lga:text-sm text-[12px] mr-2 lga:mr-0">
            {activity.startDate.toLocaleString("default", {
              year: "numeric",
              month: "short",
            })}{" "}
            -{" "}
            {activity.endDate.toLocaleString("default", {
              year: "numeric",
              month: "short",
            })}
          </p>
          <div className="flex justify-center">
            <div className="h-4">
              <FontAwesomeIcon
                icon={faCircle}
                className="text-[#00ADB5] shadow-[0_0_8px_#EEFCFD] rounded-full text-sm lga:text-base"
              />
            </div>
            {index !== activities.length - 1 && (
              <div className="absolute top-9 w-[2px] h-[200%] bg-[#00ADB5] z-10"></div>
            )}
          </div>
        </div>
        <div>
          <h4 className="lga:text-lg text-base">
            {activity.title} | {activity.institution}
          </h4>
          <h5 className="lga:text-base text-[12px]">Yogyakarta, Indonesia</h5>
        </div>
      </article>
    ));
  };

  return (
    <section id="timeline" className="flex flex-col items-center mt-12">
      <h2 className="section-header">Timeline</h2>
      <div className="rounded-full p-2 bg-[#393E46] flex flex-row justify-around sm:w-[240px] w-[70vw] relative lga:mt-4 mt-2">
        <h6
          className={`${
            activeTimeline === "Experience"
              ? "[text-shadow:_0_4px_8px_rgba(14_165_223_/_0.5)] text-sky-400"
              : "hover:[text-shadow:_0_4px_8px_rgba(14_165_223_/_0.5)] hover:text-sky-400"
          } cursor-pointer lga:text-base mda:text-sm text-[12px]`}
          onClick={() => setActiveTimeline("Experience")}
        >
          Experience
        </h6>
        <div className="w-[2px] h-full absolute right-1/2 transform translate-x-1/2 bg-white top-0"></div>
        <h6
          className={`${
            activeTimeline === "Education"
              ? "[text-shadow:_0_4px_8px_rgba(14_165_223_/_0.5)] text-sky-400"
              : "hover:[text-shadow:_0_4px_8px_rgba(14_165_223_/_0.5)] hover:text-sky-400"
          } cursor-pointer lga:text-base mda:text-sm text-[12px]`}
          onClick={() => setActiveTimeline("Education")}
        >
          Education
        </h6>
      </div>
      <div className="lga:mt-12 mt-6 bg-[#393E46] px-4 py-4 sm:flex flex-col gap-2 relative rounded-md w-[80%] sm:w-full hidden">
        {renderTimelineBar()}
      </div>

      <div className="flex flex-col gap-4 items-center lga:mt-6 mt-2 w-full">
        {renderTimelineDesc()}
      </div>
    </section>
  );
};

export default Experience;
