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
      var e = d != null ? d : E();
      return ((d = e), e);
    }
    function p(e, t) {
      L(function (n) {
        return n.logMainThreadLockReached(e, t);
      });
    }
    function _(e) {
      L(function (t) {
        return t.logMainThreadLockBoot(e);
      });
    }
    function f(e) {
      L(function (t) {
        return t.logMainThreadLockOffloadEvent(e);
      });
    }
    function g(e) {
      L(function (t) {
        return t.logMainThreadLockOffloadQueueEvent(e);
      });
    }
    function h(e) {
      L(function (t) {
        return t.logMainThreadLockOffloadStartEvent(e);
      });
    }
    function y(e, t) {
      var n = o("WAWebVoipMainThreadLockArm").getMainThreadLockArm();
      L(function (r) {
        return r.logMainThreadLockCallDuration(e, t, n);
      });
    }
    function C(e) {
      L(function (t) {
        return t.logMainThreadLockRecoveryPrecheck(e);
      });
    }
    function b() {
      L(function (e) {
        return e.logMainThreadLockPrewarmDeferred();
      });
    }
    function v(e, t) {
      L(function (n) {
        return n.logMainThreadLockAudioStopEvent(e, t);
      });
    }
    function S(e) {
      L(function (t) {
        return t.logMainThreadLockRingEvent(e);
      });
    }
    function R(e, t) {
      L(function (n) {
        return n.logMainThreadLockJsWorkerReached(e, t);
      });
    }
    function L(e) {
      if (c != null) {
        e(c);
        return;
      }
      (u.push(e), m());
    }
    function E() {
      return (s || (s = n("Promise")))
        .resolve()
        .then(function () {
          return r("JSResourceForInteraction")("WAWebVoipMainThreadLockODSKeys")
            .__setRef("WAWebVoipMainThreadLockODS")
            .load();
        })
        .then(k)
        .catch(I);
    }
    function k(e) {
      c = e;
      for (var t of u.splice(0)) t(e);
    }
    function I(t) {
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
      (l.logMainThreadLockOffloadQueueEvent = g),
      (l.logMainThreadLockOffloadStartEvent = h),
      (l.logMainThreadLockCallDuration = y),
      (l.logMainThreadLockRecoveryPrecheck = C),
      (l.logMainThreadLockPrewarmDeferred = b),
      (l.logMainThreadLockAudioStopEvent = v),
      (l.logMainThreadLockRingEvent = S),
      (l.logMainThreadLockJsWorkerReached = R));
  },
  98,
);
