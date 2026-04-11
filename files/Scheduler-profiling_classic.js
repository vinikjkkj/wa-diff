__d(
  "Scheduler-profiling.classic",
  ["SchedulerFeatureFlags"],
  function (t, n, r, o, a, i) {
    "use strict";
    typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ != "undefined" &&
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart ==
        "function" &&
      __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(Error());
    var e = n("SchedulerFeatureFlags").enableRequestPaint;
    function l(e, t) {
      var n = e.length;
      e.push(t);
      e: for (; 0 < n; ) {
        var r = (n - 1) >>> 1,
          o = e[r];
        if (0 < c(o, t)) ((e[r] = t), (e[n] = o), (n = r));
        else break e;
      }
    }
    function s(e) {
      return e.length === 0 ? null : e[0];
    }
    function u(e) {
      if (e.length === 0) return null;
      var t = e[0],
        n = e.pop();
      if (n !== t) {
        e[0] = n;
        e: for (var r = 0, o = e.length, a = o >>> 1; r < a; ) {
          var i = 2 * (r + 1) - 1,
            l = e[i],
            s = i + 1,
            u = e[s];
          if (0 > c(l, n))
            s < o && 0 > c(u, l)
              ? ((e[r] = u), (e[s] = n), (r = s))
              : ((e[r] = l), (e[i] = n), (r = i));
          else if (s < o && 0 > c(u, n)) ((e[r] = u), (e[s] = n), (r = s));
          else break e;
        }
      }
      return t;
    }
    function c(e, t) {
      var n = e.sortIndex - t.sortIndex;
      return n !== 0 ? n : e.id - t.id;
    }
    if (
      ((i.unstable_now = void 0),
      typeof performance == "object" && typeof performance.now == "function")
    ) {
      var d = performance;
      i.unstable_now = function () {
        return d.now();
      };
    } else {
      var m = Date,
        p = m.now();
      i.unstable_now = function () {
        return m.now() - p;
      };
    }
    var _ = [],
      f = [],
      g = 1,
      h = null,
      y = 3,
      C = !1,
      b = !1,
      v = !1,
      S = !1,
      R = typeof setTimeout == "function" ? setTimeout : null,
      L = typeof clearTimeout == "function" ? clearTimeout : null,
      E = typeof setImmediate != "undefined" ? setImmediate : null;
    function k(e) {
      for (var t = s(f); t !== null; ) {
        if (t.callback === null) u(f);
        else if (t.startTime <= e)
          (u(f), (t.sortIndex = t.expirationTime), l(_, t));
        else break;
        t = s(f);
      }
    }
    function I(e) {
      if (((v = !1), k(e), !b))
        if (s(_) !== null) ((b = !0), T || ((T = !0), M()));
        else {
          var t = s(f);
          t !== null && F(I, t.startTime - e);
        }
    }
    var T = !1,
      D = -1,
      x = 10,
      $ = -1;
    function P() {
      return e && S ? !0 : !(i.unstable_now() - $ < x);
    }
    function N() {
      if ((e && (S = !1), T)) {
        var t = i.unstable_now();
        $ = t;
        var n = !0;
        try {
          e: {
            ((b = !1), v && ((v = !1), L(D), (D = -1)), (C = !0));
            var r = y;
            try {
              t: {
                for (
                  k(t), h = s(_);
                  h !== null && !(h.expirationTime > t && P());
                ) {
                  var o = h.callback;
                  if (typeof o == "function") {
                    ((h.callback = null), (y = h.priorityLevel));
                    var a = o(h.expirationTime <= t);
                    if (((t = i.unstable_now()), typeof a == "function")) {
                      ((h.callback = a), k(t), (n = !0));
                      break t;
                    }
                    (h === s(_) && u(_), k(t));
                  } else u(_);
                  h = s(_);
                }
                if (h !== null) n = !0;
                else {
                  var l = s(f);
                  (l !== null && F(I, l.startTime - t), (n = !1));
                }
              }
              break e;
            } finally {
              ((h = null), (y = r), (C = !1));
            }
            n = void 0;
          }
        } finally {
          n ? M() : (T = !1);
        }
      }
    }
    var M;
    if (typeof E == "function")
      M = function () {
        E(N);
      };
    else if (typeof MessageChannel != "undefined") {
      var w = new MessageChannel(),
        A = w.port2;
      ((w.port1.onmessage = N),
        (M = function () {
          A.postMessage(null);
        }));
    } else
      M = function () {
        R(N, 0);
      };
    function F(e, t) {
      D = R(function () {
        e(i.unstable_now());
      }, t);
    }
    ((i.unstable_IdlePriority = 5),
      (i.unstable_ImmediatePriority = 1),
      (i.unstable_LowPriority = 4),
      (i.unstable_NormalPriority = 3),
      (i.unstable_Profiling = null),
      (i.unstable_UserBlockingPriority = 2),
      (i.unstable_cancelCallback = function (e) {
        e.callback = null;
      }),
      (i.unstable_forceFrameRate = function (e) {
        0 > e || 125 < e || (x = 0 < e ? Math.floor(1e3 / e) : 10);
      }),
      (i.unstable_getCurrentPriorityLevel = function () {
        return y;
      }),
      (i.unstable_next = function (e) {
        switch (y) {
          case 1:
          case 2:
          case 3:
            var t = 3;
            break;
          default:
            t = y;
        }
        var n = y;
        y = t;
        try {
          return e();
        } finally {
          y = n;
        }
      }),
      (i.unstable_requestPaint = function () {
        e && (S = !0);
      }),
      (i.unstable_runWithPriority = function (e, t) {
        switch (e) {
          case 1:
          case 2:
          case 3:
          case 4:
          case 5:
            break;
          default:
            e = 3;
        }
        var n = y;
        y = e;
        try {
          return t();
        } finally {
          y = n;
        }
      }),
      (i.unstable_scheduleCallback = function (e, t, n) {
        var r = i.unstable_now();
        switch (
          (typeof n == "object" && n !== null
            ? ((n = n.delay), (n = typeof n == "number" && 0 < n ? r + n : r))
            : (n = r),
          e)
        ) {
          case 1:
            var o = -1;
            break;
          case 2:
            o = 250;
            break;
          case 5:
            o = 1073741823;
            break;
          case 4:
            o = 1e4;
            break;
          default:
            o = 5e3;
        }
        return (
          (o = n + o),
          (e = {
            id: g++,
            callback: t,
            priorityLevel: e,
            startTime: n,
            expirationTime: o,
            sortIndex: -1,
          }),
          n > r
            ? ((e.sortIndex = n),
              l(f, e),
              s(_) === null &&
                e === s(f) &&
                (v ? (L(D), (D = -1)) : (v = !0), F(I, n - r)))
            : ((e.sortIndex = o),
              l(_, e),
              b || C || ((b = !0), T || ((T = !0), M()))),
          e
        );
      }),
      (i.unstable_shouldYield = P),
      (i.unstable_wrapCallback = function (e) {
        var t = y;
        return function () {
          var n = y;
          y = t;
          try {
            return e.apply(this, arguments);
          } finally {
            y = n;
          }
        };
      }),
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ != "undefined" &&
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop ==
          "function" &&
        __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(Error()));
  },
  null,
);
