import React, { Fragment, useState, useEffect } from 'react';
import { firebase } from '../firebase';
import Badge from '../components/Badge';
import BadgeForm from '../components/BadgeForm';
import logo from '../assets/images/badge-header.svg';
import Spinner from '../components/Spinner/Spinner';
import '../styles/pages/BadgeEdit.css';

export default function BadgeEdit(props) {
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    jobTitle: '',
    twitter: '',
  });

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      setError(null);

      try {
        let idEdited = props.match.params.badgeId;

        const db = firebase.firestore();

        const data = await db.collection('badges').get();
        const arrayData = data.docs.map((item) => ({
          id: item.id,
          ...item.data(),
        }));
        const arrayFilter = arrayData.filter((item) => item.id === idEdited);

        setFormData(arrayFilter[0]);
        setLoading(false);
      } catch (error) {
        setLoading(false);
        setError(error);
      }
    };
    fetchData();
    // eslint-disable-next-line
  }, []);

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
      const idEdited = props.match.params.badgeId;
      const db = firebase.firestore();
      await db.collection('badges').doc(idEdited).update(formData);
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
      <div className='BadgeEdit__hero'>
        <img
          className='BadgeEdit__hero-image img-fluid'
          src={logo}
          alt='Logo'
        />
      </div>
      <div className='container'>
        <div className='row'>
          <div className='col-12 col-md-6 order-2 order-md-1'>
            <Badge
              avatarUrl='https://www.gravatar.com/avatar?d=identicon'
              firstName={formData.firstName || 'FIRST_NAME'}
              lastName={formData.lastName || 'LAST_NAME'}
              twitter={formData.twitter || 'TWITTER'}
              jobTittle={formData.jobTitle || 'JOBTITTLE'}
              email={formData.email || 'EMAIL'}
            />
          </div>
          <div className='col-12 col-md-6 order-1 mb-5 order-md-2'>
            <h1>Edit Attendant</h1>
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
