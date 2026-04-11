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
      var n = null;
      return o("WebBloksModelParser").parseBloksModelFromJSON(
        t,
        e.objectSet.environment.traversalKeys,
        n,
      );
    }
    l.default = e;
  },
  98,
);
