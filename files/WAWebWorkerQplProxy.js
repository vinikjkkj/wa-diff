__d(
  "WAWebWorkerQplProxy",
  ["nullthrows"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = null;
    function s(t) {
      e = t;
    }
    function u(t) {
      var n = r("nullthrows")(e, "WAWebWorkerQplProxy: bridge not initialized"),
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
        addPoint: function (t, r, l) {
          var e;
          i ||
            n.fireAndForget("qpl", "dispatch", {
              type: "addPoint",
              markerId: a,
              instanceKey: o,
              pointName: t,
              annotations: r != null ? r : null,
              timestamp:
                (e = l == null ? void 0 : l.timestamp) != null ? e : c(),
            });
        },
        addPointLocal: function (t, r, l) {
          var e;
          i ||
            n.fireAndForget("qpl", "dispatch", {
              type: "addPointLocal",
              markerId: a,
              instanceKey: o,
              pointName: t,
              annotations: r != null ? r : null,
              timestamp:
                (e = l == null ? void 0 : l.timestamp) != null ? e : c(),
            });
        },
        endSuccess: function (t, r) {
          var e;
          i ||
            ((i = !0),
            n.fireAndForget("qpl", "dispatch", {
              type: "endSuccess",
              markerId: a,
              instanceKey: o,
              annotations: t != null ? t : null,
              timestamp:
                (e = r == null ? void 0 : r.timestamp) != null ? e : c(),
            }));
        },
        endFail: function (t, r, l) {
          var e;
          i ||
            ((i = !0),
            n.fireAndForget("qpl", "dispatch", {
              type: "endFail",
              markerId: a,
              instanceKey: o,
              errorName: t,
              annotations: r != null ? r : null,
              timestamp:
                (e = l == null ? void 0 : l.timestamp) != null ? e : c(),
            }));
        },
        endFailWithError: function (t, r, l, s) {
          var e;
          i ||
            ((i = !0),
            n.fireAndForget("qpl", "dispatch", {
              type: "endFailWithError",
              markerId: a,
              instanceKey: o,
              errorName: t,
              failReason: r != null ? r : null,
              annotations: l != null ? l : null,
              timestamp:
                (e = s == null ? void 0 : s.timestamp) != null ? e : c(),
            }));
        },
        endTimeout: function (t, r) {
          var e;
          i ||
            ((i = !0),
            n.fireAndForget("qpl", "dispatch", {
              type: "endTimeout",
              markerId: a,
              instanceKey: o,
              annotations: t != null ? t : null,
              timestamp:
                (e = r == null ? void 0 : r.timestamp) != null ? e : c(),
            }));
        },
        endCancel: function (t, r, l) {
          var e;
          i ||
            ((i = !0),
            n.fireAndForget("qpl", "dispatch", {
              type: "endCancel",
              markerId: a,
              instanceKey: o,
              cancelReason: t != null ? t : null,
              annotations: r != null ? r : null,
              timestamp:
                (e = l == null ? void 0 : l.timestamp) != null ? e : c(),
            }));
        },
        start: function (t) {},
        isActive: function () {
          return !0;
        },
        hasPassedTimeout: function () {
          return !1;
        },
        getQPLAttrs: function () {
          return { instanceKey: o, markerId: a };
        },
      };
    }
    function c() {
      return self.performance.timeOrigin + self.performance.now();
    }
    ((l.initWorkerQplProxy = s), (l.createWorkerQplProxy = u));
  },
  98,
);
