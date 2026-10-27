__d(
  "FalcoLoggerInternal",
  [
    "AnalyticsCoreData",
    "FBLogger",
    "FalcoCollectionConstraintChecker",
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
          ((e = window.top) == null ? void 0 : e.require) != null
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
        var l = { consents: (s || (s = r("AnalyticsCoreData"))).consents },
          u = h(i, l, e);
        if (!u)
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
        r("FalcoCollectionConstraintChecker")(t, n, o)
      );
    }
    function y() {
      return (
        (u || (u = r("performanceAbsoluteNow")))() -
        o("ServerTime").getOffsetMillis()
      );
    }
    function C(e, t, n, o, a) {
      if ((s || (s = r("AnalyticsCoreData"))).enable_observer) {
        var i = { name: e, time: t, sampled: n, getData: a, policy: o };
        L.emit("event", i);
      }
    }
    function b(e, t, n, a, i) {
      var l = JSON.stringify(a);
      if (l.length > m) {
        (o("FalcoUtils").bumpODSMetrics(e, "event.filters.exceeded_size", 1),
          r("FBLogger")("falco", "oversized_message:" + e).warn(
            'Dropping event "%s" due to exceeding the max size %s at %s',
            e,
            m,
            l.length,
          ));
        return;
      }
      var u = o("FalcoUtils").xorBitmap([0, 0], c);
      u = o("FalcoUtils").xorBitmap(u, d);
      var p = {
        name: e,
        policy: t,
        time: n,
        extra: l,
        tags: u,
        sessionId: o("WebSession").getId(),
        deviceId: (s || (s = r("AnalyticsCoreData"))).device_id,
        appVersion: s.app_version,
      };
      (i.wrapAndEnqueueItem(p),
        o("FalcoUtils").bumpODSMetrics(e, "event.captured", 1));
    }
    function v(e, t, n, a, i) {
      try {
        var l = y();
        o("FalcoUtils").bumpODSMetrics(e, "event.logged", 1);
        var s = g(l, t, e);
        if (s) {
          var u = n();
          a
            ? r("promiseDone")(
                a()
                  .then(function (n) {
                    b(e, t, l, babelHelpers.extends({}, u, n), i);
                  })
                  .catch(function (n) {
                    (r("FBLogger")("falco", "canonical_resolution_failed")
                      .catching(n instanceof Error ? n : r("err")(String(n)))
                      .warn(
                        'Failed to resolve canonicals for "%s", logging without them',
                        e,
                      ),
                      b(e, t, l, u, i));
                  }),
              )
            : b(e, t, l, u, i);
        }
        C(e, l, s, t, n);
      } catch (e) {
        R(e);
      }
    }
    function S(t, a, i, l, s) {
      try {
        var u = y();
        o("FalcoUtils").bumpODSMetrics(t, "event.logged", 1);
        var c = g(u, a, t);
        if (c) {
          var d = i(),
            m = l
              ? l().catch(function (e) {
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
          return (e || (e = n("Promise"))).all([d, m]).then(function (e) {
            var n = e[0],
              r = e[1];
            (b(t, a, u, r ? babelHelpers.extends({}, n, r) : n, s),
              C(t, u, c, a, function () {
                return n;
              }));
          });
        } else return (C(t, u, c, a, i), (e || (e = n("Promise"))).resolve());
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
        log: function (o) {
          v(e, t, o, n, a);
        },
        logAsync: function (o) {
          S(e, t, o, n, a).catch(R);
        },
        logImmediately: function (a) {
          v(e, t, a, n, o);
        },
        logCritical: function (a) {
          v(e, t, a, n, r);
        },
        logRealtimeEvent: function (a) {
          v(e, t, a, n, r);
        },
      };
    }
    ((l.observable = L), (l.create = E));
  },
  98,
);
