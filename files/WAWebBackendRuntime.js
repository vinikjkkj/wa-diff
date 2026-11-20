__d(
  "WAWebBackendRuntime",
  ["cr:18907", "nullthrows"],
  function (t, n, r, o, a, i, l) {
    function e() {
      return n("cr:18907") != null;
    }
    function s() {
      n("cr:18907") == null || n("cr:18907").preloadRuntime();
    }
    function u(e) {
      return r("nullthrows")(n("cr:18907")).client(e);
    }
    ((l.isWebDiBackendEnabled = e),
      (l.preloadWebDiBackend = s),
      (l.runtime = u));
  },
  98,
);
