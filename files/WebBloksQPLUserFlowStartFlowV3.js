__d(
  "WebBloksQPLUserFlowStartFlowV3",
  ["QPLUserFlow", "WebBloksQPLUtils"],
  function (t, n, r, o, a, i, l) {
    function e(e, t, n, a, i) {
      var l = a.get("sample_rate"),
        s = a.get("sampling_type"),
        u = i.get("trigger_source"),
        c = o("WebBloksQPLUtils").createSyntheticQPLEvent(t, l, s);
      r("QPLUserFlow").start(c, {
        instanceKey: n,
        annotations: { string: { trigger_source: u } },
      });
    }
    l.default = e;
  },
  98,
);
