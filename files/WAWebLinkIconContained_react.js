__d(
  "WAWebLinkIconContained.react",
  ["WAWebBox.react", "WAWebThemeContext", "WDSIconIcLink.react", "react"],
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
      var t = e.backgroundXstyle,
        n = e.icon,
        a = u(o("WAWebThemeContext").ThemeContext);
      return s.jsx(r("WAWebBox.react"), {
        xstyle: [c.box, t != null ? t : c.boxBackgroundColor],
        children:
          n != null
            ? n
            : s.jsx(r("WDSIconIcLink.react"), {
                testid: void 0,
                width: 16,
                height: 16,
                iconXstyle: [c.text, a.theme === "dark" && c.textDark],
              }),
      });
    }
    ((d.displayName = d.name + " [from " + i.id + "]"), (l.default = d));
  },
  98,
);
