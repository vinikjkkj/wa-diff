__d(
  "WebBloksQPLMarkerAnnotateV2",
  ["QuickPerformanceLogger", "WebBloksQPLUtils"],
  function (t, n, r, o, a, i, l) {
    var e;
    function s(t, n, a, i, l) {
      var s = l.get("sample_rate"),
        u = l.get("sampling_type"),
        c = o("WebBloksQPLUtils").createSyntheticQPLEvent(n, s, u);
      (e || (e = r("QuickPerformanceLogger"))).markerAnnotate(
        c,
        { string: i },
        { instanceKey: a },
      );
    }
    l.default = s;
  },
  98,
);
