import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const UserProfile = ({ user, onLogout }) => {
  const defaultUser = {
    name: 'Mr. Arvind Sharma',
    designation: 'Executive Officer, Municipal Council',
    email: 'eo.ulb@example.com',
    phone: '+91-9876543210',
    photo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS9HDTr7uGXlc9XR0jywyFIPEL0jfSG3igeww&s',
  };

  const profile = user || defaultUser;

  return (
    <div className="container my-4">
      <div className="card shadow-sm p-4">
        <div className="d-flex flex-column flex-md-row align-items-center gap-4">
          {/* Profile Picture */}
          <img
            src={profile.photo}
            alt="User Profile"
            className="rounded-circle border"
            style={{ width: '130px', height: '130px', objectFit: 'cover' }}
          />

          {/* User Info */}
          <div className="text-center text-md-start flex-grow-1">
            <h4 className="fw-bold mb-1">{profile.name}</h4>
            <p className="text-muted mb-2">{profile.designation}</p>
            <p className="mb-0"><strong>Email:</strong> {profile.email}</p>
            <p><strong>Phone:</strong> {profile.phone}</p>
          </div>

          {/* Logout Button */}
          <div className="text-center text-md-end">
            <button
              className="btn btn-danger"
              onClick={onLogout}
            >
              Logout
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
