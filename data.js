const data = [
  {
    physician: {
      id: 1,
      firstName: "Algernop",
      lastName: "Krieger",
      email: "krieger@notablehealth.com",
    },
    appointments: [
      {
        id: 1,
        name: "Sterling Archer",
        time: "8:00AM",
        kind: "New Patient"
      },
      {
        id: 2,
        name: "Cyril Figis",
        time: "8:80AM",
        kind: "Follow-up"
      },
      {
        id: 3,
        name: "Ray Gilette",
        time: "9:00AM",
        kind: "Follow-up"
      },
      {
        id: 4,
        name: "Lana Kane",
        time: "9:30AM",
        kind: "New Patient"
      },
    ]
  },
  {
    physician: {
      id: 2,
      firstName: "Julius",
      lastName: "Hibbert",
      email: "Kibbert@notablehealth.com",
    },
    appointments: [
      {
        id: 1,
        name: "Pam Poovey",
        time: "8:00AM",
        kind: "Follow-up"
      },
      {
        id: 2,
        name: "Bob Peter",
        time: "9:00AM",
        kind: "New Patient"
      },
      {
        id: 3,
        name: "Alexander Gomez",
        time: "9:30AM",
        kind: "Follow-up"
      },
      {
        id: 4,
        name: "Hailey Poon",
        time: "10:00AM",
        kind: "New Patient"
      },
    ]
  },
]

module.exports = data;
