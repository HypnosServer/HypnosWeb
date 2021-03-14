import React, { useEffect, useState } from "react";
import { API, GET_Member } from "../../api";
import { MemberWidget } from "./member-widget";
import "../../styles/about/index.scss";

export function About() {
  const [members, setMembers] = useState([] as GET_Member[]);

  useEffect(() => {
    API.json("/members").then(setMembers);
  }, []);

  return (
    <div className="members">
      <p>We are a Minecraft technical server running 1.12.2 that started in October 2019. Our goal, like any other tech
         server, is to make farms for just about everything and make them as best we can. We both dig perimeters and
         dupe perimeters.<br/>
         Applications are currently closed, if you wish to join please be friendly in the discord server and you will
         be offered a chance of membership if you show interest.</p>

      <h2>Members:</h2>
      <section className="member-list">
          {members.map(member =>
            <MemberWidget
              key={member.avatar}
              {...member}
            />
          )}
      </section>
    </div>
  )
}
