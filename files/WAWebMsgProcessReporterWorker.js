__d(
  "WAWebMsgProcessReporterWorker",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = 0;
    function l(t) {
      return {
        startMarker: function (r) {
          var n = e++;
          return (
            t.fireAndForget("mainthread_msgreporter", "startMarker", {
              stage: r,
              markerId: n,
            }),
            function () {
              t.fireAndForget("mainthread_msgreporter", "endMarker", {
                markerId: n,
              });
            }
          );
        },
        activate: function (n) {
          t.fireAndForget("mainthread_msgreporter", "activate", { count: n });
        },
      };
    }
    i.createMsgProcessReporterWorkerBridge = l;
  },
  66,
);
