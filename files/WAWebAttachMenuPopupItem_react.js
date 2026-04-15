__d(
  "WAWebAttachMenuPopupItem.react",
  ["WDSMenuItem.react", "react", "react-compiler-runtime"],
  function (t, n, r, o, a, i, l) {
    var e,
      s = e || (e = o("react"));
    function u(e) {
      var t = o("react-compiler-runtime").c(7),
        n = e.Icon,
        a = e.disabled,
        i = e.iconXstyle,
        l = e.onPress,
        u = e.testid,
        c = e.text,
        d;
      return (
        t[0] !== n ||
        t[1] !== a ||
        t[2] !== i ||
        t[3] !== l ||
        t[4] !== u ||
        t[5] !== c
          ? ((d = s.jsx(r("WDSMenuItem.react"), {
              Icon: n,
              disabled: a,
              iconXstyle: i,
              onPress: l,
              title: c,
              testid: void 0,
            })),
            (t[0] = n),
            (t[1] = a),
            (t[2] = i),
            (t[3] = l),
            (t[4] = u),
            (t[5] = c),
            (t[6] = d))
          : (d = t[6]),
        d
      );
    }
    l.default = u;
  },
  98,
);
