__d(
  "FalcoLoggerInternal",
  [
    "AnalyticsCoreData",
    "FBLogger",
    "FalcoConsentChecker",
    "FalcoLoggerInternalState",
    "FalcoUtils",
    "Promise",
    "Random",
    "ServerTime",
    "WebSession",
    "err",
    "justknobx",
    "performanceAbsoluteNow",
    "promiseDone",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s,
      u,
      c = o("FalcoUtils").getTaggedBitmap(0),
      d = o("FalcoUtils").getTaggedBitmap(37),
      m = 500 * 1024 * 0.6,
      p = {};
    function _() {
      try {
        var e;
        if (
          r("justknobx")._("1276") &&
          window.self !== window.top &&
          (e = window.top) != null &&
          e.require
        ) {
          var t = window.top.require("FalcoLoggerInternalState");
          if (t != null)
            return (
              r("FBLogger")("falco", "iframe_handling").warn(
                "Successfully delegated internal state to top frame",
              ),
              t.getInstance()
            );
        }
      } catch (e) {}
      return r("FalcoLoggerInternalState").getInstance();
    }
    var f = _();
    function g(e, t, n) {
      var a = r("Random").coinflip(t.r);
      if (!a)
        return (
          o("FalcoUtils").bumpODSMetrics(n, "event.filters.sampling", 1),
          !1
        );
      var i = t.c;
      if (i != null && (s || (s = r("AnalyticsCoreData"))).consents != null) {
        var l = h(i, (s || (s = r("AnalyticsCoreData"))).consents, e);
        if (!l)
          return (
            o("FalcoUtils").bumpODSMetrics(n, "event.filters.consent", 1),
            !1
          );
      }
      return !0;
    }
    function h(e, t, n) {
      var o = p[e];
      return (
        o == null && (o = p[e] = JSON.parse(e)),
        r("FalcoConsentChecker")(t, n, o, o[0])
      );
    }
    function y() {
      return (
        (u || (u = r("performanceAbsoluteNow")))() -
        o("ServerTime").getOffsetMillis()
      );
    }
    function C(e, t, n, o, a, i) {
      if ((s || (s = r("AnalyticsCoreData"))).enable_observer) {
        var l = babelHelpers.extends(
          { name: e, time: t, sampled: n, getData: a, policy: o },
          i && { getPrivacyContext: i },
        );
        L.emit("event", l);
      }
    }
    function b(e, t, n, a, i, l) {
      var u = JSON.stringify(i);
      if (u.length > m) {
        (o("FalcoUtils").bumpODSMetrics(e, "event.filters.exceeded_size", 1),
          r("FBLogger")("falco", "oversized_message:" + e).warn(
            'Dropping event "%s" due to exceeding the max size %s at %s',
            e,
            m,
            u.length,
          ));
        return;
      }
      var p = o("FalcoUtils").xorBitmap([0, 0], c);
      p = o("FalcoUtils").xorBitmap(p, d);
      var _ = {
        name: e,
        policy: t,
        time: n,
        extra: u,
        privacyContext: a,
        tags: p,
        sessionId: o("WebSession").getId(),
        deviceId: (s || (s = r("AnalyticsCoreData"))).device_id,
        appVersion: s.app_version,
      };
      (l.wrapAndEnqueueItem(_),
        o("FalcoUtils").bumpODSMetrics(e, "event.captured", 1));
    }
    function v(e, t, n, a, i, l) {
      try {
        var s = y();
        o("FalcoUtils").bumpODSMetrics(e, "event.logged", 1);
        var u = g(s, t, e);
        if (u) {
          var c = a(),
            d = n && n();
          i
            ? r("promiseDone")(
                i()
                  .then(function (n) {
                    b(e, t, s, d, babelHelpers.extends({}, c, n), l);
                  })
                  .catch(function (n) {
                    (r("FBLogger")("falco", "canonical_resolution_failed")
                      .catching(n instanceof Error ? n : r("err")(String(n)))
                      .warn(
                        'Failed to resolve canonicals for "%s", logging without them',
                        e,
                      ),
                      b(e, t, s, d, c, l));
                  }),
              )
            : b(e, t, s, d, c, l);
        }
        C(e, s, u, t, a, n);
      } catch (e) {
        R(e);
      }
    }
    function S(t, a, i, l, s, u) {
      try {
        var c = y();
        o("FalcoUtils").bumpODSMetrics(t, "event.logged", 1);
        var d = g(c, a, t);
        if (d) {
          var m = l(),
            p = (e || (e = n("Promise"))).resolve(i && i()),
            _ = s
              ? s().catch(function (e) {
                  return (
                    r("FBLogger")("falco", "canonical_resolution_failed")
                      .catching(e instanceof Error ? e : r("err")(String(e)))
                      .warn(
                        'Failed to resolve canonicals for "%s", logging without them',
                        t,
                      ),
                    null
                  );
                })
              : null;
          return e.all([m, p, _]).then(function (e) {
            var n = e[0],
              r = e[1],
              o = e[2];
            (b(t, a, c, r, o ? babelHelpers.extends({}, n, o) : n, u),
              C(
                t,
                c,
                d,
                a,
                function () {
                  return n;
                },
                r &&
                  function () {
                    return r;
                  },
              ));
          });
        } else
          return (C(t, c, d, a, l, i), (e || (e = n("Promise"))).resolve());
      } catch (t) {
        return (e || (e = n("Promise"))).reject(t);
      }
    }
    function R(e) {
      var t = r("FBLogger")("falco");
      e instanceof Error
        ? t.catching(e).warn("Error while attempting to log to Falco")
        : t.warn(
            "Caught non-error while attempting to log to Falco: %s",
            JSON.stringify(e),
          );
    }
    var L = f.observable;
    function E(e, t, n) {
      var r = f.logCriticalQueue,
        o = f.logImmediatelyQueue,
        a = f.logQueue;
      return {
        log: function (o, i) {
          v(e, t, i, o, n, a);
        },
        logAsync: function (o, i) {
          S(e, t, i, o, n, a).catch(R);
        },
        logImmediately: function (a, i) {
          v(e, t, i, a, n, o);
        },
        logCritical: function (a, i) {
          v(e, t, i, a, n, r);
        },
        logRealtimeEvent: function (a, i) {
          v(e, t, i, a, n, r);
        },
      };
    }
    ((l.observable = L), (l.create = E));
  },
  98,
);
