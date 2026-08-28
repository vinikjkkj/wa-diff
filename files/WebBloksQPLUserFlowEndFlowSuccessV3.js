__d(
  "WebBloksQPLUserFlowEndFlowSuccessV3",
  ["QPLUserFlow", "WebBloksQPLMinificationKeys", "WebBloksQPLUtils"],
  function (t, n, r, o, a, i, l) {
    function e(e, t, n, a) {
      var i = a.get(
          o("WebBloksQPLMinificationKeys").QPL_EVENT_CONFIG_SAMPLE_RATE,
        ),
        l = a.get(
          o("WebBloksQPLMinificationKeys").QPL_EVENT_CONFIG_SAMPLING_TYPE,
        ),
        s = o("WebBloksQPLUtils").createSyntheticQPLEvent(t, i, l);
      r("QPLUserFlow").endSuccess(s, { instanceKey: n });
    }
    l.default = e;
  },
  98,
);
