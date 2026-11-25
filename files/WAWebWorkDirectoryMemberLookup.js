__d(
  "WAWebWorkDirectoryMemberLookup",
  ["WAWebContactGetters", "WAWebLidMigrationUtils", "WAWebWorkFeaturePolicy"],
  function (t, n, r, o, a, i, l) {
    var e = new WeakMap();
    function s(e) {
      return !o("WAWebWorkFeaturePolicy").isWork() ||
        !e.id.isUser() ||
        o("WAWebContactGetters").getIsMe(e)
        ? null
        : o("WAWebLidMigrationUtils").toUserLid(e.id);
    }
    function u(t) {
      var n = e.get(t);
      if (n != null) return n;
      var r = new Map();
      for (var o of t) o.lid != null && r.set(o.lid.user, o);
      return (e.set(t, r), r);
    }
    ((l.getWorkDirectoryMemberLid = s), (l.getWorkDirectoryMemberIndex = u));
  },
  98,
);
