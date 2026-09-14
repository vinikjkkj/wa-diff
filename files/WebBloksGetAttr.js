__d(
  "WebBloksGetAttr",
  ["WebBloksMinificationUtils", "WebBloksModel"],
  function (t, n, r, o, a, i, l) {
    function e(e, t, n) {
      return t.getUntyped(
        o("WebBloksModel").defineWebBloksAttributeKey(
          o("WebBloksMinificationUtils").getMinifiedWebBloksDynamicAttributeKey(
            String(t.styleId),
            n,
            e.objectSet.environment.loadedMinificationMaps.unminificationMap,
          ),
        ),
      );
    }
    l.default = e;
  },
  98,
);
