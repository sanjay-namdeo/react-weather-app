import React from "react";
import "./SeasonDisplay.css";

const seasonConfig = {
  summer: {
    text: "Let's hit the beach",
    icon: "sun"
  },
  winter: {
    text: "Its flurry and cold",
    icon: "snowflake"
  }
};

const seasonInfo = (lat, month) => {
  if (month > 2 && month < 9) {
    return lat > 0 ? "summer" : "winter";
  } else {
    return lat > 0 ? "winter" : "summer";
  }
};

const SeasonDisplay = props => {
  const season = seasonInfo(props.lat, new Date().getMonth());
  const iconName = seasonConfig[season].icon;
  const text = seasonConfig[season].text;

  console.log(season, iconName, text);
  return (
    <div className={`weather-info ${season}`}>
      <i className={`icon-left massive ${iconName} icon`} />
      <h1>{text}</h1>
      <i className={`icon-right massive ${iconName} icon`} />
    </div>
  );
};

export default SeasonDisplay;
