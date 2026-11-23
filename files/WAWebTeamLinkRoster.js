__d(
  "WAWebTeamLinkRoster",
  [],
  function (t, n, r, o, a, i) {
    function e(e) {
      var t = d(l(e));
      return {
        onTeam: t.filter(function (e) {
          return e.status !== "removed";
        }),
        removed: t.filter(function (e) {
          return e.status === "removed";
        }),
        counts: p(t),
      };
    }
    function l(e) {
      return e.flatMap(function (e, t) {
        var n = s(e);
        return n == null ? [] : [{ key: u(e, t), status: n, invitation: e }];
      });
    }
    function s(e) {
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
    function u(e, t) {
      var n = c(e);
      if (n == null) return "position:" + t;
      var r = e.offboardedAt;
      return r == null ? n : n + ":" + r;
    }
    function c(e) {
      var t = e.employeeLid;
      return t == null || t === "" ? null : t;
    }
    function d(e) {
      var t = new Map();
      return (
        e.forEach(function (e) {
          var n = c(e.invitation);
          n != null && m(e, t.get(n)) && t.set(n, e);
        }),
        e.filter(function (e) {
          var n = c(e.invitation);
          return n == null || t.get(n) === e;
        })
      );
    }
    function m(e, t) {
      var n, r;
      return t == null
        ? !0
        : t.status !== "removed"
          ? !1
          : e.status !== "removed" ||
            ((n = e.invitation.offboardedAt) != null ? n : 0) >
              ((r = t.invitation.offboardedAt) != null ? r : 0);
    }
    function p(e) {
      var t = { active: 0, pending: 0, expired: 0, removed: 0 };
      return (
        e.forEach(function (e) {
          t[e.status] += 1;
        }),
        t
      );
    }
    i.classifyTeamLinkRoster = e;
  },
  66,
);
