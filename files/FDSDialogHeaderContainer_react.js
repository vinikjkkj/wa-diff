__d(
  "FDSDialogHeaderContainer.react",
  [
    "BaseDivider.react",
    "XPlatReactEnvironment",
    "XPlatReactFocusRegion.react",
    "focusScopeQueries",
    "react",
    "react-compiler-runtime",
    "react-strict-dom",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = e || (e = o("react")),
      u = {
        container: { width: "xh8yej3", $$css: !0 },
        containerNative: { flexShrink: "x2lah0s", $$css: !0 },
        content: {
          alignItems: "x6s0dn4",
          display: "x78zum5",
          flexShrink: "x2lah0s",
          justifyContent: "x1qughib",
          minHeight: "x879a55",
          position: "x1n2onr6",
          $$css: !0,
        },
      };
    function c(e) {
      var t = o("react-compiler-runtime").c(16),
        n = e.addOnBottom,
        a = e.children,
        i = e.containerXstyle,
        l = e.contentXstyle,
        c = e.id,
        d = e.withDivider,
        m = d === void 0 ? !1 : d,
        p;
      t[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((p = !o("XPlatReactEnvironment").isWeb() && u.containerNative),
          (t[0] = p))
        : (p = t[0]);
      var _;
      t[1] !== i
        ? ((_ = [u.container, p, i]), (t[1] = i), (t[2] = _))
        : (_ = t[2]);
      var f;
      t[3] !== l ? ((f = [u.content, l]), (t[3] = l), (t[4] = f)) : (f = t[4]);
      var g;
      t[5] !== a || t[6] !== c || t[7] !== f
        ? ((g = s.jsx(o("react-strict-dom").html.div, {
            id: c,
            style: f,
            children: a,
          })),
          (t[5] = a),
          (t[6] = c),
          (t[7] = f),
          (t[8] = g))
        : (g = t[8]);
      var h;
      t[9] !== m
        ? ((h = m && s.jsx(r("BaseDivider.react"), {})),
          (t[9] = m),
          (t[10] = h))
        : (h = t[10]);
      var y;
      return (
        t[11] !== n || t[12] !== _ || t[13] !== g || t[14] !== h
          ? ((y = s.jsx(r("XPlatReactFocusRegion.react"), {
              autoFocusQuery:
                o("focusScopeQueries").tabbableFirstHeaderSecondScopeQuery,
              children: s.jsxs(o("react-strict-dom").html.div, {
                style: _,
                children: [g, h, n],
              }),
            })),
            (t[11] = n),
            (t[12] = _),
            (t[13] = g),
            (t[14] = h),
            (t[15] = y))
          : (y = t[15]),
        y
      );
    }
    l.default = c;
  },
  98,
);
