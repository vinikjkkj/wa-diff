__d(
  "WebBloksQPLUserFlowEndFlowCancelV3",
  ["QPLUserFlow", "WebBloksQPLUtils"],
  function (t, n, r, o, a, i, l) {
    function e(e, t, n, a, i) {
      var l = i.get("sample_rate"),
        s = i.get("sampling_type"),
        u = o("WebBloksQPLUtils").createSyntheticQPLEvent(t, l, s);
      r("QPLUserFlow").endCancel(u, {
        annotations: { string: { cancel_reason: a } },
        instanceKey: n,
      });
    }
    l.default = e;
  },
  98,
);
