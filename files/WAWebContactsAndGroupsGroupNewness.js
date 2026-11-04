__d(
  "WAWebContactsAndGroupsGroupNewness",
  [
    "fbt",
    "WAWebContactsAndGroupsDBGroupJoins",
    "WAWebContactsAndGroupsThisWeek",
  ],
  function (t, n, r, o, a, i, l, s) {
    function e(e, t, n) {
      return (
        o("WAWebContactsAndGroupsThisWeek").happenedThisWeek(e.t, t) &&
        !m(e, t, n)
      );
    }
    function u(e, t, n, r) {
      var a,
        i = (a = e.groupMetadata) == null ? void 0 : a.creation;
      return m(e, t, r) && i != null
        ? { author: null, reason: "created", t: i }
        : n != null &&
            o("WAWebContactsAndGroupsThisWeek").happenedThisWeek(n.t, t)
          ? { author: n.author, reason: p(n.subtype), t: n.t }
          : i != null &&
              o("WAWebContactsAndGroupsThisWeek").happenedThisWeek(i, t)
            ? { author: null, reason: "added", t: i }
            : null;
    }
    function c(e, t, n) {
      var r = d(e.t, t);
      return e.reason === "created"
        ? s._(/*BTDS*/ "You created this group {when}", [s._param("when", r)])
        : e.reason === "added"
          ? n != null
            ? s._(/*BTDS*/ "{adderName} added you {when}", [
                s._param("adderName", n),
                s._param("when", r),
              ])
            : s._(/*BTDS*/ "You were added {when}", [s._param("when", r)])
          : e.reason === "link"
            ? s._(/*BTDS*/ "You joined with an invite link {when}", [
                s._param("when", r),
              ])
            : e.reason === "joined"
              ? s._(/*BTDS*/ "You joined {when}", [s._param("when", r)])
              : (function () {
                  throw Error(
                    "Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " +
                      e.reason,
                  );
                })();
    }
    function d(e, t) {
      var n = o("WAWebContactsAndGroupsThisWeek").getCalendarDaysBetween(e, t);
      return n <= 0
        ? s._(/*BTDS*/ "today")
        : n === 1
          ? s._(/*BTDS*/ "yesterday")
          : s._(/*BTDS*/ '_j{"*":"{number} days ago","_1":"1 day ago"}', [
              s._plural(n, "number"),
            ]);
    }
    function m(e, t, n) {
      var r = e.groupMetadata;
      return (
        (r == null ? void 0 : r.owner) != null &&
        n(r.owner) &&
        o("WAWebContactsAndGroupsThisWeek").happenedThisWeek(r.creation, t)
      );
    }
    function p(e) {
      return e === "add"
        ? "added"
        : e === o("WAWebContactsAndGroupsDBGroupJoins").INVITE_LINK_JOIN_SUBTYPE
          ? "link"
          : "joined";
    }
    ((l.shouldLookForMyGroupJoin = e),
      (l.getGroupNewness = u),
      (l.getGroupNewnessLabel = c));
  },
  226,
);
