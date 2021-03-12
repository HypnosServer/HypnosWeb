import React from "react";
import "../styles/map.scss";

export function Map() {
  return (
    <div className="map">
      <iframe
        src="http://hypnos.shit.vc:5000/#world_isometric_day/0/20/25/272/64"
        frameBorder="0"
      />
    </div>
  );
}
