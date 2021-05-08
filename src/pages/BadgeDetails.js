import React from 'react';
import { Link } from 'react-router-dom';
import DeleteBadgeModal from '../components/DeleteBadgeModal';
import Badge from '../components/Badge';
import confLogo from '../assets/images/platziconf-logo.svg';
import '../styles/pages/BadgeDetails.css';

export default function BadgeDetails({
  data,
  modalIsOpen,
  onOpenModal,
  onCloseModal,
  onDeleteBadge,
}) {
  return (
    <div>
      <div className="BadgeDetails__hero">
        <div className="container">
          <div className="row">
            <div className="col-6">
              <img src={confLogo} alt="conf-logo" />
            </div>
            <div className="col-6 BadgeDetails__hero-attendant-name">
              <h1>{data.firstName} </h1>
            </div>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="row">
          <div className="col">
            <Badge
              firstName={data.firstName}
              lastName={data.lastName}
              email={data.email}
              twitter={data.twitter}
              jobTitle={data.jobTitle}
            />
          </div>
          <div className="col">
            <h2>Actions</h2>
            <div>
              <div>
                <Link
                  className="btn btn-primary mb-4"
                  to={`/badges/${data.id}/edit`}
                >
                  Edit
                </Link>
              </div>
            </div>
            <div>
              <button onClick={onOpenModal} className="btn btn-danger">
                Delete
              </button>
              <DeleteBadgeModal
                onDeleteBadge={onDeleteBadge}
                isOpen={modalIsOpen}
                onClose={onCloseModal}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
