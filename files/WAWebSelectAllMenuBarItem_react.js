__d(
  "WAWebSelectAllMenuBarItem.react",
  [
    "fbt",
    "WAWebSelectAllIcon.react",
    "WDSMenuBarItem.react",
    "react",
    "react-compiler-runtime",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u = e || (e = o("react"));
    function c(e) {
      var t = o("react-compiler-runtime").c(4),
        n = e.onClick,
        a = e.ref,
        i;
      t[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((i = s._(/*BTDS*/ "Select all toggle")), (t[0] = i))
        : (i = t[0]);
      var l;
      return (
        t[1] !== n || t[2] !== a
          ? ((l = u.jsx(r("WDSMenuBarItem.react"), {
              ref: a,
              testid: void 0,
              icon: o("WAWebSelectAllIcon.react").SelectAllIcon,
              title: i,
              onClick: n,
            })),
            (t[1] = n),
            (t[2] = a),
            (t[3] = l))
          : (l = t[3]),
        l
      );
    }
    l.default = c;
  },
  226,
);
