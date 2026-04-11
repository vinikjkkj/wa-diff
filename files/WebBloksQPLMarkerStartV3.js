__d(
  "WebBloksQPLMarkerStartV3",
  ["QuickPerformanceLogger", "WebBloksQPLUtils"],
  function (t, n, r, o, a, i, l) {
    var e;
    function s(t, n, a, i, l) {
      var s = i.get("sample_rate"),
        u = i.get("sampling_type"),
        c = o("WebBloksQPLUtils").createSyntheticQPLEvent(n, s, u);
      (e || (e = r("QuickPerformanceLogger"))).markerStart(c, a);
    }
    l.default = s;
  },
  98,
);
