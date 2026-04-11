__d(
  "BaseAnchorPositioningUtils",
  ["MetaConfig", "XPlatReactEnvironment"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = {
      above: {
        end: ["block-start", "span-inline-start"],
        middle: ["block-start", "center"],
        start: ["block-start", "span-inline-end"],
      },
      below: {
        end: ["block-end", "span-inline-start"],
        middle: ["block-end", "center"],
        start: ["block-end", "span-inline-end"],
      },
      end: {
        end: ["span-block-start", "inline-end"],
        middle: ["center", "inline-end"],
        start: ["span-block-end", "inline-end"],
      },
      start: {
        end: ["span-block-start", "inline-start"],
        middle: ["center", "inline-start"],
        start: ["span-block-end", "inline-start"],
      },
    };
    function s(t, n) {
      var r = n == null || n === "stretch" ? "middle" : n,
        o = t == null || t === "auto" ? "below" : t;
      return e[o][r];
    }
    function u() {
      return o("XPlatReactEnvironment").isWeb() && r("MetaConfig")._("206");
    }
    ((l.contextualLayerToAnchorPositionAreaCompat = s),
      (l.passesAnchorPositionExperiment = u));
  },
  98,
);
