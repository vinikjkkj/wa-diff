__d(
  "WebBloksSetAttr",
  [
    "Transform3DForWebBloks",
    "WebBloksConstants",
    "WebBloksMinificationUtils",
    "WebBloksModel",
    "WebBloksMutations",
    "WebBloksUtils",
    "webBloksGlobalAttributeKeys",
  ],
  function (t, n, r, o, a, i, l) {
    var e = "_style",
      s = r("webBloksGlobalAttributeKeys").toCanonicalAttrs[e];
    function u(e, t, n, a) {
      o("WebBloksUtils").nullthrows(t, "No model passed to setAttr");
      var i = e.objectSet.environment.loadedMinificationMaps.unminificationMap,
        l = o("WebBloksModel").defineWebBloksAttributeKey(
          o("WebBloksMinificationUtils").getMinifiedWebBloksDynamicAttributeKey(
            String(t.styleId),
            n,
            i,
          ),
        ),
        u = a;
      if (
        (n === "transform3d" ||
          l === o("WebBloksConstants").TRANSFORM_3D_ATTRIBUTE_KEY) &&
        a instanceof r("Transform3DForWebBloks")
      ) {
        var c = t.getUntyped(s),
          d = o("WebBloksModel").isWebBloksModel(c) ? c : null,
          m = { transform: "matrix3d(" + a.toString() + ")" },
          p;
        if (d != null) {
          var _;
          p = d.makeCopy(
            ((_ = {}),
            (_[o("WebBloksConstants").TRANSFORM_ATTRIBUTE_KEY] = m.transform),
            _),
          );
        } else {
          var f;
          p = new (o("WebBloksModel").WebBloksModel)(
            o("WebBloksConstants").BK_FLEX,
            ((f = {}),
            (f[o("WebBloksConstants").TRANSFORM_ATTRIBUTE_KEY] = m.transform),
            f),
          );
        }
        ((l = s), (u = p));
      }
      o("WebBloksMutations").updateMinifiedProperty(e.treeManager, t, l, u);
    }
    l.default = u;
  },
  98,
);
