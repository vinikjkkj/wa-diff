__d(
  "WAWebPaymentBackground.react",
  ["cx", "WAWebClassnames", "react", "stylex"],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u,
      c = u || (u = o("react"));
    function d(t) {
      var n,
        a,
        i =
          t.thumbXstyle != null
            ? (e || (e = r("stylex"))).props(t.thumbXstyle)
            : {};
      return c.jsx("div", {
        className: o("WAWebClassnames").classnamesConvertMeToStylexPlease(
          ((n = {}),
          (n._ajyf = t.isQuoted),
          (n._ajyg = t.isQuotedInComposeBox),
          (n._ajye = !0),
          n),
        ),
        children: c.jsx(
          "div",
          babelHelpers.extends({}, i, {
            "data-testid": void 0,
            className: o("WAWebClassnames").classnamesConvertMeToStylexPlease(
              { "bg-payments": !t.isQuoted },
              ((a = {}), (a._ajyh = !0), (a._ajyi = !0), a),
            ),
            children: c.jsx("div", {
              className: "x1vjfegm",
              children: t.children,
            }),
          }),
        ),
      });
    }
    ((d.displayName = d.name + " [from " + i.id + "]"), (l.default = d));
  },
  98,
);
