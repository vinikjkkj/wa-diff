__d(
  "WAWebContactsAndGroupsOpenPollLabels",
  ["fbt", "WAWebContactsAndGroupsThisWeek"],
  function (t, n, r, o, a, i, l, s) {
    function e(e, t) {
      return u(
        o("WAWebContactsAndGroupsThisWeek").getCalendarDaysBetween(t, e),
      );
    }
    function u(e) {
      return e <= 0
        ? s._(/*BTDS*/ "")
        : e === 1
          ? s._(/*BTDS*/ "")
          : s._(/*BTDS*/ "", [s._plural(e, "number")]);
    }
    l.getOpenPollEndsLabel = e;
  },
  226,
);
