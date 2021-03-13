import React, { useEffect, useState } from "react";
import { API, GET_Server } from "../api";
import "../styles/status.scss";

export function Status() {
  const [servers, setServers] = useState([] as GET_Server[]);

  useEffect(() => {
    API.json("/status").then(setServers);
  });

	return (
		<div className="status-page">
      <ul className="status-list">
        {servers.map(server => (
          <li className="status" key={server.name}>
            <strong>{server.name}</strong> status:&nbsp;
            <span className={`${server.online ? "online" : "offline"}-status`}>
              {server.online ? "online" : "offline"}
            </span>
          </li>
        ))}
      </ul>
    </div>
	);
}
