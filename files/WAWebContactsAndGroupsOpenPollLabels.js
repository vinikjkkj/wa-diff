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
        ? s._(/*BTDS*/ "Ends today")
        : e === 1
          ? s._(/*BTDS*/ "Ends tomorrow")
          : s._(
              /*BTDS*/ '_j{"*":"Ends in {number} days","_1":"Ends in 1 day"}',
              [s._plural(e, "number")],
            );
    }
    l.getOpenPollEndsLabel = e;
  },
  226,
);
