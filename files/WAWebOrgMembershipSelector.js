__d(
  "WAWebOrgMembershipSelector",
  ["WAWebOrgContactCollection"],
  function (t, n, r, o, a, i, l) {
    function e(e, t) {
      if (t == null) return null;
      var n = new Map(
        e.map(function (e) {
          return [e.orgId, e];
        }),
      );
      for (var r of t) {
        var o = n.get(r);
        if (o != null) return o;
      }
      return null;
    }
    function s(t, n) {
      return e(
        o("WAWebOrgContactCollection").OrgContactCollection.getByLid(t),
        n,
      );
    }
    ((l.getPrimaryOrgContact = e), (l.getPrimaryOrgContactForLid = s));
  },
  98,
);
