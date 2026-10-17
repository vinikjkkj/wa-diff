__d(
  "LSRelayEntryPointQueryPreload",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    function e(e, t, n) {
      var r, o;
      (r = (o = e.getNetwork()).UNSTABLE_preloadQueryOnQueryAstLoad) == null ||
        r.call(o, t, n);
    }
    i.preloadQueryOnQueryAstLoad = e;
  },
  66,
);
