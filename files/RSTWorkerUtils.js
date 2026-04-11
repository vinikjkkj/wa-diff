__d(
  "RSTWorkerUtils",
  ["RSTUtils"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t) {
      if (e == null || t == null) return e != null ? e : t;
      var n = babelHelpers.extends({}, e),
        r = t == null ? void 0 : t.spans;
      if ((r != null && (n.spans = r), n.annotations == null)) return n;
      var a = babelHelpers.extends({}, n.annotations);
      for (var i of Object.keys(a))
        o("RSTUtils").isExternalAnnotationKey(i) && delete a[i];
      return (
        (n.annotations = babelHelpers.extends({}, a, t.externalAnnotations)),
        n
      );
    }
    l.mergeMetadata = e;
  },
  98,
);
