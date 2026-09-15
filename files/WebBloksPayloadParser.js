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
    function e(e, t, n, a, i) {
      var l,
        s,
        u,
        c = e == null || (l = e.layout) == null ? void 0 : l.bloks_payload,
        d = (s = c.error_attribution) == null ? void 0 : s.logging_id,
        m = (u = c.error_attribution) == null ? void 0 : u.source_map_id;
      if (c.action == null)
        throw new (o("WebBloksErrors").WebBloksError)(
          "Invalid Bloks payload received from server. Action is expected but is missing:\n\n" +
            JSON.stringify(c),
        );
      var p = o("WebBloksModel").createSyntheticWebBloksModel("-1"),
        _ = o("WebBloksModelParser").parseBloksTreeResources(c, p, t, n, a);
      return new (r("WebBloksParseResult"))(p, _, d);
    }
    function s(e, t, n, a, i) {
      var l,
        s,
        u,
        c = e == null || (l = e.layout) == null ? void 0 : l.bloks_payload,
        d = o("WebBloksUtils").cast(c.tree),
        m = (s = c.error_attribution) == null ? void 0 : s.logging_id,
        p = (u = c.error_attribution) == null ? void 0 : u.source_map_id;
      if (d == null)
        throw new (o("WebBloksErrors").WebBloksError)(
          "Invalid Bloks payload received from server. Tree is expected but is missing:\n\n" +
            JSON.stringify(c),
        );
      var _ = null,
        f = o("WebBloksModelParser").parseBloksModelFromJSON(d, t, n, a, _),
        g = o("WebBloksModelParser").parseBloksTreeResources(c, f, t, n, a);
      return new (r("WebBloksParseResult"))(f, g, m);
    }
    ((l.parseAction = e), (l.parseTree = s));
  },
  98,
);
