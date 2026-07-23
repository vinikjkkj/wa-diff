__d(
  "BaseCalloutReducer",
  ["FBLogger"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t) {
      switch (t.type) {
        case "addCallout":
          return e.calloutID == null
            ? babelHelpers.extends({}, e, t.payload)
            : e;
        case "removeCallout": {
          if (e.calloutID != null && e.calloutID === t.payload) {
            var n = e.anchorRootRefContext,
              o = e.animationContext,
              a = e.contextualLayerProps,
              i = e.scrollableAreaContext;
            return {
              anchorRootRefContext: n,
              animationContext: o,
              contextualLayerProps: a,
              scrollableAreaContext: i,
            };
          }
          return e;
        }
        default:
          throw r("FBLogger")("comet_ui").mustfixThrow(
            "%s is not a supported action type",
            t.type,
          );
      }
    }
    l.BaseCalloutReducer = e;
  },
  98,
);
