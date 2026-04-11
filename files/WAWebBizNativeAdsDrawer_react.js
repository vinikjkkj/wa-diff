__d(
  "WAWebBizNativeAdsDrawer.react",
  [
    "WAWebBizNativeAdsDrawerConfig",
    "WAWebDrawer.react",
    "WAWebDrawerBody.react",
    "WAWebDrawerHeader.react",
    "react",
    "react-compiler-runtime",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = e || (e = o("react"));
    function u(e) {
      var t = o("react-compiler-runtime").c(23),
        n = e.children,
        a = e.onBack,
        i = e.rightActionElement,
        l = e.step,
        u,
        c,
        d,
        m,
        p,
        _,
        f;
      t[0] !== a || t[1] !== i || t[2] !== l
        ? ((d = o("WAWebBizNativeAdsDrawerConfig").getDrawerConfig(l)),
          (c = r("WAWebDrawer.react")),
          (f = d.drawerTheme),
          (u = o("WAWebDrawerHeader.react").DrawerHeader),
          (m = a),
          (p = i),
          (_ = d.title()),
          (t[0] = a),
          (t[1] = i),
          (t[2] = l),
          (t[3] = u),
          (t[4] = c),
          (t[5] = d),
          (t[6] = m),
          (t[7] = p),
          (t[8] = _),
          (t[9] = f))
        : ((u = t[3]),
          (c = t[4]),
          (d = t[5]),
          (m = t[6]),
          (p = t[7]),
          (_ = t[8]),
          (f = t[9]));
      var g;
      t[10] !== u ||
      t[11] !== d.headerType ||
      t[12] !== m ||
      t[13] !== p ||
      t[14] !== _
        ? ((g = s.jsx(u, {
            onBack: m,
            rightActionElement: p,
            title: _,
            type: d.headerType,
          })),
          (t[10] = u),
          (t[11] = d.headerType),
          (t[12] = m),
          (t[13] = p),
          (t[14] = _),
          (t[15] = g))
        : (g = t[15]);
      var h;
      t[16] !== n
        ? ((h = s.jsx(r("WAWebDrawerBody.react"), { children: n })),
          (t[16] = n),
          (t[17] = h))
        : (h = t[17]);
      var y;
      return (
        t[18] !== c || t[19] !== f || t[20] !== g || t[21] !== h
          ? ((y = s.jsxs(c, { theme: f, children: [g, h] })),
            (t[18] = c),
            (t[19] = f),
            (t[20] = g),
            (t[21] = h),
            (t[22] = y))
          : (y = t[22]),
        y
      );
    }
    l.default = u;
  },
  98,
);
