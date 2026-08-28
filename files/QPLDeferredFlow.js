__d(
  "QPLDeferredFlow",
  ["QPLFlow", "QuickPerformanceLogger", "Random", "WAShiftTimer", "err"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e;
    function s(e, t) {
      var n = u(e, t);
      return (n.start(t == null ? void 0 : t.annotations), n);
    }
    function u(t, n) {
      var a,
        i,
        l =
          (a = n == null ? void 0 : n.instanceKey) != null
            ? a
            : o("Random").uint32(),
        s = (i = n == null ? void 0 : n.timeoutInMs) != null ? i : 0,
        u = !1,
        d = [],
        m = void 0;
      if (s <= 0) throw r("err")("timeoutInMs must be a positive number");
      var p = new (o("WAShiftTimer").ShiftTimer)(f),
        _ = {
          addAnnotations: function (n) {
            if (m != null) {
              m.addAnnotations(n);
              return;
            }
            u &&
              d.push({
                annotations: n,
                timestamp: (
                  e || (e = r("QuickPerformanceLogger"))
                ).currentTimestamp(),
                type: "addAnnotations",
              });
          },
          addPoint: function (n, o) {
            if (m != null) {
              m.addPoint(n, o);
              return;
            }
            u &&
              d.push({
                annotations: o,
                pointName: n,
                timestamp: (
                  e || (e = r("QuickPerformanceLogger"))
                ).currentTimestamp(),
                type: "addPoint",
              });
          },
          commit: function () {
            if (m === void 0) {
              p.cancel();
              var e = d.find(function (e) {
                  return e.type === "start";
                }),
                n = {
                  annotations: e == null ? void 0 : e.annotations,
                  instanceKey: l,
                  timeoutInMs: s,
                },
                r = o("QPLFlow").startQPLFlow(t, n);
              m = r;
              for (var a of d)
                if (a.type !== "start")
                  e: {
                    var i = a;
                    if (
                      ((typeof i == "object" && i !== null) ||
                        typeof i == "function") &&
                      i.type === "addPoint"
                    ) {
                      var u = i;
                      r.addPoint(u.pointName, u.annotations);
                      break e;
                    }
                    if (
                      ((typeof i == "object" && i !== null) ||
                        typeof i == "function") &&
                      i.type === "addAnnotations"
                    ) {
                      var c = i;
                      r.addAnnotations(c.annotations);
                      break e;
                    }
                    if (
                      ((typeof i == "object" && i !== null) ||
                        typeof i == "function") &&
                      i.type === "endSuccess"
                    ) {
                      var _ = i;
                      r.endSuccess(_.annotations);
                      break e;
                    }
                    if (
                      ((typeof i == "object" && i !== null) ||
                        typeof i == "function") &&
                      i.type === "endFail"
                    ) {
                      var f = i;
                      r.endFail(f.errorName, f.annotations);
                      break e;
                    }
                    if (
                      ((typeof i == "object" && i !== null) ||
                        typeof i == "function") &&
                      i.type === "endCancel"
                    ) {
                      var g = i;
                      r.endCancel(g.cancelReason, g.annotations);
                      break e;
                    }
                    throw Error(
                      "Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " +
                        i,
                    );
                  }
              d = [];
            }
          },
          discard: function () {
            m === void 0 && (p.cancel(), (m = c(!1)), (d = []), (u = !1));
          },
          endCancel: function (n, o) {
            if (m != null) {
              m.endCancel(n, o);
              return;
            }
            u &&
              (d.push({
                annotations: o,
                cancelReason: n,
                timestamp: (
                  e || (e = r("QuickPerformanceLogger"))
                ).currentTimestamp(),
                type: "endCancel",
              }),
              (u = !1));
          },
          endFail: function (n, o) {
            if (m != null) {
              m.endFail(n, o);
              return;
            }
            u &&
              (d.push({
                annotations: o,
                errorName: n,
                timestamp: (
                  e || (e = r("QuickPerformanceLogger"))
                ).currentTimestamp(),
                type: "endFail",
              }),
              (u = !1));
          },
          endSuccess: function (n) {
            if (m != null) {
              m.endSuccess(n);
              return;
            }
            u &&
              (d.push({
                annotations: n,
                timestamp: (
                  e || (e = r("QuickPerformanceLogger"))
                ).currentTimestamp(),
                type: "endSuccess",
              }),
              (u = !1));
          },
          getQPLAttrs: function () {
            return m != null ? m.getQPLAttrs() : { instanceKey: l };
          },
          hasPendingEvents: function () {
            return m === void 0 && d.length > 0;
          },
          isActive: function () {
            return m != null ? m.isActive() : u;
          },
          start: function (n) {
            m == null &&
              ((u = !0),
              d.push({
                annotations: n,
                timestamp: (
                  e || (e = r("QuickPerformanceLogger"))
                ).currentTimestamp(),
                type: "start",
              }),
              p.onOrBefore(s, void 0));
          },
        };
      return _;
      function f() {
        d.length > 0 && _.discard();
      }
    }
    function c(e) {
      e === void 0 && (e = !0);
      var t = e;
      return {
        addAnnotations: function (t) {},
        addPoint: function (t, n) {},
        endCancel: function () {
          t = !1;
        },
        endFail: function (n, r) {
          t = !1;
        },
        endSuccess: function (n) {
          t = !1;
        },
        getQPLAttrs: function () {
          return { instanceKey: 0 };
        },
        isActive: function () {
          return t;
        },
        start: function () {},
      };
    }
    l.startQPLDeferredFlow = s;
  },
  98,
);
