__d(
  "WebBloksPayloadParser",
  [
    "WebBloksErrors",
    "WebBloksModel",
    "WebBloksModelParser",
    "WebBloksParseResult",
    "WebBloksSourceMapNode",
    "WebBloksSourceMapPayloadMetadata",
    "WebBloksSourceMapRootNode",
    "WebBloksUtils",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t, n, a, i, l) {
      var s, u, c;
      l === void 0 && (l = !1);
      var d = e == null || (s = e.layout) == null ? void 0 : s.bloks_payload,
        m = (u = d.error_attribution) == null ? void 0 : u.logging_id,
        p = (c = d.error_attribution) == null ? void 0 : c.source_map_id;
      if (d.action == null)
        throw new (o("WebBloksErrors").WebBloksError)(
          "Invalid Bloks payload received from server. Action is expected but is missing:\n\n" +
            JSON.stringify(d),
        );
      var _ = new (o("WebBloksModel").WebBloksModel)("-1", {}),
        f = o("WebBloksModelParser").parseBloksTreeResources(d, _, t, n, i, l);
      return new (r("WebBloksParseResult"))(_, f, m);
    }
    function s(e, t, n, a, i, l) {
      var s, u, c;
      l === void 0 && (l = !1);
      var d = e == null || (s = e.layout) == null ? void 0 : s.bloks_payload,
        m = o("WebBloksUtils").cast(d.tree),
        p = (u = d.error_attribution) == null ? void 0 : u.logging_id,
        _ = (c = d.error_attribution) == null ? void 0 : c.source_map_id;
      if (m == null)
        throw new (o("WebBloksErrors").WebBloksError)(
          "Invalid Bloks payload received from server. Tree is expected but is missing:\n\n" +
            JSON.stringify(d),
        );
      var f = null,
        g = o("WebBloksModelParser").parseBloksModelFromJSON(m, t, n, f, i, l),
        h = o("WebBloksModelParser").parseBloksTreeResources(d, g, t, n, i, l);
      return new (r("WebBloksParseResult"))(g, h, p);
    }
    ((l.parseAction = e), (l.parseTree = s));
  },
  98,
);
