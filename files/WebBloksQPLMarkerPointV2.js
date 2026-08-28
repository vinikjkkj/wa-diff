__d(
  "WebBloksQPLMarkerPointV2",
  ["QuickPerformanceLogger", "WebBloksQPLMinificationKeys", "WebBloksQPLUtils"],
  function (t, n, r, o, a, i, l) {
    var e;
    function s(t, n, a, i, l, s) {
      var u = l.get(
          o("WebBloksQPLMinificationKeys").QPL_EVENT_CONFIG_SAMPLE_RATE,
        ),
        c = l.get(
          o("WebBloksQPLMinificationKeys").QPL_EVENT_CONFIG_SAMPLING_TYPE,
        ),
        d = o("WebBloksQPLUtils").createSyntheticQPLEvent(n, u, c);
      (e || (e = r("QuickPerformanceLogger"))).markerPoint(d, i, {
        instanceKey: a,
      });
    }
    l.default = s;
  },
  98,
);
