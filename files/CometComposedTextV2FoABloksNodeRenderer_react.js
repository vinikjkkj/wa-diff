__d(
  "CometComposedTextV2FoABloksNodeRenderer.react",
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
      var t = o("react-compiler-runtime").c(4),
        n = e.node,
        r = o(
          "CometComposedTextV2URParserContext.react",
        ).useCometComposedTextV2URParserContext(),
        a = r.renderers,
        i = a.foABloksNodeRenderer,
        l;
      if (t[0] !== i || t[1] !== n) {
        l = Symbol.for("react.early_return_sentinel");
        e: {
          var s = n.getState(),
            u = s.data,
            c = s.initialResponse,
            d = s.type,
            m = s.uuid,
            p = s.versioningId;
          if (i != null) {
            l = i({
              data: u,
              initialResponse: c,
              type: d,
              uuid: m,
              versioningId: p,
            });
            break e;
          }
        }
        ((t[0] = i), (t[1] = n), (t[2] = l));
      } else l = t[2];
      return l !== Symbol.for("react.early_return_sentinel") ? l : null;
    }
    l.default = u;
  },
  98,
);
