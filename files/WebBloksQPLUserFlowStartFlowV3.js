__d(
  "WebBloksQPLUserFlowStartFlowV3",
  ["QPLUserFlow", "WebBloksQPLMinificationKeys", "WebBloksQPLUtils"],
  function (t, n, r, o, a, i, l) {
    function e(e, t, n, a, i) {
      var l,
        s = a.get(
          o("WebBloksQPLMinificationKeys").QPL_EVENT_CONFIG_SAMPLE_RATE,
        ),
        u = a.get(
          o("WebBloksQPLMinificationKeys").QPL_EVENT_CONFIG_SAMPLING_TYPE,
        ),
        c = i.get(
          o("WebBloksQPLMinificationKeys")
            .QPL_USERFLOW_START_OPTIONS_TRIGGER_SOURCE,
        ),
        d = o("WebBloksQPLUtils").createSyntheticQPLEvent(t, s, u);
      r("QPLUserFlow").start(d, {
        instanceKey: n,
        annotations: { string: ((l = {}), (l.trigger_source = c), l) },
      });
    }
    l.default = e;
  },
  98,
);
