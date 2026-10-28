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
    ((l.getSelectedOrgGroupLids = e), (l.getExistingOrgGroupContact = s));
  },
  98,
);
