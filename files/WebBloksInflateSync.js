__d(
  "WebBloksInflateSync",
  [
    "WebBloksModelParser",
    "WebBloksSourceMapNode",
    "WebBloksSourceMapPayloadMetadata",
    "WebBloksSourceMapRootNode",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e, t) {
      var n = null,
        r = e.objectSet.environment;
      return o("WebBloksModelParser").parseBloksModelFromJSON(
        t,
        r.traversalKeys,
        r.minificationMap,
        n,
        r.unminificationMap,
        r.useMinification || r.unminificationMap != null,
      );
    }
    l.default = e;
  },
  98,
);
