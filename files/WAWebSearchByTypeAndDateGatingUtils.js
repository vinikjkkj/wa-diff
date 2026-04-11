__d(
  "WAWebSearchByTypeAndDateGatingUtils",
  ["WAWebABProps"],
  function (t, n, r, o, a, i, l) {
    function e() {
      return o("WAWebABProps").getABPropConfigValue(
        "web_date_marker_calendar_enabled",
      );
    }
    function s() {
      return o("WAWebABProps").getABPropConfigValue(
        "web_calendar_message_density_enabled",
      );
    }
    ((l.dateMarkerCalendarEnabled = e), (l.calendarMessageDensityEnabled = s));
  },
  98,
);
