__d(
  "WAWebLinkIconContained.react",
  [
    "WAWebBox.react",
    "WAWebThemeContext",
    "WDSIconIcLink.react",
    "react",
    "react-compiler-runtime",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = e || (e = o("react")),
      u = e.use,
      c = {
        box: {
          boxSizing: "x9f619",
          width: "x1useyqa",
          height: "xsdox4t",
          borderStartStartRadius: "xbrszos",
          borderStartEndRadius: "xea3l6g",
          borderEndEndRadius: "x18isctg",
          borderEndStartRadius: "x2q3nzr",
          borderTopColor: "x1ekq09l",
          borderInlineEndColor: "xlmuga0",
          borderBottomColor: "x54tcbp",
          borderInlineStartColor: "xlzwp1d",
          borderTopWidth: "xt8cgyo",
          borderInlineEndWidth: "x128c8uf",
          borderBottomWidth: "x1co6499",
          borderInlineStartWidth: "xc5fred",
          borderTopStyle: "x13fuv20",
          borderInlineEndStyle: "x18b5jzi",
          borderBottomStyle: "x1q0q8m5",
          borderInlineStartStyle: "x1t7ytsu",
          alignItems: "x6s0dn4",
          backgroundSize: "x1tbiz1a",
          backgroundRepeat: "xiy17q3",
          overflowX: "x6ikm8r",
          overflowY: "x10wlt62",
          justifyContent: "xl56j7k",
          display: "x78zum5",
          $$css: !0,
        },
        text: { justifySelf: "x7v7x1q", color: "x18cpw0e", $$css: !0 },
        textDark: { color: "xhslqc4", $$css: !0 },
        boxBackgroundColor: { backgroundColor: "x4wrhlh", $$css: !0 },
      };
    function d(e) {
      var t = o("react-compiler-runtime").c(8),
        n = e.backgroundXstyle,
        a = e.icon,
        i = u(o("WAWebThemeContext").ThemeContext),
        l = n != null ? n : c.boxBackgroundColor,
        d;
      t[0] !== l ? ((d = [c.box, l]), (t[0] = l), (t[1] = d)) : (d = t[1]);
      var m;
      t[2] !== i || t[3] !== a
        ? ((m =
            a != null
              ? a
              : s.jsx(r("WDSIconIcLink.react"), {
                  testid: void 0,
                  width: 16,
                  height: 16,
                  iconXstyle: [c.text, i.theme === "dark" && c.textDark],
                })),
          (t[2] = i),
          (t[3] = a),
          (t[4] = m))
        : (m = t[4]);
      var p;
      return (
        t[5] !== d || t[6] !== m
          ? ((p = s.jsx(r("WAWebBox.react"), { xstyle: d, children: m })),
            (t[5] = d),
            (t[6] = m),
            (t[7] = p))
          : (p = t[7]),
        p
      );
    }
    l.default = d;
  },
  98,
);
