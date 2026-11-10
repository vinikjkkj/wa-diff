__d(
  "WAWebQplEmployeeSampling",
  ["QuickPerformanceLogger", "gkx"],
  function (t, n, r, o, a, i, l) {
    var e,
      s = 1;
    function u(t) {
      r("gkx")("9092") &&
        (e || (e = r("QuickPerformanceLogger"))).setAlwaysOnSampleRate(t, s);
    }
    l.sampleEveryEmployeeInstance = u;
  },
  98,
);
