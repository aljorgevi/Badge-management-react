import React, { Fragment } from 'react';

export default function BadgeForm(props) {
  return (
    <Fragment>
      <form>
        <div className="form-group">
          <label className="">First Name</label>
          <input
            onChange={props.onChange}
            className="form-control"
            name="firstName"
            type="text"
            value={props.formData.firstName}
          />
        </div>
        <div className="form-group">
          <label className="">Last Name</label>
          <input
            onChange={props.onChange}
            className="form-control"
            name="lastName"
            type="text"
            value={props.formData.lastName}
          />
        </div>
        <div className="form-group">
          <label className="">Email</label>
          <input
            onChange={props.onChange}
            className="form-control"
            name="email"
            type="email"
            value={props.formData.email}
          />
        </div>
        <div className="form-group">
          <label className="">Job Title</label>
          <input
            onChange={props.onChange}
            className="form-control"
            name="jobTitle"
            type="text"
            value={props.formData.jobTitle}
          />
        </div>
        <div className="form-group">
          <label className="">Twitter</label>
          <input
            onChange={props.onChange}
            className="form-control"
            name="twitter"
            type="text"
            value={props.formData.twitter}
          />
        </div>
        <button className="button btn btn-primary">Save</button>
        {/* {props.error && <p className="text-danger">{props.error.message}</p>} */}
      </form>
    </Fragment>
  );
}
