import React, { useEffect, useState } from "react";
import { API, GET_Members } from "../../api";
import { MemberWidget } from "./member-widget";
import "../../styles/about/index.scss";

export function About() {
  const [members, setMembers] = useState([] as GET_Members);

  useEffect(() => {
    API.json("/members").then(setMembers);
  }, []);

  return (
    <div className="members">
      <section className="member-list">
          {members.map(member =>
            // <div className="member-container">
              <MemberWidget
                key={member.avatar}
                {...member}
              />
            // </div>
          )}
      </section>
    </div>
  )
}
