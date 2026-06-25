__d(
  "WAWebCallsOnlyGating",
  ["WAWebRuntimeEnvironmentUtils", "gkx"],
  function (t, n, r, o, a, i, l) {
    var e = null,
      s = null;
    function u() {
      return s != null
        ? s
        : o("WAWebRuntimeEnvironmentUtils").isWorker()
          ? !1
          : (e != null || (e = r("gkx")("13707")), e);
    }
    function c(e) {
      s = e;
    }
    ((l.isCallsOnlyModeEnabled = u), (l.initCallsOnlyModeFromWorkerInit = c));
  },
  98,
);
