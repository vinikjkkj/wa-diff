__d(
  "CometContextuallyStyledAggregatedEntitiesTooltipRenderer",
  [
    "fbt",
    "BaseTooltipMultilineContent.react",
    "CometContextuallyStyledAggregatedEntitiesTooltipRenderer_entities.graphql",
    "FDSTooltip.react",
    "react",
    "translatedServerString",
  ],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    var e,
      u,
      c = u || (u = o("react"));
    e !== void 0 ||
      (e = n(
        "CometContextuallyStyledAggregatedEntitiesTooltipRenderer_entities.graphql",
      ));
    var d = function (t, n) {
      var e,
        o,
        a = (e = n.count) != null ? e : 0,
        i = (o = n.sample_entities) != null ? o : [],
        l = a - i.length,
        u = l > 0,
        d = [];
      return (
        i.forEach(function (e) {
          e.__typename === "User" &&
            e.name != null &&
            d.push(r("translatedServerString")(e.name));
        }),
        u &&
          d.push(s._(/*BTDS*/ "and {count} more...", [s._param("count", l)])),
        c.jsx(r("FDSTooltip.react"), {
          tooltip: c.jsx(r("BaseTooltipMultilineContent.react"), {
            children: d,
          }),
          children: t,
        })
      );
    };
    l.default = d;
  },
  226,
);
