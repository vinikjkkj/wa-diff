__d(
  "ZenonLogRenderResolutionStats",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    function e(e, t) {
      t.setRenderResolutionListener({
        onRenderResolutionChange: function (n) {
          Object.values(n)
            .flatMap(function (e) {
              return Object.values(e);
            })
            .filter(function (t) {
              return e.has(t.streamId);
            })
            .forEach(function (t) {
              var n = e.get(t.streamId);
              n && (n.displayResolutionData = t);
            });
        },
      });
    }
    i.default = e;
  },
  66,
);
