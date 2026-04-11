__d(
  "cometUniqueID",
  ["ExecutionEnvironment"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = 0,
      u;
    (e || (e = r("ExecutionEnvironment"))).canUseDOM ? (u = "c") : (u = "s");
    function c() {
      return "jsc_" + u + "_" + (s++).toString(36);
    }
    l.default = c;
  },
  98,
);
