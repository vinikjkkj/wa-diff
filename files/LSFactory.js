__d(
  "LSFactory",
  [
    "ExecutionEnvironment",
    "LS",
    "LSDynamicDependencies",
    "LSMetadata",
    "LSServerProgramHardening",
    "cr:8709",
    "justknobx",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = { dynamic: !1 };
    function u(e) {
      return e.dynamic &&
        o("LSServerProgramHardening").isServerProgramHardeningEnabled() &&
        r("justknobx")._("8592")
        ? 0
        : 1;
    }
    function c(t, a) {
      a === void 0 && (a = s);
      var i = r("LS")(
        u(a),
        o("LSMetadata").schema,
        o("LSDynamicDependencies").cachedModules,
        t,
        void 0,
        void 0,
        a.dynamic,
        a.lsRuntimeLogger,
      );
      return n("cr:8709") != null &&
        (e || (e = r("ExecutionEnvironment"))).isInBrowser
        ? n("cr:8709").wrapSprocInvocationWithProfiler(i)
        : i;
    }
    l.default = c;
  },
  98,
);
