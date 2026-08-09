__d(
  "LSFactory",
  [
    "ExecutionEnvironment",
    "LS",
    "LSDynamicDependencies",
    "LSMetadata",
    "cr:8709",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = { dynamic: !1 };
    function u(t, a) {
      a === void 0 && (a = s);
      var i = r("LS")(
        1,
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
    l.default = u;
  },
  98,
);
