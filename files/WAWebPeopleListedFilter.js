__d(
  "WAWebPeopleListedFilter",
  ["WAWebLidMigrationUtils"],
  function (t, n, r, o, a, i, l) {
    function e(e, t) {
      var n = new Set();
      for (var r of t) r.kind === "person" && n.add(r.row.lid);
      return n.size === 0
        ? e
        : e.filter(function (e) {
            var t = e.id.isLid()
              ? e.id
              : o("WAWebLidMigrationUtils").toUserLid(e.id);
            return t == null || !n.has(t.user);
          });
    }
    function s(e) {
      return e.flatMap(function (e) {
        return e.kind === "person" ? [e.row] : [];
      });
    }
    ((l.withoutListedPeople = e), (l.getPersonRows = s));
  },
  98,
);
