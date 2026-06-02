__d(
  "WAWebGoogleCalendarLink",
  [],
  function (t, n, r, o, a, i) {
    function e(e) {
      var t = e.description,
        n = e.endTimeUnixSeconds,
        r = e.location,
        o = e.startTimeUnixSeconds,
        a = e.title,
        i = l(o * 1e3),
        s = l((n != null ? n : o + 3600) * 1e3),
        u = new URLSearchParams({
          action: "TEMPLATE",
          text: a,
          details: t != null ? t : "",
          location: r != null ? r : "",
          dates: i + "/" + s,
        });
      return "https://calendar.google.com/calendar/render?" + u.toString();
    }
    function l(e) {
      return new Date(e).toISOString().replace(/-|:|\.\d+/g, "");
    }
    i.default = e;
  },
  66,
);
