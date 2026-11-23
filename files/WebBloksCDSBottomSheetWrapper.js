__d(
  "WebBloksCDSBottomSheetWrapper",
  [
    "WebBloksCDSWrapperImpl.react",
    "WebBloksComponentContext",
    "WebBloksModel",
    "react",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = e || (e = o("react")),
      u = o("WebBloksModel").defineWebBloksAttributeKey("$"),
      c = o("WebBloksModel").defineWebBloksAttributeKey("("),
      d = o("WebBloksModel").defineWebBloksAttributeKey("-"),
      m = o("WebBloksModel").defineWebBloksAttributeKey("+"),
      p = o("WebBloksModel").defineWebBloksAttributeKey("0");
    function _(e) {
      var t = e.node,
        n = t.get(u),
        a = t.get(c),
        i = t.get(d),
        l = o("WebBloksComponentContext").useWebBloksContext(),
        _ = l.renderNode,
        f = t.get(m);
      return s.jsx(r("WebBloksCDSWrapperImpl.react"), {
        backgroundOverlayColor: f,
        content: _(n),
        header: a != null ? _(a) : null,
        minHeight: t.get(p),
        topBanner: i != null ? _(i) : null,
        shouldRenderGradient: !1,
      });
    }
    ((_.displayName = _.name + " [from " + i.id + "]"), (l.default = _));
  },
  98,
);
