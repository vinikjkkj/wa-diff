__d(
  "CometKGTickerNodeEntityRenderer",
  [
    "fbt",
    "CometKGTickerNodeEntityRenderer_entity.graphql",
    "FDSLink.react",
    "react",
    "react-strict-dom",
  ],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    var e,
      u,
      c = u || (u = o("react")),
      d = { bold: { fontWeight: "x1s688f", $$css: !0 } },
      m =
        e !== void 0
          ? e
          : (e = n("CometKGTickerNodeEntityRenderer_entity.graphql")),
      p = function (t, n) {
        var e = n.name,
          a = n.ticker_symbol;
        return a == null
          ? null
          : c.jsx(r("FDSLink.react"), {
              href: null,
              label: s._(
                /*BTDS*/ "See more about {company name} on News Tab.",
                [s._param("company name", e)],
              ),
              target: "_blank",
              children: c.jsxs(o("react-strict-dom").html.strong, {
                style: d.bold,
                children: ["$", a],
              }),
            });
      },
      _ = p;
    l.default = _;
  },
  226,
);
