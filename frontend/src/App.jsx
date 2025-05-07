import BookAppointment from './pages/patient/BookAppointment';
<Route path="/pages/patient/book-appointment" element={<BookAppointment />} />

import React from "react";
import { Outlet } from "react-router-dom";
const App = () => {
  return (
    <>
      <Outlet />
    </>
  );
};

export default App;
