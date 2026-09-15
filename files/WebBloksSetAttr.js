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
      var i = e.objectSet.environment,
        l = i.minificationMaps,
        u = i.useMinification,
        c = o("WebBloksModel").defineWebBloksAttributeKey(
          o("WebBloksMinificationUtils").getWebBloksDynamicAttributeKey(
            String(t.styleId),
            n,
            u,
            l.toMinifiedStyle,
          ),
        ),
        d = a;
      if (
        (n === "transform3d" ||
          c === o("WebBloksConstants").TRANSFORM_3D_ATTRIBUTE_KEY) &&
        a instanceof r("Transform3DForWebBloks")
      ) {
        var m = t.getUntyped(s),
          p = o("WebBloksModel").isWebBloksModel(m) ? m : null,
          _ = { transform: "matrix3d(" + a.toString() + ")" },
          f;
        if (p != null) {
          var g;
          f = p.makeCopy(
            ((g = {}),
            (g[o("WebBloksConstants").TRANSFORM_ATTRIBUTE_KEY] = _.transform),
            g),
          );
        } else {
          var h;
          f = new (o("WebBloksModel").WebBloksModel)(
            o("WebBloksConstants").BK_FLEX,
            ((h = {}),
            (h[o("WebBloksConstants").TRANSFORM_ATTRIBUTE_KEY] = _.transform),
            h),
          );
        }
        ((c = s), (d = f));
      }
      o("WebBloksMutations").updateMinifiedProperty(e.treeManager, t, c, d);
    }
    l.default = u;
  },
  98,
);
