__d(
  "WAWebConflict.react",
  ["WAWebConfirmPopup.react", "react", "react-compiler-runtime"],
  function (t, n, r, o, a, i, l) {
    var e,
      s = e || (e = o("react"));
    function u(e) {
      var t = o("react-compiler-runtime").c(6),
        n = e.cancelText,
        r = e.children,
        a = e.okText,
        i = e.onCancel,
        l = e.onOK,
        u;
      return (
        t[0] !== n || t[1] !== r || t[2] !== a || t[3] !== i || t[4] !== l
          ? ((u = s.jsx(o("WAWebConfirmPopup.react").ConfirmPopup, {
              cover: !0,
              children: r,
              cancelText: n,
              onCancel: i,
              okText: a,
              onOK: l,
            })),
            (t[0] = n),
            (t[1] = r),
            (t[2] = a),
            (t[3] = i),
            (t[4] = l),
            (t[5] = u))
          : (u = t[5]),
        u
      );
    }
    l.default = u;
  },
  98,
);
