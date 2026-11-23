__d(
  "WAWebWorkDirectoryMemberLookup",
  [
    "WAWebContactGetters",
    "WAWebLidMigrationUtils",
    "WAWebUserUtils",
    "WAWebWorkDirectoryFetchMembersJob",
    "WAWebWorkFeaturePolicy",
  ],
  function (t, n, r, o, a, i, l) {
    var e = new WeakMap();
    function s(e) {
      var t,
        n,
        r = u(e);
      if (r == null) return null;
      var a = o(
        "WAWebWorkDirectoryFetchMembersJob",
      ).getLoadedWorkDirectoryMembers(
        o("WAWebUserUtils").getMeLidUserOrThrow().toString(),
      );
      return a == null
        ? null
        : (t = (n = c(a).get(r.user)) == null ? void 0 : n.name) != null
          ? t
          : null;
    }
    function u(e) {
      return !o("WAWebWorkFeaturePolicy").isWork() ||
        !e.id.isUser() ||
        o("WAWebContactGetters").getIsMe(e)
        ? null
        : o("WAWebLidMigrationUtils").toUserLid(e.id);
    }
    function c(t) {
      var n = e.get(t);
      if (n != null) return n;
      var r = new Map();
      for (var o of t) o.lid != null && r.set(o.lid.user, o);
      return (e.set(t, r), r);
    }
    ((l.getWorkDirectoryMemberName = s),
      (l.getWorkDirectoryMemberLid = u),
      (l.getWorkDirectoryMemberIndex = c));
  },
  98,
);
