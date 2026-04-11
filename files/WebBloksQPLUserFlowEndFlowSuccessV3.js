__d(
  "WebBloksQPLUserFlowEndFlowSuccessV3",
  ["QPLUserFlow", "WebBloksQPLUtils"],
  function (t, n, r, o, a, i, l) {
    function e(e, t, n, a) {
      var i = a.get("sample_rate"),
        l = a.get("sampling_type"),
        s = o("WebBloksQPLUtils").createSyntheticQPLEvent(t, i, l);
      r("QPLUserFlow").endSuccess(s, { instanceKey: n });
    }
    l.default = e;
  },
  98,
);
