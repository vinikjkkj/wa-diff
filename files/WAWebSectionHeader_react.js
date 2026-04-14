__d(
  "WAWebSectionHeader.react",
  ["WAWebStylesEnv", "WDSText.react", "react", "stylex"],
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
        a = t.header,
        i = t.isTransparent,
        l = i === void 0 ? !1 : i,
        s = t.uppercase,
        d = s === void 0 ? !1 : s;
      return u.jsx(
        "div",
        babelHelpers.extends(
          { "data-testid": void 0 },
          (e || (e = r("stylex"))).props(
            c.container,
            d && c.uppercase,
            l && c.transparent,
            o("WAWebStylesEnv").isOSMac && c.fontAliasing,
            t.xstyle,
          ),
          {
            children: u.jsx(r("WDSText.react"), {
              type: "Body2",
              colorName: "contentDeemphasized",
              children: a,
            }),
          },
        ),
      );
    }
    ((d.displayName = d.name + " [from " + i.id + "]"), (l.default = d));
  },
  98,
);
