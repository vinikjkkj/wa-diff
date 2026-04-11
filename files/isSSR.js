__d(
  "isSSR",
  ["ExecutionEnvironment", "XPlatReactEnvironment"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s =
        o("XPlatReactEnvironment").isWeb() &&
        !(e || (e = r("ExecutionEnvironment"))).canUseDOM,
      u = s;
    l.default = u;
  },
  98,
);
