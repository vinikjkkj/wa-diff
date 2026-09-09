__d(
  "WAWebBizAIAppointmentCreateMockData",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = [
        {
          id: "mock-business-calendar",
          name: "Business Calendar",
          primary: !0,
        },
        {
          id: "mock-personal-calendar",
          name: "Personal Calendar",
          primary: !1,
        },
      ],
      l = "America/Los_Angeles",
      s = "Pacific Time",
      u = [
        { dayOfWeek: 1, endTimeMinutes: 1020, startTimeMinutes: 540 },
        { dayOfWeek: 2, endTimeMinutes: 1020, startTimeMinutes: 540 },
        { dayOfWeek: 3, endTimeMinutes: 1020, startTimeMinutes: 540 },
        { dayOfWeek: 4, endTimeMinutes: 1020, startTimeMinutes: 540 },
        { dayOfWeek: 5, endTimeMinutes: 1020, startTimeMinutes: 540 },
        { dayOfWeek: 6, endTimeMinutes: null, startTimeMinutes: null },
        { dayOfWeek: 7, endTimeMinutes: null, startTimeMinutes: null },
      ];
    ((i.MOCK_APPOINTMENT_CALENDARS = e),
      (i.MOCK_APPOINTMENT_TIME_ZONE_ID = l),
      (i.MOCK_APPOINTMENT_TIME_ZONE_LABEL = s),
      (i.MOCK_APPOINTMENT_AVAILABILITY = u));
  },
  66,
);
