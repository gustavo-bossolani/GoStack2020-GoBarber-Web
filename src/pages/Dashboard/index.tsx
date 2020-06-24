import React, { useCallback } from 'react';
import { useHistory } from 'react-router-dom';

const Dashboard: React.FC = () => {
  const history = useHistory();

  const handleLogout = useCallback(() => {
    localStorage.removeItem('@GoBarber:token');
    localStorage.removeItem('@GoBarber:user');

    history.push('/');
  }, [history]);

  return (
    <>
      <h1>Dashboard</h1>
      <button onClick={() => handleLogout} type="button">
        Logout
      </button>
    </>
  );
};

export default Dashboard;
