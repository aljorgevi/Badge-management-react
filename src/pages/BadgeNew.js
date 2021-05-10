import React, { Fragment, useState } from 'react';
import { firebase } from '../firebase';
import Badge from '../components/Badge';
import BadgeForm from '../components/BadgeForm';
import logo from '../assets/images/badge-header.svg';
import '../styles/pages/BadgeNew.css';
import Skeleton from '../components/Skeleton/Skeleton';
import Spinner from '../components/Spinner/Spinner';

export default function BadgeNew(props) {
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    jobTitle: '',
    twitter: '',
  });

  const handleChange = (e) => {
    const lenghtValue = e.target.value;
    if (lenghtValue.length <= 25) {
      setFormData((prevState) => ({
        ...prevState,
        [e.target.name]: e.target.value,
      }));
      return;
    } else {
      console.log('Debe tener menos caracteres');
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setError(null);
    setLoading(true);

    try {
      const db = firebase.firestore();
      const data = await db.collection('badges').add(formData);
      setLoading(false);

      props.history.push('/badges');
    } catch (error) {
      setError(error);
    }
  };

  if (loading) {
    return <Spinner />;
  }

  return (
    <Fragment>
      <div className="BadgeNew__hero">
        <img className="BadgeNew__hero-image img-fluid" src={logo} alt="Logo" />
      </div>
      <div className="container">
        <div className="row">
          <div className="col-12 col-md-6 order-2 order-md-1">
            <Badge
              avatarUrl="https://www.gravatar.com/avatar?d=identicon"
              firstName={formData.firstName || 'FIRST_NAME'}
              lastName={formData.lastName || 'LAST_NAME'}
              twitter={formData.twitter || 'TWITTER'}
              jobTittle={formData.jobTitle || 'JOBTITTLE'}
              email={formData.email || 'EMAIL'}
            />
          </div>
          <div className="col-12 col-md-6 order-1 mb-5 order-md-2">
            <h1>New Attendant</h1>
            <BadgeForm
              formData={formData}
              onChange={handleChange}
              onSubmit={handleSubmit}
              error={error}
            />
          </div>
        </div>
      </div>
    </Fragment>
  );
}
