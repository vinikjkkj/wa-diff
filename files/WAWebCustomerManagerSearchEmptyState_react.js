__d(
  "WAWebCustomerManagerSearchEmptyState.react",
  [
    "fbt",
    "WAWebSearchRefreshedThinIcon.react",
    "WDSText.react",
    "react",
    "react-compiler-runtime",
  ],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    var e,
      u = e || (e = o("react"));
    function c(e) {
      var t = o("react-compiler-runtime").c(5),
        n = e.testid,
        a;
      t[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((a = {
            className: "x78zum5 xdt5ytf x6s0dn4 xl56j7k x5yr21d x1qvou4u",
          }),
          (t[0] = a))
        : (a = t[0]);
      var i = n != null ? n : "customer-manager-search-empty",
        l;
      t[1] === Symbol.for("react.memo_cache_sentinel")
        ? ((l = u.jsx("div", {
            className: "xhslqc4",
            children: u.jsx(
              o("WAWebSearchRefreshedThinIcon.react").SearchRefreshedThinIcon,
              {},
            ),
          })),
          (t[1] = l))
        : (l = t[1]);
      var c;
      t[2] === Symbol.for("react.memo_cache_sentinel")
        ? ((c = u.jsx(r("WDSText.react"), {
            type: "Body1",
            colorName: "contentDeemphasized",
            children: s._(/*BTDS*/ "No customers found"),
          })),
          (t[2] = c))
        : (c = t[2]);
      var d;
      return (
        t[3] !== i
          ? ((d = u.jsxs(
              "div",
              babelHelpers.extends({}, a, {
                "data-testid": void 0,
                children: [l, c],
              }),
            )),
            (t[3] = i),
            (t[4] = d))
          : (d = t[4]),
        d
      );
    }
    l.default = c;
  },
  226,
);
