__d(
  "WAWebSwitchMenuItem.react",
  [
    "WAWebCellMenuItem.react",
    "WDSSwitch.react",
    "react",
    "react-compiler-runtime",
  ],
  function (t, n, r, o, a, i, l) {
    var e = ["disabled", "initialState", "on", "onSelect"],
      s,
      u = s || (s = o("react")),
      c = s,
      d = c.useEffect,
      m = c.useState;
    function p(t) {
      var n = o("react-compiler-runtime").c(22),
        a,
        i,
        l,
        s,
        c;
      n[0] !== t
        ? ((s = t.disabled),
          (c = t.initialState),
          (a = t.on),
          (i = t.onSelect),
          (l = babelHelpers.objectWithoutPropertiesLoose(t, e)),
          (n[0] = t),
          (n[1] = a),
          (n[2] = i),
          (n[3] = l),
          (n[4] = s),
          (n[5] = c))
        : ((a = n[1]), (i = n[2]), (l = n[3]), (s = n[4]), (c = n[5]));
      var p = s === void 0 ? !1 : s,
        _ = c === void 0 ? !1 : c,
        f = m(_),
        g = f[0],
        h = f[1],
        y,
        C;
      (n[6] !== a
        ? ((y = function () {
            a != null && h(a);
          }),
          (C = [a]),
          (n[6] = a),
          (n[7] = y),
          (n[8] = C))
        : ((y = n[7]), (C = n[8])),
        d(y, C));
      var b;
      n[9] !== p || n[10] !== g || n[11] !== i
        ? ((b = function () {
            p || (h(!g), i == null || i(!g));
          }),
          (n[9] = p),
          (n[10] = g),
          (n[11] = i),
          (n[12] = b))
        : (b = n[12]);
      var v = b,
        S;
      n[13] !== p || n[14] !== v || n[15] !== g
        ? ((S = u.jsx(r("WDSSwitch.react"), {
            disabled: p,
            value: g,
            onChange: v,
            tabIndex: -1,
          })),
          (n[13] = p),
          (n[14] = v),
          (n[15] = g),
          (n[16] = S))
        : (S = n[16]);
      var R;
      return (
        n[17] !== p || n[18] !== v || n[19] !== l || n[20] !== S
          ? ((R = u.jsx(
              o("WAWebCellMenuItem.react").CellV2MenuItem,
              babelHelpers.extends({}, l, {
                disabled: p,
                type: "switch",
                onSelect: v,
                primaryRight: S,
              }),
            )),
            (n[17] = p),
            (n[18] = v),
            (n[19] = l),
            (n[20] = S),
            (n[21] = R))
          : (R = n[21]),
        R
      );
    }
    l.SwitchMenuItem = p;
  },
  98,
);
