__d(
  "WebBloksQPLMarkerStartV3",
  ["QuickPerformanceLogger", "WebBloksQPLMinificationKeys", "WebBloksQPLUtils"],
  function (t, n, r, o, a, i, l) {
    var e;
    function s(t, n, a, i, l) {
      var s = i.get(
          o("WebBloksQPLMinificationKeys").QPL_EVENT_CONFIG_SAMPLE_RATE,
        ),
        u = i.get(
          o("WebBloksQPLMinificationKeys").QPL_EVENT_CONFIG_SAMPLING_TYPE,
        ),
        c = o("WebBloksQPLUtils").createSyntheticQPLEvent(n, s, u);
      (e || (e = r("QuickPerformanceLogger"))).markerStart(c, a);
    }
    l.default = s;
  },
  98,
);
