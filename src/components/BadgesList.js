import React, { useState, useMemo } from 'react';
import { FaTwitter } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import Skeleton from './Skeleton/Skeleton';
import Gravatar from '../components/Gravatar';
import '../styles/components/BadgesList.css';

export default function BadgesList(props) {
  const badges = props.badges;
  const { query, setQuery, filteredBadges } = useSearchBadges(badges);

  if (!props.loading && badges.length === 0) {
    return (
      <div>
        <div className="form-group">
          <label>Filter Badges</label>
          <input
            type="text"
            className="form-control"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
        </div>
        <h3>No badges were found</h3>
        <Link className="btn btn-primary" to="/badges/new">
          Create new badge
        </Link>
      </div>
    );
  }

  //cu8stom hook
  function useSearchBadges(badges) {
    const [query, setQuery] = useState('');
    const [filteredBadges, setFilteredBadges] = useState(badges);

    useMemo(() => {
      const result = badges.filter((badge) => {
        return `${badge.firstName} ${badge.lastName}`
          .toLowerCase()
          .includes(query.toLocaleLowerCase());
      });

      setFilteredBadges(result);
    }, [badges, query]);

    return { query, setQuery, filteredBadges };
  }

  return (
    <div>
      <div className="BadgesList">
        <div className="form-group">
          <label>Filter Badges</label>
          <input
            type="text"
            className="form-control"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
        </div>
        <ul className="list-unstyled">
          {props.loading
            ? new Array(10).fill(1).map((_, i) => {
                return <Skeleton key={i} />;
              })
            : filteredBadges.map((badge) => {
                return (
                  <li key={badge.id}>
                    <Link
                      className="text-reset text-decoration-none"
                      to={`/badges/${badge.id}`}
                    >
                      <div className="row BadgesListItem">
                        <div className="col-2">
                          <Gravatar
                            className="Badge__avatar-list"
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
