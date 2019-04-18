import React from 'react';

const Appointments = (props) => {
  return (
    <div className = "appointments">
      <header>
        <h1>Dr. {props.doctor.firstName} {props.doctor.lastName}</h1>
        <h3>{props.doctor.email}</h3>
      </header>
      <div>
        <table>
          <tbody>
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>Time</th>
              <th>Kind</th>
            </tr>
              {props.appointments.map(appt => {
                return (
                  <tr key={appt.id}>
                    <td>{appt.id}</td>
                    <td>{appt.name}</td>
                    <td>{appt.time}</td>
                    <td>{appt.kind}</td>
                  </tr>
                )
              })}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default Appointments;
