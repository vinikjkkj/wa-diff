__d(
  "WAWebPnhSelfDisplayName.react",
  [
    "WAWebDetailImage.react",
    "WAWebPnhDisplayNameDarkIcon.react",
    "WAWebPnhDisplayNameIcon.react",
    "WAWebThemeContext",
    "react",
    "react-compiler-runtime",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = e || (e = o("react")),
      u = {
        customImage: {
          minWidth: "xnei2rj",
          marginInlineEnd: "xbelrpt",
          $$css: !0,
        },
      };
    function c(e) {
      var t = o("react-compiler-runtime").c(17),
        n = e.displayName,
        r = e.pictureWid,
        a = o("WAWebThemeContext").useIsDarkTheme(),
        i = a
          ? o("WAWebPnhDisplayNameDarkIcon.react").PnhDisplayNameDarkIcon
          : o("WAWebPnhDisplayNameIcon.react").PnhDisplayNameIcon,
        l;
      t[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((l = { className: "x1n2onr6" }), (t[0] = l))
        : (l = t[0]);
      var c;
      t[1] !== r
        ? ((c = {
            0: {
              className:
                "x10l6tqk xk50ysn x1jchvi3 xjkpybl x89mvso x1vjfegm x6ikm8r x10wlt62 xuxw1ft xlyipyv x12s5l72 x1wgpmmf x1g96rbh",
            },
            1: {
              className:
                "x10l6tqk xk50ysn x1jchvi3 xjkpybl x89mvso x1vjfegm x6ikm8r x10wlt62 xuxw1ft xlyipyv x1jtk2o2 x78zum5 x6s0dn4 x1q0g3np xfwv6vp x1f1nzxn x1gocmvm x12peec7",
            },
          }[(r != null) << 0]),
          (t[1] = r),
          (t[2] = c))
        : (c = t[2]);
      var d;
      t[3] !== r
        ? ((d =
            r != null &&
            s.jsx(o("WAWebDetailImage.react").DetailImage, {
              id: r,
              size: 24,
              xstyle: u.customImage,
            })),
          (t[3] = r),
          (t[4] = d))
        : (d = t[4]);
      var m;
      t[5] === Symbol.for("react.memo_cache_sentinel")
        ? ((m = { className: "x6ikm8r x10wlt62 xuxw1ft xlyipyv" }), (t[5] = m))
        : (m = t[5]);
      var p;
      t[6] !== n
        ? ((p = s.jsx(
            "div",
            babelHelpers.extends({}, m, { dir: "ltr", children: n }),
          )),
          (t[6] = n),
          (t[7] = p))
        : (p = t[7]);
      var _;
      t[8] !== c || t[9] !== d || t[10] !== p
        ? ((_ = s.jsxs(
            "div",
            babelHelpers.extends({}, c, { children: [d, p] }),
          )),
          (t[8] = c),
          (t[9] = d),
          (t[10] = p),
          (t[11] = _))
        : (_ = t[11]);
      var f;
      t[12] !== i
        ? ((f = s.jsx(i, { directional: !0 })), (t[12] = i), (t[13] = f))
        : (f = t[13]);
      var g;
      return (
        t[14] !== _ || t[15] !== f
          ? ((g = s.jsxs(
              "div",
              babelHelpers.extends({}, l, {
                "data-testid": void 0,
                children: [_, f],
              }),
            )),
            (t[14] = _),
            (t[15] = f),
            (t[16] = g))
          : (g = t[16]),
        g
      );
    }
    l.default = c;
  },
  98,
);
