__d(
  "WAWebBweModelPathProvider",
  ["WAWebBweModelHashes"],
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
      var r = o("WAWebBweModelHashes").getBweModelVersion(t);
      return r == null
        ? null
        : n.getModelFilePath(o("WAWebBweModelHashes").BWE_MODEL_NAME, r);
    }
    ((l.setCacheManager = s), (l.getCacheManager = u), (l.getBweModelPath = c));
  },
  98,
);
