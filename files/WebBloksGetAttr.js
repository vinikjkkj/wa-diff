__d(
  "WebBloksGetAttr",
  ["WebBloksMinificationUtils", "WebBloksModel"],
  function (t, n, r, o, a, i, l) {
    function e(e, t, n) {
      return t.getUntyped(
        o("WebBloksModel").defineWebBloksAttributeKey(
          o("WebBloksMinificationUtils").getWebBloksDynamicAttributeKey(
            String(t.styleId),
            n,
            e.objectSet.environment.useMinification,
            e.objectSet.environment.minificationMaps.toMinifiedStyle,
          ),
        ),
      );
    }
    l.default = e;
  },
  98,
);
