__d(
  "MAWQplProxy",
  [
    "Deferred",
    "ExecutionEnvironment",
    "FBLogger",
    "MAWBridge",
    "MAWSendQplToServer",
    "QPLEvent",
    "WAErrorMessage",
    "getErrorSafe",
    "gkx",
    "justknobx",
    "performanceAbsoluteNow",
    "promiseDone",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s,
      u,
      c,
      d,
      m,
      p = (e = r("gkx")("23949")) != null ? e : !1,
      _ = new Set([
        25313175, 25310776, 1056839232, 1056836502, 1056836703, 1056847537,
        521478596, 521479468, 521476165, 521480391, 521472095,
      ]),
      f = 0,
      g = (d || (d = r("performanceAbsoluteNow")))() - Date.now();
    function h() {
      return Date.now();
    }
    var y = new (r("Deferred"))(),
      C = function () {
        y.resolve();
      };
    function b(e, t, n, a, i) {
      (a === void 0 && (a = !1),
        r("promiseDone")(y.getPromise(), function () {
          return o("MAWBridge")
            .getBridge()
            .fireAndForget(
              "event",
              "qplEvent",
              {
                action: { name: t, type: "point" },
                annotations: n == null ? void 0 : n.annotations,
                event: e,
                instanceKey: n == null ? void 0 : n.instanceKey,
                performanceAndDateSkew: g,
                timestamp: a ? h() : void 0,
              },
              !0,
              void 0,
              i,
            );
        }));
    }
    function v(e, t, n, r, o) {
      var a;
      L(e, { bool: ((a = {}), (a[t] = n), a) }, r, o);
    }
    function S(e, t, n, r, o) {
      var a;
      L(e, { string: ((a = {}), (a[t] = n), a) }, r, o);
    }
    function R(e, t, n, r, o) {
      var a;
      L(e, { int: ((a = {}), (a[t] = n), a) }, r, o);
    }
    function L(e, t, n, a) {
      r("promiseDone")(y.getPromise(), function () {
        return o("MAWBridge")
          .getBridge()
          .fireAndForget(
            "event",
            "qplEvent",
            {
              action: { type: "annotations" },
              annotations: t,
              event: e,
              instanceKey: n,
            },
            !0,
            void 0,
            a,
          );
      });
    }
    function E(e, t, n, a, i, l) {
      i === void 0 && (i = !1);
      var s = h();
      r("promiseDone")(y.getPromise(), function () {
        return o("MAWBridge")
          .getBridge()
          .fireAndForget(
            "event",
            "qplEvent",
            {
              action: { name: t, type: "failure" },
              annotations: n,
              event: e,
              instanceKey: a,
              timestamp: i ? s : void 0,
            },
            !0,
            void 0,
            l,
          );
      });
    }
    function k(e, t, n, a, i) {
      a === void 0 && (a = !1);
      var l = h();
      r("promiseDone")(y.getPromise(), function () {
        return o("MAWBridge")
          .getBridge()
          .fireAndForget(
            "event",
            "qplEvent",
            {
              action: { type: "success" },
              annotations: t,
              event: e,
              instanceKey: n,
              timestamp: a ? l : void 0,
            },
            !0,
            void 0,
            i,
          );
      });
    }
    function I(e, t, n, a, i, l) {
      i === void 0 && (i = !1);
      var s = h();
      r("promiseDone")(y.getPromise(), function () {
        return o("MAWBridge")
          .getBridge()
          .fireAndForget(
            "event",
            "qplEvent",
            {
              action: { cancelReason: t, type: "cancel" },
              annotations: n,
              event: e,
              instanceKey: a,
              timestamp: i ? s : void 0,
            },
            !0,
            void 0,
            l,
          );
      });
    }
    function T(e, t, n, a) {
      r("promiseDone")(y.getPromise(), function () {
        return o("MAWBridge")
          .getBridge()
          .fireAndForget(
            "event",
            "qplEvent",
            {
              action: { name: t, type: "error" },
              debugInfo: n == null ? void 0 : n.debugInfo,
              error: n == null ? void 0 : n.error,
              event: e,
              instanceKey: n == null ? void 0 : n.instanceKey,
            },
            !0,
            void 0,
            a,
          );
      });
    }
    async function D(e, t, n, a, i) {
      b(e, t + "_start", { annotations: a, instanceKey: i });
      try {
        var l = await n();
        return (b(e, t + "_end", { instanceKey: i }), l);
      } catch (n) {
        throw (
          r("FBLogger")("messenger_web")
            .catching(r("getErrorSafe")(n))
            .MUSTFIX(
              s ||
                (s = babelHelpers.taggedTemplateLiteralLoose([
                  "Caught exception for ",
                  " during measurePerf",
                ])),
              t,
            ),
          b(e, t + "_fail", {
            annotations: {
              string: {
                caughtError: o("WAErrorMessage").maybeGetMessageFromError(n),
              },
            },
            instanceKey: i,
          }),
          n
        );
      }
    }
    async function x(e, t, n) {
      e.addPoint(t + "_start");
      try {
        var a = await n;
        return (e.addPoint(t + "_end"), a);
      } catch (n) {
        throw (
          r("FBLogger")("messenger_web")
            .catching(r("getErrorSafe")(n))
            .MUSTFIX(
              u ||
                (u = babelHelpers.taggedTemplateLiteralLoose([
                  "Caught exception for ",
                  " during measurePerf",
                ])),
              t,
            ),
          e.addPoint(t + "_fail", {
            string: {
              caughtError: o("WAErrorMessage").maybeGetMessageFromError(n),
            },
          }),
          n
        );
      }
    }
    var $ = r("justknobx")._("2596");
    function P(e, t, n) {
      n === void 0 && (n = {});
      var a = n,
        i = a.callBridgeWithTimestamp,
        l = i === void 0 ? !1 : i,
        s = a.providedInstanceKey,
        u = a.providedTimeoutInMs,
        c = a.sendThroughBridge,
        d = c === void 0 ? !1 : c;
      s == null && f++;
      var p = s != null ? s : f,
        _ = u != null ? u : $,
        g = !(m || (m = r("ExecutionEnvironment"))).isInWorker,
        C = d || N(e);
      if (g || !C) return o("MAWSendQplToServer").startQplUserFlow(e, t, p, _);
      var v = d ? { toLastActiveClient: !0 } : void 0;
      return (
        r("promiseDone")(y.getPromise(), function () {
          return o("MAWBridge")
            .getBridge()
            .fireAndForget(
              "event",
              "qplEvent",
              {
                action: { type: "start" },
                annotations: babelHelpers.extends({}, t || {}, {
                  bool: babelHelpers.extends(
                    {},
                    (t == null ? void 0 : t.bool) || {},
                  ),
                }),
                event: e,
                instanceKey: p,
                timeoutInMs: _,
                timestamp: l ? h() : void 0,
              },
              !0,
              void 0,
              v,
            );
        }),
        {
          addAnnotations: function (n) {
            return L(e, n, p, v);
          },
          addPoint: function (n, r) {
            return b(e, n, { annotations: r, instanceKey: p }, void 0, v);
          },
          endCancel: function (n) {
            return I(e, void 0, n, p, void 0, v);
          },
          endFail: function (n, r) {
            return E(e, n, r, p, void 0, v);
          },
          endSuccess: function (n) {
            return k(e, n, p, void 0, v);
          },
          markError: function (n, r, o) {
            return T(e, n, { debugInfo: r, error: o, instanceKey: p }, v);
          },
        }
      );
    }
    function N(e) {
      return p || _.has((c || (c = o("QPLEvent"))).getMarkerId(e));
    }
    function M(e, t) {
      return A(e, t);
    }
    var w = 0;
    function A(e, t) {
      var n,
        o = (n = t == null ? void 0 : t.instanceKey) != null ? n : w++,
        a = !0;
      return {
        addAnnotations: function (n) {
          L(e, n, o);
        },
        addPoint: function (n, r) {
          b(e, n, { annotations: r, instanceKey: o });
        },
        endCancel: function (n, r) {
          (I(e, n, r, o), (a = !1));
        },
        endFail: function (n, r) {
          (E(e, n, r, o), (a = !1));
        },
        endSuccess: function (n) {
          (k(e, n, o), (a = !1));
        },
        getQPLAttrs: function () {
          return { instanceKey: o };
        },
        isActive: function () {
          return a;
        },
        start: function (t) {
          r("FBLogger")("messenger_web").warn(
            "start() should not be called for cross-bridge QPL flow",
          );
        },
      };
    }
    ((l.performanceAbsoluteNow = h),
      (l.workerBridgeDeferred = y),
      (l.resolveWorkerBridge = C),
      (l.sendQplPointThroughBridge = b),
      (l.sendQPLBoolAnnotationThroughBridge = v),
      (l.sendQPLStringAnnotationThroughBridge = S),
      (l.sendQPLIntAnnotationThroughBridge = R),
      (l.sendQPLAnnotationsThroughBridge = L),
      (l.sendQPLFailThroughBridge = E),
      (l.sendQPLSuccessThroughBridge = k),
      (l.measurePerfInQPL_USE_WITH_CARE = D),
      (l.measurePerfInQPL = x),
      (l.DEFAULT_WORKER_QPL_TIMEOUT_MS = $),
      (l.startQplUserFlow = P),
      (l.continueQplAsCrossBridgeQplFlow = M));
  },
  98,
);
