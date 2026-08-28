__d(
  "WebBloksSetAttr",
  [
    "Transform3DForWebBloks",
    "WebBloksConstants",
    "WebBloksModel",
    "WebBloksMutations",
    "WebBloksUtils",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e, t, n, a) {
      o("WebBloksUtils").nullthrows(t, "No model passed to setAttr");
      var i = o("WebBloksModel").decodeWebBloksWireIdentifier(n),
        l = i,
        s = a;
      if (
        (i === "transform3d" ||
          i === o("WebBloksConstants").TRANSFORM_3D_ATTRIBUTE_KEY) &&
        a instanceof r("Transform3DForWebBloks")
      ) {
        var u,
          c = t.usesCanonicalKeys(),
          d = e.objectSet.environment,
          m = d.unminificationMap,
          p = d.useMinification,
          _ = c ? o("WebBloksConstants").STYLE_ATTRIBUTE_KEY : "_style",
          f = t.getSubNode(_),
          g = "$",
          h =
            ((u = {}),
            (u[p ? g : "transform"] = "matrix3d(" + a.toString() + ")"),
            u),
          y = o("WebBloksModel").isWebBloksModel(f)
            ? f.makeCopy(h)
            : o("WebBloksModel").createWebBloksModelFromWire(
                p
                  ? o("WebBloksConstants").BK_FLEX_MINIFIED
                  : o("WebBloksConstants").BK_FLEX,
                h,
                m,
                c,
              );
        ((l = t.getWireAttributeKey(_)), (s = y));
      }
      o("WebBloksMutations").updateWireProperty(e.treeManager, t, l, s);
    }
    l.default = e;
  },
  98,
);
