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
    function e(e, t, n) {
      var a,
        i,
        l,
        s = e == null || (a = e.layout) == null ? void 0 : a.bloks_payload,
        u = (i = s.error_attribution) == null ? void 0 : i.logging_id,
        c = (l = s.error_attribution) == null ? void 0 : l.source_map_id;
      if (s.action == null)
        throw new (o("WebBloksErrors").WebBloksError)(
          "Invalid Bloks payload received from server. Action is expected but is missing:\n\n" +
            JSON.stringify(s),
        );
      var d = new (o("WebBloksModel").WebBloksModel)("-1", {}),
        m = o("WebBloksModelParser").parseBloksTreeResources(s, d, t);
      return new (r("WebBloksParseResult"))(d, m, u);
    }
    function s(e, t, n) {
      var a,
        i,
        l,
        s = e == null || (a = e.layout) == null ? void 0 : a.bloks_payload,
        u = o("WebBloksUtils").cast(s.tree),
        c = (i = s.error_attribution) == null ? void 0 : i.logging_id,
        d = (l = s.error_attribution) == null ? void 0 : l.source_map_id;
      if (u == null)
        throw new (o("WebBloksErrors").WebBloksError)(
          "Invalid Bloks payload received from server. Tree is expected but is missing:\n\n" +
            JSON.stringify(s),
        );
      var m = null,
        p = o("WebBloksModelParser").parseBloksModelFromJSON(u, t, m),
        _ = o("WebBloksModelParser").parseBloksTreeResources(s, p, t);
      return new (r("WebBloksParseResult"))(p, _, c);
    }
    ((l.parseAction = e), (l.parseTree = s));
  },
  98,
);
