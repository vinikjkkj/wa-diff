__d(
  "WebBloksQPLUserFlowAnnotateV3",
  ["QPLUserFlow", "WebBloksQPLMinificationKeys", "WebBloksQPLUtils"],
  function (t, n, r, o, a, i, l) {
    function e(e, t, n, a, i) {
      var l = i.get(
          o("WebBloksQPLMinificationKeys").QPL_EVENT_CONFIG_SAMPLE_RATE,
        ),
        s = i.get(
          o("WebBloksQPLMinificationKeys").QPL_EVENT_CONFIG_SAMPLING_TYPE,
        ),
        u = o("WebBloksQPLUtils").createSyntheticQPLEvent(t, l, s);
      r("QPLUserFlow").addAnnotations(u, { string: a }, { instanceKey: n });
    }
    l.default = e;
  },
  98,
);
