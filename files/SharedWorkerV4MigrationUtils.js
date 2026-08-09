__d(
  "SharedWorkerV4MigrationUtils",
  [
    "Deferred",
    "Promise",
    "SharedWorkerStatusLock",
    "asyncToGeneratorRuntime",
    "clearTimeout",
    "err",
    "setTimeout",
    "supportsNativeWebLock",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = "worker-killswitch-",
      u = "worker-version-",
      c = "worker-init-",
      d = 3e3,
      m = 5e3;
    function p(e, t) {
      return r("supportsNativeWebLock")()
        ? navigator.locks.request("" + c + e, t)
        : t();
    }
    function _(e) {
      return f.apply(this, arguments);
    }
    function f() {
      return (
        (f = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          if (!r("supportsNativeWebLock")())
            return { isRunning: !1, revision: null, spinTime: null };
          var t = yield navigator.locks.query(),
            n = !1,
            o = null,
            a = null,
            i = "" + u + e + ":";
          return (
            t.held.forEach(function (t) {
              if ((t.name === "" + s + e && (n = !0), t.name.startsWith(i))) {
                var r = t.name.match(/revision:(\d+)/),
                  l = t.name.match(/spin-time:(\d+)/);
                (r != null && (o = parseInt(r[1], 10)),
                  l != null && (a = parseInt(l[1], 10)));
              }
            }),
            { isRunning: n, revision: o, spinTime: a }
          );
        })),
        f.apply(this, arguments)
      );
    }
    function g(e) {
      return h.apply(this, arguments);
    }
    function h() {
      return (
        (h = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          if (!r("supportsNativeWebLock")()) return !1;
          var t = yield navigator.locks.query();
          return t.held.some(function (t) {
            return t.name === "" + s + e;
          });
        })),
        h.apply(this, arguments)
      );
    }
    function y(e) {
      return C.apply(this, arguments);
    }
    function C() {
      return (
        (C = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          if (!r("supportsNativeWebLock")()) return !1;
          var t = yield navigator.locks.query();
          return t.held.some(function (t) {
            return t.name === o("SharedWorkerStatusLock").getStatusLockName(e);
          });
        })),
        C.apply(this, arguments)
      );
    }
    function b(e) {
      return v.apply(this, arguments);
    }
    function v() {
      return (
        (v = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          if (!r("supportsNativeWebLock")())
            return { concurrentTabsAtInit: 0, pendingInitLocksAtStart: 0 };
          var t = yield navigator.locks.query(),
            n = "" + c + e,
            o = "" + s + e,
            a = 0;
          t.held.forEach(function (e) {
            (e.name === n || e.name === o) && a++;
          });
          var i = 0;
          return (
            t.pending.forEach(function (e) {
              e.name === n && i++;
            }),
            { concurrentTabsAtInit: a, pendingInitLocksAtStart: i }
          );
        })),
        v.apply(this, arguments)
      );
    }
    function S(e, t) {
      return R.apply(this, arguments);
    }
    function R() {
      return (
        (R = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t, o) {
          var a = "" + s + t,
            i = new (r("Deferred"))();
          navigator.locks.request(a, { steal: !0 }, function () {
            return (
              o == null || o.markPoint("v4_killswitch_lock_stolen"),
              i.resolve(),
              (e || (e = n("Promise"))).resolve()
            );
          });
          var l = r("setTimeout")(function () {
            i.reject(r("err")("V4 killswitch lock steal timeout for %s", t));
          }, d);
          try {
            yield i.getPromise();
          } catch (e) {
            throw e;
          } finally {
            r("clearTimeout")(l);
          }
        })),
        R.apply(this, arguments)
      );
    }
    function L(e, t) {
      return E.apply(this, arguments);
    }
    function E() {
      return (
        (E = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          var n = yield g(e);
          if (!n) return (t == null || t.markPoint("v4_rollback_skipped"), !1);
          t == null || t.markPoint("v4_rollback_start");
          try {
            return (
              yield S(e, t),
              t == null || t.markPoint("v4_rollback_end"),
              !0
            );
          } catch (e) {
            return !1;
          }
        })),
        E.apply(this, arguments)
      );
    }
    function k(t, o, a, i, l) {
      return (
        l === void 0 && (l = m),
        new (e || (e = n("Promise")))(function (s) {
          var c = !1,
            d = new AbortController(),
            m = r("setTimeout")(function () {
              c ||
                ((c = !0),
                d.abort(),
                i == null || i.markPoint("v4_shutdown_wait_timeout"),
                s());
            }, l);
          if (!(!r("supportsNativeWebLock")() || o == null || a == null)) {
            var p = "" + u + t + ":revision:" + o + ":spin-time:" + a;
            navigator.locks
              .request(p, { signal: d.signal }, function () {
                return (
                  c ||
                    ((c = !0),
                    r("clearTimeout")(m),
                    i == null || i.markPoint("v4_shutdown_wait_released"),
                    s()),
                  (e || (e = n("Promise"))).resolve()
                );
              })
              .catch(function () {});
          }
        })
      );
    }
    ((l.withWorkerInitLock = p),
      (l.fetchV4State = _),
      (l.isV4WorkerRunning = g),
      (l.isV2WorkerRunning = y),
      (l.probeConcurrentInitLocks = b),
      (l.stealV4KillswitchLock = S),
      (l.detectAndTerminateV4Worker = L),
      (l.waitForV4WorkerShutdown = k));
  },
  98,
);
