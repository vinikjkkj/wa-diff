__d(
  "CometAdsRenderingValidationReducer",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    function e(e, t) {
      if (t.type === "impression_ended")
        return e.hasImpressionEnded
          ? e
          : babelHelpers.extends({}, e, { hasImpressionEnded: !0, logs: [] });
      if (e.hasImpressionEnded) return e;
      if (t.type === "remove") {
        var n = e.logs.filter(function (e) {
          return e.htmlElement !== t.htmlElement;
        });
        return n.length === e.logs.length
          ? e
          : babelHelpers.extends({}, e, { logs: n });
      }
      return babelHelpers.extends({}, e, { logs: [].concat(e.logs, [t.log]) });
    }
    i.reducer = e;
  },
  66,
);
