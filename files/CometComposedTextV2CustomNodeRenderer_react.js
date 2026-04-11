__d(
  "CometComposedTextV2CustomNodeRenderer.react",
  [
    "CometComposedTextV2URParserContext.react",
    "react",
    "react-compiler-runtime",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = e || (e = o("react"));
    function u(e) {
      var t = o("react-compiler-runtime").c(10),
        n = e.node,
        r = o(
          "CometComposedTextV2URParserContext.react",
        ).useCometComposedTextV2URParserContext(),
        a = r.renderers,
        i = a.imagineNodeRenderer,
        l = a.postNodeRenderer,
        s = a.productItemCardNodeRenderer,
        u = a.reelNodeRenderer,
        c = a.unsupportedTypeNodeRenderer,
        d,
        m;
      if (
        t[0] !== i ||
        t[1] !== n ||
        t[2] !== l ||
        t[3] !== s ||
        t[4] !== u ||
        t[5] !== c
      ) {
        m = Symbol.for("react.early_return_sentinel");
        e: {
          var p = n.getState(),
            _ = p.rendererArgs,
            f = p.rendererKey;
          if (((d = f), d === "unsupportedType" && c != null)) {
            m = c();
            break e;
          }
          if (d === "reel" && u != null && _ != null && _.nodeType === "reel") {
            m = u(_);
            break e;
          }
          if (d === "post" && l != null && _ != null && _.nodeType === "post") {
            m = l(_);
            break e;
          }
          if (
            d === "imagine" &&
            i != null &&
            _ != null &&
            _.nodeType === "imagine"
          ) {
            m = i(_);
            break e;
          }
          if (
            d === "productItemCard" &&
            s != null &&
            _ != null &&
            _.nodeType === "productItemCard"
          ) {
            m = s(_);
            break e;
          }
        }
        ((t[0] = i),
          (t[1] = n),
          (t[2] = l),
          (t[3] = s),
          (t[4] = u),
          (t[5] = c),
          (t[6] = d),
          (t[7] = m));
      } else ((d = t[6]), (m = t[7]));
      return m !== Symbol.for("react.early_return_sentinel") ? m : null;
    }
    l.default = u;
  },
  98,
);
