__d(
  "WAWebVoipMainThreadLockODS",
  [
    "JSResourceForInteraction",
    "Promise",
    "WALogger",
    "WAWebVoipMainThreadLockArm",
    "getErrorSafe",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u = [],
      c = null,
      d = null;
    function m() {
      var e = d != null ? d : R();
      return ((d = e), e);
    }
    function p(e, t) {
      S(function (n) {
        return n.logMainThreadLockReached(e, t);
      });
    }
    function _(e) {
      S(function (t) {
        return t.logMainThreadLockBoot(e);
      });
    }
    function f(e) {
      S(function (t) {
        return t.logMainThreadLockOffloadEvent(e);
      });
    }
    function g(e, t) {
      var n = o("WAWebVoipMainThreadLockArm").getMainThreadLockArm();
      S(function (r) {
        return r.logMainThreadLockCallDuration(e, t, n);
      });
    }
    function h(e) {
      S(function (t) {
        return t.logMainThreadLockRecoveryPrecheck(e);
      });
    }
    function y() {
      S(function (e) {
        return e.logMainThreadLockPrewarmDeferred();
      });
    }
    function C(e, t) {
      S(function (n) {
        return n.logMainThreadLockAudioStopEvent(e, t);
      });
    }
    function b(e) {
      S(function (t) {
        return t.logMainThreadLockRingEvent(e);
      });
    }
    function v(e, t) {
      S(function (n) {
        return n.logMainThreadLockJsWorkerReached(e, t);
      });
    }
    function S(e) {
      if (c != null) {
        e(c);
        return;
      }
      (u.push(e), m());
    }
    function R() {
      return (s || (s = n("Promise")))
        .resolve()
        .then(function () {
          return r("JSResourceForInteraction")("WAWebVoipMainThreadLockODSKeys")
            .__setRef("WAWebVoipMainThreadLockODS")
            .load();
        })
        .then(L)
        .catch(E);
    }
    function L(e) {
      c = e;
      for (var t of u.splice(0)) t(e);
    }
    function E(t) {
      ((u.length = 0),
        (d = null),
        o("WALogger")
          .WARN(
            e ||
              (e = babelHelpers.taggedTemplateLiteralLoose([
                "voip: [MainThreadLock] counters load failed",
              ])),
          )
          .catching(r("getErrorSafe")(t)));
    }
    ((l.loadMainThreadLockCounters = m),
      (l.logMainThreadLockReached = p),
      (l.logMainThreadLockBoot = _),
      (l.logMainThreadLockOffloadEvent = f),
      (l.logMainThreadLockCallDuration = g),
      (l.logMainThreadLockRecoveryPrecheck = h),
      (l.logMainThreadLockPrewarmDeferred = y),
      (l.logMainThreadLockAudioStopEvent = C),
      (l.logMainThreadLockRingEvent = b),
      (l.logMainThreadLockJsWorkerReached = v));
  },
  98,
);
