__d(
  "WAMediaWasmWorkerQplProxy",
  ["WAMediaWasmWorker"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t) {
      return new s(e, t);
    }
    var s = (function () {
      function e(e, t) {
        ((this.$1 = e), (this.$2 = t));
      }
      var t = e.prototype;
      return (
        (t.addAnnotations = function (t) {
          o("WAMediaWasmWorker").sendQplToMainThread({
            action: {
              annotations: t,
              instanceKey: this.$2,
              type: "annotations",
            },
            event: this.$1,
          });
        }),
        (t.addPoint = function (t, n) {
          o("WAMediaWasmWorker").sendQplToMainThread({
            action: {
              annotations: n,
              instanceKey: this.$2,
              pointName: t,
              type: "point",
            },
            event: this.$1,
          });
        }),
        e
      );
    })();
    ((l.continueQplMediaWasmWorkeQplFlow = e),
      (l.WAMediaWasmWorkerQplProxy = s));
  },
  98,
);
