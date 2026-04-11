__d(
  "WAWebViewSwitcher.react",
  [
    "WDSChip.react",
    "WDSMenu.react",
    "WDSMenuItem.react",
    "react",
    "react-compiler-runtime",
    "useWDSMenu",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = e || (e = o("react")),
      u = e.useRef;
    function c(e) {
      var t = o("react-compiler-runtime").c(29),
        n = e.currentValue,
        a = e.items,
        i = e.onValueChange,
        l = e.testid,
        c = u(null),
        d;
      if (t[0] !== n || t[1] !== a || t[2] !== i) {
        var m;
        (t[4] !== n || t[5] !== i
          ? ((m = function (t) {
              return s.jsx(
                r("WDSMenuItem.react"),
                {
                  Icon: t.Icon,
                  title: t.label(),
                  isToggleable: !0,
                  toggled: n === t.value,
                  onPress: function () {
                    return i(t.value);
                  },
                  testid: void 0,
                },
                t.value,
              );
            }),
            (t[4] = n),
            (t[5] = i),
            (t[6] = m))
          : (m = t[6]),
          (d = a.map(m)),
          (t[0] = n),
          (t[1] = a),
          (t[2] = i),
          (t[3] = d));
      } else d = t[3];
      var p;
      t[7] !== d
        ? ((p = s.jsx(r("WDSMenu.react"), { children: d })),
          (t[7] = d),
          (t[8] = p))
        : (p = t[8]);
      var _ = p,
        f;
      t[9] !== _
        ? ((f = { targetRef: c, menu: _ }), (t[9] = _), (t[10] = f))
        : (f = t[10]);
      var g = r("useWDSMenu")(f),
        h = g.closeMenu,
        y = g.isMenuOpen,
        C = g.menuPortal,
        b = g.openMenu,
        v;
      t[11] !== h || t[12] !== y || t[13] !== b
        ? ((v = function () {
            y ? h() : b();
          }),
          (t[11] = h),
          (t[12] = y),
          (t[13] = b),
          (t[14] = v))
        : (v = t[14]);
      var S = v,
        R;
      if (t[15] !== n || t[16] !== a) {
        var L;
        ((R =
          (L = a.find(function (e) {
            return e.value === n;
          })) != null
            ? L
            : a[0]),
          (t[15] = n),
          (t[16] = a),
          (t[17] = R));
      } else R = t[17];
      var E = R,
        k;
      t[18] !== E ? ((k = E.label()), (t[18] = E), (t[19] = k)) : (k = t[19]);
      var I = k,
        T = E.Icon,
        D;
      t[20] !== T || t[21] !== I || t[22] !== S || t[23] !== y || t[24] !== l
        ? ((D = s.jsx(r("WDSChip.react"), {
            ref: c,
            Icon: T,
            label: I,
            showEndDropdownIcon: !0,
            onPress: S,
            "aria-pressed": y,
            testid: void 0,
          })),
          (t[20] = T),
          (t[21] = I),
          (t[22] = S),
          (t[23] = y),
          (t[24] = l),
          (t[25] = D))
        : (D = t[25]);
      var x;
      return (
        t[26] !== C || t[27] !== D
          ? ((x = s.jsxs(s.Fragment, { children: [D, C] })),
            (t[26] = C),
            (t[27] = D),
            (t[28] = x))
          : (x = t[28]),
        x
      );
    }
    l.default = c;
  },
  98,
);
