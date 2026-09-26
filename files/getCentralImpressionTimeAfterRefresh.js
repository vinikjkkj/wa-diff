__d(
  "getCentralImpressionTimeAfterRefresh",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = null;
    window.addEventListener(
      "load",
      function () {
        e = Date.now();
      },
      { passive: !0 },
    );
    function l() {
      return e != null ? Date.now() - e : 0;
    }
    i.default = l;
  },
  66,
);
