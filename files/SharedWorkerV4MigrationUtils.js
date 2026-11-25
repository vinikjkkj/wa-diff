__d(
  "SharedWorkerV4MigrationUtils",
  [
    "Deferred",
    "SharedWorkerStatusLock",
    "clearTimeout",
    "err",
    "setTimeout",
    "supportsNativeWebLock",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = "worker-killswitch-",
      s = "worker-version-",
      u = "worker-init-",
      c = 3e3,
      d = 5e3;
    function m(e, t) {
      return r("supportsNativeWebLock")()
        ? navigator.locks.request("" + u + e, t)
        : t();
    }
    async function p(t) {
      if (!r("supportsNativeWebLock")())
        return { isRunning: !1, revision: null, spinTime: null };
      var n = await navigator.locks.query(),
        o = !1,
        a = null,
        i = null,
        l = "" + s + t + ":";
      return (
        n.held.forEach(function (n) {
          if ((n.name === "" + e + t && (o = !0), n.name.startsWith(l))) {
            var r = n.name.match(/revision:(\d+)/),
              s = n.name.match(/spin-time:(\d+)/);
            (r != null && (a = parseInt(r[1], 10)),
              s != null && (i = parseInt(s[1], 10)));
          }
        }),
        { isRunning: o, revision: a, spinTime: i }
      );
    }
    async function _(t) {
      if (!r("supportsNativeWebLock")()) return !1;
      var n = await navigator.locks.query();
      return n.held.some(function (n) {
        return n.name === "" + e + t;
      });
    }
    async function f(e) {
      if (!r("supportsNativeWebLock")()) return !1;
      var t = await navigator.locks.query();
      return t.held.some(function (t) {
        return t.name === o("SharedWorkerStatusLock").getStatusLockName(e);
      });
    }
    async function g(t) {
      if (!r("supportsNativeWebLock")())
        return { concurrentTabsAtInit: 0, pendingInitLocksAtStart: 0 };
      var n = await navigator.locks.query(),
        o = "" + u + t,
        a = "" + e + t,
        i = 0;
      n.held.forEach(function (e) {
        (e.name === o || e.name === a) && i++;
      });
      var l = 0;
      return (
        n.pending.forEach(function (e) {
          e.name === o && l++;
        }),
        { concurrentTabsAtInit: i, pendingInitLocksAtStart: l }
      );
    }
    async function h(t, n) {
      var o = "" + e + t,
        a = new (r("Deferred"))();
      navigator.locks.request(o, { steal: !0 }, function () {
        return (
          n == null || n.markPoint("v4_killswitch_lock_stolen"),
          a.resolve(),
          Promise.resolve()
        );
      });
      var i = r("setTimeout")(function () {
        a.reject(r("err")("V4 killswitch lock steal timeout for %s", t));
      }, c);
      try {
        await a.getPromise();
      } catch (e) {
        throw e;
      } finally {
        r("clearTimeout")(i);
      }
    }
    async function y(e, t) {
      var n = await _(e);
      if (!n) return (t == null || t.markPoint("v4_rollback_skipped"), !1);
      t == null || t.markPoint("v4_rollback_start");
      try {
        return (await h(e, t), t == null || t.markPoint("v4_rollback_end"), !0);
      } catch (e) {
        return !1;
      }
    }
    function C(e, t, n, o, a) {
      return (
        a === void 0 && (a = d),
        new Promise(function (i) {
          var l = !1,
            u = new AbortController(),
            c = r("setTimeout")(function () {
              l ||
                ((l = !0),
                u.abort(),
                o == null || o.markPoint("v4_shutdown_wait_timeout"),
                i());
            }, a);
          if (!(!r("supportsNativeWebLock")() || t == null || n == null)) {
            var d = "" + s + e + ":revision:" + t + ":spin-time:" + n;
            navigator.locks
              .request(d, { signal: u.signal }, function () {
                return (
                  l ||
                    ((l = !0),
                    r("clearTimeout")(c),
                    o == null || o.markPoint("v4_shutdown_wait_released"),
                    i()),
                  Promise.resolve()
                );
              })
              .catch(function () {});
          }
        })
      );
    }
    ((l.withWorkerInitLock = m),
      (l.fetchV4State = p),
      (l.isV4WorkerRunning = _),
      (l.isV2WorkerRunning = f),
      (l.probeConcurrentInitLocks = g),
      (l.stealV4KillswitchLock = h),
      (l.detectAndTerminateV4Worker = y),
      (l.waitForV4WorkerShutdown = C));
  },
  98,
);
