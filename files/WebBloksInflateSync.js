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
        r.loadedMinificationMaps.unminificationMap,
      );
    }
    l.default = e;
  },
  98,
);
