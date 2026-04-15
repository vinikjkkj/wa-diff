__d(
  "WAWebProductCatalogLinkIcon.react",
  ["WDSIconIcLink.react", "react", "react-compiler-runtime"],
  function (t, n, r, o, a, i, l) {
    var e,
      s = e || (e = o("react")),
      u = {
        linkIcon: { color: "xhslqc4", $$css: !0 },
        inheritColor: { color: "x1heor9g", $$css: !0 },
      };
    function c(e) {
      var t = o("react-compiler-runtime").c(2),
        n = e.theme,
        a = n === "inherit-color" && u.inheritColor,
        i;
      return (
        t[0] !== a
          ? ((i = s.jsx(r("WDSIconIcLink.react"), {
              testid: void 0,
              xstyle: [u.linkIcon, a],
            })),
            (t[0] = a),
            (t[1] = i))
          : (i = t[1]),
        i
      );
    }
    l.default = c;
  },
  98,
);
