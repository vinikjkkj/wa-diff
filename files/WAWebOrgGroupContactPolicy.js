__d(
  "WAWebOrgGroupContactPolicy",
  ["WAWebApiContact", "WAWebContactCollection", "WAWebLidMigrationUtils"],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      return new Set(
        e.flatMap(function (e) {
          var t = o("WAWebLidMigrationUtils").toUserLid(e.id);
          return t == null ? [] : [t];
        }),
      );
    }
    function s(e) {
      var t = o("WAWebContactCollection").ContactCollection.get(e),
        n = o("WAWebApiContact").getPnIfLidIsLatestMapping(e),
        r =
          n == null
            ? null
            : o("WAWebContactCollection").ContactCollection.get(n);
      return r != null && r.isContactBlocked ? r : t != null ? t : r;
    }
    function u(e) {
      return new Set(
        e.flatMap(function (e) {
          return e.isLid() ? [e] : [];
        }),
      );
    }
    function c(e) {
      return e.map(p);
    }
    function d(e, t) {
      return (
        e.length === t.length &&
        e.every(function (e, n) {
          return e === t[n];
        })
      );
    }
    function m(e, t, n) {
      if (t !== "compact") return e;
      var r = new Map();
      for (var o of e.entries()) {
        var a = o[0],
          i = o[1],
          l = n[a];
        r.has(l) || r.set(l, i);
      }
      return Array.from(r.values());
    }
    function p(e) {
      var t,
        n = e.id;
      return n.isRegularUser() &&
        (t = o("WAWebLidMigrationUtils").toUserLid(n)) != null
        ? t
        : n;
    }
    ((l.getSelectedOrgGroupLids = e),
      (l.getExistingOrgGroupContact = s),
      (l.getOrgGroupLidsFromIdentities = u),
      (l.getOrgGroupParticipantIdentities = c),
      (l.areOrgGroupParticipantIdentitiesEqual = d),
      (l.getOrgGroupSelectionParticipants = m));
  },
  98,
);
