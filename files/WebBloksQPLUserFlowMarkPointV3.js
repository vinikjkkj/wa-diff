__d(
  "WebBloksQPLUserFlowMarkPointV3",
  ["QPLUserFlow", "WebBloksQPLUtils"],
  function (t, n, r, o, a, i, l) {
    function e(e, t, n, a, i, l) {
      var s = l.get("sample_rate"),
        u = l.get("sampling_type"),
        c = o("WebBloksQPLUtils").createSyntheticQPLEvent(t, s, u);
      r("QPLUserFlow").addPoint(c, a, { instanceKey: n, data: { string: i } });
    }
    l.default = e;
  },
  98,
);
