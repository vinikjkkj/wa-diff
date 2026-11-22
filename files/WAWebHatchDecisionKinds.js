__d(
  "WAWebHatchDecisionKinds",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    function e(e) {
      return e.startsWith("deny");
    }
    function l(e) {
      return e.startsWith("allow_");
    }
    ((i.isHatchDenyKind = e), (i.isHatchAllowKind = l));
  },
  66,
);
