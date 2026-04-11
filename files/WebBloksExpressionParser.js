__d(
  "WebBloksExpressionParser",
  [
    "WebBloksScript",
    "WebBloksSourceMapNode",
    "WebBloksSourceMapPayloadMetadata",
    "WebBloksSourceMapRootNode",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e, t, n) {
      var r = null;
      return new (o("WebBloksScript").WebBloksScript)(e, r);
    }
    function s(e) {
      for (
        var t = e == null ? void 0 : e.getSourceMapID(),
          n = e == null ? void 0 : e.getLoggingID(),
          o = e,
          a = null,
          i = [];
        o != null;
      ) {
        if (
          (i.push(o.getTreePath()), o instanceof r("WebBloksSourceMapRootNode"))
        ) {
          a = o.getPayloadPath();
          break;
        }
        o = o.getParent();
      }
      var l = i.toReversed().flat(1);
      return null;
    }
    l.makeWebBloksExpression = e;
  },
  98,
);
