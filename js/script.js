$(document).ready(function() {
  $('#calendar').fullCalendar({
    theme: 'bootstrap3',
    defaultView: 'agendaWeek',
    header: {

      center: 'title',
      left: ' prev next, today',
      right: 'agendaDay,agendaWeek,month,listYear'
    },
    googleCalendarApiKey: 'AIzaSyA9oz3_WDZx2HTANrqPSDMmkZCfq31SOc0',
    events: {
      googleCalendarId: 'bgkpq8smnnnklg7rvav9iqtcac@group.calendar.google.com',
    },

  //    center: 'title',
  //   left: ' prev,next today',
  //   right: 'agendaDay,agendaWeek,month,listYear'
  // },
  // googleCalendarApiKey: 'AIzaSyBezf2CVjdXCQdPxg90kJPZlAae190WDCc',
  // events: {
  //   googleCalendarId: 'rokailabs.com_g7869ulr6pogjo1jo66hkovkes@group.calendar.google.com'
  // },
  //

    selectable: true,
    editable: false,
    height: 750,
    fixedWeekCount: false,
  });

});

// $(document).ready(function() {
//     $('#calendar').fullCalendar({
//         googleCalendarApiKey: 'AIzaSyBezf2CVjdXCQdPxg90kJPZlAae190WDCc',
//         events: {
//             googleCalendarId: 'rokailabs.com_g7869ulr6pogjo1jo66hkovkes@group.calendar.google.com'
//         }
//     });
//     console.log('test')
// });
