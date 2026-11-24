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
    function u(e) {
      var t,
        n = e.chat,
        r = e.isMe,
        a = e.myJoin,
        i = e.now,
        l = (t = n.groupMetadata) == null ? void 0 : t.creation;
      return m(n, i, r) && l != null
        ? { author: null, reason: "created", t: l }
        : a != null &&
            o("WAWebContactsAndGroupsThisWeek").happenedThisWeek(a.t, i)
          ? { author: a.author, reason: p(a.subtype), t: a.t }
          : l != null &&
              o("WAWebContactsAndGroupsThisWeek").happenedThisWeek(l, i)
            ? { author: null, reason: "added", t: l }
            : null;
    }
    function c(e, t, n) {
      var r = d(e.t, t);
      return e.reason === "created"
        ? s._(/*BTDS*/ "", [s._param("when", r)])
        : e.reason === "added"
          ? n != null
            ? s._(/*BTDS*/ "", [s._param("adderName", n), s._param("when", r)])
            : s._(/*BTDS*/ "", [s._param("when", r)])
          : e.reason === "link"
            ? s._(/*BTDS*/ "", [s._param("when", r)])
            : e.reason === "joined"
              ? s._(/*BTDS*/ "", [s._param("when", r)])
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
        ? s._(/*BTDS*/ "")
        : n === 1
          ? s._(/*BTDS*/ "")
          : s._(/*BTDS*/ "", [s._plural(n, "number")]);
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
