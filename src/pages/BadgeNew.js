import React, { Fragment, useState } from 'react';
import Badge from '../components/Badge';
import BadgeForm from '../components/BadgeForm';
import logo from '../assets/images/badge-header.svg';
import '../styles/pages/BadgeNew.css';

export default function BadgeNew() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    jobTitle: '',
    twitter: '',
  });
  console.log(formData);

  const handleChange = (e) => {
    const lenghtValue = e.target.value;
    if (lenghtValue.length <= 25) {
      setFormData((prevState) => ({
        ...prevState,
        [e.target.name]: e.target.value,
      }));
      console.log(formData);
      return;
    } else {
      console.log('Debe tener menos caracteres');
    }
  };

  // handleSubmit = async (e) => {
  //   e.preventDefault();
  //   this.setState({ loading: true, error: null });

  //   try {
  //     await api.badges.create(this.state.form);
  //     this.setState({ loading: false });

  //     this.props.history.push('/badges');
  //   } catch (error) {
  //     this.setState({ loading: false, error: error });
  //   }
  // };
  return (
    <Fragment>
      <div className="BadgeNew__hero">
        <img className="BadgeNew__hero-image img-fluid" src={logo} alt="Logo" />
      </div>
      <div className="container">
        <div className="row">
          <div className="col-6">
            <Badge
              avatarUrl="https://www.gravatar.com/avatar?d=identicon"
              firstName={formData.firstName || 'FIRST_NAME'}
              lastName={formData.lastName || 'LAST_NAME'}
              twitter={formData.twitter || 'TWITTER'}
              jobTittle={formData.jobTitle || 'JOBTITTLE'}
              email={formData.email || 'EMAIL'}
            />
          </div>
          <div className="col-6">
            <h1>New Attendant</h1>
            <BadgeForm formData={formData} onChange={handleChange} />
          </div>
        </div>
      </div>
    </Fragment>
  );
}
