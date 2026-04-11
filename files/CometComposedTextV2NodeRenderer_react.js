__d(
  "CometComposedTextV2NodeRenderer.react",
  [
    "fbt",
    "CometComposedTextV2ElementNode.react",
    "CometPlaceholder.react",
    "FDSGlimmer.react",
    "cometComposedTextV2RendererRef",
    "react",
    "react-compiler-runtime",
  ],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    var e,
      u = e || (e = o("react"));
    function c(e) {
      var t = o("react-compiler-runtime").c(5),
        n = e.node,
        a,
        l;
      if (t[0] !== n) {
        l = Symbol.for("react.early_return_sentinel");
        e: {
          var s = [];
          if (n instanceof r("CometComposedTextV2ElementNode.react"))
            for (var d of n.getChildren())
              s.push(u.jsx(c, { node: d }, d.getState().key));
          var m = n.render(
            o("cometComposedTextV2RendererRef")
              .cometComposedTextCometV2RenderHostRef,
          );
          if (m == null) {
            l = void 0;
            break e;
          }
          var p = { children: s },
            _;
          (t[4] === Symbol.for("react.memo_cache_sentinel")
            ? ((_ = u.jsx(r("FDSGlimmer.react"), { index: 0 })), (t[4] = _))
            : (_ = t[4]),
            (a = u.jsx(r("CometPlaceholder.react"), {
              fallback: _,
              name: i.id,
              children: m.withHostProps(p),
            })));
        }
        ((t[0] = n), (t[1] = a), (t[2] = l));
      } else ((a = t[1]), (l = t[2]));
      return l !== Symbol.for("react.early_return_sentinel") ? l : a;
    }
    l.default = c;
  },
  226,
);
