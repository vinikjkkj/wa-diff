__d(
  "WAWebContactsAndGroupsOpenPollLabels",
  ["fbt", "WAWebContactsAndGroupsThisWeek", "WAWebFrontendChatGetters"],
  function (t, n, r, o, a, i, l, s) {
    function e(e, t, n) {
      var r = o("WAWebFrontendChatGetters").getFormattedTitle(e.chat),
        a = c(e, t);
      return e.isMine
        ? s._(/*BTDS*/ "{groupName} \u00b7 by you \u00b7 {when}", [
            s._param("groupName", r),
            s._param("when", a),
          ])
        : n != null
          ? s._(/*BTDS*/ "{groupName} \u00b7 by {creatorName} \u00b7 {when}", [
              s._param("groupName", r),
              s._param("creatorName", n),
              s._param("when", a),
            ])
          : s._(/*BTDS*/ "{groupName} \u00b7 {when}", [
              s._param("groupName", r),
              s._param("when", a),
            ]);
    }
    function u(e, t) {
      return d(
        o("WAWebContactsAndGroupsThisWeek").getCalendarDaysBetween(t, e),
      );
    }
    function c(e, t) {
      return e.endTime != null
        ? d(
            o("WAWebContactsAndGroupsThisWeek").getCalendarDaysBetween(
              t,
              e.endTime,
            ),
          )
        : m(o("WAWebContactsAndGroupsThisWeek").getCalendarDaysBetween(e.t, t));
    }
    function d(e) {
      return e <= 0
        ? s._(/*BTDS*/ "Ends today")
        : e === 1
          ? s._(/*BTDS*/ "Ends tomorrow")
          : s._(
              /*BTDS*/ '_j{"*":"Ends in {number} days","_1":"Ends in 1 day"}',
              [s._plural(e, "number")],
            );
    }
    function m(e) {
      return e <= 0
        ? s._(/*BTDS*/ "Today")
        : e === 1
          ? s._(/*BTDS*/ "Yesterday")
          : s._(/*BTDS*/ '_j{"*":"{number} days ago","_1":"1 day ago"}', [
              s._plural(e, "number"),
            ]);
    }
    ((l.getOpenPollSubtitle = e), (l.getOpenPollEndsLabel = u));
  },
  226,
);
