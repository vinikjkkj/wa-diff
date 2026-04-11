__d(
  "WebBloksQPLMarkerEndV3",
  ["QuickPerformanceLogger", "WebBloksQPLUtils"],
  function (t, n, r, o, a, i, l) {
    var e;
    function s(t, n, a, i, l, s) {
      var u = l.get("sample_rate"),
        c = l.get("sampling_type"),
        d = o("WebBloksQPLUtils").createSyntheticQPLEvent(n, u, c);
      (e || (e = r("QuickPerformanceLogger"))).markerEnd(d, i, a);
    }
    l.default = s;
  },
  98,
);
