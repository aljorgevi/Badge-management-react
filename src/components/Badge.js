import React from 'react';
import Gravatar from './Gravatar';
import confLogo from '../assets/images/badge-header.svg';
import '../styles/components/Badge.css';

export default function Badge(props) {
  return (
    <div className="Badge">
      <div className="Badge__header ">
        <img src={confLogo} alt="Logo" />
      </div>
      <div className="Badge__section-name">
        <Gravatar
          className="Badge__avatar"
          email={props.email}
          alt="Gravatar"
        />
        <h1 className="">
          {props.firstName} <br />
          {props.lastName}
        </h1>
      </div>
      <div className="Badge__section-info">
        <h3>{props.jobTittle}</h3>
        <div>@{props.twitter}</div>
        <div className="Badge__footer">#platziconf</div>
      </div>
    </div>
  );
}
