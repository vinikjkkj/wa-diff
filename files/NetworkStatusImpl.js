__d(
  "NetworkStatusImpl",
  [
    "ExecutionEnvironment",
    "NetworkHeartbeat",
    "gkx",
    "justknobx",
    "performanceNow",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s,
      u,
      c =
        r("gkx")("5306") &&
        !(s || (s = r("ExecutionEnvironment"))).canUseDOM &&
        !(s || (s = r("ExecutionEnvironment"))).isInWorker;
    function d() {
      return c ? null : typeof window != "undefined" ? window : self;
    }
    var m = [],
      p = d(),
      _ =
        p == null
          ? !0
          : p == null || (e = p.navigator) == null
            ? void 0
            : e.onLine,
      f = 2,
      g = 5e3,
      h = [],
      y = [],
      C = 0,
      b = !0,
      v = !1,
      S = !1,
      R = function () {
        I(b, !0);
      },
      L = function () {
        I(v, !0);
      };
    function E() {
      var e = m.slice();
      e.forEach(function (e) {
        e({ online: _ });
      });
    }
    function k(e) {
      var t = m.indexOf(e);
      t > -1 && m.splice(t, 1);
    }
    function I(e, t) {
      t === void 0 && (t = !1);
      var n = _ === e,
        r = !t && e === b && o("NetworkHeartbeat").isHeartbeatPending();
      n ||
        r ||
        ((S = S || e === v),
        (_ = e),
        _ || o("NetworkHeartbeat").maybeStartHeartbeat(R, L),
        E());
    }
    function T() {
      var e = (u || (u = r("performanceNow")))();
      return (
        (h = h.filter(function (t) {
          return D(t.startTime, e);
        })),
        (y = y.filter(function (t) {
          return D(t.startTime, e);
        })),
        y.length / h.length < f
      );
    }
    var D = function (t, n) {
      return t > n - g;
    };
    function x() {
      return _;
    }
    function $(e) {
      if (c) return { remove: function () {} };
      m.push(e);
      var t = !1;
      return {
        remove: function () {
          t || ((t = !0), k(e));
        },
      };
    }
    function P() {
      if (!c) {
        var e = (u || (u = r("performanceNow")))();
        (h.push({ startTime: e }),
          o("NetworkHeartbeat").maybeStartHeartbeat(R, L, T));
      }
    }
    function N() {
      if (!c) {
        var e = (u || (u = r("performanceNow")))();
        (y.push({ startTime: e }),
          D(C, e) ||
            ((y = y.filter(function (t) {
              return D(t.startTime, e);
            })),
            (C = e)));
      }
    }
    function M() {
      return S;
    }
    (p != null &&
      (!_ &&
        r("justknobx")._("4216") &&
        o("NetworkHeartbeat").maybeStartHeartbeat(R, L),
      p.addEventListener("online", function () {
        I(b);
      }),
      p.addEventListener("offline", function () {
        I(v);
      })),
      (l.isOnline = x),
      (l.onChange = $),
      (l.reportError = P),
      (l.reportSuccess = N),
      (l.wasOffline = M));
  },
  98,
);
