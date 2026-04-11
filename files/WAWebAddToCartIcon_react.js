__d(
  "WAWebAddToCartIcon.react",
  [
    "fbt",
    "WDSButton.react",
    "WDSIconIcAddShoppingCart.react",
    "react",
    "react-compiler-runtime",
  ],
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
      var t = o("react-compiler-runtime").c(8),
        n = e.colorXStyle,
        a = e.onClick,
        i;
      t[0] !== n
        ? ((i = { xstyle: [c.addToCartIcon, n] }), (t[0] = n), (t[1] = i))
        : (i = t[1]);
      var l = i;
      if (a != null) {
        var d;
        t[2] === Symbol.for("react.memo_cache_sentinel")
          ? ((d = s._(/*BTDS*/ "Add to cart")), (t[2] = d))
          : (d = t[2]);
        var m;
        return (
          t[3] !== a || t[4] !== l
            ? ((m = u.jsx(
                r("WDSButton.react"),
                babelHelpers.extends({}, l, {
                  Icon: r("WDSIconIcAddShoppingCart.react"),
                  "aria-label": d,
                  onPress: a,
                  variant: "borderless",
                }),
              )),
              (t[3] = a),
              (t[4] = l),
              (t[5] = m))
            : (m = t[5]),
          m
        );
      }
      var p;
      return (
        t[6] !== l
          ? ((p = u.jsx(
              r("WDSIconIcAddShoppingCart.react"),
              babelHelpers.extends({}, l),
            )),
            (t[6] = l),
            (t[7] = p))
          : (p = t[7]),
        p
      );
    }
    l.default = d;
  },
  226,
);
