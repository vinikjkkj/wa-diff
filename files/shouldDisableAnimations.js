__d(
  "shouldDisableAnimations",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = 4;
    function l() {
      return (
        navigator != null &&
        navigator.hardwareConcurrency != null &&
        navigator.hardwareConcurrency < e
      );
    }
    i.default = l;
  },
  66,
);
