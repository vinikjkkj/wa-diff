__d(
  "WAWebMLModelPathProvider",
  ["WAWebMLModelHashes", "WAWebMLModelNamespaces"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = { cacheManager: null };
    function s(t) {
      e.cacheManager = t;
    }
    function u() {
      return e.cacheManager;
    }
    function c(t) {
      var n = e.cacheManager;
      if (n == null || !n.isReady()) return null;
      var r = o("WAWebMLModelHashes").getModelVersion(t);
      return r == null
        ? null
        : n.getModelFilePath(o("WAWebMLModelHashes").LEGACY_MODEL_NAMESPACE, r);
    }
    function d(t, n) {
      var r = e.cacheManager;
      if (r == null || !r.isReady()) return null;
      var a = o("WAWebMLModelNamespaces").getNamespaceForModelType(t);
      if (a == null) return null;
      var i = o("WAWebMLModelHashes").getModelVersion(n);
      return i == null ? null : r.getModelFilePath(a, i);
    }
    ((l.setCacheManager = s),
      (l.getCacheManager = u),
      (l.getBweModelPath = c),
      (l.getMLModelPathForType = d));
  },
  98,
);
