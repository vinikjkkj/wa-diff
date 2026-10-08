__d(
  "WAWebOrgAdminMemberGroups",
  [],
  function (t, n, r, o, a, i) {
    function e(e) {
      var t = new Map();
      for (var n of e)
        for (var r of (o = n.participants) != null ? o : []) {
          var o,
            a,
            i = r.lid;
          if (i != null) {
            var l = (a = t.get(i)) != null ? a : [];
            (l.includes(n) || l.push(n), t.set(i, l));
          }
        }
      return t;
    }
    i.getOrgAdminGroupsByMemberLID = e;
  },
  66,
);
