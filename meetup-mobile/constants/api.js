export const fetchMeetups = () =>
  fetch('http://10.133.2.76:3333/api/meetups')
    .then(res => res.json());
