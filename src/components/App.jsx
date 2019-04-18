import React, {Component} from 'react';
import axios from 'axios';
import Appointments from './Appointments';
import SideBar from './SideBar';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      doctor: '',
      physicians: [],
      appointments: []
    }

    this.getPhysicians = this.getPhysicians.bind(this);
    this.getAppointments = this.getAppointments.bind(this);
  }

  componentDidMount () {
    this.getPhysicians();
  }

  getPhysicians () {
    axios.get('/physicians')
      .then (physicians => {
        this.setState( {physicians: physicians.data})
        this.setState( {doctor: physicians.data[0]})
      })
      .then( () => {
        this.getAppointments(this.state.doctor.id)
      })
      .catch( err => {
        console.log(err)
      })
  }

  getAppointments (physician_id) {
    axios.get('/appointments', {
      params: {
        physician: physician_id
      }
    })
      .then( data => {
        this.setState({ doctor : data.data.physician })
        this.setState({ appointments : data.data.appointments });
      })
      .catch( err => {
        console.log(err);
      })
  }

  render() {
    return (
      <div className = "main">
        <SideBar physicians={this.state.physicians} getAppts={this.getAppointments} selected={this.state.doctor.id}/>
        <Appointments doctor={this.state.doctor} appointments={this.state.appointments}/>
      </div>
    )
  }
}

export default App;
