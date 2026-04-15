__d(
  "WAWebMessageViewOncePendingCancel",
  [
    "fbt",
    "WAWebFlex.react",
    "WAWebSpinner.react",
    "WAWebXSoftIcon.react",
    "react",
    "react-compiler-runtime",
    "useWAWebStaticButtonA11y",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u = e || (e = o("react")),
      c = { inactiveIconSvg: { opacity: "xbyyjgo", $$css: !0 } };
    function d(e) {
      var t = o("react-compiler-runtime").c(16),
        n = e.onClick,
        a = r("useWAWebStaticButtonA11y")(n),
        i = a[0],
        l = a[1],
        d = n == null,
        m;
      t[0] !== l || t[1] !== d
        ? ((m = d ? l : {}), (t[0] = l), (t[1] = d), (t[2] = m))
        : (m = t[2]);
      var p = m,
        _;
      t[3] !== d
        ? ((_ = {
            0: "x1n2onr6 x78zum5 x3psx0u x6s0dn4 xl56j7k xvy4d1p xxk0z11 xdj266r x7g7pl8 xat24cr x3n7f7h",
            1: "x1n2onr6 x78zum5 x3psx0u x6s0dn4 xl56j7k xvy4d1p xxk0z11 xdj266r x7g7pl8 xat24cr x3n7f7h x1h6gzvc",
          }[!!d << 0]),
          (t[3] = d),
          (t[4] = _))
        : (_ = t[4]);
      var f;
      t[5] === Symbol.for("react.memo_cache_sentinel")
        ? ((f = s._(/*BTDS*/ "Cancel")), (t[5] = f))
        : (f = t[5]);
      var g;
      t[6] === Symbol.for("react.memo_cache_sentinel")
        ? ((g = { className: "x1ll7wkd" }), (t[6] = g))
        : (g = t[6]);
      var h = d && c.inactiveIconSvg,
        y;
      t[7] !== h
        ? ((y = u.jsx(
            "div",
            babelHelpers.extends({}, g, {
              children: u.jsx(o("WAWebXSoftIcon.react").XSoftIcon, {
                iconXstyle: h,
              }),
            }),
          )),
          (t[7] = h),
          (t[8] = y))
        : (y = t[8]);
      var C;
      t[9] === Symbol.for("react.memo_cache_sentinel")
        ? ((C = "x10l6tqk x13vifvy xtijo5x x1ey2m1c x1o0tod"), (t[9] = C))
        : (C = t[9]);
      var b;
      t[10] === Symbol.for("react.memo_cache_sentinel")
        ? ((b = u.jsx(o("WAWebFlex.react").FlexRow, {
            className: C,
            align: "center",
            justify: "center",
            children: u.jsx(o("WAWebSpinner.react").Spinner, {
              color: "accent",
              size: 18,
              stroke: 5,
            }),
          })),
          (t[10] = b))
        : (b = t[10]);
      var v;
      return (
        t[11] !== i || t[12] !== p || t[13] !== _ || t[14] !== y
          ? ((v = u.jsxs(
              "div",
              babelHelpers.extends(
                { className: _, ref: i, "aria-label": f },
                p,
                { children: [y, b] },
              ),
            )),
            (t[11] = i),
            (t[12] = p),
            (t[13] = _),
            (t[14] = y),
            (t[15] = v))
          : (v = t[15]),
        v
      );
    }
    l.default = d;
  },
  226,
);
