import React from "react";
import { GET_Member } from "../../api";
import "../../styles/about/member-widget.scss";

type MemberWidgetProps = GET_Member;

export function MemberWidget(props: MemberWidgetProps) {
  const { avatar, username } = props;

  return (
    <div className="member-widget">
      <div className="profile-picture">
        <img alt={`${username}'s profile picture`}
             src={avatar}/>
      </div>
      <h2>{username}</h2>
    </div>
  )
}
