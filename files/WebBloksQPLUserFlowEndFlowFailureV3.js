__d(
  "WebBloksQPLUserFlowEndFlowFailureV3",
  ["QPLUserFlow", "WebBloksQPLMinificationKeys", "WebBloksQPLUtils"],
  function (t, n, r, o, a, i, l) {
    function e(e, t, n, a, i, l) {
      var s = l.get(
          o("WebBloksQPLMinificationKeys").QPL_EVENT_CONFIG_SAMPLE_RATE,
        ),
        u = l.get(
          o("WebBloksQPLMinificationKeys").QPL_EVENT_CONFIG_SAMPLING_TYPE,
        ),
        c = o("WebBloksQPLUtils").createSyntheticQPLEvent(t, s, u);
      r("QPLUserFlow").endFailure(c, a, { debugInfo: i, instanceKey: n });
    }
    l.default = e;
  },
  98,
);
