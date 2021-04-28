import React, { useState, useMemo } from 'react';
import { FaTwitter } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import Gravatar from '../components/Gravatar';
import '../styles/components/BadgesList.css';

export default function BadgesList(props) {
  const badges = props.badges;
  return (
    <div>
      <div className="BadgesList">
        {/* <div className="form-group">
          <label>Filter Badges</label>
          <input
            type="text"
            className="form-control"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
        </div> */}
        <ul className="list-unstyled">
          {badges.map((badge) => {
            return (
              <li key={badge.id}>
                <Link
                  className="text-reset text-decoration-none"
                  to={`/badges/${badge.id}`}
                >
                  <div className="row BadgesListItem">
                    <div className="col-2">
                      <Gravatar
                        lassName="Badge__avatar-list"
                        email={badge.email}
                        alt="Avatar"
                      />
                    </div>
                    <div className="col-10">
                      <div className="">
                        <div>
                          {badge.firstName} {badge.lastName}
                        </div>
                        <div className="BadgesListItem__twitter">
                          <span className="twitter_icon">
                            <FaTwitter />
                          </span>
                          @{badge.twitter}
                        </div>
                        <div>{badge.jobTitle}</div>
                      </div>
                    </div>
                  </div>
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}