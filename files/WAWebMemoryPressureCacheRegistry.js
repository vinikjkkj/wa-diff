__d(
  "WAWebMemoryPressureCacheRegistry",
  [],
  function (t, n, r, o, a, i) {
    var e = new Map();
    function l(t) {
      e.set(t.name, t);
    }
    function s() {
      return Array.from(e.values());
    }
    function u() {
      e.clear();
    }
    ((i.registerMemoryPressureCache = l),
      (i.getMemoryPressureCaches = s),
      (i.resetMemoryPressureCachesForTesting = u));
  },
  66,
);
