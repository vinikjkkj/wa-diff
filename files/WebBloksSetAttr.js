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
      var i = n,
        l = a;
      if (n === "transform3d" && a instanceof r("Transform3DForWebBloks")) {
        var s = t.getSubNode("_style"),
          u = { transform: "matrix3d(" + a.toString() + ")" },
          c =
            s != null
              ? s.makeCopy(u)
              : new (o("WebBloksModel").WebBloksModel)(
                  o("WebBloksConstants").BK_FLEX,
                  u,
                );
        ((i = "_style"), (l = c));
      }
      o("WebBloksMutations").updateProperty(e.treeManager, t, i, l);
    }
    l.default = e;
  },
  98,
);
