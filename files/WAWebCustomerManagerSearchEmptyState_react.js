__d(
  "WAWebCustomerManagerSearchEmptyState.react",
  ["fbt", "WAWebSearchRefreshedThinIcon.react", "WDSText.react", "react"],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    var e,
      u = e || (e = o("react"));
    function c(e) {
      var t = e.testid;
      return u.jsxs("div", {
        className: "x78zum5 xdt5ytf x6s0dn4 xl56j7k x5yr21d x1qvou4u",
        "data-testid": void 0,
        children: [
          u.jsx("div", {
            className: "xhslqc4",
            children: u.jsx(
              o("WAWebSearchRefreshedThinIcon.react").SearchRefreshedThinIcon,
              {},
            ),
          }),
          u.jsx(r("WDSText.react"), {
            type: "Body1",
            colorName: "contentDeemphasized",
            children: s._(/*BTDS*/ "No customers found"),
          }),
        ],
      });
    }
    ((c.displayName = c.name + " [from " + i.id + "]"), (l.default = c));
  },
  226,
);
