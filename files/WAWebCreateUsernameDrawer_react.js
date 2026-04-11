__d(
  "WAWebCreateUsernameDrawer.react",
  ["fbt", "WAWebSetUsernameDrawer.react", "react", "react-compiler-runtime"],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u = e || (e = o("react"));
    function c(e) {
      var t = o("react-compiler-runtime").c(5),
        n = e.contactId,
        a = e.onBack,
        i = e.ref,
        l;
      t[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((l = s._(/*BTDS*/ "Create username")), (t[0] = l))
        : (l = t[0]);
      var c = l,
        d;
      return (
        t[1] !== n || t[2] !== a || t[3] !== i
          ? ((d = u.jsx(r("WAWebSetUsernameDrawer.react"), {
              contactId: n,
              ref: i,
              onBack: a,
              headerText: c,
            })),
            (t[1] = n),
            (t[2] = a),
            (t[3] = i),
            (t[4] = d))
          : (d = t[4]),
        d
      );
    }
    l.default = c;
  },
  226,
);
