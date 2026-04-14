__d(
  "WAWebCartIcon.react",
  ["WDSIconIcShoppingCart.react", "react"],
  function (t, n, r, o, a, i, l) {
    var e,
      s = e || (e = o("react")),
      u = {
        cartIcon: { color: "xuwfzo9", $$css: !0 },
        inheritColor: { color: "x1heor9g", $$css: !0 },
      };
    function c(e) {
      var t = e.theme,
        n = r("WDSIconIcShoppingCart.react");
      return s.jsx(n, {
        testid: void 0,
        xstyle: [u.cartIcon, t === "inherit-color" && u.inheritColor],
      });
    }
    ((c.displayName = c.name + " [from " + i.id + "]"), (l.default = c));
  },
  98,
);
