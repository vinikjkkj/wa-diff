__d(
  "useWAWebCommunitySubgroups",
  ["useWAWebModelValues"],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t =
          o("useWAWebModelValues").useOptionalModelValues(e, [
            "joinedSubgroups",
            "unjoinedSubgroups",
            "id",
          ]) || {},
        n = t.joinedSubgroups,
        r = n === void 0 ? [] : n,
        a = t.unjoinedSubgroups,
        i = a === void 0 ? [] : a,
        l = r.length + i.length;
      return { joinedSubgroups: r, unjoinedSubgroups: i, subgroupCount: l };
    }
    l.default = e;
  },
  98,
);
