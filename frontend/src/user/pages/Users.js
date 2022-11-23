import React from "react";
import UsersList from "../components/UsersList";

const Users = () => {
  const USERS = [
    {
      id: 'u1',
      name: 'Some random guy',
      image: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?cs=srgb&dl=pexels-pixabay-220453.jpg&fm=jpg&_gl=1*1cjaias*_ga*Mzc1OTUzMzk2LjE2NjgxOTA3MTQ.*_ga_8JE65Q40S6*MTY2ODE5MDcxNC4xLjEuMTY2ODE5MDcyMC4wLjAuMA..',
      places: 3
    }
  ];


  return <UsersList items={USERS} />
};

export default Users;

