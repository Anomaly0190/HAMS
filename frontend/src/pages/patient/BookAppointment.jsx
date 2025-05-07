import React, { useState } from 'react';

const BookAppointment = () => {
  const [formData, setFormData] = useState({
    patientName: '',
    doctor: '',
    date: '',
    
    time: '',
    reason: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // TODO: Replace this with actual API call
    console.log('Appointment Data:', formData);
    setSubmitted(true);
  };

  return (
    <div className="max-w-xl mx-auto mt-10 p-6 shadow-lg rounded-xl bg-white">
      <h2 className="text-2xl font-bold mb-6 text-center">Book Appointment</h2>

      {submitted ? (
        <div className="text-green-600 text-center font-semibold">
          Appointment booked successfully!
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            name="patientName"
            placeholder="Patient Name"
            value={formData.patientName}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 border rounded-lg"
          />

          <select
            name="doctor"
            value={formData.doctor}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 border rounded-lg"
          >
            <option value="">Select Doctor</option>
            <option value="Dr. Smith">Dr. Smith</option>
            <option value="Dr. Johnson">Dr. Johnson</option>
            <option value="Dr. Sharma">Dr. Sharma</option>
          </select>

          <input
            type="date"
            name="date"
            value={formData.date}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 border rounded-lg"
          />

          <input
            type="time"
            name="time"
            value={formData.time}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 border rounded-lg"
          />

          <textarea
            name="reason"
            placeholder="Reason for visit"
            value={formData.reason}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-lg"
          />

          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700"
          >
            Book Now
          </button>
        </form>
      )}
    </div>
  );
};

export default BookAppointment;
