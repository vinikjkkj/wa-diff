__d(
  "WAWebContactsAndGroupsThisWeek",
  ["WATimeUtils"],
  function (t, n, r, o, a, i, l) {
    function e(e, t) {
      return e != null && e > 0 && t - e <= o("WATimeUtils").WEEK_SECONDS;
    }
    function s(e, t) {
      return Math.round((u(t) - u(e)) / o("WATimeUtils").DAY_MILLISECONDS);
    }
    function u(e) {
      var t = new Date(
        o("WATimeUtils").castUnixTimeToMillisTime(
          o("WATimeUtils").castToUnixTime(e),
        ),
      );
      return (t.setHours(0, 0, 0, 0), t.getTime());
    }
    ((l.THIS_WEEK_IN_SECONDS = o("WATimeUtils").WEEK_SECONDS),
      (l.happenedThisWeek = e),
      (l.getCalendarDaysBetween = s),
      (l.startOfDay = u));
  },
  98,
);
