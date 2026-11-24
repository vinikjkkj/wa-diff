__d(
  "WAWebTeamLinkRoster",
  [],
  function (t, n, r, o, a, i) {
    function e(e) {
      var t = m(s(e));
      return {
        onTeam: t.filter(function (e) {
          return e.status !== "removed";
        }),
        removed: t.filter(function (e) {
          return e.status === "removed";
        }),
        counts: _(t),
      };
    }
    function l(e, t) {
      var n = new Set(
        e.onTeam
          .filter(function (e) {
            return e.status === "pending";
          })
          .map(function (e) {
            return d(e.invitation);
          }),
      );
      return t.onTeam.filter(function (e) {
        var t = d(e.invitation);
        return e.status === "active" && t != null && n.has(t);
      });
    }
    function s(e) {
      return e.flatMap(function (e, t) {
        var n = u(e);
        return n == null ? [] : [{ key: c(e, t), status: n, invitation: e }];
      });
    }
    function u(e) {
      return e.offboardedAt != null
        ? e.invitationStatus === "COMPLETED"
          ? "removed"
          : null
        : e.invitationStatus === "COMPLETED"
          ? "active"
          : e.invitationStatus === "PENDING"
            ? "pending"
            : e.invitationStatus === "EXPIRED"
              ? "expired"
              : null;
    }
    function c(e, t) {
      var n = d(e);
      if (n == null) return "position:" + t;
      var r = e.offboardedAt;
      return r == null ? n : n + ":" + r;
    }
    function d(e) {
      var t = e.employeeLid;
      return t == null || t === "" ? null : t;
    }
    function m(e) {
      var t = new Map();
      return (
        e.forEach(function (e) {
          var n = d(e.invitation);
          n != null && p(e, t.get(n)) && t.set(n, e);
        }),
        e.filter(function (e) {
          var n = d(e.invitation);
          return n == null || t.get(n) === e;
        })
      );
    }
    function p(e, t) {
      var n, r;
      return t == null
        ? !0
        : t.status !== "removed"
          ? !1
          : e.status !== "removed" ||
            ((n = e.invitation.offboardedAt) != null ? n : 0) >
              ((r = t.invitation.offboardedAt) != null ? r : 0);
    }
    function _(e) {
      var t = { active: 0, pending: 0, expired: 0, removed: 0 };
      return (
        e.forEach(function (e) {
          t[e.status] += 1;
        }),
        t
      );
    }
    ((i.classifyTeamLinkRoster = e), (i.getJoinedTeamLinkRows = l));
  },
  66,
);
