__d(
  "WAWebAddToCartIcon.react",
  ["fbt", "WDSButton.react", "WDSIconIcAddShoppingCart.react", "react"],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u = e || (e = o("react")),
      c = {
        addToCartIcon: {
          color: "xhslqc4",
          ":hover_color": "x12ln5q2",
          $$css: !0,
        },
      };
    function d(e) {
      var t = e.colorXStyle,
        n = e.onClick,
        o = r("WDSIconIcAddShoppingCart.react"),
        a = { xstyle: [c.addToCartIcon, t] };
      return n != null
        ? u.jsx(
            r("WDSButton.react"),
            babelHelpers.extends({}, a, {
              Icon: o,
              "aria-label": s._(/*BTDS*/ "Add to cart"),
              onPress: n,
              variant: "borderless",
            }),
          )
        : u.jsx(o, babelHelpers.extends({}, a));
    }
    ((d.displayName = d.name + " [from " + i.id + "]"), (l.default = d));
  },
  226,
);
