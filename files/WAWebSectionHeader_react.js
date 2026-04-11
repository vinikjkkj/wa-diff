__d(
  "WAWebSectionHeader.react",
  [
    "WAWebStylesEnv",
    "WDSText.react",
    "react",
    "react-compiler-runtime",
    "stylex",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u = s || (s = o("react")),
      c = {
        container: {
          boxSizing: "x9f619",
          height: "x4f6e3x",
          paddingTop: "x9orja2",
          paddingInlineEnd: "xyri2b",
          paddingBottom: "xohmsfg",
          paddingInlineStart: "xzm8p2n",
          $$css: !0,
        },
        uppercase: { textTransform: "xtvhhri", $$css: !0 },
        transparent: { backgroundColor: "xjbqb8w", $$css: !0 },
        fontAliasing: {
          WebkitFontSmoothing: "xvmahel",
          MozOsxFontSmoothing: "xlh3980",
          $$css: !0,
        },
      };
    function d(t) {
      var n,
        a = o("react-compiler-runtime").c(10),
        i = t.header,
        l = t.isTransparent,
        s = t.uppercase,
        d = l === void 0 ? !1 : l,
        m = s === void 0 ? !1 : s,
        p = (n = t.testid) != null ? n : "section-header",
        _;
      a[0] !== d || a[1] !== t.xstyle || a[2] !== m
        ? ((_ = (e || (e = r("stylex"))).props(
            c.container,
            m && c.uppercase,
            d && c.transparent,
            o("WAWebStylesEnv").isOSMac && c.fontAliasing,
            t.xstyle,
          )),
          (a[0] = d),
          (a[1] = t.xstyle),
          (a[2] = m),
          (a[3] = _))
        : (_ = a[3]);
      var f;
      a[4] !== i
        ? ((f = u.jsx(r("WDSText.react"), {
            type: "Body2",
            colorName: "contentDeemphasized",
            children: i,
          })),
          (a[4] = i),
          (a[5] = f))
        : (f = a[5]);
      var g;
      return (
        a[6] !== p || a[7] !== _ || a[8] !== f
          ? ((g = u.jsx(
              "div",
              babelHelpers.extends({ "data-testid": void 0 }, _, {
                children: f,
              }),
            )),
            (a[6] = p),
            (a[7] = _),
            (a[8] = f),
            (a[9] = g))
          : (g = a[9]),
        g
      );
    }
    l.default = d;
  },
  98,
);
