__d(
  "WebBloksQPLUserFlowStartFlowV3",
  ["QPLUserFlow", "WebBloksQPLMinificationKeys", "WebBloksQPLUtils"],
  function (t, n, r, o, a, i, l) {
    function e(e, t, n, a, i) {
      var l = a.get(
          o("WebBloksQPLMinificationKeys").QPL_EVENT_CONFIG_SAMPLE_RATE,
        ),
        s = a.get(
          o("WebBloksQPLMinificationKeys").QPL_EVENT_CONFIG_SAMPLING_TYPE,
        ),
        u = i.get(
          o("WebBloksQPLMinificationKeys")
            .QPL_USERFLOW_START_OPTIONS_TRIGGER_SOURCE,
        ),
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
