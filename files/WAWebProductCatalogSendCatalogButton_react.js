__d(
  "WAWebProductCatalogSendCatalogButton.react",
  [
    "fbt",
    "WAWebCellFrame.react",
    "WAWebRoundShape.react",
    "WDSIconIcStoreFilled.react",
    "react",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u = e || (e = o("react")),
      c = { iconColor: { color: "x1pse0pq", $$css: !0 } };
    function d(e) {
      var t = e.disabled,
        n = e.onClick,
        o = t ? "xt0e3qv" : "",
        a = t ? "xhslqc4" : "",
        i = t ? null : n,
        l = u.jsx("span", {
          className: a,
          children: s._(/*BTDS*/ "Send catalog"),
        }),
        d = u.jsx(r("WAWebRoundShape.react"), {
          theme: "compact",
          disabled: t,
          xstyle: c.iconColor,
          children: u.jsx(r("WDSIconIcStoreFilled.react"), {}),
        });
      return u.jsx(r("WAWebCellFrame.react"), {
        image: d,
        onClick: i,
        primary: l,
        theme: "list-button-compact",
        className: o,
      });
    }
    ((d.displayName = d.name + " [from " + i.id + "]"), (l.default = d));
  },
  226,
);
