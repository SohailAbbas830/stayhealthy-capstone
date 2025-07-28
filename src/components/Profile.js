import React, { useState } from 'react';

export default function Profile() {
  const [profile, setProfile] = useState({ name: 'John Doe', email: 'john@example.com' });

  return (
    <div className="profile">
      <h3>Your Profile</h3>
      <p>Name: {profile.name}</p>
      <p>Email: {profile.email}</p>
    </div>
  );
}