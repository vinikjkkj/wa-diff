__d(
  "shouldDisableAnimations",
  ["ExecutionEnvironment"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = 4;
    function u() {
      return (e || (e = r("ExecutionEnvironment"))).canUseDOM
        ? navigator.hardwareConcurrency != null &&
            navigator.hardwareConcurrency < s
        : !1;
    }
    l.default = u;
  },
  98,
);
