__d(
  "WAWebManageProfileLockup.react",
  [
    "WAWebCellFrame.react",
    "WAWebConnModel",
    "WAWebDetailImage.react",
    "react",
    "react-compiler-runtime",
    "useWAWebModelValues",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = e || (e = o("react"));
    function u(e) {
      var t = o("react-compiler-runtime").c(6),
        n = e.status,
        a = e.user,
        i;
      t[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((i = ["status"]), (t[0] = i))
        : (i = t[0]);
      var l = o("useWAWebModelValues").useModelValues(n, i),
        u;
      t[1] !== a
        ? ((u = s.jsx(o("WAWebDetailImage.react").DetailImage, { id: a })),
          (t[1] = a),
          (t[2] = u))
        : (u = t[2]);
      var c;
      return (
        t[3] !== l.status || t[4] !== u
          ? ((c = s.jsx(r("WAWebCellFrame.react"), {
              image: u,
              primary: o("WAWebConnModel").Conn.pushname,
              secondary: l.status,
              idle: !0,
            })),
            (t[3] = l.status),
            (t[4] = u),
            (t[5] = c))
          : (c = t[5]),
        c
      );
    }
    l.default = u;
  },
  98,
);
