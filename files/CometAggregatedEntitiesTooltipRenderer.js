__d(
  "CometAggregatedEntitiesTooltipRenderer",
  [
    "fbt",
    "BaseTooltipMultilineContent.react",
    "CometAggregatedEntitiesTooltipRenderer_entities.graphql",
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
      (e = n("CometAggregatedEntitiesTooltipRenderer_entities.graphql"));
    function d(e, t) {
      var n,
        o,
        a = (n = t.count) != null ? n : 0,
        i = (o = t.sample_entities) != null ? o : [];
      i = i.filter(function (e) {
        return (
          e.__typename === "User" ||
          e.__typename === "Page" ||
          e.__typename === "InstagramUserV2"
        );
      });
      var l = a - i.length,
        u = l > 0,
        d = [];
      return (
        i.forEach(function (e) {
          if (
            (e.__typename === "User" || e.__typename === "Page") &&
            e.name != null
          )
            d.push(r("translatedServerString")(e.name));
          else if (e.__typename === "InstagramUserV2") {
            var t = e.name != null && e.name !== "",
              n =
                t && e.should_prioritize_ig_display_name === !0
                  ? e.name
                  : e.username;
            n != null && d.push(r("translatedServerString")(n));
          }
        }),
        u &&
          d.push(s._(/*BTDS*/ "and {count} more...", [s._param("count", l)])),
        i.length !== 0
          ? c.jsx(r("FDSTooltip.react"), {
              forceInlineDisplay: !0,
              tooltip: c.jsx(r("BaseTooltipMultilineContent.react"), {
                children: d,
              }),
              children: c.jsx("span", {
                className: "xzsf02u x1ypdohk x1s688f",
                children: e,
              }),
            })
          : null
      );
    }
    ((d.displayName = d.name + " [from " + i.id + "]"), (l.default = d));
  },
  226,
);
