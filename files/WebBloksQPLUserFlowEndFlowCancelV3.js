__d(
  "WebBloksQPLUserFlowEndFlowCancelV3",
  ["QPLUserFlow", "WebBloksQPLMinificationKeys", "WebBloksQPLUtils"],
  function (t, n, r, o, a, i, l) {
    function e(e, t, n, a, i) {
      var l,
        s = i.get(
          o("WebBloksQPLMinificationKeys").QPL_EVENT_CONFIG_SAMPLE_RATE,
        ),
        u = i.get(
          o("WebBloksQPLMinificationKeys").QPL_EVENT_CONFIG_SAMPLING_TYPE,
        ),
        c = o("WebBloksQPLUtils").createSyntheticQPLEvent(t, s, u);
      r("QPLUserFlow").endCancel(c, {
        annotations: { string: ((l = {}), (l.cancel_reason = a), l) },
        instanceKey: n,
      });
    }
    l.default = e;
  },
  98,
);
