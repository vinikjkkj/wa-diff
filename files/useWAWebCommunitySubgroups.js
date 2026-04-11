__d(
  "useWAWebCommunitySubgroups",
  ["react-compiler-runtime", "useWAWebModelValues"],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = o("react-compiler-runtime").c(8),
        n =
          o("useWAWebModelValues").useOptionalModelValues(e, [
            "joinedSubgroups",
            "unjoinedSubgroups",
            "id",
          ]) || {},
        r = n.joinedSubgroups,
        a = n.unjoinedSubgroups,
        i;
      t[0] !== r
        ? ((i = r === void 0 ? [] : r), (t[0] = r), (t[1] = i))
        : (i = t[1]);
      var l = i,
        s;
      t[2] !== a
        ? ((s = a === void 0 ? [] : a), (t[2] = a), (t[3] = s))
        : (s = t[3]);
      var u = s,
        c = l.length + u.length,
        d;
      return (
        t[4] !== l || t[5] !== c || t[6] !== u
          ? ((d = {
              joinedSubgroups: l,
              unjoinedSubgroups: u,
              subgroupCount: c,
            }),
            (t[4] = l),
            (t[5] = c),
            (t[6] = u),
            (t[7] = d))
          : (d = t[7]),
        d
      );
    }
    l.default = e;
  },
  98,
);
