__d(
  "CometVirtualizationMarginSession",
  [
    "CometVirtualizationMarginStore",
    "ExecutionEnvironment",
    "FBLogger",
    "err",
    "qex",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s,
      u = null,
      c = !1,
      d = new Set();
    function m(e) {
      try {
        e();
      } catch (e) {
        r("FBLogger")("comet_virtualization")
          .catching(e instanceof Error ? e : r("err")(String(e)))
          .warn("A persisted-margin subscriber threw while being notified");
      }
    }
    function p() {
      Array.from(d).forEach(m);
    }
    var _ = (e = r("qex")._("302")) != null ? e : !1;
    function f() {
      c ||
        ((c = !0),
        o("CometVirtualizationMarginStore")
          .readPersistedMargins()
          .then(function (e) {
            ((u = e.records), p());
          })
          .catch(function (e) {
            (r("FBLogger")("comet_virtualization")
              .catching(e instanceof Error ? e : r("err")(String(e)))
              .warn("Failed to preload the persisted virtualization margin"),
              (u = {}),
              p());
          }));
    }
    function g(e, t) {
      var n, r;
      return (n = (r = u) == null || (r = r[e]) == null ? void 0 : r[t]) != null
        ? n
        : null;
    }
    function h() {
      return u != null;
    }
    function y(e) {
      return (
        d.add(e),
        u != null && m(e),
        function () {
          d.delete(e);
        }
      );
    }
    function C(e, t, n) {
      _ && o("CometVirtualizationMarginStore").writeObservedMargin(e, t, n);
    }
    var b = !1;
    function v() {
      b ||
        !(s || (s = r("ExecutionEnvironment"))).canUseDOM ||
        ((b = !0),
        f(),
        _ &&
          window.addEventListener(
            "pagehide",
            o("CometVirtualizationMarginStore").flushObservedMargins,
          ));
    }
    ((l.preloadPersistedMargins = f),
      (l.getPersistedMarginForSurface = g),
      (l.hasLoadedPersistedMargins = h),
      (l.subscribeToPersistedMargins = y),
      (l.recordObservedMargin = C),
      (l.initPersistedMargins = v));
  },
  98,
);
