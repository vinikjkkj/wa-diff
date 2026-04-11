__d(
  "ScheduledApplyEach",
  ["JSScheduler"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e;
    function s(t, n, r) {
      return t.map(function (t) {
        (
          e || (e = o("JSScheduler"))
        ).deferUserBlockingRunAtCurrentPri_DO_NOT_USE(function () {
          n.apply(r, t);
        });
      });
    }
    l.default = s;
  },
  98,
);
