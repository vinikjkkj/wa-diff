__d(
  "WAWebWorkerQplProxy",
  ["WANullthrows"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = null;
    function s(t) {
      e = t;
    }
    function u(t) {
      var n = r("WANullthrows")(
          e,
          "WAWebWorkerQplProxy: bridge not initialized",
        ),
        o = t.instanceKey,
        a = t.markerId,
        i = !1;
      return {
        addAnnotations: function (t) {
          i ||
            n.fireAndForget("qpl", "dispatch", {
              type: "addAnnotations",
              markerId: a,
              instanceKey: o,
              annotations: t,
            });
        },
        addPoint: function (t, r) {
          i ||
            n.fireAndForget("qpl", "dispatch", {
              type: "addPoint",
              markerId: a,
              instanceKey: o,
              pointName: t,
              annotations: r != null ? r : null,
              timestamp: self.performance.now(),
            });
        },
        endSuccess: function (t) {
          i ||
            ((i = !0),
            n.fireAndForget("qpl", "dispatch", {
              type: "endSuccess",
              markerId: a,
              instanceKey: o,
              annotations: t != null ? t : null,
              timestamp: self.performance.now(),
            }));
        },
        endFail: function (t, r) {
          i ||
            ((i = !0),
            n.fireAndForget("qpl", "dispatch", {
              type: "endFail",
              markerId: a,
              instanceKey: o,
              errorName: t,
              annotations: r != null ? r : null,
              timestamp: self.performance.now(),
            }));
        },
        endFailWithError: function (t, r, l) {
          i ||
            ((i = !0),
            n.fireAndForget("qpl", "dispatch", {
              type: "endFailWithError",
              markerId: a,
              instanceKey: o,
              errorName: t,
              failReason: r != null ? r : null,
              annotations: l != null ? l : null,
              timestamp: self.performance.now(),
            }));
        },
        endCancel: function (t, r) {
          i ||
            ((i = !0),
            n.fireAndForget("qpl", "dispatch", {
              type: "endCancel",
              markerId: a,
              instanceKey: o,
              cancelReason: t != null ? t : null,
              annotations: r != null ? r : null,
              timestamp: self.performance.now(),
            }));
        },
      };
    }
    ((l.initWorkerQplProxy = s), (l.createWorkerQplProxy = u));
  },
  98,
);
