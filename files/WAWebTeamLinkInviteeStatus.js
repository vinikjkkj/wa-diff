__d(
  "WAWebTeamLinkInviteeStatus",
  ["WAWebTeamLinkEmployeeLid", "WAWebTeamLinkRoster"],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = o("WAWebTeamLinkRoster").classifyTeamLinkRoster(e),
        n = t.onTeam,
        r = t.removed;
      return { statusByLid: s(n), formerRoleByLid: c(r) };
    }
    function s(e) {
      var t = new Map();
      return (
        e.forEach(function (e) {
          var n = e.invitation,
            r = e.status,
            a = o("WAWebTeamLinkEmployeeLid").parseEmployeeLid(n.employeeLid),
            i = u(r);
          a != null && i != null && t.set(a, i);
        }),
        t
      );
    }
    function u(e) {
      return e === "pending"
        ? "pending"
        : e === "active"
          ? "active"
          : e === "expired" || e === "removed"
            ? null
            : (function () {
                throw Error(
                  "Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " +
                    e,
                );
              })();
    }
    function c(e) {
      var t = new Map();
      return (
        e.forEach(function (e) {
          var n = e.invitation,
            r = n.employeeLid,
            a = n.teamRole,
            i = o("WAWebTeamLinkEmployeeLid").parseEmployeeLid(r);
          i != null && a != null && a !== "" && t.set(i, a);
        }),
        t
      );
    }
    l.getTeamLinkInviteeLookup = e;
  },
  98,
);
