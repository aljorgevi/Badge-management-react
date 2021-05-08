import React, { Fragment, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { firebase } from '../firebase';
import BadgesList from '../components/BadgesList';
import logo from '../assets/images/badge-header.svg';
import '../styles/pages/Badges.css';
import PageError from '../components/PageError';

export default function Badges() {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [Data, setData] = useState([]);

  useEffect(() => {
    setLoading(true);
    setError(null);

    const getData = async () => {
      try {
        const db = firebase.firestore();
        const data = await db
          .collection('badges')
          .orderBy('firstName', 'desc')
          .get();

        const arrayData = data.docs.map((item) => ({
          id: item.id,
          ...item.data(),
        }));
        setTimeout(() => setLoading(false), 500);
        setError(null);
        setData(arrayData);
      } catch (error) {
        setError(error);
      }
    };

    getData();
  }, []);

  if (error) {
    return <PageError error={error} />;
  }

  return (
    <Fragment>
      <div className="Badges">
        <div className="Badges__hero">
          <div className="Badges__container">
            <img className="Badges_conf-logo" src={logo} alt="" />
          </div>
        </div>
      </div>
      <div className="Badge__container">
        <div className="Badges__list">
          <div className="Badges__container">
            <div className="Badges__buttons">
              <Link to="/badges/new" className="btn btn-primary">
                New Badge
              </Link>
            </div>
            <BadgesList loading={loading} badges={Data} />
          </div>
        </div>
      </div>
    </Fragment>
  );
}
