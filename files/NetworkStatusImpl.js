__d(
  "NetworkStatusImpl",
  ["NetworkHeartbeat", "performanceNow"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s,
      u = [],
      c = typeof window != "undefined" ? window : self,
      d = c == null || (e = c.navigator) == null ? void 0 : e.onLine,
      m = 2,
      p = 5e3,
      _ = [],
      f = [],
      g = 0,
      h = !0,
      y = !1,
      C = !1,
      b = function () {
        L(h, !0);
      },
      v = function () {
        L(y, !0);
      };
    function S() {
      var e = u.slice();
      e.forEach(function (e) {
        e({ online: d });
      });
    }
    function R(e) {
      var t = u.indexOf(e);
      t > -1 && u.splice(t, 1);
    }
    function L(e, t) {
      t === void 0 && (t = !1);
      var n = d === e,
        r = !t && e === h && o("NetworkHeartbeat").isHeartbeatPending();
      n ||
        r ||
        ((C = C || e === y),
        (d = e),
        d || o("NetworkHeartbeat").maybeStartHeartbeat(b, v),
        S());
    }
    function E() {
      var e = (s || (s = r("performanceNow")))();
      return (
        (_ = _.filter(function (t) {
          return k(t.startTime, e);
        })),
        (f = f.filter(function (t) {
          return k(t.startTime, e);
        })),
        f.length / _.length < m
      );
    }
    var k = function (t, n) {
      return t > n - p;
    };
    function I() {
      return d;
    }
    function T(e) {
      u.push(e);
      var t = !1;
      return {
        remove: function () {
          t || ((t = !0), R(e));
        },
      };
    }
    function D() {
      var e = (s || (s = r("performanceNow")))();
      (_.push({ startTime: e }),
        o("NetworkHeartbeat").maybeStartHeartbeat(b, v, E));
    }
    function x() {
      var e = (s || (s = r("performanceNow")))();
      (f.push({ startTime: e }),
        k(g, e) ||
          ((f = f.filter(function (t) {
            return k(t.startTime, e);
          })),
          (g = e)));
    }
    function $() {
      return C;
    }
    (c.addEventListener("online", function () {
      L(h);
    }),
      c.addEventListener("offline", function () {
        L(y);
      }),
      (l.isOnline = I),
      (l.onChange = T),
      (l.reportError = D),
      (l.reportSuccess = x),
      (l.wasOffline = $));
  },
  98,
);
